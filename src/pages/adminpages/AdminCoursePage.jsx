import GenBtn from "../../components/interactions/GenBtn";
import GenInput from "../../components/interactions/GenInput";

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
        <div>
          <GenInput labelContent="Course name" inputType="text" inputStyle="primaryInput" />
          <GenInput labelContent="Date" inputType="date" inputStyle="primaryInput" />
          <GenInput labelContent="Location" inputType="text" inputStyle="primaryInput" />
          <GenInput labelContent="Prize per person (kr)" inputType="number" inputStyle="primaryInput" />
          <GenInput labelContent="Number of participants (max)" inputType="number" inputStyle="primaryInput" />
        </div>

      </section>
    </main>
  )
}