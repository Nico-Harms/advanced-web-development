
import HeroSection from "../components/sections/HeroSection";
import InstaSection from "../components/sections/InstaSection";
import LocationSection from "../components/sections/LocationSection";
import Footer from "../components/semantic/Footer"
export default function HomePage() {

    return (
        <main>
            <HeroSection />
            <LocationSection />
            <Footer />

            <InstaSection />

        </main>
    )
}