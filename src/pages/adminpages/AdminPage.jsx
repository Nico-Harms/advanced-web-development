
import { useNavigate } from "react-router-dom";
import BookingSection from "../../components/sections/BookingSection";

export default function Adminpage() {

  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/admincourse");
  }


  return (
    <main className="md:px-10">
      <section className="my-10 flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-10 md:max-w-4xl md:mx-auto" >
        <div className="flex flex-col gap-5 md:col-span-2 md:gap-10 ">
          <div onClick={handleNavigate} className="bg-white w-4/5 mx-auto border-2 border-off-black h-40 rounded-lg flex flex-col md:w-[100%]">
            <div className=" flex flex-col justify-center h-[100%]" >
              <h3 className=" font-bebas text-3xl self-center drop-shadow-md">Administrate courses</h3>
              <hr className=" w-[50%] mx-auto h-[2px] bg-off-black" />
            </div>
            <p className=" font-mont self-center mb-2">VIEW DETAILS</p>
          </div>
          <div className="border-2 border-off-black bg-white w-4/5 mx-auto flex flex-col gap-3 rounded-lg py-4 md:w-[100%]">
            <h3 className="font-bebas text-center text-2xl">Upcoming events</h3>
            <div className="font-mont flex flex-col w-[90%] mx-auto text-sm">
              <p>Date</p>
              <div className="font-mont text-sm bg-prime-orange w-[100%] h-8 rounded-md text-off-white flex justify-between items-center px-2">
                <div className="">Event</div>
                <div className="">18.00 - 21.00</div>
              </div>
            </div>
            <div className="font-mont flex flex-col w-[90%] mx-auto text-sm">
              <p>Date</p>
              <div className="font-mont text-sm bg-prime-orange w-[100%] h-8 rounded-md text-off-white flex justify-between items-center px-2">
                <div className="">Event</div>
                <div className="">18.00 - 21.00</div>
              </div>
            </div>
            <div className="font-mont flex flex-col w-[90%] mx-auto text-sm">
              <p>Date</p>
              <div className="font-mont text-sm bg-prime-orange w-[100%] h-8 rounded-md text-off-white flex justify-between items-center px-2">
                <div className="">Event</div>
                <div className="">18.00 - 21.00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:gap-10">
          <div className="border-2 border-off-black bg-white w-4/5 mx-auto flex flex-col gap-3 rounded-lg py-4 items-center h-40 md:w-[100%]">
            <h3 className="font-bebas text-2xl">Registered participants</h3>
            <span className="font-bebas text-3xl">NUMBER</span>
            <p className="font-mont mb-2">VIEW DETAILS</p>
          </div>
          <div className="border-2 border-off-black bg-white w-4/5 mx-auto flex flex-col gap-3 rounded-lg py-4 items-center md:w-[100%] md:h-[100%] md:justify-center">
            <h3 className="font-bebas text-2xl">Cancellations</h3>
            <span className="font-bebas text-3xl">NUMBER</span>
            <p className="font-mont">VIEW DETAILS</p>
          </div>
        </div>
      </section>
      <BookingSection />
    </main>
  )
}