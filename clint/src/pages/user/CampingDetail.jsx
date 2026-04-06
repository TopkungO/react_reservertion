import { readCamping } from "@/api/camping";
import BookingContainer from "@/components/booking/BookingContainer";
import Breadcrums from "@/components/camping/Breadcrums";
import Description from "@/components/camping/Description";
import ImageContainer from "@/components/camping/ImageContainer";
import Mainmap from "@/components/map/Mainmap";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CampingDetail = () => {
  const [camping, setCamping] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchCampingDetail(id);
  }, [id]);

  const fetchCampingDetail = async (id) => {
    try {
      const res = await readCamping(id);
      setCamping(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* Breadcrums */}
      <Breadcrums name={camping.title} />
      {/* Header */}
      <header className="flex items-center justify-between mt-2">
        <h1 className="text-4xl font-bold">{camping.title}</h1>

        <div className="flex gap-2">
          <p>share</p>
          <p>foveorite</p>
        </div>
      </header>
      {/* image */}
      <ImageContainer image={camping.secure_url} name={camping.name} />
      {/* description and map*/}
      <section className="lg:grid lg:grid-cols-12 gap-x-12 mt-12">
        <div className="lg:col-span-8">
          <Description text={camping.description} />
          {camping.lat && <Mainmap location={[camping.lat, camping.lng]} />}
        </div>
        <div className="lg:col-span-4 flex flex-col items-center">
          <BookingContainer
            campingId={camping.id}
            price={camping.price}
            bookings={[]}
          />
        </div>
      </section>
    </div>
  );
};

export default CampingDetail;
