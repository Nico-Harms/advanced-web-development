import React, { useState } from 'react';
import GenBtn from './GenBtn';
import emailjs from 'emailjs-com';

export default function SlideEmail({ course, count }) {
  const [isFormSlid, setIsFormSlid] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [email, setEmail] = useState('');

  const slideForm = () => {
    setIsFormSlid((prevIsFormSlid) => !prevIsFormSlid);
    const formSlide = document.getElementById('formSlide');
    formSlide.classList.toggle('sliding');
  };

  const bookCourse = () => {
    const templateParams = {
      to_email: email,
      message: `Vi glæder os til at se dig og din(e) ${count} deltager(e). `, // Updated message to include the count
      from_name: 'Jumbo Bakery', // Your organization's name
      courseName: course.courseName // Replace with the actual course name
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
          <GenBtn content='Book Plads' btnType='primaryBtn' click={bookCourse} />
        ) : (
          <GenBtn content='Tilmeld' btnType='primaryBtn' click={slideForm} />
        )}
      </div>
      <div className=''>
        {isBookingConfirmed && (
          <p className='italic text-sm text-[#3BB230]'>Tak for din booking, vi glæder os til at se dig og dine {count} deltagere!</p>
        )}
      </div>
    </div>
  );
}