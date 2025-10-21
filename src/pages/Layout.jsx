// components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Sidebar2 from "./sidebar2";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div  >
      
      <Navbar />
      <Sidebar />
      <section className="content-wrapper">

          <Outlet/>
      </section>
          <Sidebar2 />
          <Footer />
        </div>

  );
}
