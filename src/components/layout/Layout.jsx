import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Supheader from "../supheader/Supheader";

function Layout() {
  return (
    <div>
      <Supheader />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
