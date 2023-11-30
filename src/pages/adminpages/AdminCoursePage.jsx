import React, { useState } from 'react';
import GenBtn from "../../components/interactions/GenBtn";
import GenInput from "../../components/interactions/GenInput";
import GenTextArea from "../../components/interactions/GenTextArea";
import Switch from "react-switch";
import DeleteCourse from '../../components/interactions/DeleteCourse';

export default function AdminCoursePage() {
  const [checked, setChecked] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [upcomingCoursesVisible, setUpcomingCoursesVisible] = useState(false);

  const handleChange = nextChecked => {
    setChecked(nextChecked);
    console.log(checked);
  };

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  const toggleUpcomingCoursesVisibility = () => {
    setUpcomingCoursesVisible(!upcomingCoursesVisible);
  };

  return (
    <main>
      <section className='flex items-center flex-col py-[20px]'>
        <div className='flex justify-between w-[300px] gap-16 lg:min-h-[75px] lg:w-[500px]'>
          <div>
            <div>
              <h3 onClick={toggleFormVisibility} className='font-bebas text-xl'>Create Course</h3>
            </div>
            <div className={`transition-all duration-500 ease-in-out flex flex-col overflow-hidden ${formVisible ? 'max-h-[50px]' : 'max-h-0'}`}>
              <Switch
                onChange={handleChange}
                checked={checked}
                onColor='#db6439'
                height={15}
                width={35}
                handleDiameter={15}
              />
              <p className='font-mont text-xs w-[90px]'>Save as a new template</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-bebas text-xl'>Use template</h3>
            <div className='flex flex-col gap-1 lg:flex-row'>
              <GenBtn content="Pizza-kursus" btnType="tertiaryBtn" />
              <GenBtn content="Surdejskursus" btnType="tertiaryBtn" />
              <GenBtn content="Coffee art" btnType="tertiaryBtn" />
            </div>
          </div>
        </div>
        <form id='ccForm'
          className={`transition-all duration-500 ease-in-out flex flex-col gap-3 items-center overflow-hidden ${formVisible ? 'max-h-[1210px]' : 'max-h-0'}`}>
          <GenInput inputId="courseName" labelContent="Course name" inputType="text" inputStyle="primaryInput" />
          <GenInput inputId="courseDate" labelContent="Date" inputType="date" inputStyle="primaryInput" />
          <GenInput inputId="courseLocation" labelContent="Location" inputType="text" inputStyle="primaryInput" />
          <GenInput inputId="coursePrize" labelContent="Prize per person (kr)" inputType="number" inputStyle="primaryInput" />
          <GenInput inputId="courseNumOfPart" labelContent="Number of participants (max)" inputType="number" inputStyle="primaryInput" />
          <GenTextArea textareaId="courseIntroDes" labelContent="Intro description" textareaStyle="primaryTextarea" />
          <GenTextArea textareaId="courseDes" labelContent="Course description" textareaStyle="primaryTextarea" />
          <GenTextArea textareaId="coursePartLearn" labelContent="What does the participant learn?" textareaStyle="primaryTextarea" />
          <div>
            <GenInput inputId="coursePartGet1" labelContent="What does the participant get? (bullet points)" inputType="text" inputStyle="primaryInput" />
            <GenInput inputId="coursePartGet2" inputType="text" inputStyle="primaryInput" />
            <GenInput inputId="coursePartGet3" inputType="text" inputStyle="primaryInput" />
          </div>
          <GenInput inputId="coursePraticalInfo" labelContent="Practical information" inputType="text" inputStyle="primaryInput" />
          <GenInput inputId="courseImg" labelContent="Course Image" inputType="file" inputStyle="primaryInput" />
          <GenBtn content="Create course" btnType="tertiaryBtn" />
        </form>
      </section>
      <section className='flex items-center flex-col py-[20px]'>
        <div className='flex justify-between w-[300px] gap-16 lg:min-h-[75px] lg:w-[500px]'>
          <h3 onClick={toggleUpcomingCoursesVisibility} className='font-bebas text-xl'>Upcoming courses</h3>
        </div>
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${upcomingCoursesVisible ? 'max-h-[1210px]' : 'max-h-0'}`}>
          <DeleteCourse />
        </div>
      </section>
    </main>
  );
}
