import React, { useState } from 'react';
import GenBtn from './GenBtn';
import emailjs from 'emailjs-com';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import FirebaseApp from '../../../firebaseConfig';


export default function SlideEmail({ course, count }) {
  const [isFormSlid, setIsFormSlid] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [email, setEmail] = useState('');

  const createBooking = async () => {
    const db = getFirestore(FirebaseApp);
    const bookingsCollection = collection(db, 'bookings');
    const newBooking = {
      courseName: course.courseName,
      courseDate: course.courseDate,
      email: email,
      numOfPers: count,
    };

    // Add the new booking to the collection
    await addDoc(bookingsCollection, newBooking);

  };

  const slideForm = () => {
    setIsFormSlid((prevIsFormSlid) => !prevIsFormSlid);
    const formSlide = document.getElementById('formSlide');
    formSlide.classList.toggle('sliding');
  };

  const bookCourse = () => {
    
      const templateParams = {
        to_email: email,
        message: `Hej, tak for din tilmelding til ${course.courseName} med ${count} deltager(e) den ${course.courseDate}.`,
        from_name: 'Jumbo Bakery',
        courseName: course.courseName,
        count: count,
      };
  
      emailjs
      .send('service_5e9d8d1', 'template_x60yvj6', templateParams, '_usFp-61TSUrJsl9U')
      .then(
        (response) => {
          console.log('Email sent:', response);
          setIsBookingConfirmed(true);
        },
        (error) => {
          console.error('Failed to send email:', error);
        }
      );
  };
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-column items-center gap-2'>
        <form action=''>
          <input
            required
            type='email'
            placeholder='din@email.dk'
            id='formSlide'
            className='border-[1px] border-off-black rounded h-8 placeholder:italic px-2'
            onChange={handleEmailChange}
          />
        </form>
        {isFormSlid ? (
          <GenBtn content='Book Plads' btnType='primaryBtn' click={() => { bookCourse(); createBooking(); }} />
        ) : (
          <GenBtn content='Tilmeld' btnType='primaryBtn' click={slideForm} />
        )}
      </div>
      <div className=''>
        {isBookingConfirmed && (
          <p className='italic text-sm text-[#3BB230]'>Tak for din booking, vi glæder os til at se dig og din(e) {count} deltager(e)!</p>
        )}
      </div>
    </div>
  );
}