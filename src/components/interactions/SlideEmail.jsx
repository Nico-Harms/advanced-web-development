import React, { useState } from 'react';
import GenBtn from './GenBtn';

export default function SlideEmail() {
    const [isFormSlid, setIsFormSlid] = useState(false);
    const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

    const slideForm = () => {
        setIsFormSlid((prevIsFormSlid) => !prevIsFormSlid);
        const formSlide = document.getElementById("formSlide");
        formSlide.classList.toggle("sliding");

    };

    const bookCourse = () => {
        // Booking kode indsættes her

        setIsBookingConfirmed(true);
    };

    return (
        <div className='ml-10'>
            <div className="flex flex-column items-center gap-2">
                <form action="">
                    <input
                        required
                        type="email"
                        placeholder="din@email.dk"
                        id="formSlide"
                        className="border-[1px] border-off-black rounded h-8 placeholder:italic px-2"
                    />
                </form>
                {isFormSlid ? (
                    <GenBtn content="Book Plads" btnType="primaryBtn" click={bookCourse} />
                ) : (
                    <GenBtn content="Tilmeld" btnType="primaryBtn" click={slideForm} />
                )}
            </div>
            <div className="">
                {isBookingConfirmed && <p className=" italic text-sm text-off-black">Booking confirmed!</p>}
            </div>
        </div>
    );
}
