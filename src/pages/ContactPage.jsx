
import ContactImg from "../assets/images/contactimg.svg"
export default function ContactPage() {
    return (
        <main>
            <div className="lg:flex lg:flex-row">
            <div className="lg:flex lg:flex-col">
            <div className="flex flex-col items-center justify-center w-full h-full lg:block lg:ml-9 lg:">
    <h2 className="text-prime-orange text-3xl font-bebas mt-9">Kontakt Os</h2>
    
    <div className="font-mont font-semibold flex flex-col mt-3 gap-3 text-xs md:text-xl md:gap-6 md:w-[550px]">
        <p>Spørgsmål: <span className="underline">hello@jumboaarhus.com</span></p>
        <p>Søg Job: <span className="underline">job@jumboaarhus.com</span></p>
        
        
    </div>
</div>
            <div className=" text-off-black flex flex-col w-full ml-9 mt-14">
        <h2 className="text-2xl font-bebas mb-4 md:text-4xl">Bageri</h2>
        <div className=" font-mont flex gap-3">
          <div className="font-mont font-semibold flex flex-col gap-3 text-xs w-60 md:text-xl md:w-[550px]">
            <p>Mindet 4D, 8000 Aarhus C</p>
            <p>Tlf: 53849878</p>
            <p>Mandag til fredag: 7.00-18.00</p>
            <p>Lørdag, søndag og helligedage: 8.00-18.00</p>
          </div>
          
            </div>
            </div>
            <div className=" text-off-black flex flex-col w-full ml-9 mt-5">
        <h2 className="text-2xl font-bebas  mb-4 md:text-4xl md:mt-6">Café</h2>
        <div className=" font-mont flex gap-3">
          <div className="font-mont font-semibold flex flex-col gap-4 text-xs w-60 md:text-xl md:w-[550px]">
            <p>Ankersgade 12B, 8000 Aarhus C</p>
            <p>Tlf: 53849877</p>
            <p>Mandag til fredag: 7.30-18.00</p>
            <p>Lørdag, søndag og helligedage: 8.00-16.00</p>
            <p>(ingen bordreservationer)</p> 
          </div>
          
        </div>
        </div>
        </div>
        <div className=" w-full flex justify-center mt-10">
            <img className=" w-10/12" src={ContactImg} alt="" />
        </div>
        </div>
        </main>
    )

}