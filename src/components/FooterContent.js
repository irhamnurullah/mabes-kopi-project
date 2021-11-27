import React from "react";
import { ContactInstagram } from "../assets";

const FooterContent = () => {
  return (
    <div style={{ background: "#DBB588" }} className="mt-28">
      <div className="container mx-auto pl-16 h-16">
        <div className="flex justify-between text-primary-10">
          <div className="flex space-x-3 my-5">
            <img src={ContactInstagram} alt="instagram" />
            <p className="font-medium">_mabeskopi</p>
          </div>
          <div className="my-5">© 2021 Walileuw Tech</div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
