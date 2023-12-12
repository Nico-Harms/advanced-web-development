import GenBtn from "../interactions/GenBtn";
import heroVideo from "../../assets/videos/heroVid.mp4";
import React, { useEffect, useState } from 'react';
import '../interactions/css/TextSlider.css';
import { useNavigate } from "react-router-dom";


/*===============================================
=   Hero section with  Video and Text slider  =
===============================================*/


export default function HeroSection() {

  const navigate = useNavigate();

  const [activeDot, setActiveDot] = useState(0);
  /*===============================================
  =          Text inputs for sliders          =
  ===============================================*/

  const section1 = (
    <div className="flex flex-col items-center md:items-start md:gap-2 xl:gap-5 ">
      <h2 className="text-prime-orange text-3xl font-bebas mt-7 lg:text-[4rem] md:text-[2.5rem] ">Kurser</h2>
      <hr className="w-1/4 border-solid border-1 border-black md:w-[80%]" />
      <p className="font-mont py-3 text-sm md:py-2 md:text-sm lg:text-1xl xl:text-2xl md:w-[90%] 2xl:text-3xl">Som tidligere madskole, lægger vi meget vægt på at lære fra os, og derfor betyder vores kurser rigtigt meget for os. Gå ikke glip
        af muligheden, og gå ind og check vores kommende kurser ud!</p>
      <GenBtn content="Se kurser" btnType="primaryBtn" click={() => navigate('/kurser')} />
    </div>
  );

  const section2 = (
    <div className="flex flex-col items-center md:items-start md:gap-2 xl:gap-5 ">
      <h2 className="text-prime-orange text-3xl font-bebas mt-7 lg:text-[4rem] md:text-[2.5rem] ">Historie</h2>
      <hr className="w-1/4  border-solid border-1 border-black md:w-[80%]" />
      <p className="font-mont py-3 text-sm md:py-2 md:text-sm lg:text-1xl xl:text-2xl md:w-[90%] 2xl:text-3xl">Jumbo har ikke bare altid været Jumbo, som mange andre steder har vi gået en større forvandling for at nå til hvor vi er idag.
        Vi vil gerne dele den historie med jer.</p>
      <GenBtn content="Læs mere" btnType="primaryBtn" click={() => navigate('/historie')} />
    </div>
  );

  const section3 = (
    <div className="flex flex-col items-center md:items-start md:gap-2 xl:gap-5 ">
      <h2 className="text-prime-orange text-3xl font-bebas mt-7 lg:text-[4rem] md:text-[2.5rem] ">Kontakt os</h2>
      <hr className="w-1/4 border-solid border-1 border-black md:w-[80%]" />
      <p className="font-mont py-3 text-sm md:py-2 md:text-sm lg:text-1xl xl:text-2xl md:w-[90%] 2xl:text-3xl">Hvis du har nogle spørgsmål, vil søge job eller bare gerne vil i kontakt med os, så find vores oplysninger her.</p>
      <GenBtn content="Se mere" btnType="primaryBtn" click={() => navigate('/contact')} />
    </div>
  );

  const sections = [section1, section2, section3];
  // Slider effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleDotClick((activeDot + 1) % sections.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeDot]);

  const handleDotClick = (dotIndex) => {
    setActiveDot(dotIndex);
  };

  /*===============================================
  =          Wrapper for Video and Slider            =
  ===============================================*/


  return (
    <section className="md:flex md:relative">
      <div><video className="md:w-10/12" autoPlay muted playsInline loop src={heroVideo}></video></div>
      <div className="wrapper h-[300px] m-auto w-4/5 md:absolute md:h-full md:w-2/5 md:top-[10%] lg:top-[20%] md:right-0 xl:top-[25%]" id="wrapper">
        {sections.map((section, index) => (
          <div
            key={index}
            className={` ${index === activeDot ? 'activeText' : 'slideLeft'}`}
          >
            {section}
          </div>
        ))}
        <ul className="dots-wrap absolute bottom-0 left-2/4  flex align-center justify-center gap-2 text-center my-5 md:justify-start md:bottom-[15%] lg:bottom-[30%] xl:bottom-[40%]">
          {sections.map((_, index) => (
            <li
              key={index}
              className={`dot md:w-[15px] md:h-[15px] lg:w-[15px] lg:h-[15px] xl  ${index === activeDot ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></li>
          ))}
        </ul>
      </div>

    </section>
  )
}

