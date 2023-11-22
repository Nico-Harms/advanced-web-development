import GenBtn from "../components/GenBtn";
import { useNavigate } from "react-router-dom";

export default function HomePage() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/about");
    }

    return (
        <main>
            <h2 className="text-3xl font-bold underline text-primary">Home page </h2>
            <GenBtn click={handleClick} content="Click me" btnType="primaryBtn" />
            <GenBtn content="KLIK MIG" color="secondaryBtn" />
        </main>
    )
}