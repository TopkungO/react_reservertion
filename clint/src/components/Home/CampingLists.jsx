import { listCamping } from "@/api/camping";
import React, { useEffect, useState } from "react";
import CampingCard from "../card/CampingCard";

const CampingLists = () => {
  const [campings, setCamping] = useState([]);
  console.log(campings);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await listCamping();
      setCamping(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4">
      {campings.map((item) => {
        return <CampingCard key={item.id} camping={item} />;
      })}
    </section>
  );
};

export default CampingLists;
