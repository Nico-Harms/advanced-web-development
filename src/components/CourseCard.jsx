import courseIMG from '../assets/images/cafe.webp';
import { User, MapPin } from '@phosphor-icons/react';
import GenBtn from './interactions/GenBtn';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import FirebaseApp from '../../firebaseConfig';

export default function CourseCard({ course }) {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const today = new Date();
  const todayString = today.toISOString();
  const [numOfBookings, setNumOfBookings] = useState(0);
  const [totalNumOfPers, setTotalNumOfPers] = useState(0);

  function handleClick() {
    navigate(`/kurser/${course.id}`);
  }

  useEffect(() => {
    async function getBookings() {
      const db = getFirestore(FirebaseApp);
      const bookingsCollection = collection(db, 'bookings');
      const querySnapshot = await getDocs(bookingsCollection);

      const bookingsArray = [];
      querySnapshot.forEach((doc) => {
        bookingsArray.push({ id: doc.id, ...doc.data() });
      });

      const currentBookings = bookingsArray.filter((booking) => booking.courseDate > todayString);
      setBookings(currentBookings);

      const numOfBookingsForCourse = currentBookings.filter((booking) => booking.courseName === course.courseName).length;
      setNumOfBookings(numOfBookingsForCourse);

      const totalNumOfPersForCourse = currentBookings.reduce((total, booking) => {
        if (booking.courseName === course.courseName) {
          return total + booking.numOfPers;
        }
        return total;
      }, 0);

      setTotalNumOfPers(totalNumOfPersForCourse);
    }

    getBookings();
  }, [course.courseName, todayString]);

  return (
    <div className='w-[80%] mx-auto my-52 md:max-w-[800px] '>
      <div className="flex flex-col md:grid md:grid-cols-[1fr,2fr]">
        <div className="">
          <img src={course.courseImgUrl} alt="Kursus Billede" className='w-full h-80  md:h-[100%] object-cover' />
        </div>
        <div className=" bg-prime-brown text-off-white flex flex-col gap-4">
          <h2 className='font-bebas text-4xl w-[80%] mx-auto mt-5 md:text-5xl'>{course.courseName}</h2>
          <p className='font-mont text-sm w-[80%] mx-auto mb-5'>{course.courseIntroDes}</p>
        </div>
      </div>
      <div className=" font-mont text-sm border-solid border-2 border-prime-orange p-1 sm:py-4 sm:px-2 ">
        <div className="grid grid-cols-2 items-center gap-3 w-[90%] mx-auto sm:flex sm:justify-between">
          <div className=" ">{course.courseDate}</div>
          <div className="flex items-center justify-end">
            <div className=""> {totalNumOfPers} / {course.courseNumOfPart}</div>
            <User size={28} weight="light" color='#DB6439' />
          </div>
          <div className="flex items-center">
            <div className="">{course.courseLocation}</div>
            <MapPin size={28} weight="light" color='#DB6439' />
          </div>
          <div className="flex justify-end">
            <GenBtn content="Læs mere" btnType="primaryBtn" click={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
