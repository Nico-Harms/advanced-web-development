import CourseCard from "../components/CourseCard";
import Accordion from "../components/Accordion";
import { Plus } from "@phosphor-icons/react";
import Placeholder from "../assets/images/pizzaplaceholder.svg";
import Minus from "../assets/images/minus.svg";
import Plus1 from "../assets/images/plus.svg";
import GenBtn from "../components/interactions/GenBtn";



export default function ContactPage() {
    return (
        <main className="bg-background w-full ">
   <div className="">
        <div className="flex lg:flex-row flex-col-reverse ">

        
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h1 className="font-bebas text-prime-orange ">Course Name</h1>

            <h2 className="font-bebas text-prime-brown">PRICE</h2>
            <p className="font-mont w-1/2 text-sm">Pizzaen er et godt eksempel på en ret, der kan varieres i det uendelige, når først man har styr på bunde, bagning og et par grundprincipper for at komponere en velsmagende pizza. Det og lidt til lærer du på dette kursus, hvor vi bager forrygende pizzaer med gode ingredienser. Dette kursus egner sig til både børn og voksne.</p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <h2 className="font-bebas  text-off-black">DATE</h2>
            <input type="date" />
          </div>
          <div>
            <div className="flex flex-row">
              <h2 className="font-bebas text-off-black">NUMBER OF PEOPLE</h2>
              <img src={Minus} alt="minus-button" />
              <input type="number" />
              <img src={Plus1} alt="plus-button" />
            </div>
            <hr />
            <GenBtn content="BOOK PLADS" btnType="primaryBtn" />

          </div>
        </div>
        <div>
          <img className="w-[80%] lg:w-1/2" src={Placeholder} alt="" />
        </div>
        </div>
        <div>
          <h2 className="font-bebas  text-off-black">Hvad lærer du?</h2>
          <p>
            Vi starter med dejen og de ingredienser og den håndtering, der giver en smidig pizzadej; en dej, der både smager af noget og kan rulles helt tyndt ud, så kanterne kan bages sprøde.

            Vi viser, hvordan du laver en enkel, lækker grundtomatsauce og giver inspiration til smagssammensætninger. Du får også mulighed for at ’freestyle’, inden vi bager vores kreationer ved de magiske +300°. Vi gennemgår selvfølgelig også, hvordan du derhjemme bedst kan nærme dig den bagning, som er mulig i en rigtig pizzaovn.


            I løbet af dagen sætter vi os til bordet og nyder resultatet af vores indsats med et godt glas vin eller æblemost.
          </p>
        </div>
        <div>
          <h2 className="font-bebas  text-off-black">Hvad får du?</h2>
          <p>
          Du lærer at bage forrygende pizzaer med tynde, sprøde bunde og velafstemt fyld

Masser af inspiration til variationsmuligheder – du får dagens opskrifter med hjem

Et lækkert måltid ledsaget af god vin, øl og læskende æblemost.

1 pizza med hjem
          </p>
        </div>
        <div>
          <h2 className="font-bebas  text-off-black">Hvor foregår det?</h2>
          <p>
          Mindet 4D,  8000 Aarhus C


          </p>
        </div>
        <div>


          <h2 className="font-bebas  text-off-black">Praktisk information</h2>
          <p>
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