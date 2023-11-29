import instaIcon from "../assets/images/insta-icon.svg";
import ContactImg from "../assets/images/contactimg.svg"
export default function ContactPage() {
    return (
        <main>
            <div>
            <div className="flex flex-col items-center justify-center w-full h-full">
    <h2 className="text-prime-orange text-3xl font-bebas mt-7">Kontakt Os</h2>
    
    <div className="font-mont flex flex-col mt-3 gap-3 text-xs md:text-xl md:gap-6 md:w-[550px]">
        <p>Spørgsmål: hello@jumboaarhus.com</p>
        <p>Søg Job: job@jumboaarhus.com</p>
        
    </div>
</div>
            <div className=" text-off-black flex flex-col w-full ml-9 mt-5">
        <h2 className="text-2xl font-bebas mb-4 md:text-4xl">Bageri</h2>
        <div className=" font-mont flex gap-3">
          <div className="font-mont flex flex-col gap-3 text-xs w-60 md:text-xl md:w-[550px]">
            <p>Mindet 4D, 8000 Aarhus C</p>
            <p>Tlf: 53849878</p>
            <p>Mandag til fredag: 7.00-18.00</p>
            <p>Lørdag, søndag og helligedage: 8.00-18.00</p>
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
            <div className=" text-off-black flex flex-col w-full ml-9 mt-5">
        <h2 className="text-2xl font-bebas mb-4 md:text-4xl md:mt-6">Café</h2>
        <div className=" font-mont flex gap-3">
          <div className="font-mont flex flex-col gap-4 text-xs w-60 md:text-xl md:w-[550px]">
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
        <div className=" w-full flex justify-center mt-5">
            <img className=" w-10/12" src={ContactImg} alt="" />
        </div>
            </div>
        </main>
    )

}