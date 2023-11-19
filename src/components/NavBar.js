import React from "react";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  return (
    <div className="flex items-center border-2 border-blue-100 md:mx-10 md:rounded-md p-10 py-2">
      {/* logo and co. name */}
      <div className="flex items-center flex-grow sm:flex-grow-0 md:text-lg">
        <img src={logo} alt="" className="h-6 mr-2 md:h-12 hidden lg:block" />
        <h1 className="hidden lg:block font-semibold">The Wave Shop</h1>
      </div>

      {/* searchbar */}
      <div className="hidden sm:flex items-center ml-5 h-10 rounded-md flex-grow cursor-pointer border-2 border-solid border-gray-200 hover:border-gray-400">
        <input
          className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none text-left"
          type="text"
          placeholder="Search Anything"
        />
        <MagnifyingGlassIcon className="h-16 w-12 p-4 text-black link" />
      </div>

      {/* right-hand side */}
      <div className="grow-0 flex mx-12 space-x-2 text-xs md:text-lg md:space-x-5 whitespace-nowrap md:mr-0 lg:ml-10">
        <p className="link">
          <Link to="/">Home</Link>
        </p>
        <p className="link">
          <Link to="/shop">Shop</Link>
        </p>
        <p className="link hidden md:block">
          <Link to="/about">About Us</Link>
        </p>
        <p className="link">Contact</p>
        <HeartIcon className="h-4 link md:h-6" />
        <UserCircleIcon className="h-4 link md:h-6" />
        <ShoppingCartIcon className="h-4 link md:h-6" />
      </div>
    </div>
  );
};

export default NavBar;
