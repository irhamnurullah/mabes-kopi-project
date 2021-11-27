import React from "react";
import {
  Bukalapak,
  ContactInstagram,
  ContactMail,
  ContactWhatsapp,
  GoFood,
  GrabFood,
  Shopee,
  ShopeeFood,
} from "../assets";

const ContactComp = () => {
  return (
    <div>
      {/* Contact */}
      <div className="mt-44">
        <p className="text-neutral-90 font-bold text-2xl">
          Hubungi Kami Disini
        </p>
        <div className="flex mt-6 space-x-8">
          <button
            className="py-3 px-6 text-white rounded-contact flex space-x-4"
            style={{ background: "#378D44" }}
          >
            <img src={ContactWhatsapp} alt="whatsapp" />
            <span>0895453646224</span>
          </button>
          <button
            className="py-3 px-6 text-white rounded-contact flex space-x-4"
            style={{ background: "#CE2E2E" }}
          >
            <img src={ContactMail} alt="email" />
            <span>Mabeskopi42a@gmail.com</span>
          </button>
          <button className="py-3 px-6 text-white rounded-contact flex space-x-4 bg-gradient-to-tl from-purple-800 to-pink-700">
            <img src={ContactInstagram} alt="instagram" />
            <span>_mabeskopi</span>
          </button>
        </div>
      </div>

      {/* Delivery Order */}
      <div className="mt-12">
        <p className="text-neutral-90 font-bold text-2xl">Delivery</p>
        <div className="flex mt-6 space-x-32">
          <img src={GoFood} alt="gofood" />
          <img src={GrabFood} alt="grabfood" />
          <img src={ShopeeFood} alt="shopeefood" />
        </div>
      </div>

      {/* Market Place */}
      <div className="mt-12">
        <p className="text-neutral-90 font-bold text-2xl">Market Place</p>
        <div className="flex mt-6 space-x-32">
          <img src={Shopee} alt="shopee" />
          <img src={Bukalapak} alt="bukalapak" />
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
