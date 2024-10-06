import React from "react";
import Home from "./Component/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Component/About";
import Services from "./Component/Services";
import Contact from "./Component/Contact";

const App = () => {
  return (
    <div className="h-full max-w-screen font-[raleway] bg-[#5F5F5F] text-white ">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
