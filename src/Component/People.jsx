import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const People = () => {
  return (
    <div className="relative max-w-screen-2xl  h-80 mx-auto px-5 py-3 bg-slate-700">
      <div className="flex items-center justify-between">
        <div className=" bg-[#DADADA66] flex gap-10 p-16 rounded-3xl">
          <div className="w-1/2">
            <img
              className="w-full h-full object-cover "
              src="src/assets/surpreet.jpg"
              alt=""
            />
          </div>
          <p className="text-right">
            Hi, I'm Madhvan, a passionate photographer with a love for capturing
            genuine smiles and timeless portraits. For me, photography is more
            than just a profession—it's an art form that allows me to tell
            stories through every shot. I believe in creating memories that last
            a lifetime, and I'm excited to capture yours.
          </p>
        </div>
      </div>

      <div className="text-[1.4rem] flex  items-center justify-end gap-5">
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
  );
};

export default People;
