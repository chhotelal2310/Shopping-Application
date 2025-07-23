import React from 'react';
import { IoCartSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const Card=useSelector((state)=>state.Card)
  return (
    <div className="py-2.5 w-full shadow-md fixed top-0 bg-blue-950 font-roboto text-white z-20">
      <div className="flex justify-between items-center max-w-[70%] mx-auto">
        <NavLink to="/">
          <img src="/src/assets/Ecomzylogo.png" alt="logo" className="w-40 h-10 cursor-pointer" />
        </NavLink>

        <div className="flex items-center space-x-6">
          <NavLink to="/" className="text-lg font-medium">
            Home
          </NavLink>
          <NavLink to="/card">
           <div className='relative'>
           {Card?.length>0 &&
             <div className='rounded-full flex justify-center items-center py-0 px-3.5 absolute -top-3.5 -right-4'>{Card?.length}</div>
           }
             <IoCartSharp size={36} className="cursor-pointer text-green-500" />
           </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
