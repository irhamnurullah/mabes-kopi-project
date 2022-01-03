import React from "react";
import {
  Bukalapak,
  ContactInstagram,
  ContactMail,
  ContactWhatsapp,
  GoFood,
  GrabFood,
  ShopeeFood,
} from "../assets";

const ContactComp = () => {
  return (
    <>
      {/* Delivery Order */}
      <div className="z-10 lg:min-h-screen container mx-auto mt-7">
        <div className="">
          <p className="text-base font-semibold text-neutral-90">
            Buy Take Away
          </p>
          <p className="text-xs text-neutral-50 leading-5">
            Hanya tersedia untuk area Bandung kota
          </p>

          <div className="mt-4 flex items-center justify-start space-x-6">
            <img src={GoFood} alt="GoFood" className="h-6" />
            <img src={GrabFood} alt="GrabFood" className="h-6" />
            <img src={ShopeeFood} alt="ShopeeFood" className="h-6 " />
          </div>
        </div>
      </div>

      {/* Marketplace */}
      <div className="z-10 lg:min-h-screen container mx-auto mt-9">
        <div className="">
          <p className="text-base font-semibold text-neutral-90">Marketplace</p>
          <p className="text-xs text-neutral-50 leading-5">
            Untuk Pembelian biji kopi
          </p>

          <div className="mt-4 flex items-center justify-start space-x-6">
            <img src={Bukalapak} alt="Bukalapak" className="h-6" />
            <img src={ShopeeFood} alt="ShopeeFood" className="h-6 " />
          </div>
        </div>
      </div>

      {/* Information Contact */}
      <div className="z-10 lg:min-h-screen container mx-auto mt-9 mb-32">
        <div className="">
          <p className="text-base font-semibold text-neutral-90">
            Information & Contact
          </p>
          <p className="text-xs text-neutral-50 leading-5">
            Hubungi kami disini
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-start gap-3">
            <div className="font-medium text-xs leading-5 py-1 px-2 rounded-xl border border-indigo-500 flex items-center space-x-2 text-indigo-500">
              <img src={ContactInstagram} alt="instagram" />
              <p>@_mabeskopi</p>
            </div>
            <div className="font-medium text-xs leading-5 py-1 px-2 rounded-xl border border-secondary-70 flex items-center space-x-2 text-secondary-70">
              <img src={ContactWhatsapp} alt="whaysapp" />
              <p>0895453646224</p>
            </div>
            <div className="font-medium  text-xs leading-5 py-1 px-2 rounded-xl border border-red-600 flex items-center space-x-2 text-red-600">
              <img src={ContactMail} alt="whaysapp" />
              <p>mabeskopi42A@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactComp;
