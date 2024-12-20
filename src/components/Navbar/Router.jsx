import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../../pages/Home/index";
import About from "../../pages/about-us";
import Vision from "../../pages/vision_mission";
import Career from "../../pages/career";
import Quality from "../../pages/quality";
import Product from "../../pages/product";
import ContactUS from "../../pages/contact-us";
import Navbar from "./index";
import Footer from "../footer";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/vission_mission" element={<Vision />} />
          <Route path="/career" element={<Career />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<ContactUS />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default Router;
