import React, { useEffect } from "react";
import ContactComp from "../components/ContactComp";
import { DineIn, TakeAway } from "../assets";
import FooterContent from "../components/FooterContent";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const Contact = () => {
  return (
    <>
      <ScrollToTopOnMount />

      <div className="z-10 container mx-auto">
        {/* head */}
        <div className="mt-9 lg:pl-16 sm:mx-auto lg:px-4">
          <div className="w-80 mx-auto lg:w-2/3">
            <p className="text-center text-lg leading-6 font-semibold text-neutral-90 lg:text-2xl">
              Halo, ada yang bisa kami bantu?
            </p>
            <p className="sm:hidden lg:block px-2 text-center text-xs leading-5 font-normal mt-0.5 text-neutral-60 lg:text-base lg:mt-3 lg:leading-8">
              Tanyakan aja ya! kamu bisa pilih platform dibawah ini
            </p>
            <p className="lg:hidden  px-2 text-center text-xs leading-5 font-normal mt-0.5 text-neutral-60 lg:text-base lg:mt-3 lg:leading-8">
              Tanyakan saja ya! kamu bisa hubungi kami dengan platform dibawah
              ini
            </p>
          </div>
        </div>

        {/* content */}
        <div className="mt-7 lg:mt-4 lg:pl-16 lg:flex lg:justify-center">
          <div className="font-semibold text-neutral-90 lg:text-lg">
            How to Order ?
          </div>
        </div>
      </div>

      {/* card */}
      <div className="bg-neutral-30 ">
        <div className="container mx-auto">
          {/* Kiri */}
          <div className="flex justify-center lg:justify-between space-x-3.5 mt-3 pb-8 lg:px-20 lg:h-44">
            <div className="lg:flex border">
              <div className="relative flex items-center justify-center lg:justify-start lg:items-baseline top-5">
                <img
                  src={DineIn}
                  alt="dinein"
                  className="w-11 h-11 lg:w-20 lg:h-20"
                />
              </div>
              <div className="w-40 h-64 bg-primary-10 rounded-2xl">
                <div className="pt-8 mx-3">
                  <p className="font-semibold text-lg text-secondary-70">
                    Dine In
                  </p>
                  <p className="mt-0.5 font-normal text-xs text-neutral-60 leading-5">
                    Jika kamu berada di outlet Mabes Kopi untuk memesan menu,
                    silahkan scan barcode dan beritahu menu yang dipesan pada
                    kasir ya.
                  </p>
                </div>
              </div>
            </div>

            {/* Kanan */}
            <div>
              <div className="relative flex items-center justify-center top-5">
                <img src={TakeAway} alt="TakeAway" className="w-11 h-11" />
              </div>
              <div className="w-40 h-64 bg-primary-10 rounded-2xl">
                <div className="pt-8 mx-3">
                  <p className="font-semibold text-lg text-secondary-70">
                    Take Away
                  </p>
                  <p className="mt-0.5 font-normal text-xs text-neutral-60 leading-5">
                    Untuk area kota Bandung kamu bisa memesan lewat
                    <span className="text-blue-600 font-semibold">
                      {" "}
                      Gofood{" "}
                    </span>
                    ,
                    <span className="text-blue-600 font-semibold">
                      {" "}
                      Grabfood{" "}
                    </span>
                    dan
                    <span className="text-blue-600 font-semibold">
                      ShopeeFood
                    </span>
                    . Kalo mau pesan biji kopi bisa melalui link marketplace
                    dibawah ini.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactComp />
    </>
  );
};

export default Contact;
