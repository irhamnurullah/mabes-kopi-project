import React from "react";
import { Banner } from "../assets";
import Calendar from "../components/svg/calendar";
import Pin from "../components/svg/pin";

const About = () => {
  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="flex items-center justify-center">
          <img
            src={Banner}
            alt="banner"
            className="w-80 h-28 object-cover rounded-2xl"
          />
        </div>

        <div className="mt-4">
          <p className="font-semibold text-lg text-neutral-80">Mabes Kopi</p>
          <p className="mt-1 font-normal text-xs leading-5 text-neutral-60 ">
            Berdiri sejak tahun 2020, berawal dengan menjual biji kopi khas dari
            pegunungan Puntang Bandung Selatan. Hingga saat ini telah berdiri
            kedai dengan nama Mabes Kopi, menjual berbagai minuman olahan kopi
            maupun nonkopi. Kami juga aktif menjual produk diberbagai merchant
            food delivery dan marketplace.
          </p>
        </div>

        <div className="mt-4">
          <p className="font-semibold text-lg text-neutral-80">
            Cari Kami Disini
          </p>
        </div>

        <div className="mt-4 flex flex-col space-y-3 mb-32">
          <div className="flex justify-start gap-3 bg-primary-10 py-1 px-4 w-full rounded-xl">
            <Calendar />
            <div className="font-normal text-xs leading-5 text-neutral-70">
              <p>Setiap hari</p>
              <p>09.00 - 23.00 WIB</p>
            </div>
          </div>
          <div className="flex justify-start gap-3 bg-primary-10 py-1 px-4 w-full rounded-xl">
            <Pin className="border" />
            <div className="font-normal text-xs leading-5 text-neutral-70">
              <p>
                Jl. Gumuruh No.42 A, Gumuruh, Kec. Batununggal, Kota Bandung,
                Jawa Barat 40275
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
