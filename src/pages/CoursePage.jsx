import CourseCard from "../components/CourseCard";
import Accordion from "../components/Accordion";
import { Plus, Minus } from "@phosphor-icons/react";
import Placeholder from "../assets/images/pizzaplaceholder.svg";
import SlideEmail from "../components/interactions/SlideEmail";

import { useState } from "react";


export default function ContactPage() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <main className="bg-background w-[80%] lg:w-full flex flex-col mx-auto ">
      <div className="flex flex-col mx-auto gap-6">
        <div className="flex lg:flex-row  flex-col-reverse gap-3  mx-auto ">


          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h1 className="font-bebas text-prime-orange text-3xl  md:mt-5  md:text-4xl lg:text-5xl ">Course Name</h1>
              <div>
                <h2 className="font-bebas text-prime-brown text-2xl md:text-3xl lg:text-4xl">PRICE</h2>
                <p className=" lg:w-1/2 font-mont text-xs md:text-base">Pizzaen er et godt eksempel på en ret, der kan varieres i det uendelige, når først man har styr på bunde, bagning og et par grundprincipper for at komponere en velsmagende pizza. Det og lidt til lærer du på dette kursus, hvor vi bager forrygende pizzaer med gode ingredienser. Dette kursus egner sig til både børn og voksne.</p>
              </div>
            </div>
            <div className="flex lg:flex-row gap-36 ">
              <h2 className="font-bebas  text-off-black text-2xl md:text-3xl lg:text-4xl">DATE</h2>
              <input className="border border-solid border-grey" type="date" />
            </div>
            <div className="flex flex-col gap-7">

              <div className="flex flex-row w-max gap-[100px]">

                <h2 className="font-bebas text-off-black text-2xl md:text-3xl lg:text-4xl">NUMBER OF PEOPLE</h2>
                <div className=" flex flex-row w-max gap-1">
                  <button className="" onClick={decrement}><Minus size={22} weight="bold" /></button>
                  <p className="lg:w-7 lg:h-10 text-center w-6 h-6 border border-solid border-grey">{count}</p>
                  <button className="" onClick={increment}><Plus size={22} weight="bold" /></button>
                </div>
              </div>

              <hr />
              <SlideEmail />

            </div>
          </div>
          <div>
            <img className="w-[100%] h-[330px] lg:w-1/2 lg:h-full" src={Placeholder} alt="" />
          </div>
        </div>
        <div>
          <h2 className="font-bebas  text-off-black text-2xl md:text-3xl lg:text-4xl">Hvad lærer du?</h2>
          <p className="font-mont text-xs md:text-base">
            Vi starter med dejen og de ingredienser og den håndtering, der giver en smidig pizzadej; en dej, der både smager af noget og kan rulles helt tyndt ud, så kanterne kan bages sprøde.

            Vi viser, hvordan du laver en enkel, lækker grundtomatsauce og giver inspiration til smagssammensætninger. Du får også mulighed for at ’freestyle’, inden vi bager vores kreationer ved de magiske +300°. Vi gennemgår selvfølgelig også, hvordan du derhjemme bedst kan nærme dig den bagning, som er mulig i en rigtig pizzaovn.


            I løbet af dagen sætter vi os til bordet og nyder resultatet af vores indsats med et godt glas vin eller æblemost.
          </p>
        </div>
        <div>
          <h2 className="font-bebas  text-off-black text-2xl md:text-3xl lg:text-4xl">Hvad får du?</h2>
          <p className="font-mont text-xs md:text-base">
            Du lærer at bage forrygende pizzaer med tynde, sprøde bunde og velafstemt fyld

            Masser af inspiration til variationsmuligheder – du får dagens opskrifter med hjem

            Et lækkert måltid ledsaget af god vin, øl og læskende æblemost.

            1 pizza med hjem
          </p>
        </div>
        <div className="flex flex-col ">
          <h2 className="font-bebas  text-off-black text-2xl md:text-3xl lg:text-4xl ">Hvor foregår det?</h2>
          <p className="font-mont text-xs md:text-base ">
            mindet1 12213232123123122
          </p>
        </div>
        <div >


          <h2 className="font-bebas  text-off-black text-2xl md:text-3xl lg:text-4xl ">Praktisk information</h2>
          <p className="font-mont text-xs md:text-base ">
            På kurset inddeles I i mindre grupper, så I kan samarbejde om at komme i mål med retterne. I bliver så vidt muligt sat på hold sammen, hvis I er flere der har booket kurset sammen.


          </p>
        </div>
      </div>

      <CourseCard />
      <div className="h-[70vh] max-w-[70%] mx-auto mt-8">
        <Accordion
          title="Parking"
          content="Lorem ipsum text about the Parking component"
          foldIcon={<Plus color="#db6439" size={24} />}
        />

        <Accordion
          title="Ombooking"
          content="Lorem ipsum text about the Ombooking component"
          foldIcon={<Plus color="#db6439" size={24} />}
        />
        <Accordion
          title="Hvad skal du medbringe?"
          content="Lorem ipsum text about the Hvad skal du medbringe? component"
          foldIcon={<Plus color="#db6439" size={24} />}
        />
      </div>



        </main>


  )
}