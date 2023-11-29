import GenBtn from "../../components/interactions/GenBtn";
import GenInput from "../../components/interactions/GenInput";
import GenTextArea from "../../components/interactions/GenTextArea";

export default function AdminCoursePage() {
  return (
    <main>
      <section>
        <div>
          <div>
            <h3>Create Course</h3>
            <div>SWITCH</div>
          </div>
          <div>
            <h3>Use template</h3>
            <div>
              <GenBtn content="Pizza-kursus" btnType="primaryBtn" />
              <GenBtn content="Surdejskursus" btnType="primaryBtn" />
              <GenBtn content="Coffee art" btnType="primaryBtn" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <GenInput inputId="courseName" labelContent="Course name" inputType="text" inputStyle="primaryInput" />
          <GenInput inputId="courseDate" labelContent="Date" inputType="date" inputStyle="primaryInput" />
          <GenInput inputId="courseLocation" labelContent="Location" inputType="text" inputStyle="primaryInput" />
          <GenInput inputId="coursePrize" labelContent="Prize per person (kr)" inputType="number" inputStyle="primaryInput" />
          <GenInput inputId="courseNumOfPart" labelContent="Number of participants (max)" inputType="number" inputStyle="primaryInput" />
          <GenTextArea textareaId="courseIntroDes" labelContent="Intro description" textareaStyle="primaryTextarea" />
          <GenTextArea textareaId="courseDes" labelContent="Course description" textareaStyle="primaryTextarea" />
          <GenTextArea textareaId="coursePartLearn" labelContent="What does the participant learn?" textareaStyle="primaryTextarea" />
          <div>
            <GenInput inputId="coursePartGet1" labelContent="What does the participant get? (bullet points)" inputType="text" inputStyle="primaryInput" />
            <GenInput inputId="coursePartGet2" inputType="text" inputStyle="primaryInput" />
            <GenInput inputId="coursePartGet3" inputType="text" inputStyle="primaryInput" />
          </div>
          <GenInput inputId="coursePraticalInfo" labelContent="Pratical information" inputType="text" inputStyle="primaryInput" />
          <GenInput inputId="courseImg" labelContent="Course Image" inputType="file" inputStyle="primaryInput" />
        </div>

      </section>
    </main>
  )
}