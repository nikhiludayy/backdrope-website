import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FaLinkedinIn,
  FaSquareXTwitter,
  FaThreads,
  FaTwitter,
  FaXTwitter,
} from "react-icons/fa6";

const footer = () => {
  return (
    <div className="max-w-screen mx-auto mt-20 bg-[#1F1F1F]/[.5] flex flex-col items-center justify-between gap-3 backdrop-blur-2xl px-[4rem] py-[3rem] rounded-t-[20px] font-[raleway]">
      <div className="w-full flex  items-center justify-between">
        <div className="w-[20rem]">
          <img
            className="w-full h-full"
            src="src/assets/11t_white.svg"
            alt="logo"
          />
        </div>
        <div className="text-[.8rem] ">
          <div className="flex flex-col gap-3">
            <h1>Sitemap</h1>
            <div className="flex flex-col ">
              <Link>Home</Link>
              <Link>Services</Link>
              <Link>About</Link>
              <Link>Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[.5px] text-black bg-black" />
      <div className="w-full flex  items-center justify-between">
        <div>
          <h5 className="text-[.8rem]">
            © Backdrope Media, 2024. We love our users!
          </h5>
        </div>
        <div className="flex  items-center justify-center gap-4">
          <h5 className="text-[1rem]">Follow us :</h5>
          <div className="text-[1.4rem] flex  items-center justify-center gap-5">
            <Link to="https://www.instagram.com/backdrope_media?igsh=YWpiYjIydGU3OTdo">
              <FaInstagram />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=61566410390009&mibextid=ZbWKwL">
              <FaFacebook />
            </Link>
            <Link to="https://www.linkedin.com/company/backdrope-media/">
              <FaLinkedinIn />
            </Link>
            <Link to="https://x.com/backdrope_media?t=r8OwXgJRlCVOOm-0AVfYLw&s=09">
              <FaXTwitter />
            </Link>
            <Link to="https://www.threads.net/@backdrope_media?xmt=AQGzdNKeqWnGLT3ke4lVVXESvxTg_JRRq-5Sc9NcR3FCECM">
              <FaThreads />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
