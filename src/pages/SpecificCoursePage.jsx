/*===============================================
=          Kodet af Emil, Tobias, Nicolai og Mads           =
===============================================*/


import React, { useState, useEffect } from "react";
import { Plus, Minus } from "@phosphor-icons/react";
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { useLocation, useParams } from "react-router-dom";
import FirebaseApp from '../../firebaseConfig';
import BookingStatus from "../components/interactions/Bookingstatus";
import Accordion from "../components/interactions/Accordion";
import Placeholder from "../assets/images/pizzaplaceholder.svg";
import SlideEmail from "../components/interactions/SlideEmail";
export default function SpecificCoursePage() {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const [count, setCount] = useState(1);
  const location = useLocation();
  const [bookings, setBookings] = useState([]);
  const [numOfBookings, setNumOfBookings] = useState(0);
  const [totalNumOfPersForCourse, setTotalNumOfPersForCourse] = useState(0);
  const [loading, setLoading] = useState(true); // Added loading state
  const today = new Date();
  const todayString = today.toISOString();

  const increment = () => {
    if (count + 1 <= 30) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count - 1 >= 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const courseData = await getCourse(); // Fetch course data
      setCourse(courseData);
      await getBookings(); // Fetch booking data
      setLoading(false);
    }

    fetchData();
  }, [courseId]);

  useEffect(() => {
    // Triggered once getBookings has completed
    // Update state and trigger a re-render
    async function updateTotalNumOfPers() {
      const totalNumOfPers = await getBookings();
      setTotalNumOfPersForCourse(totalNumOfPers);
    }

    if (!loading) {
      updateTotalNumOfPers();
    }
  }, [courseId, loading]);

  async function getCourse() {
    const db = getFirestore(FirebaseApp);
    const courseDocRef = doc(db, 'courses', courseId);
    const docSnapshot = await getDoc(courseDocRef);

    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
      console.log("Document not found");
      return {}; // Return an empty object if the document is not found
    }
  }

  // Remove the promise from getBookings and make it an async function
  async function getBookings() {
    const db = getFirestore(FirebaseApp);
    const bookingsCollection = collection(db, 'bookings');
    const querySnapshot = await getDocs(bookingsCollection);

    const bookingsArray = [];
    querySnapshot.forEach((doc) => {
      bookingsArray.push({ id: doc.id, ...doc.data() });
    });

    const currentBookings = bookingsArray.filter((booking) => booking.courseDate > todayString);

    const bookingsForCourse = currentBookings.filter(
      (booking) => booking.courseName === course.courseName && booking.courseDate === course.courseDate
    );

    setBookings(bookingsForCourse);

    const numOfBookingsForCourse = bookingsForCourse.length;
    setNumOfBookings(numOfBookingsForCourse);

    const totalNumOfPersForCourse = bookingsForCourse.reduce((total, booking) => {
      return total + booking.numOfPers;
    }, 0);

    return totalNumOfPersForCourse;
  }

  if (!course) {
    return <div>Course not found</div>;
  }
  return (
    <main className="bg-background w-[80%] lg:w-[90%] flex flex-col mx-auto ">
      <div className="flex flex-col mx-auto gap-7">
        <div className="flex flex-col-reverse lg:justify-between lg:gap-20 lg:grid lg:grid-cols-[2fr,1fr] lg:mb-20 ">
       
          <div className="flex flex-col gap-5 lg:mt-[5%] lg:gap-10 ">
            <div className="flex flex-col gap-3 lg:gap-10">
              <h1 className="font-bebas text-prime-orange text-3xl  md:mt-5  md:text-4xl lg:text-5xl ">{course.courseName}</h1>
              <div>
                <h2 className="font-bebas text-prime-brown text-2xl md:text-3xl lg:text-4xl">{course.coursePrize},- Pr. Person</h2>
                <p className=" lg: font-mont text-xs md:text-base w-[100%]">{course.courseDes}</p>
              </div>
            </div>
            <div className="flex lg:flex-row lg:w-full justify-between items-center">
              <h2 className="font-bebas text-off-black text-2xl md:text-3xl lg:text-4xl">Vælg Dato</h2>
              <select className="border border-solid rounded border-off-black w-[30%] px-2 py-2">
                <option>{course.courseDate}</option>
                
              </select>
              <BookingStatus totalNumOfPersForCourse={totalNumOfPersForCourse} courseNumOfPart={course.courseNumOfPart} />  



            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-row  items-center justify-between">
                <h2 className="font-bebas text-off-black text-2xl md:text-3xl lg:text-4xl  ">VÆLG ANTAL PERSONER</h2>
                <div className=" flex flex-row w-max gap-2 ">
                  <button className="w-6 h-6 bg-[#3d3030] rounded-full flex items-center justify-center cursor-pointer text-[#fbfbf4]" onClick={decrement}><Minus size={22} weight="bold" /></button>
                  <p className="lg:w-7 lg:h-7 text-center w-6 h-6 border border-solid bg-white border-off-black rounded">{count}</p>
                  <button className=" w-6 h-6 bg-[#3d3030] rounded-full flex items-center justify-center cursor-pointer text-[#fbfbf4]" onClick={increment}><Plus size={22} weight="bold" /></button>
                </div>
              </div>
              <hr className="bg-off-black h-[2px]" />
              <SlideEmail course={course} count={count} courseDate={course.courseDate}  />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="object-cover w-full h-[300px] mt-7 md:w-full md:h-[500px] lg:mt-[0] md: lg:w-[2500px] lg:h-[470px]"
              src={course.courseImgUrl}
              alt="Placeholder-image"
            />
          </div>
        </div>
        <div className=" lg:flex lg:flex-col lg:gap-2">
          <h2 className="font-bebas  text-off-black text-2xl md:text-3xl lg:text-4xl">Hvad lærer du?</h2>
          <div className="flex flex-col gap-5">
            <p className="font-mont text-xs md:text-base w-[90%] lg:w-[60%] ">
              {course.coursePartLearn}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bebas  text-off-black text-2xl md:text-3xl lg:text-4xl">Hvad får du?</h2>
          <div className="flex flex-col gap-5">
            <li className="font-mont text-xs md:text-base w-[90%] ">
              {course.coursePartGet1}</li>
            <li className="font-mont text-xs md:text-base w-[90%]">{course.coursePartGet2}</li>
            <li className="font-mont text-xs md:text-base w-[90%]">{course.coursePartGet3}</li>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <h2 className="font-bebas  text-off-black text-2xl md:text-3xl lg:text-4xl ">Lokation</h2>
          <p className="font-mont text-xs md:text-base ">
            {course.courseLocation}
          </p>
        </div>
        <div className="lg:flex lg:row">
          <div className="flex flex-col gap-2 lg:w-[100%]">
            <h2 className="font-bebas  text-off-black text-2xl md:text-3xl lg:text-4xl lg:pt-4 ">Praktisk information</h2>
            <p className="font-mont text-xs md:text-base w-[90%] lg:w-10/12 ">
              {course.coursePraticalInfo}
            </p>
            <p className="font-mont text-xs md:text-base w-[90%] lg:w-10/12 "> Kurset foregår fra <span className="underline">18:00-21:00</span> </p>
          </div>
          <div className="h-[70vh] w-[100%] mx-auto  ">
            <Accordion
              title="Parkering"
              content="Er kurset ved Mindet 4D er der mulighed for at parkere på Mindet 2, 8000 Aarhus C, du skal blot oplyse din nummerplade ved ankomst. Er Kurset ved Ankersgade 12B, er der mulighed for parkering ved døren."
              foldIcon={<Plus color="#db6439" size={24} />}
            />
            <Accordion
              title="Ombooking"
              content="Er du blevet forhindret i at komme, kan du melde afbud eller ombooke senest 2 dage før kurset. Ved afbud senere end 2 dage før kurset refunderes beløbet ikke. Send en mail til hello@jumboaarhus.com ved afbud eller ombooking."
              foldIcon={<Plus color="#db6439" size={24} />}
            />
            <Accordion
              title="Hvad skal du medbringe?"
              content="Du skal ikke medbringe noget, vi har alt hvad du skal bruge. Du skal dog være opmærksom på, at du skal have praktisk tøj på, da du skal arbejde i køkkenet."
              foldIcon={<Plus color="#db6439" size={24} />}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
