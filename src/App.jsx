import React from "react";
import Home from "./Component/Home";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div style={{
      background: "radial-gradient(ellipse at 50% 0%, rgba(0, 0, 0, .23),transparent ),radial-gradient(ellipse at 50% 0%, rgba(39, 39, 39, 1), rgba(29, 28, 28, 0.28) 50%, #272727 100%,transparent)"
      , }} className="h-full w-screen font-[raleway] bg-[#5F5F5F] text-[#dadada] ">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
