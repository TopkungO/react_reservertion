import Navber from "@/components/navber/Navber";
import React from "react";
import { Outlet } from "react-router";

const LayoutAdmin = () => {
  return (
    <main className="container">
      <Navber />
      <Outlet />
    </main>
  );
};

export default LayoutAdmin;
