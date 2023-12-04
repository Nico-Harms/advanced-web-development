import courseIMG from '../assets/images/cafe.webp';
import { User, MapPin } from '@phosphor-icons/react';
import GenBtn from './interactions/GenBtn';
import { useNavigate } from 'react-router-dom';

export default function CourseCard({ course }) {

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/kurser/${course.id}`);
  }
  
  return (
    <div className='w-[80%] mx-auto my-52 md:max-w-[800px] '>
      <div className="flex flex-col md:flex-row">
        <div className="">
          <img src={course.courseImgUrl} alt="Kursus Billede" className='w-[100%] md:h-[100%] md:object-cover' />
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
            <div className="">{course.courseNumOfPart}</div>
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
  )
}