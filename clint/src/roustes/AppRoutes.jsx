import React from "react";

import { BrowserRouter, Routes, Route } from "react-router";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Dashboard from "@/pages/admin/Dashboard";
import Manage from "@/pages/admin/Manage";
import Notfound from "@/pages/Notfound";
import Layout from "@/layouts/Layout";
import LayoutAdmin from "@/layouts/LayoutAdmin";
import Camping from "@/pages/admin/Camping";
import Profile from "@/pages/user/Profile";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* public */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        {/*Private User*/}
        <Route path="user" element={<Layout />}>
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* private */}
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="manage" element={<Manage />} />
          <Route path="camping" element={<Camping />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
