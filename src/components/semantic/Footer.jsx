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
    if (location.pathname === "/adminlogin" || location.pathname === "/admin" || location.pathname === "/admincourse" || location.pathname === "/contact") {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location.pathname]);

  return (
    <>
      {showFooter && (
        <footer className="bg-sec-orange p-8 flex flex-col items-center z-[500] relative ">
          <div className=" lg:w-[80%] lg:mx-auto" >
            <img
              src={Wave}
              alt="Wave Image"
              className=" absolute bottom-[98%] left-0 w-[100vw]"
            />
            <div className="lg:flex lg:flex-row lg:w-full">

              <div className="flex flex-col gap-5 lg:w-full ">
                <div className=" text-off-white flex flex-col lg:w-full">
                  <div className="lg:flex lg:flex-row lg:gap-14">


                    <h2 className="text-2xl font-bebas mb-4 md:text-4xl lg:text-5xl">Bageri</h2>
                    <div className=" flex items-center">

                      <a
                        href="https://www.instagram.com/jumbo_aarhus/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                          src={instaIcon}
                          alt="Description"
                          className="rounded-full hidden lg:block lg:h-12 lg:w-12 lg:mb-2"
                        />
                      </a>
                    </div>
                  </div>
                  <div className=" font-mont flex gap-3">
                    <div className="font-mont flex flex-col gap-3 text-xs w-80 md:text-base md:w-[550px] lg:w-full lg:text-base">
                      <p>Mindet 4D, 8000 Aarhus C</p>
                      <p>Tlf: 53849878</p>
                      <p>Mandag til fredag: 7.00-18.00</p>
                      <p>Lørdag, søndag og helligedage: 8.00-18.00</p>
                    </div>
                    <div className="flex items-center lg:hidden">
                      <a href="https://www.instagram.com/jumbo_aarhus/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                          src={instaIcon}
                          alt="Description"
                          className="rounded-full h-12 w-12 md:h-16 md:w-16"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className=" text-off-white flex flex-col ">
                  <div className="lg:flex lg:flex-row lg:gap-14">
                    <h2 className="text-2xl font-bebas mb-4 md:text-4xl md:mt-6 lg:text-5xl">Café</h2>
                    <div className=" flex items-center">
                      <a href="https://www.instagram.com/jumbo_aarhus/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                          src={instaIcon}
                          alt="Description"
                          className="rounded-full lg:h-12 lg:w-12 lg:mb-2 lg:block hidden"
                        />
                      </a>
                    </div>
                  </div>
                  <div className=" font-mont flex gap-3">
                    <div className="font-mont flex flex-col gap-4 text-xs w-80 md:text-base md:w-[550px] lg:text-base">
                      <p>Ankersgade 12B, 8000 Aarhus C</p>
                      <p>Tlf: 53849877</p>
                      <p>Mandag til fredag: 7.30-18.00</p>
                      <p>Lørdag, søndag og helligedage: 8.00-16.00</p>
                    </div>
                    <div className="flex items-center lg:hidden">
                      <a href="https://www.instagram.com/jumbo_ankersgade/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                          src={instaIcon}
                          alt="Description"
                          className="rounded-full h-12 w-12 md:h-16 md:w-16"
                        /></a>
                    </div>
                  </div>
                </div>

              </div>
              <div className="lg:flex lg:flex-col gap-10">


                <div className=" text-off-white ">
                  <h2 className="text-2xl font-bebas mb-4 flex flex-col mt-4 md:text-4xl md:mt-8 lg:mt-0  lg:text-5xl">Kontakt</h2>
                  <div className=" font-mont flex gap-3">
                    <div className=" font-mont flex flex-col gap-3 text-xs w-80 md:text-xl md:gap-6 md:w-[550px] lg:text-base">
                      <p>Spørgsmål: <a className="underline" href="mailto:hello@jumboaarhus.com">hello@jumboaarhus.com</a></p>
                      <p>Søg Job: <a className="underline" href="mailto:job@jumboaarhus.com">job@jumboaarhus.com</a></p>
                      <p>(ingen bordreservationer)</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex lg:flex-col lg:gap-5">
                  <img
                    src={Esmiley}
                    alt="Description"
                    className="rounded-full lg:h-12 lg:w-12 "
                  />
                  <p className="text-off-white font-mont flex flex-col gap-3 text-xs w-80 md:text-xl md:gap-6 md:w-[550px] lg:text-base"><a href="https://foedevarestyrelsen.dk/kost-og-foedevarer/kontrol/typer-af-kontrol/smileymaerke" className="lg:underline">Fødevarestyrelsen's smiley ordning</a></p>
                </div>
              </div>
            </div>
          </div>

        </footer>
      )}
    </>
  );
}
