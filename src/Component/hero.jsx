import React from "react";
import { IoIosReturnRight } from "react-icons/io";
import { Link } from "react-router-dom";

const hero = () => {
  return (
    <div className="max-w-screen h-[40rem] mt-10  flex items-center justify-center  px-10 py-6  flex-shrink-0   ">
      <div className="h-[85%] flex rounded-2xl mt- overflow-hidden flex-shrink-0  ">
        <div className="basis-3/5  bg-[#dadada] text-black flex flex-col gap-9 px-16 py-10 ">
          <div className=" text-[4rem] font-semibold flex flex-col leading-[4.5rem] ">
            <h1>We are</h1>
            <h1 className="font-[ranga] text-[#EE6464]">awesome</h1>
            <h1>team for</h1>
            <h1>
              your <span className="font-[ranga] text-[#EE6464]">dream</span>
            </h1>
          </div>
          <div className="flex flex-col flex-shrink-0 gap-4">
            <p className="text-lg">
              Crafting stunning visuals and unforgettable stories.
            </p>
            <div>
            <Link to={"/contact"} className="w-[9rem] flex font-semibold bg-[#4B4B4B] items-center justify-center px-2 py-2 flex-shrink-0 gap-1 rounded-full text-[#dadada]">
              Contact US <IoIosReturnRight className="text-lg  " />
            </Link>
          </div>
          </div>
          
        </div>
        <div className="basis-2/5 rounded-md shadow-[-50px 0px 50px 0px rgba(0, 0, 0, 1)] saturate-0 ">
          {" "}
          <img
            className="w-full h-full object-cover object-[80%]"
            src="src/assets/IMG_7517.JPG"
            alt="herophoto"
          />
        </div>
      </div>
    </div>
  );
};

export default hero;
