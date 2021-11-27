import React from "react";
import products from "../database/products";
// import Product1 from "../assets/img/products/kopisusucreampie.png";

function ProductCards() {
  return (
    <div className="flex items-center mt-6 gap-x-6">
      {products.map(({ id, price, title, image, composition }) => {
        return (
          <div
            key={id}
            className="rounded-xl text-xs bg-white w-72 cursor-pointer hover:shadow-lg"
          >
            <img src={image} alt="menu" className="mx-8" />
            <div className="px-6 gap-y-1">
              <p className="font-medium text-neutral-90 text-lg ">{title}</p>
              <p className="text-neutral-60 text-sm">{composition}</p>
              <p className="mt-11 font-bold text-neutral-90 text-xl mb-7">
                {price}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCards;
