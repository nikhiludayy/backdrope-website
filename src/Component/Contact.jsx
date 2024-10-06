import React from "react";
import Hero from "./hero";
import Navbar from "./navbar";
const Contact = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(0, 0, 0, .23),transparent ),radial-gradient(ellipse at 50% 0%, rgba(39, 39, 39, 1), rgba(29, 28, 28, 0.28) 50%, #272727 100%,transparent)",
      }}
      className="max-w-screen-2xl mx-auto h-full "
    >
      <Navbar />
      <Hero iscontactt={true}/>
      <div className=" px-24 py-16 flex justify-center items-center">
        <h1 className="text-[2rem] font-bold text-center leading-tight">
          How <span className="text-[#EE6464]">we</span> can
          <span className="text-[#EE6464]"> help</span> you?
        </h1>
      </div>
      <div className="w-full px-24 py-16 flex justify-center items-center">
          <h1 className="text-[4rem] font-bold text-center leading-tight">
            We <span className="text-[#EE6464]">innovate</span> through <br />
            <span className="text-[#EE6464]">creativity</span>.
          </h1>
        </div>
    </div>
  );
};

export default Contact;
