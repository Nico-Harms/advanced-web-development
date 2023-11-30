import { Link } from 'react-router-dom';
import courseIMG from '../assets/images/cafe.webp';
import { User, MapPin } from '@phosphor-icons/react';
import GenBtn from './interactions/GenBtn';

export default function CourseCard() {
  return (
    <div className='w-[80%] mx-auto my-52 md:max-w-[800px] '>
      <div className="flex flex-col md:flex-row">
        <div className="">
          <img src={courseIMG} alt="Kursus Billede" className='w-[100%] md:h-[100%] md:object-cover' />
        </div>
        <div className=" bg-prime-brown text-off-white flex flex-col gap-4">
          <h2 className='font-bebas text-4xl w-[80%] mx-auto mt-5 md:text-5xl'>Course Name</h2>
          <p className='font-mont text-sm w-[80%] mx-auto mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam cupiditate optio alias repudiandae possimus fugit, soluta quod atque repellat laboriosam ratione, sit veniam. Eos corporis voluptates rem ea fugit consequuntur deleniti modi et, accusamus ullam saepe, impedit nihil minima illo enim, rerum debitis ut repellat? Molestias quibusdam repellat eligendi qui perspiciatis in est. Earum mollitia reprehenderit laborum perspiciatis, libero ad ex aperiam sapiente quos laudantium quae illo ipsum fuga optio exercitationem velit assumenda eum nisi distinctio! Libero accusamus porro, quis minima dolor laborum unde repellat est maiores, provident ducimus blanditiis aliquid quod quas obcaecati harum temporibus amet, quaerat eveniet quia.</p>
        </div>
      </div>
      <div className=" font-mont text-sm border-solid border-2 border-prime-orange p-1 sm:py-4 sm:px-2 ">
        <div className="grid grid-cols-2 items-center gap-3 w-[90%] mx-auto sm:flex sm:justify-between">
          <div className=" ">01-12-2023</div>
          <div className="flex items-center justify-end">
            <div className="">12 / 30</div>
            <User size={28} weight="light" color='#DB6439' />
          </div>
          <div className="flex items-center">
            <div className="">Mindet 4D</div>
            <MapPin size={28} weight="light" color='#DB6439' />
          </div>
          <div className="flex justify-end">
            <GenBtn content="Læs mere" btnType="primaryBtn" />
          </div>
        </div>
      </div>
    </div>
  )
}