/*===============================================
=          Kodet af Mads           =
===============================================*/


import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, addDoc, onSnapshot } from 'firebase/firestore';
import FirebaseApp from '../../../firebaseConfig';
import GenBtn from "../interactions/GenBtn";
import GenInput from "../interactions/GenInput";
import BookingCard from "../BookingCard";
import { CaretDown } from '@phosphor-icons/react';
import { motion } from 'framer-motion';


export default function BookingSection() {
    const db = getFirestore(FirebaseApp);
    const [bookings, setBookings] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [formVisible, setFormVisible] = useState(false);
    const today = new Date();
    const todayString = today.toISOString();
    const [bookingCreated, setBookingCreated] = useState(false);

    const toggleFormVisibility = () => {
        setFormVisible(!formVisible);
    };


    const createBooking = async () => {
        const bookingsCollection = collection(db, 'bookings');
        const newBooking = {
            courseName: document.getElementById('courseName').value,
            courseDate: document.getElementById('courseDate').value,
            email: document.getElementById('email').value,
            numOfPers: parseInt(document.getElementById('numOfPers').value, 10), // Convert to number
        };

        // Add the new booking to the collection
        await addDoc(bookingsCollection, newBooking);

        // Clear the input values after the booking is created
        document.getElementById('courseName').value = '';
        document.getElementById('courseDate').value = '';
        document.getElementById('email').value = '';
        document.getElementById('numOfPers').value = '';

        toggleFormVisibility();

        setBookingCreated(true);

        setTimeout(() => {
            // Assuming you have a function to set the state, replace this with your actual state-setting logic
            setBookingCreated(false);
        }, 5000);
    };


    useEffect(() => {
        const bookingsCollection = collection(db, 'bookings');
    
        const unsubscribe = onSnapshot(bookingsCollection, (snapshot) => {
            try {
                const bookingsArray = [];
                snapshot.forEach((doc) => {
                    bookingsArray.push({ id: doc.id, ...doc.data() });
                });
    
                // Filter out bookings with dates in the past
                const currentBookings = bookingsArray.filter(booking => booking.courseDate > todayString);
    
                setBookings(currentBookings);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        });
    
        return () => unsubscribe();
    }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount
    

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const filteredBookings = bookings.filter(booking =>
        booking.email.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (bookings.length === 0) {
        return <div className="w-4/5 mx-auto flex flex-col gap-3 font-mont underline text-cancel-red md:max-w-4xl">Der desværre er ingen bookings</div>;
    }

    return (
        <section className="w-4/5 my-10 mx-auto flex flex-col gap-3 md:max-w-4xl">
            <div className="flex flex-col justify-between sm:flex-row">
                <h6 className="font-bebas text-2xl">All bookings</h6>
                <div className="flex flex-col gap-3">

                    <div className="flex items-center gap-2">
                        <GenInput
                            inputType="search"
                            inputPlaceholder="Search by email"
                            inputStyle="tertiaryInput"
                            value={searchInput}
                            onChange={handleSearchInputChange}
                        />

                        <motion.div className='flex gap-1 items-center cursor-pointer' onClick={toggleFormVisibility}
                            whileTap={{ scale: 0.9 }}
                        >
                            <h3 className='font-bebas text-sm'>Create Booking</h3>
                            <motion.div className=""
                                animate={formVisible ? 'open' : 'closed'}
                                variants={{
                                    open: { rotate: 180, y: -3, transition: { duration: 0.2 } },
                                    closed: { rotate: 0, y: 0, transition: { duration: 0.2 } },
                                }}
                            >
                                <CaretDown size={24} />
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className={`transition-all duration-500 ease-in-out overflow-hidden flex flex-col gap-1 ${formVisible ? 'max-h-[1210px]' : 'max-h-0'}`}>
                        <GenInput inputId="courseName" inputPlaceholder="Course Name" inputType="text" inputStyle="secondaryInput" />
                        <GenInput inputId="courseDate" inputPlaceholder="Course Date" inputType="date" inputStyle="secondaryInput" />
                        <GenInput inputId="email" inputPlaceholder="Email" inputType="email" inputStyle="secondaryInput" />
                        <GenInput inputId="numOfPers" inputPlaceholder="Number of participants" inputType="number" inputStyle="secondaryInput" />
                        <div className="m-auto">
                            <GenBtn click={() => { createBooking(); toggleFormVisibility(); }} content="Create" btnType="createBtn" />
                        </div>
                    </div>
                    <div className={`flex font-mont items-center flex-col py-[20px] text-[#3BB230]`} style={{ display: bookingCreated ? 'flex' : 'none' }}>
                        Booking created
                    </div>

                </div>
            </div>
            <div className="border-off-black border-solid border-[1px] max-h-[380px] overflow-y-scroll ">
                <div className="hidden px-2 h-10 items-center sticky top-0 font-bebas justify-between bg-white md:grid md:grid-cols-[1fr,1fr,1fr,1fr] text-center">
                    <span>Course</span>
                    <span>Date</span>
                    <span>Email</span>
                    <span>Number of participants</span>
                </div>
                <div className="flex flex-col">
                    {filteredBookings.map(booking => (
                        <BookingCard booking={booking} key={booking.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}
