import React from "react";
import products from "../database/products";
// import Product1 from "../assets/img/products/kopisusucreampie.png";

function ProductCards() {
  return (
    <>
      <div className="flex flex-wrap gap-4 lg:gap-2">
        {products.map(({ id, price, title, image, composition }) => {
          return (
            <div key={id} className="w-36 h-72 lg:w-72 lg:h-auto lg:mt-8">
              <img src={image} alt="products" />
              <p className="font-medium text-sm text-neutral-80">{title}</p>
              <p className="text-xs text-neutral-50">{composition}</p>
              <div className="flex space-x-2 mt-1">
                <div className="px-2 py-1 rounded-xl bg-yellow-500 font-normal text-xs text-neutral-10 text-center">
                  Hot
                </div>
                <div className="px-2 py-1 rounded-xl bg-blue-300 font-normal text-xs text-neutral-10 text-center">
                  Cold
                </div>
              </div>
              <p className="font-medium text-sm text-neutral-80 mt-3 lg:mb-4">
                {price}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductCards;
