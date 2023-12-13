/*===============================================
=          Kodet af Tobias, Emil og Mads          =
===============================================*/


import { User, MapPin } from '@phosphor-icons/react';
import GenBtn from './interactions/GenBtn';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import FirebaseApp from '../../firebaseConfig';
import BookingStatus from './interactions/Bookingstatus'

export default function CourseCard({ course }) {

  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const today = new Date();
  const todayString = today.toISOString();
  const [numOfBookings, setNumOfBookings] = useState(0);
  const [totalNumOfPersForCourse, setTotalNumOfPersForCourse] = useState(0);


  function handleClick() {
    navigate(`/kurser/${course.id}`);
  }



  useEffect(() => {
    async function getBookings() {
      console.log('Fetching bookings...');
      const db = getFirestore(FirebaseApp);
      const bookingsCollection = collection(db, 'bookings');
      const querySnapshot = await getDocs(bookingsCollection);

      const bookingsArray = [];
      querySnapshot.forEach((doc) => {
        bookingsArray.push({ id: doc.id, ...doc.data() });
      });

      const currentBookings = bookingsArray.filter((booking) => new Date(booking.courseDate) > new Date(todayString));
      console.log('Current bookings:', currentBookings);

      // Filter bookings for the specific course
      const bookingsForCourse = currentBookings.filter(
        (booking) => (
          booking.courseName.trim() === course.courseName.trim() &&
          new Date(booking.courseDate) > new Date(todayString)
        )
      );
      

      setBookings(bookingsForCourse);
      console.log('Filtered bookings:', bookingsForCourse);

      const numOfBookingsForCourse = bookingsForCourse.length;
      setNumOfBookings(numOfBookingsForCourse);

      const totalNumOfPersForCourse = bookingsForCourse.reduce((total, booking) => {
        return total + booking.numOfPers;
      }, 0);

      setTotalNumOfPersForCourse(totalNumOfPersForCourse);
    }
    getBookings();
  }, []);

  
  return (
    <div className='w-[80%] mx-auto my-20 md:max-w-[800px]'>
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
          <div className="font-medium">{course.courseDate}</div>
          <BookingStatus
            totalNumOfPersForCourse={totalNumOfPersForCourse}
            courseNumOfPart={course.courseNumOfPart}

          />

          <div className="flex items-center">
            <div className="font-medium">{course.courseLocation}</div>
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

