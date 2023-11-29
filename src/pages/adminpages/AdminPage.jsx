import GenBtn from "../../components/interactions/GenBtn";
import { useNavigate } from "react-router-dom";
import GenInput from "../../components/interactions/GenInput";

export default function Adminpage() {

  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/admincourse");
  }


  return (
    <main>
      <section>
        <div>
          <div onClick={handleNavigate} className="border-2 border-off-black">
            <div >
              <h3>Administrate courses</h3>
            </div>
            <hr />
            <p>VIEW DETAILS</p>
          </div>
          <div className="border-2 border-off-black">
            <h3>Upcoming events</h3>
            <div>Event</div>
            <div>Event</div>
            <div>Event</div>
          </div>
        </div>
        <div>
          <div className="border-2 border-off-black">
            <h3>Registered participants</h3>
            <span>NUMBER</span>
            <p>VIEW DETAILS</p>
          </div>
          <div className="border-2 border-off-black">
            <h3>Cancellations</h3>
            <span>NUMBER</span>
            <p>VIEW DETAILS</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h6>All bookings</h6>
          <GenInput inputType="search" inputStyle="primaryInput" />
          <GenBtn content="Create booking" btnType="primaryBtn" />
        </div>
        <div>OUTPUT</div>
      </section>
    </main>
  )
}