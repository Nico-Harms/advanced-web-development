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
                <p className=" lg:w-1/2 font-mont text-xs md:text-base w-[90%]">Pizzaen er et godt eksempel på en ret, der kan varieres i det uendelige, når først man har styr på bunde, bagning og et par grundprincipper for at komponere en velsmagende pizza. Det og lidt til lærer du på dette kursus, hvor vi bager forrygende pizzaer med gode ingredienser. Dette kursus egner sig til både børn og voksne.</p>
              </div>
            </div>
            <div class="flex lg:flex-row gap-44 items-center">
              <h2 class="font-bebas text-off-black text-2xl md:text-3xl lg:text-4xl">DATE</h2>
              <select class="border border-solid rounded border-off-black px-1 py-2">
                <option class="bg-gray-200">21/12/23</option>
                <option class="bg-gray-200">21/12/23</option>
                <option class="bg-gray-200">21/12/23</option>
              </select>
            </div>
            <div className="flex flex-col gap-6">

              <div className="flex flex-row w-max gap-[50px]">

                <h2 className="font-bebas text-off-black text-2xl md:text-3xl lg:text-4xl w-[90%]">VÆLG ANTAL PERSONER</h2>
                <div className=" flex flex-row w-max gap-2 ">
                  <button className="w-6 h-6 bg-[#3d3030] rounded-full flex items-center justify-center cursor-pointer text-[#fbfbf4]" onClick={decrement}><Minus size={22} weight="bold" /></button>
                  <p className="lg:w-7 lg:h-10 text-center w-6 h-6 border border-solid border-off-black rounded">{count}</p>
                  <button className=" w-6 h-6 bg-[#3d3030] rounded-full flex items-center justify-center cursor-pointer text-[#fbfbf4]" onClick={increment}><Plus size={22} weight="bold" /></button>
                </div>
              </div>

              <hr className="bg-off-black h-[2px]" />
              <SlideEmail />

            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="object-cover w-full h-[300px] lg:w-1/2 mt-7 lg:h-[350px]"
              src={Placeholder}
              alt="Placeholder-image"
            />
          </div>
        </div>
        <div>
          <h2 className="font-bebas  text-off-black text-2xl md:text-3xl lg:text-4xl">Hvad lærer du?</h2>
          <div className="flex flex-col gap-5">
            <p className="font-mont text-xs md:text-base w-[90%]">
              Vi starter med dejen og de ingredienser og den håndtering, der giver en smidig pizzadej; en dej, der både smager af noget og kan rulles helt tyndt ud, så kanterne kan bages sprøde.
            </p>
            <p className="font-mont text-xs md:text-base w-[90%]"> Vi viser, hvordan du laver en enkel, lækker grundtomatsauce og giver inspiration til smagssammensætninger. Du får også mulighed for at ’freestyle’, inden vi bager vores kreationer ved de magiske +300°. Vi gennemgår selvfølgelig også, hvordan du derhjemme bedst kan nærme dig den bagning, som er mulig i en rigtig pizzaovn.</p>


            <p className="font-mont text-xs md:text-base w-[90%]">I løbet af dagen sætter vi os til bordet og nyder resultatet af vores indsats med et godt glas vin eller æblemost.</p>

          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bebas  text-off-black text-2xl md:text-3xl lg:text-4xl">Hvad får du?</h2>
          <div className="flex flex-col gap-5">
            <li className="font-mont text-xs md:text-base w-[90%] ">
              Du lærer at bage forrygende pizzaer med tynde, sprøde bunde og velafstemt fyld</li>

            <li className="font-mont text-xs md:text-base w-[90%]">Masser af inspiration til variationsmuligheder – du får dagens opskrifter med hjem</li>

            <li className="font-mont text-xs md:text-base w-[90%]">Et lækkert måltid ledsaget af god vin, øl og læskende æblemost + 1 pizza med hjem</li>

          </div>

        </div>
        <div className="flex flex-col gap-2 ">
          <h2 className="font-bebas  text-off-black text-2xl md:text-3xl lg:text-4xl ">Location</h2>
          <p className="font-mont text-xs md:text-base ">
            Mindet 4D, 8000 Aarhus C
          </p>
        </div>
        <div className="flex flex-col gap-2">


          <h2 className="font-bebas  text-off-black text-2xl md:text-3xl lg:text-4xl ">Praktisk information</h2>
          <p className="font-mont text-xs md:text-base w-[90%] ">
            På kurset inddeles I i mindre grupper, så I kan samarbejde om at komme i mål med retterne. I bliver så vidt muligt sat på hold sammen, hvis I er flere der har booket kurset sammen.


          </p>
        </div>
        <div className="h-[70vh] w-[100%] mx-auto ">
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
      </div>
    </main>



  )
}