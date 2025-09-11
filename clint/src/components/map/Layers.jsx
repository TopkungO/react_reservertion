import {
  LayersControl,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  Tooltip,
} from "react-leaflet";
import { listCamping } from "@/api/camping";
import { useEffect, useState } from "react";
const Layers = () => {
  const [landmarks, setLandmarks] = useState([]);

  useEffect(() => {
    handleGetLandmark();
  }, []);
  const handleGetLandmark = () => {
    listCamping()
      .then((res) => {
        setLandmarks(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <LayersControl>
      <LayersControl.BaseLayer name="OSM" checked>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Sattellite">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
        />
      </LayersControl.BaseLayer>
      <LayersControl.Overlay name="Lanmark" checked>
        <LayerGroup>
          {landmarks?.map((item) => (

            <Marker key={item.id} position={[item.lat, item.lng]}>
              <Popup>
                {item.title}
                <br />
                {item.description}
              </Popup>
              <Tooltip>
                {item.title}
              </Tooltip>
            </Marker>
          ))}
        </LayerGroup>
      </LayersControl.Overlay>
    </LayersControl>
  );
};

export default Layers;
