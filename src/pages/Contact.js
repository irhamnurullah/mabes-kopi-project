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
      <div className="container mx-auto pl-14">
        <div className="text-center mt-10">
          <div className="text-3xl font-semibold text-neutral-90">
            <p>Halo, Ada Yang Bisa Kami Bantu ?</p>
          </div>
          <div className="text-neutral-60 text-lg font-normal mt-5 ">
            <p>Tanyakan aja ya! kamu bisa pilih platform dibawah ini</p>
          </div>
        </div>

        <div className="flex my-8 ">
          <div className="w-2 flex-none"></div>
          <div className="bg-white w-16 h-auto pb-12 rounded-large flex-grow">
            <div className="text-center mt-6">
              <p className="font-bold text-xl">How To Order ?</p>
              <div className="flex justify-evenly pt-6 ">
                <div>
                  <div className="flex flex-col space-y-12 w-96">
                    <p className="text-2xl font-bold text-secondary-70">
                      Dine in
                    </p>
                    <div className="flex justify-center">
                      <img src={DineIn} alt="dine in" />
                    </div>
                    <p className="px-4">
                      Jika kamu berada di outlet Mabes Kopi untuk memesan menu,
                      silahkan pesan langsung pada kasir ya.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col space-y-9 w-96">
                    <p className="text-2xl font-bold text-secondary-70">
                      Take Away
                    </p>
                    <div className="flex justify-center">
                      <img src={TakeAway} alt="take away" />
                    </div>
                    <p className="px-10 text-center">
                      Kamu bisa memesan lewat Gofood, Grabfood dan Shopee Food.
                      Kalo mau pesan biji kopi bisa melalui link dibawah ini
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2 flex-none"></div>
        </div>

        <ContactComp />
      </div>
      <FooterContent />
    </>
  );
};

export default Contact;
