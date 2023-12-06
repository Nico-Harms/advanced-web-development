import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import FirebaseApp from '../../firebaseConfig';

export default function () {
  const today = new Date();
  const db = getFirestore(FirebaseApp);
  const todayString = today.toISOString();
  const [pastCourses, setPastCourses] = useState([]);
  const [pastBookings, setPastBookings] = useState([]);
  const [totalNumOfPers, setTotalNumOfPers] = useState(0);

  useEffect(() => {
    async function getCourses() {
      try {
        
        const coursesCollection = collection(db, 'courses');
        const querySnapshot = await getDocs(coursesCollection);

        const coursesArray = [];
        querySnapshot.forEach((doc) => {
          coursesArray.push({ id: doc.id, ...doc.data() });
        });

        // Filter out courses with dates in the past
        const pastCourses = coursesArray.filter(course => course.courseDate < todayString);

        setPastCourses(pastCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }

    getCourses();
  }, []);

  useEffect(() => {
    async function getBookings() {
      try {
        
        const bookingsCollection = collection(db, 'bookings');
        const querySnapshot = await getDocs(bookingsCollection);

        const bookingsArray = [];
        querySnapshot.forEach((doc) => {
          bookingsArray.push({ id: doc.id, ...doc.data() });
        });

        const pastBookings = bookingsArray.filter((booking) => booking.courseDate < todayString);
        setPastBookings(pastBookings);

        const totalNumOfPers = pastBookings.reduce((total, booking) => {
          return total + booking.numberOfPersons;
        }, 0);

        setTotalNumOfPers(totalNumOfPers);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    }

    getBookings();
  }, []);

  return (
    <div className="bg-prime-orange w-full flex justify-between px-[2%] h-20 items-center md:h-28 lg:px-[10%] 2xl:px-[15%]">
      <div className="text-center text-off-white text-sm md:text-xl lg:text-2xl">
        <div className="font-bebas">{pastCourses.length}</div>
        <p className="font-bebas">Afholdte Events</p>
      </div>
      <div className="text-center text-off-white text-sm md:text-xl lg:text-2xl">
        <div className="font-bebas">{totalNumOfPers}</div>
        <p className="font-bebas">Tilfredse Deltagende</p>
      </div>
      <div className="text-center text-off-white text-sm md:text-xl lg:text-2xl">
        <div className="font-bebas">100%</div>
        <p className="font-bebas">Engageret Personale</p>
      </div>
    </div>
  );
}
