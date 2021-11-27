import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import FooterContent from "../components/FooterContent";
import ProductCards from "../components/ProductCards";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function Menu() {
  const history = useHistory();

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
      <ScrollToTopOnMount />
      <div className="container mx-auto pl-16">
        <div className="text-center mt-10">
          <div className="text-3xl font-semibold">
            <p>Pilih Menu Yang Kamu Mau</p>
          </div>
          <div className="text-neutral-60 font-normal mt-5 flex flex-col">
            <p>
              Jangan bimbang jangan ragu
              <br />
              <span> apapun itu, semoga menemani harimu</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-16">
          <div className="text-secondary-70 space-x-3">
            {ListMenu.map((item) => {
              return (
                <button
                  key={item}
                  className="border border-secondary-70 font-medium text-lg  py-2 px-6 rounded-full hover:text-white hover:bg-secondary-90"
                >
                  {item}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => history.push("/contact")}
            className="text-blue-400 font-medium text-lg"
          >
            How to Order ?
          </button>
        </div>
        <ProductCards />
        <ProductCards />
        <ProductCards />
      </div>
      <FooterContent />
    </>
  );
}

export default Menu;
