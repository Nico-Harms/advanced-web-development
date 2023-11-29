import instaIcon from "../../assets/images/insta-icon.svg";
import Esmiley from "../../assets/images/Esmiley.svg";
import Wave from "../../assets/images/wave1.svg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {


  const [showFooter, setShowFooter] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Hide the navigation bar on specific routes
    if (location.pathname === "/adminlogin" || location.pathname === "/admin" || location.pathname === "/admincourse" || location.pathname === "/contact" ) {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location.pathname]);

  return (
    <>
      {showFooter && (
        <footer className="bg-sec-orange p-8 flex flex-col items-center mt-20 ">
          <div className="relative -top-[110px] w-[100vw] left-0 right-0 h-20 overflow-hidden">
            <img
              src={Wave}
              alt="Wave Image"
              className="w-full h-full  object-cover"
            />
          </div>
          <div className="lg:flex lg:flex-row">

            <div className="flex flex-col gap-5">
              <div className=" text-off-white flex flex-col">
                <h2 className="text-2xl font-bebas mb-4 md:text-4xl">Bageri</h2>
                <div className=" font-mont flex gap-3">
                  <div className="font-mont flex flex-col gap-3 text-xs w-80 md:text-xl md:w-[550px]">
                    <p>Mindet 4D, 8000 Aarhus C</p>
                    <p>Tlf: 53849878</p>
                    <p>Mandag til fredag: 7.00-18.00</p>
                    <p>Lørdag, søndag og helligedage: 8.00-18.00</p>
                  </div>
                  <div className="flex items-center">
                    <a href="https://www.instagram.com/jumbo_aarhus/"><img
                      src={instaIcon}
                      alt="Description"
                      className="rounded-full h-12 w-12 md:h-16 md:w-16"
                    /></a>
                  </div>
                </div>
              </div>

              <div className=" text-off-white flex flex-col ">
                <h2 className="text-2xl font-bebas mb-4 md:text-4xl md:mt-6">Café</h2>
                <div className=" font-mont flex gap-3">
                  <div className="font-mont flex flex-col gap-4 text-xs w-80 md:text-xl md:w-[550px]">
                    <p>Ankersgade 12B, 8000 Aarhus C</p>
                    <p>Tlf: 53849877</p>
                    <p>Mandag til fredag: 7.30-18.00</p>
                    <p>Lørdag, søndag og helligedage: 8.00-16.00</p>
                  </div>
                  <div className="flex items-center">
                    <a href="https://www.instagram.com/jumbo_ankersgade/"><img
                      src={instaIcon}
                      alt="Description"
                      className="rounded-full h-12 w-12 md:h-16 md:w-16"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex lg:row">


              <div className=" text-off-white ">
                <h2 className="text-2xl font-bebas mb-4 flex flex-col mt-4 md:text-4xl md:mt-8">Kontakt</h2>
                <div className=" font-mont flex gap-3">
                  <div className=" font-mont flex flex-col gap-3 text-xs w-80 md:text-xl md:gap-6 md:w-[550px]">
                    <p>Spørgsmål: hello@jumboaarhus.com</p>
                    <p>Søg Job: job@jumboaarhus.com</p>
                    <p>(ingen bordreservationer)</p>
                  </div>

                </div>
              </div>
              <div className="hidden lg:block ">
                <img
                  src={Esmiley}
                  alt="Description"
                  className="rounded-full h-12 w-12 md:h-16 md:w-16 md:mt-6"
                />
              </div>
            </div>
          </div>

        </footer>
      )}
    </>
  );
}
