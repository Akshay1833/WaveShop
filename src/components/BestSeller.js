import React from "react";
import Product from "./Product";

const BestSeller = ({ products }) => {
  return (
    <div>
      <div>
        <h1 className="flex place-content-center font-bold text-lg pt-5 md:text-6xl md:pt-16">
          Our Best Seller Product
        </h1>
      </div>

      {/* TABS (Tshirt, Hoodies, Tate, Pin-up) */}
      <div className="flex m-2 place-content-center font-extralight md:m-10 md:text-2xl">
        <p className="m-2 cursor-pointer hover:font-bold">T-Shirt</p>
        <p className="m-2 cursor-pointer hover:font-bold">Hoodies</p>
        <p className="m-2 cursor-pointer hover:font-bold">Tate</p>
        <p className="m-2 cursor-pointer hover:font-bold">Pin-up</p>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-2 mx-10 md:grid-cols-2 md:ml-32 lg:grid-cols-4 lg:ml-36">
        {products
          .slice(0, 4)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
