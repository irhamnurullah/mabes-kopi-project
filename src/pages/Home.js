import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FreshBean, HandleWithLove, Hero1, Hero2, Hero2Mobile, PerfectRoasting } from "../assets";
import Footer from "../components/Footer";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function Home() {
  const history = useHistory();

  return (
    <>
      <div className="z-10 min-h-screen sm:min-w-full">
        <ScrollToTopOnMount />
        {/* Hero 1 */}
        <div className="container mx-auto flex lg:flex-row lg:pl-16 sm:pl-0 sm:flex-col-reverse">
          {/* text kiri */}
          <div className="lg:mt-28 lg:w-1/2 sm:w-full sm:mt-0 ">
            <div className="lg:visible">
              <div className="sm:mx-7 sm:h-20 lg:h-auto lg:mx-auto">
                <p className="lg:font-normal text-primary-80 lg:text-home lg:leading-normal sm:font-medium sm:text-2xl">
                  Seduhan Nikmat Dari <br />
                  <span className="lg:font-bold text-primary-80 lg:text-home lg:leading-normal sm:font-semibold sm:text-2xl">
                    Biji Kopi Yang Terbaik
                  </span>
                </p>
              </div>
              <div className="lg:w-4/5 lg:mt-4 sm:w-full sm:mt-0">
                <p className="font-normal lg:text-base lg:leading-8 lg:text-left text-neutral-70 sm:text-xs sm:leading-5 sm:text-center">
                  Biji kopi pilihan dari pegunungan Puntang, Bandung Selatan, Jawa Barat. Di
                  <i> roasting </i>
                  dengan sempurna dan diseduh dengan sepenuh hati.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex space-x-4 lg:mx-auto lg:mt-4 sm:mt-8 sm:mx-7">
                <button
                  onClick={() => history.push("/menu")}
                  className="bg-secondary-70 lg:text-base lg:w-36 sm:w-32 lg:h-12 sm:h-9 sm:text-sm rounded-3xl text-white shadow-md hover:shadow-lg hover:bg-secondary-80 uppercase font-normal"
                >
                  View Menu
                </button>
                <button
                  onClick={() => history.push("/contact")}
                  className="lg:w-36 sm:w-32 lg:h-12 sm:h-9 sm:text-sm lg:text-base rounded-contact text-secondary-70 hover:text-secondary-80 font-medium"
                >
                  How To Order ?
                </button>
              </div>
            </div>
          </div>
          {/* gambar kanan */}
          <div className="z-10 mt-8 ml-12 lg:w-2/4 sm:w-full sm:ml-2">
            <img src={Hero1} alt="hero1" />
          </div>
        </div>

        {/* Hero 2 */}
        <div className="bg-neutral-20 lg:pb-28 lg:pt-8 sm:mt-11 lg:rounded-none sm:rounded-3xl sm:pb-7">
          <div className="container mx-auto w-screen grid lg:grid-cols-2 gap-6 lg:pl-16 sm:grid-cols-1 sm:pl-0">
            {/* gambar kiri */}
            <div className="w-5/6 mt-5 sm:hidden lg:block">
              <img src={Hero2} alt="hero2" />
            </div>
            <div className="w-full lg:hidden sm:block mt-7">
              <img src={Hero2Mobile} alt="hero2" />
            </div>

            {/* text kanan */}
            <div className="lg:mt-32 sm:mt-0">
              <div>
                <p className="font-semibold lg:text-lg text-primary-70 sm:text-xs lg:mb-2">
                  Hola, Señores & Señoritas!
                </p>
                <p className="font-semibold lg:text-3xl text-primary-80 mt-2 sm:mt-1 sm:text-lg">
                  Selamat datang di Mabes Kopi
                </p>
                <div className="h-1 lg:w-16 sm:w-10 bg-secondary-60 rounded-lg mt-3"></div>
                <p className="font-normal lg:text-base lg:w-5/6 text-neutral-70 lg:mt-7 sm:mt-3 lg:leading-8 sm:leading-5 sm:text-xs">
                  Terima kasih buat kamu yang sudah berkunjung, titip salam dari kami untuk kerabat
                  terdekatmu, sampaikan kami ada sini siap melayani dan menyeduh kopi.
                </p>
              </div>

              {/* icon & text */}
              <div className="flex justify-start sm:justify-start mt-10 sm:mt-8 space-x-6 sm:space-x-2 lg:leading-5 text-xs lg:text-neutral-70 font-normal sm:text-center sm:text-primary-80">
                <div className="lg:flex lg:w-auto lg:h-auto lg:space-x-1 lg:bg-transparent sm:bg-primary-20 sm:rounded-3xl sm:w-24 sm:h-24">
                  <img
                    src={FreshBean}
                    alt="icon"
                    className="lg:w-8 lg:h-8 mx-auto sm:w-6 sm:h-6 sm:mt-5"
                  />
                  <p className="lg:pt-6 lg:px-0 sm:px-6 sm:pt-1">Fresh Beans</p>
                </div>
                <div className="lg:flex lg:w-auto lg:h-auto lg:space-x-1 lg:bg-transparent sm:bg-secondary-10 sm:rounded-3xl sm:w-24 sm:h-24">
                  <img
                    src={PerfectRoasting}
                    alt="icon"
                    className="lg:w-8 lg:h-8 mx-auto sm:w-6 sm:h-6 sm:mt-5"
                  />
                  <p className="lg:pt-6 lg:px-0 sm:px-6 sm:pt-1">Perfect Roasting</p>
                </div>
                <div className="lg:flex lg:w-auto lg:h-auto lg:space-x-1 lg:bg-transparent sm:bg-purple-100 sm:rounded-3xl sm:w-24 sm:h-24">
                  <img
                    src={HandleWithLove}
                    alt="icon"
                    className="lg:w-8 lg:h-8 mx-auto sm:w-6 sm:h-6 sm:mt-5"
                  />
                  <p className="lg:pt-6 lg:px-0 sm:pt-1 sm:px-4">Handle With Love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
