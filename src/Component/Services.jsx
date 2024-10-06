import React from "react";
import Hero from "./hero";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { IoIosReturnRight } from "react-icons/io";

const Services = () => {
  const serviceop = [
    {
      serv: "Photography & Videography",
      title: "Professional photo and video production",
      para: "Your memories, business, services and products deserve to be highlighted with professional photos and videos . Because a coherent and harmonious image is essential to develop online, we offer to create all your visuals .",
      img: "",
      align: false,
    },
    {
      serv: "Designing & Editing",
      title: "Defining your visual identity",
      para: "We understand the importance of a strong brand identity for your business. Our team will help you create a unique visual identity that reflects the essence of your business .From logo creation and color selection to defining typography and branding, we'll ensure your brand identity is consistent and memorable.",
      img: "",
      align: true,
    },
    {
      serv: "Web Development",
      title: "Professional photo and video production",
      para: "Your memories, business, services and products deserve to be highlighted with professional photos and videos . Because a coherent and harmonious image is essential to develop online, we offer to create all your visuals .",
      img: "",
      align: false,
    },
    {
      serv: "Digital Marketing",
      title: "Professional photo and video production",
      para: "Your memories, business, services and products deserve to be highlighted with professional photos and videos . Because a coherent and harmonious image is essential to develop online, we offer to create all your visuals .",
      img: "",
      align: true,
    },
  ];
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
    //   style={{
    //     background:
    //       "radial-gradient(ellipse at 50% 0%, rgba(0, 0, 0, .23),transparent ),radial-gradient(ellipse at 50% 0%, rgba(39, 39, 39, 1), rgba(29, 28, 28, 0.28) 50%, #272727 100%,transparent)",
    //   }}
      className="max-w-screen-2xl mx-auto max-h-screen overflow-y-auto pt-52 "
    >
      
      <Hero isservice={true} touch={true} isscroll={true} />

      <div className="h-[10rem] mt-20 flex items-center justify-center ">
        <h1 className="w-4/5 text-2xl font-bold italic text-center whitespace-nowrap ">
          We offer a full suite of creative services to elevate your brand and
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
                className="flex items-center gap-2 px-7 py-4 bg-[#dadada] text-black text-[.9rem]  font-semibold rounded-full hover:bg-[#333] hover:text-white"
              >
                {e.serv}
              </Link>
            </div>
          );
        })}
      </div>

      {serviceop.map((e) => {
        return e.align ? (
          <div className="w-full  items-center justify-center flex px-16 py-20 gap-10 ">
            <div className="basis-2/3 flex flex-col gap-6 justify-center py-10 ">
              <div className="w-full">
                <h1 className="font-semibold text-2xl">{e.serv}</h1>
                <h5 className=" text-lg italic font-[rage]">{e.title}</h5>
              </div>
              <p className="w-full text-sm">{e.para}</p>
              <div className="w-1/3">
                <Link
                  to="/contact"
                  className=" flex items-center justify-center gap-2 px-4 py-3 text-black bg-[#dadada] font-semibold rounded-full hover:bg-[#333] hover:text-white"
                >
                  Explore more <IoIosReturnRight className="text-lg" />
                </Link>
              </div>
            </div>
            <div className="basis-2/3 w-[65rem] max-h-[22rem]  shadow-[-10px_0px_60px_1px] shadow-slate-100/20  overflow-hidden rounded-3xl">
              <img
                className="w-full h-full object-cover  "
                src="src/assets/IMG_7517.JPG"
                alt=""
              />
            </div>
          </div>
        ) : (
          <div className="w-full items-center justify-center flex px-16 py-20 gap-10 ">
            <div className="basis-2/3 w-[65rem] max-h-[22rem] shadow-[-10px_0px_60px_1px] shadow-slate-100/20  overflow-hidden rounded-3xl">
              <img
                className="w-full h-full object-cover  "
                src="src/assets/IMG_7517.JPG"
                alt=""
              />
            </div>
            <div className="basis-2/3 flex flex-col gap-6 justify-center items-end py-10">
              <div className="w-full">
                <h1 className="font-semibold text-2xl text-right">{e.serv}</h1>
                <h5 className=" text-lg italic text-right font-[rage]">
                  {e.title}
                </h5>
              </div>
              <p className="w-full text-sm text-right">{e.para}</p>
              <div className="w-1/3">
                <Link
                  to="/contact"
                  className=" flex items-center justify-center gap-2 px-4 py-3 text-black bg-[#dadada] font-semibold rounded-full hover:bg-[#333] hover:text-white"
                >
                  Explore more <IoIosReturnRight className="text-lg" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
      <div className="w-full bg-[#4A4A4A] px-20 py-10 flex flex-col   justify-center gap-10 my-28   ">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold ">Get in Touch with Us</h1>
          </div>
          <div>
            <Link
              to="/contact"
              className="w-[9rem] flex font-semibold bg-[#dadada] items-center justify-center px-2 py-2 gap-1 hover:bg-zinc-400 hover:text-zinc-100 rounded-full text-sm  text-black"
            >
              Get in touch <IoIosReturnRight className="text-lg" />
            </Link>
          </div>
        </div>
        <div className="w-2/3">
          <p>
            We’d love to hear from you! Whether you're planning your dream
            wedding, looking to elevate your brand, or need creative solutions
            for your project.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
