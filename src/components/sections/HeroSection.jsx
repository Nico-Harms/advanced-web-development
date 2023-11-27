import GenBtn from "../interactions/GenBtn";
import heroVideo from "../../assets/videos/testvid.mp4";



export default function HeroSection() {
  return (
    <section>
      <div><video autoPlay muted loop src={heroVideo}></video></div>
      <div>
        <div className="flex flex-col items-center">
          <h2 className="text-prime-orange font-bebas">Kurser</h2>
          <hr />
          <p className="font-mont">Pik og patter</p>
          <GenBtn content="Se kurser" btnType="primaryBtn" />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-prime-orange font-bebas">Historie</h2>
          <hr />
          <p></p>
          <GenBtn content="Læs mere" btnType="primaryBtn" />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-prime-orange font-bebas">Kontakt os</h2>
          <hr />
          <p></p>
          <GenBtn content="Se mere" btnType="primaryBtn" />
        </div>
      </div>
    </section>
  )
}