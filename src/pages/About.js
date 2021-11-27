import React from "react";
import { Location, Banner } from "../assets";
import FooterContent from "../components/FooterContent";

const About = () => {
  return (
    <>
      <div
        className="bg-auto bg-center bg-no-repeat h-64 text-secondary-70 object-fill"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="container mx-auto">
          <div className="text-right text-neutral-10 text-4xl py-16 font-medium mr-16 ">
            <p className="tracking-wide leading-normal">
              Kopi <br />
              Bukan <span className="font-bold">Pahitmu</span> <br />
              Yang Kucari
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-16 mt-16">
        <div className="space-y-10">
          <p className="font-bold text-neutral-90 text-4xl">Mabes Kopi</p>
          <p className="text-justify text-neutral-70">
            Berdiri sejak tahun 2020, berawal dengan menjual biji kopi khas dari
            pegunungan Puntang Bandung Selatan. Hingga saat ini berdiri kedai
            dengan nama Mabes Kopi, menjual berbagai minuman olahan kopi dan
            nonkopi. Kami juga aktif menjual produk diberbagai merchant food
            delivery dan marketplace.
          </p>
        </div>
        <div className="mt-16 space-y-10 ">
          <p className="font-bold text-neutral-90 text-2xl">Cari Kami Disini</p>
          <div className="flex">
            <div className="row-span-3">
              <img src={Location} alt="location" />
            </div>

            <div className="pl-9 space-y-3 py-5 text-neutral-90">
              <div className="flex space-x-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="CurrentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
                </svg>
                <p>
                  Jl. Gumuruh No.42 A, Gumuruh, <br /> Kec. Batununggal, Kota
                  Bandung, <br />
                  Jawa Barat 40275
                </p>
              </div>
              <div className="flex space-x-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="CurrentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.99 0.083313C4.47 0.083313 0 4.74998 0 10.5C0 16.25 4.47 20.9166 9.99 20.9166C15.52 20.9166 20 16.25 20 10.5C20 4.74998 15.52 0.083313 9.99 0.083313ZM10 18.8333C5.58 18.8333 2 15.1041 2 10.5C2 5.89581 5.58 2.16665 10 2.16665C14.42 2.16665 18 5.89581 18 10.5C18 15.1041 14.42 18.8333 10 18.8333ZM9.78 5.29165H9.72C9.32 5.29165 9 5.62498 9 6.04165V10.9583C9 11.3229 9.18 11.6666 9.49 11.8541L13.64 14.4479C13.98 14.6562 14.42 14.5521 14.62 14.1979C14.83 13.8437 14.72 13.375 14.37 13.1666L10.5 10.7708V6.04165C10.5 5.62498 10.18 5.29165 9.78 5.29165V5.29165Z" />
                </svg>
                <p>
                  Setiap hari <br /> 09.00 - 23.00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterContent />
    </>
  );
};

export default About;
