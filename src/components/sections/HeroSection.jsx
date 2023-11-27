import GenBtn from "../interactions/GenBtn";
import heroVideo from "../../assets/videos/testvid.mp4";



export default function HeroSection() {
  return (
    <section>
      <div><video autoPlay muted loop src={heroVideo}></video></div>
      <div>
        <div className="flex flex-col items-center">
          <h2 className="text-prime-orange">Kurser</h2>
          <hr />
          <p></p>
          <GenBtn content="Se kurser" btnType="primaryBtn" />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-prime-orange">Historie</h2>
          <hr />
          <p></p>
          <GenBtn content="Læs mere" btnType="primaryBtn" />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-prime-orange">Kontakt os</h2>
          <hr />
          <p></p>
          <GenBtn content="Se mere" btnType="primaryBtn" />
        </div>
      </div>
    </section>
  )
}