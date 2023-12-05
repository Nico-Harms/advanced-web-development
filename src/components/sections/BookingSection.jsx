import GenBtn from "../interactions/GenBtn"
import GenInput from "../interactions/GenInput"
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import FirebaseApp from '../../../firebaseConfig';
import BookingCard from "../BookingCard";


export default function BookingSection() {

    const [bookings, setBookings] = useState([]);
    const today = new Date();
    const todayString = today.toISOString();
    console.log(todayString);

    useEffect(() => {
        async function getBookings() {
            const db = getFirestore(FirebaseApp);
            const bookingsCollection = collection(db, 'bookings');
            const querySnapshot = await getDocs(bookingsCollection);

            const bookingsArray = [];
            querySnapshot.forEach((doc) => {
                bookingsArray.push({ id: doc.id, ...doc.data() });
            });

            // Filter out bookings with dates in the past
            const currentBookings = bookingsArray.filter(booking => booking.courseDate > todayString);

            setBookings(currentBookings);
        }

        getBookings();
    }, []);

    if (bookings.length === 0) {
        return <div>Der er ingen bookings</div>;
    }

    return (
        <section className="w-4/5 mx-auto flex flex-col gap-3 md:max-w-4xl">
            <div className="flex flex-col justify-between sm:flex-row">
                <h6 className="font-bebas text-2xl">All bookings</h6>
                <div className="flex gap-3">
                    <div className="">
                        <GenInput inputType="search" inputPlaceholder="search" inputStyle="tertiaryInput" />
                    </div>
                    <GenBtn content="Create" btnType="primaryBtn" />
                </div>
            </div>
            <div className="border-off-black border-solid border-[1px] p-1">
                <div className="hidden font-bebas justify-between md:flex">
                    <span>Course</span>
                    <span>Date</span>
                    <span>Email</span>
                    <span>Number of participants</span>
                </div>
                <div>
                    {bookings.map(booking => (
                        <BookingCard booking={booking} key={booking.id} />
                    ))}
                </div>
            </div>
        </section>
    )
}