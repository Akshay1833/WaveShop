import React from "react";
import hoodie from "../assets/images/hoodie.png";
import main from "../assets/images/main.png";
import moonshine from "../assets/images/moonshine.png";
import bmw from "../assets/images/bmw.png";
import aiesec from "../assets/images/aiesec.png";
import roguecode from "../assets/images/roguecode.png";
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <div className="md:p-10 md:-mt-5">
      <div className="bg-gradient-to-r from-indigo-400 to-purple-500 w-full h-full md:rounded-lg">
        {/* LEFT-SIDE HEAD */}
        <div className="text-white text-center font-bold text-sm md:text-3xl lg:text-6xl pt-10">
          <h1 className="md:ml-10 md:pt-10 md:text-left lg:ml-20">
            "Create your style, wear it
          </h1>
          <h1 className="pt-5 md:ml-10 md:pt-10 md:text-left lg:ml-20">
            loud and proud with
          </h1>
          <h1 className="pt-5 md:ml-10 md:pt-10 md:text-left lg:ml-20">
            The Wave Shop."
          </h1>
        </div>

        {/* LEFT-SIDE TEXT */}
        <div className="flex flex-col">
          <p className="hidden lg:block text-white ml-20 pt-10 text-xl">
            Welcome to The Wave Shop, your go-to source for
          </p>
          <p className="hidden lg:block text-white ml-20 pt-4 text-xl">
            custom merchandise. From t-shirts, hoodies to tote
          </p>
          <p className="hidden lg:block text-white ml-20 pt-4 text-xl">
            bags and more, we offer high-quality products and a
          </p>
          <p className="hidden lg:block text-white ml-20 pt-4 text-xl">
            simple online design process. Let us help you create
          </p>
          <p className="hidden lg:block text-white ml-20 pt-4 text-xl">
            something unique for your business, group or personal
          </p>
          <p className="hidden lg:block text-white ml-20 pt-4 text-xl">
            style. Thank you for choosing us!
          </p>

          {/* SHOP NOW */}
          <div className="banner">
            <div className="flex justify-center mt-5 mb-5 md:justify-start md:mt-4">
              <Link to="/shop">
                <button className="shop-now-button hover:text-black bg-white text-purple-500 shadow-2xl place-content-center font-bold text-sm mx-auto flex w-40 rounded-md p-2 mt-5 mb-5 md:text-xl md:w-auto md:ml-10 md:mt-10 lg:ml-20">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT-SIDE IMAGES */}
      <div className="flex md:justify-end">
        <img
          src={main}
          alt=""
          className="hidden md:block h-40 shadow-2xl rounded-lg md:h-60 md:-mt-72 md:mr-10 md:mb-5 lg:h-auto lg:-mt-160 lg:mb-20 lg:mr-20 "
        />
        {/* <img src={hoodie} alt="" className="hidden rounded-lg" /> */}
      </div>

      {/*LOGO STRIP*/}
      <div className="bg-gray-100 hidden sm:block rounded-lg">
        <div className="flex place-content-center p-2 font-bold">
          <h2>OUR PARTNERS</h2>
        </div>
        <div className="flex justify-evenly p-2 h-16 md:h-16 md:p-2 md:mt-0 lg:h-auto lg:p-5">
          <img src={moonshine} alt="" />
          <img src={bmw} alt="" />
          <img src={aiesec} alt="" />
          <img src={roguecode} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
