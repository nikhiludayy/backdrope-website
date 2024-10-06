import React from "react";
import Home from "./Component/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Component/About";
import Services from "./Component/Services";
import Contact from "./Component/Contact";
import Navbar from "./Component/navbar";
import Footer from "./Component/footer";

const App = () => {
  return (
    <div className=" relative h-screen  max-w-screen font-[raleway] bg-[#5F5F5F] text-white backdrop-blur-[100px]">
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0, 0, 0, .23),transparent ),radial-gradient(ellipse at 50% 0%, rgba(39, 39, 39, 1), rgba(29, 28, 28, 0.60) 80%, #272727 100%,transparent)",
        }}
        className="max-w-screen-2xl h-screen mx-auto  backdrop-blur-[100px]"
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
       
      </div>
    </div>
  );
};

export default App;
