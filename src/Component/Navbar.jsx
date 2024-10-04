import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
      };
    
      const handleMouseLeave = () => {
        setIsDropdownOpen(false);
      };
  return (
    <div className=" w-screen mx-auto bg-[#1F1F1F]/[.5] flex items-center justify-between backdrop-blur-md px-12 py-5 rounded-b-[30px] z-[999]">
      <div className="hidden max-sm:w-[2.3rem] max-sm:block">
      <Link to="/"> <img
          className="w-full h-full"
          src="src/assets/11White.svg"
          alt="logo"
        /></Link>
      </div>
      <div className="max-w-[12rem] max-sm:hidden">
      <Link to="/"> <img
          className="w-full h-full"
          src="src/assets/11H-white.svg"
          alt="logo"
        /></Link>
      </div>
      <div className="text-[#dadada] font-semibold flex gap-5 items-center">
      <Link to="/">Home</Link>
      
      <div 
        className="relative flex items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/services" className="flex items-center italic">
          Services <RiArrowDropDownLine className="text-xl" />
        </Link>
        
        {isDropdownOpen && (
          <div className="absolute z-[998] top-0 mt-2 left-0  p-3 pt-10 rounded-md shadow-lg">
            <ul className="w-40 flex flex-col px-2 py-1 gap-4 ">
              <li>
                <Link to="/Photo&Videos" className="hover:text-white">
                  Photo & Videos
                </Link>
              </li>
              <li>
                <Link to="/Branding" className="hover:text-white">
                  Branding
                </Link>
              </li>
              <li>
                <Link to="/Website " className="hover:text-white">
                  Website 
                </Link>
              </li>
              <li>
                <Link to="/Digital Marketing" className="hover:text-white">
                  Digital Marketing 
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
    </div>
  );
};

export default navbar;
