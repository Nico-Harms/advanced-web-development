import GenBtn from "../interactions/GenBtn";

export default function HeroSection() {
  return (
    <section>
      <div><video src=""></video></div>
      <div>
        <div>
          <h2>Kurser</h2>
          <hr />
          <p></p>
          <GenBtn content="Se kurser" btnType="primaryBtn" />
        </div>
        <div>
          <h2>Historie</h2>
          <hr />
          <p></p>
          <GenBtn content="Læs mere" btnType="primaryBtn" />
        </div>
        <div>
          <h2>Kontakt os</h2>
          <hr />
          <p></p>
          <GenBtn content="Se mere" btnType="primaryBtn" />
        </div>
      </div>
    </section>
  )
}