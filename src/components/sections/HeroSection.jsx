import GenBtn from "../interactions/GenBtn";
import heroVideo from "../../assets/videos/testvid.mp4";
import React, { useEffect, useState } from 'react';
import '../interactions/css/TextSlider.css';


export default function HeroSection() {
  const [activeDot, setActiveDot] = useState(0);

  const section1 = (
    <div className="flex flex-col items-center md:items-start md:gap-4 ">
      <h2 className="text-prime-orange text-3xl font-bebas mt-7 lg:text-[4rem] md:text-[3rem] ">Kurser</h2>
      <hr className="w-1/4 border-solid border-1 border-black md:w-[80%]" />
      <p className="font-mont py-3 text-sm md:text-base lg:text-1xl md:w-[90%] 2xl:text-2xl">Som tidligere madskole, lægger vi meget vægt på at lære fra os, og derfor betyder vores kurser rigtigt meget for os. Gå ikke glip
        af muligheden, og gå ind og check vores kommende kurser ud!</p>
      <GenBtn content="Se kurser" btnType="primaryBtn" />
    </div>
  );

  const section2 = (
    <div className="flex flex-col items-center md:items-start md:gap-4 ">
      <h2 className="text-prime-orange text-3xl font-bebas mt-7 lg:text-[4rem] md:text-[3rem] ">Historie</h2>
      <hr className="w-1/4  border-solid border-1 border-black md:w-[80%]" />
      <p className="font-mont py-3 text-sm md:text-base lg:text-1xl md:w-[90%] 2xl:text-2xl">Jumbo har ikke bare altid været Jumbo, som mange andre steder har vi gået en større forvandling for at nå til hvor vi er idag.
        Vi vil gerne dele den historie med jer.</p>
      <GenBtn content="Læs mere" btnType="primaryBtn" />
    </div>
  );

  const section3 = (
    <div className="flex flex-col items-center md:items-start md:gap-4  ">
      <h2 className="text-prime-orange text-3xl font-bebas mt-7 lg:text-[4rem] md:text-[3rem] ">Kontakt os</h2>
      <hr className="w-1/4 border-solid border-1 border-black md:w-[80%]" />
      <p className="font-mont py-3 text-sm md:text-base lg:text-1xl  md:w-[90%] 2xl:text-2xl">Hvis du har nogle spørgsmål, vil søge job eller bare gerne vil i kontakt med os, så find vores oplysninger her.</p>
      <GenBtn content="Se mere" btnType="primaryBtn" />
    </div>
  );

  const sections = [section1, section2, section3];

  useEffect(() => {
    const timer = setInterval(() => {
      handleDotClick((activeDot + 1) % sections.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeDot]);

  const handleDotClick = (dotIndex) => {
    setActiveDot(dotIndex);
  };





  return (
    <section className="md:flex">
      <div><video className="md:w-10/12" autoPlay muted loop src={heroVideo}></video></div>
      <div className="wrapper h-[300px] m-auto w-4/5 md:absolute md:h-full md:w-2/5 md:top-[15%] lg:top-[15%] md:right-9 xl:top-[30%]" id="wrapper">
        {sections.map((section, index) => (
          <div
            key={index}
            className={` ${index === activeDot ? 'activeText' : 'slideLeft'}`}
          >
            {section}
          </div>
        ))}
        <ul className="dots-wrap absolute bottom-0 left-2/4  flex align-center justify-center gap-2 text-center my-5 md:justify-start md:bottom-2/4">
          {sections.map((_, index) => (
            <li 
              key={index}
              className={`dot md:w-[10px] md:h-[10px]  ${index === activeDot ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></li>
          ))}
        </ul>
      </div>

    </section>
  )
}

