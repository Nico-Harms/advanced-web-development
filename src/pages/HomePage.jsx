
import HeroSection from "../components/sections/HeroSection";
import InstaSection from "../components/sections/InstaSection";
import LocationSection from "../components/sections/LocationSection";
import Footer from "../components/semantic/Footer"
import TextSection from "../components/sections/TextSection";

export default function HomePage() {

    return (
        <main>
            <HeroSection />
            <LocationSection />
            <TextSection />

            <InstaSection />

        </main>
    )
}