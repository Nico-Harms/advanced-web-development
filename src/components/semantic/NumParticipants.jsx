import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import FirebaseApp from '../../../firebaseConfig';

export default function NumParticipants() {
    const today = new Date();
    const db = getFirestore(FirebaseApp);
    const todayString = today.toISOString();
    const [totalNumOfPers, setTotalNumOfPers] = useState(0);
    const [pastBookings, setPastBookings] = useState([]);

    useEffect(() => {
        async function getBookings() {
            try {

                const bookingsCollection = collection(db, 'bookings');
                const querySnapshot = await getDocs(bookingsCollection);

                const bookingsArray = [];
                querySnapshot.forEach((doc) => {
                    bookingsArray.push({ id: doc.id, ...doc.data() });
                });

                const pastBookings = bookingsArray.filter((booking) => booking.courseDate > todayString);
                setPastBookings(pastBookings);

                const totalNumOfPers = pastBookings.reduce((total, booking) => {
                    const numOfPersons = parseInt(booking.numOfPers, 10);
                    return !isNaN(numOfPersons) ? total + numOfPersons : total;
                }, 0);

                setTotalNumOfPers(totalNumOfPers);

            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        }

        getBookings();
    }, []);

    return (
        <div>
            <span className="font-bebas text-3xl">{totalNumOfPers}</span>
        </div>
    );
}
