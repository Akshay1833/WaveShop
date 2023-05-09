import React from "react";

const Product = ({ id, title, price, description, category, image }) => {
  return (
    <div>
      {/* CARDS */}
      <div className="relative flex flex-col bg-white border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 shadow-2xl h-full md:w-52">
        <img src={image} alt="" className="p-1" />
        <p className="m-2 text-sm h-16">{title}</p>
        <h1 className="mt-2 font-semibold absolute bottom-0 left-1/2 transform -translate-x-1/2">
          ${price}
        </h1>
      </div>
    </div>
  );
};

export default Product;
