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
    <div className="relative max-w-screen mx-auto bg-[#1F1F1F]/[.5]  backdrop-blur-md px-12 py-5 rounded-b-[30px] z-[999]">
      <div className="flex items-center justify-between">
        <div className="hidden max-sm:w-[2.3rem] max-sm:block">
          <Link to="/">
            {" "}
            <img
              className="w-full h-full"
              src="src/assets/11White.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="max-w-[12rem] max-sm:hidden">
          <Link to="/">
            {" "}
            <img
              className="w-full h-full"
              src="src/assets/11H-white.svg"
              alt="logo"
            />
          </Link>
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
              <div className="absolute  top-1 mt-2 left-0  p-3 pt-10 rounded-md shadow-lg">
                <ul className="w-40 flex flex-col px-2 py-1 gap-4 ">
                  <li>
                    <Link to="/photo&videos" className="hover:text-white">
                      Photography & Videography
                    </Link>
                  </li>
                  <li>
                    <Link to="/designing&editing" className="hover:text-white">
                    Designing & Editing
                    </Link>
                  </li>
                  <li>
                    <Link to="/webdevelopment " className="hover:text-white">
                    Web development
                    </Link>
                  </li>
                  <li>
                    <Link to="/digitalmarketing" className="hover:text-white">
                      Digital Marketing
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link to="/About">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default navbar;
