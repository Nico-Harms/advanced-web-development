import CourseCard from "../components/CourseCard";
import Accordion from "../components/Accordion";
import { Plus } from "@phosphor-icons/react";




export default function ContactPage() {
    return (
        <main>
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
