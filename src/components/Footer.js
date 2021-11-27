import React from "react";
import { FacebookIcn, InstagramIcn, WhatsappIcn } from "../assets";

const Footer = () => {
  return (
    <div className="flex space-x-6 py-20">
      <a href="facebook.com">
        <img src={FacebookIcn} alt="social media" />
      </a>
      <a href="instagram.com">
        <img src={InstagramIcn} alt="social media" />
      </a>
      <a href="whatsapp.com">
        <img src={WhatsappIcn} alt="social media" />
      </a>
    </div>
  );
};

export default Footer;
