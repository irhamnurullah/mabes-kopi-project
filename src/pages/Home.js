import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Bottle1 } from "../assets";
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
    <div className="container mx-auto pl-16 min-h-screen ">
      <ScrollToTopOnMount />
      <div className="flex justify-between ">
        <div className="mt-52">
          <p className="font-extrabold text-primary-90 text-home tracking-wide">
            Seduhan Nikmat Dari Biji Kopi Yang Terbaik
          </p>
          <p className="mt-8 text-neutral-60 text-xl tracking-wide  font-medium">
            Pilihan biji kopi terbaik dari pegunungan Puntang, Bandung Selatan,
            Jawa Barat
          </p>
          <div className="mt-20 text-2xl font-medium space-x-4">
            <button
              onClick={() => history.push("/menu")}
              className="bg-secondary-70 py-2 px-6 rounded-contact text-white shadow-md hover:shadow-lg hover:bg-secondary-80 "
            >
              View Menu
            </button>
            <button
              onClick={() => history.push("/contact")}
              className=" py-2 px-6 rounded-contact text-secondary-70 border border-secondary-70 hover:bg-secondary-70 hover:text-white "
            >
              How To Order ?
            </button>
          </div>
        </div>
        <img src={Bottle1} alt="product" className=" mt-28" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
