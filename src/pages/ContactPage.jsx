/*===============================================
=          Kodet af Emil           =
===============================================*/


import { InstagramLogo } from "@phosphor-icons/react";
import ContactImg from "../assets/images/contactimg.svg"


export default function ContactPage() {
  return (
    <main>
      <div className="lg:flex lg:flex-row justify-center items-center lg:w-[80%] m-auto">
        <div className="lg:flex lg:flex-col">
          <div className="flex flex-col items-center justify-center w-full h-full lg:block lg:ml-9 md:flex  md:justify center">
            <h2 className="text-prime-orange text-3xl font-bebas md:mt-5 lg:mt-36  md:text-4xl lg:text-7xl ">Kontakt Os</h2>

            <div className="font-mont font-semibold flex flex-col mt-3 gap-3 text-xs md:text-base md:gap-6  md:justify center">
              <p>Spørgsmål: <a className="underline" href="mailto:hello@jumboaarhus.com">hello@jumboaarhus.com</a></p>
              <p>Søg Job: <a className="underline" href="mailto:job@jumboaarhus.com">job@jumboaarhus.com</a></p>
              <p>(ingen bordreservationer)</p>


            </div>
          </div>
          <div className=" text-off-black flex flex-col ml-9 mt-14">
            <h2 className="text-2xl font-bebas mb-4 md:text-3xl lg:text-4xl flex gap-4">Bageri <a href="https://www.instagram.com/jumbo_aarhus/" target="_blank"> <InstagramLogo size={32} color="prime-brown" /> </a> </h2>
            <div className=" font-mont flex gap-3">
              <div className="font-mont font-semibold flex flex-col gap-3 text-xs w-60 md:text-base md:w-[450px] lg:w-[350px] ">
                <p>Mindet 4D, 8000 Aarhus C</p>
                <p>Tlf: 53849878</p>
                <p>Mandag til fredag: 7.00-18.00</p>
                <p>Lørdag, søndag og helligedage: 8.00-18.00</p>
              </div>

            </div>
          </div>
          <div className=" text-off-black flex flex-col w-full ml-9 mt-5">
            <h2 className="text-2xl font-bebas  mb-4 md:text-3xl lg:text-4xl md:mt-6 flex gap-4">Café <a href="https://www.instagram.com/jumbo_ankersgade/" target="_blank"><InstagramLogo size={32} color="prime-brown" /></a></h2>
            <div className=" font-mont flex gap-3">
              <div className="font-mont font-semibold flex flex-col gap-4 text-xs w-[70%] md:text-base mb-10">
                <p>Ankersgade 12B, 8000 Aarhus C</p>
                <p>Tlf: 53849877</p>
                <p>Mandag til fredag: 7.30-18.00</p>
                <p>Lørdag, søndag og helligedage: 8.00-16.00</p>

              </div>

            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center mt-10">
          <img className=" w-11/12 lg:w-10/12 lg:max-w-xl drop-shadow-xl lg:mt-10 " src={ContactImg} alt="" />
        </div>
      </div>
    </main>
  )

}