import { readCamping } from "@/api/camping";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CampingDetail = () => {
  const [camping, setCamping] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchCampingDetail(id)
  }, [id]);

  const fetchCampingDetail = async (id) => {
    try {
      const res = await readCamping(id);
      setCamping(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(camping);
  

  return <div>CampingDetail</div>;
};

export default CampingDetail;
