import React from "react";
import { IoCartSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/Ecomzylogo.png";
import { useTheme } from "../context/ThemeContext";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const { theme, setTheme } = useTheme();


  const Card = useSelector((state) => state.Card);
  return (
    <div className="py-2.5 w-full shadow-md fixed top-0 bg-blue-950 font-roboto text-white z-20">
      <div className="flex justify-between items-center max-w-[90%] sm:max-w-[85%] mx-auto">
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
            className="w-30 sm:w-40 h-8 sm:h-10 cursor-pointer"
          />
        </NavLink>

        <div className="flex items-center space-x-6">
          <NavLink to="/" className="text-base sm:text-lg font-medium">
            Home
          </NavLink>
          <div>
           {theme==="dark" &&
             <MdLightMode size={30} className="cursor-pointer" onClick={()=>setTheme("light")}/>
           }
            {theme==="light" &&
             <MdDarkMode size={30} className="cursor-pointer" onClick={()=>setTheme("dark")}/>
           }
          </div>
          <NavLink to="/card">
            <div className="relative">
              {Card?.length > 0 && (
                <div className="rounded-full flex justify-center items-center py-0 px-3.5 absolute -top-3.5 -right-4">
                  {Card?.length}
                </div>
              )}
              <IoCartSharp className="cursor-pointer text-green-500 size-6 sm:size-8 md:size-9" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
