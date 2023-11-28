import instaIcon from "../../assets/images/insta-icon.svg";
import Esmiley from "../../assets/images/Esmiley.svg";
import Wave from "../../assets/images/wave.svg";
export default function Footer() {
  return (
    <footer className="bg-sec-orange p-8 flex flex-col gap-5 items-center mt-20">
      <div className="relative -top-[110px] w-[100vw] left-0 right-0 h-20 overflow-hidden">
        <img
          src={Wave}
          alt="Wave Image"
          className="w-full h-full object-cover"
        />
      </div>
  <div>
  
  <div className="flex flex-col gap-5">
      <div className=" text-off-white flex flex-col">
        <h2 className="text-2xl font-bebas mb-4">Bageri</h2>
        <div className=" font-mont flex gap-3">
          <div className="font-mont flex flex-col gap-3 text-xs w-80">
            <p>Mindet 4D, 8000 Aarhus C</p>
            <p>Tlf: 53849878</p>
            <p>Mandag til fredag: 7.00-18.00</p>
            <p>Lørdag, søndag og helligedage: 8.00-18.00</p>
          </div>
          <div className="flex items-center">
            <img
              src={instaIcon}
              alt="Description"
              className="rounded-full h-12 w-12"
            />
          </div>
        </div>
      </div>

      <div className=" text-off-white flex flex-col">
        <h2 className="text-2xl font-bebas mb-4">Café</h2>
        <div className=" font-mont flex gap-3">
          <div className="font-mont flex flex-col gap-3 text-xs w-80">
            <p>Ankersgade 12B, 8000 Aarhus C</p>
            <p>Tlf: 53849877</p>
            <p>Mandag til fredag: 7.30-18.00</p>
            <p>Lørdag, søndag og helligedage: 8.00-16.00</p>
          </div>
          <div className="flex items-center">
            <img
              src={instaIcon}
              alt="Description"
              className="rounded-full h-12 w-12"
            />
          </div>
        </div>
        </div>
      </div>
      <div>

      
      <div className=" text-off-white ">
        <h2 className="text-2xl font-bebas mb-4 flex flex-col">Kontakt</h2>
        <div className=" font-mont flex gap-3">
          <div className=" font-mont flex flex-col gap-3 text-xs w-80">
            <p>Spørgsmål: hello@jumboaarhus.com</p>
            <p>Søg Job: job@jumboaarhus.com</p>
            <p>(ingen bordreservationer)</p>
          </div>
          
        </div>
      </div>
      <div className="hidden md:flex">
      <img
              src={Esmiley}
              alt="Description"
              className="rounded-full h-12 w-12"
            />
      </div>
      </div>
      </div>
      
    </footer>
  );
}
