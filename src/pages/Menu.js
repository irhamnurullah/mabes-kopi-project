import React, { useEffect } from "react";
import ProductCards from "../components/ProductCards";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function Menu() {
  const ListMenu = [
    "Recomended",
    "Coffee",
    "Non Coffee",
    "Beverages",
    "Bottle Pack",
    "Coffee Bean",
  ];

  return (
    <>
      <div className="z-10 lg:min-h-screen container mx-auto">
        <ScrollToTopOnMount />
        <div className="mt-9 lg:pl-16 sm:mx-auto lg:px-4">
          {/* Head */}
          <div className="w-64 mx-auto lg:w-96">
            <p className="text-center text-lg leading-6 font-semibold text-neutral-90 lg:text-2xl">
              Pilih Menu Yang Kamu Mau
            </p>
            <p className="text-center text-xs leading-5 font-normal text-neutral-60 lg:text-base lg:mt-3 lg:leading-8">
              Jangan bimbang jangan ragu apapun itu, semoga menemani harimu
            </p>
          </div>

          {/* Content */}
          <div className="flex justify-between mt-7 lg:mt-4">
            <div className="font-semibold text-neutral-90 lg:text-lg">
              Category
            </div>
            <div className="font-medium text-sm text-blue-600">
              How To Order
            </div>
          </div>

          {/* Button */}
          <div className="mt-4">
            <div className="flex justify-between space-x-2 overflow-x-scroll overflow-visible scrollbar-hide lg:justify-start">
              {ListMenu.map((item) => {
                return (
                  <div key={item}>
                    <button
                      className="w-28 lg:w-36 py-2 bg-white text-xs font-medium leading-5 text-secondary-70 border border-secondary-70 rounded-3xl hover:bg-secondary-70 hover:text-white hover:border-transparent
                  "
                    >
                      {item}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Product Cards */}
          <div className="mt-2 mb-32">
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
