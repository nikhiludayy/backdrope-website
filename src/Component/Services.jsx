import React from "react";
import Hero from "./hero";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import { IoIosReturnRight } from "react-icons/io";

const Services = () => {
  const servicbtn = [
    {
      serv: "Photography & Videography",
    },
    {
      serv: "Designing & Editing",
    },
    {
      serv: "Web Development",
    },
    {
      serv: "Digital Marketing",
    },
  ];
  return (
    <div
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(0, 0, 0, .23),transparent ),radial-gradient(ellipse at 50% 0%, rgba(39, 39, 39, 1), rgba(29, 28, 28, 0.28) 50%, #272727 100%,transparent)",
      }}
      className="max-w-screen-2xl mx-auto h-full "
    >
      <Navbar />
      <Hero isservice={true} touch={true} isscroll={true} />

      <div className="h-[10rem] mt-20 flex items-center justify-center">
        <h1 className="text-2xl font-bold italic text-center whitespace-nowrap">
          we offer a full suite of creative services to elevate your brand and
          drive <br /> results. From visual storytelling to digital marketing,
          we provide tailored <br /> solutions designed to meet your needs.
        </h1>
      </div>
      <div className=" px-24 py-16 flex justify-center items-center">
        <h1 className="text-[2rem] font-bold text-center leading-tight">
          How <span className="text-[#EE6464]">we</span> can
          <span className="text-[#EE6464]"> help</span> you?
        </h1>
      </div>
      <div className="flex items-center justify-evenly">
        {servicbtn.map((e) => {
          return (
            <div className="">
              <Link
                to="/contact"
                className="flex items-center gap-2 px-7 py-4 bg-[#4B4B4B] text-[#dadada] text-[.9rem]  font-semibold rounded-full hover:bg-[#333]"
              >
                {e.serv}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="w-full  items-center justify-center flex px-16 py-20 ">
        <div className="grid grid-rows-3 gap-6 items-center py-10">
          <div className="w-full">
            <h1 className="font-semibold text-2xl">
              Photography & Videography
            </h1>
            <h5 className=" text-lg italic font-[rage]">
              Professional photo and video production
            </h5>
          </div>
          <p className="w-full text-sm">
            Your memories, business, services and products deserve to be
            highlighted with professional photos and videos . Because a coherent
            and harmonious image is essential to develop online, we offer
            to create all your visuals .
          </p>
          <div>
            <Link
              to="/contact"
              className="w-36 flex items-center gap-2 px-4 py-3 bg-[#4B4B4B] text-[#dadada] font-semibold rounded-full hover:bg-[#333]"
            >
              Contact Us <IoIosReturnRight className="text-lg" />
            </Link>
          </div>
        </div>
        <div className="max-w-[35rem] max-h-full  overflow-hidden rounded-3xl">
          <img
            className="w-full h-full object-cover  "
            src="src/assets/IMG_7517.JPG"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
