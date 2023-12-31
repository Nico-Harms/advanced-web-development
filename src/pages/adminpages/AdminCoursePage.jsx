/*===============================================
=          Kodet af Mads           =
===============================================*/


import React, { useState } from 'react';
import GenBtn from "../../components/interactions/GenBtn";
import GenInput from "../../components/interactions/GenInput";
import GenTextArea from "../../components/interactions/GenTextArea";
import Switch from "react-switch";
import DeleteCourse from '../../components/interactions/DeleteCourse';
import FirebaseApp from '../../../firebaseConfig';
import { getFirestore, collection, addDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { CaretDown } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { getDocs } from 'firebase/firestore';


export default function AdminCoursePage() {
  const [checked, setChecked] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [upcomingCoursesVisible, setUpcomingCoursesVisible] = useState(false);
  const [courses, setCourses] = useState([]);
  const today = new Date();
  const todayString = today.toISOString();
  const [pastCourses, setPastCourses] = useState([]);
  const db = getFirestore(FirebaseApp);
  const [courseCreated, setCourseCreated] = useState(false);
  const [courseDeleted, setCourseDeleted] = useState(false);

  useEffect(() => {
    // Define the Firestore collection reference outside the async function
    const coursesCollection = collection(db, 'courses');
  
    // Use onSnapshot to listen for changes to the collection
    const unsubscribe = onSnapshot(coursesCollection, (snapshot) => {
      try {
        const coursesArray = [];
        snapshot.forEach((doc) => {
          coursesArray.push({ id: doc.id, ...doc.data() });
        });
  
        // Filter out courses with dates in the past
        const pastCourses = coursesArray.filter(course => course.courseDate > todayString);
        setPastCourses(pastCourses);
  
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    });
  
    // Return a cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount
  

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

  async function uploadImage() {
    //url to new image. "imageupload-9eb6e" must be replaced with own firebase project id
    const url = `https://firebasestorage.googleapis.com/v0/b/jumbo-bakery.appspot.com/o/${imageFile.name}`;
    // POST request to upload image
    const response = await fetch(url, {
      method: "POST",
      body: imageFile,
      headers: { "Content-Type": imageFile.type }
    });
    const data = await response.json();
    console.log(data); // data response from image upload
    const imageUrl = `${url}?alt=media`;
    return imageUrl;
  }


  const createCourse = async () => {
    try {
      // Get the image file
      const imageFile = document.getElementById('courseImg').files[0];
  
      // URL for image upload. Replace "jumbo-bakery" with your Firebase project id
      const url = `https://firebasestorage.googleapis.com/v0/b/jumbo-bakery.appspot.com/o/${imageFile.name}`;
  
      // POST request to upload image
      const response = await fetch(url, {
        method: "POST",
        body: imageFile,
        headers: { "Content-Type": imageFile.type }
      });
  
      const data = await response.json();
      console.log(data); // data response from image upload
      const imageUrl = `${url}?alt=media`;
  
  
      // Get input values
      const courseName = document.getElementById('courseName').value;
      const courseDate = document.getElementById('courseDate').value;
      const courseLocation = document.getElementById('courseLocation').value;
      const coursePrize = document.getElementById('coursePrize').value;
      const courseNumOfPart = document.getElementById('courseNumOfPart').value;
      const courseIntroDes = document.getElementById('courseIntroDes').value;
      const courseDes = document.getElementById('courseDes').value;
      const coursePartLearn = document.getElementById('coursePartLearn').value;
      const coursePartGet1 = document.getElementById('coursePartGet1').value;
      const coursePartGet2 = document.getElementById('coursePartGet2').value;
      const coursePartGet3 = document.getElementById('coursePartGet3').value;
      const coursePraticalInfo = document.getElementById('coursePraticalInfo').value;
  
      // Add document to Firestore
      const docRef = await addDoc(collection(db, 'courses'), {
        courseName,
        courseDate,
        courseLocation,
        coursePrize,
        courseNumOfPart,
        courseIntroDes,
        courseDes,
        coursePartLearn,
        coursePartGet1,
        coursePartGet2,
        coursePartGet3,
        coursePraticalInfo,
        courseImgUrl: imageUrl  
      });
  
      console.log('Course successfully created with ID:', docRef.id);

      // Clear the input values after the booking is created
      document.getElementById('courseName').value = '';
      document.getElementById('courseDate').value = '';
      document.getElementById('courseLocation').value = '';
      document.getElementById('coursePrize').value = '';
      document.getElementById('courseNumOfPart').value = '';
      document.getElementById('courseIntroDes').value = '';
      document.getElementById('courseDes').value = '';
      document.getElementById('coursePartLearn').value = '';
      document.getElementById('coursePartGet1').value = '';
      document.getElementById('coursePartGet2').value = '';
      document.getElementById('coursePartGet3').value = '';
      document.getElementById('coursePraticalInfo').value = '';
      document.getElementById('courseImg').value = '';

      toggleFormVisibility();

      setCourseCreated(true);

      setTimeout(() => {
        // Assuming you have a function to set the state, replace this with your actual state-setting logic
        setCourseCreated(false);
      }, 5000);
  
    } catch (error) {
      console.log(error);
    }
  }

  const deleteCourse = async (courseId) => {
    try {
      // Remove the course from the state
      setCourses((prevCourses) => prevCourses.filter((course) => course.id !== courseId));

      // Remove the course from the Firebase collection
      await deleteDoc(doc(db, 'courses', courseId));

      toggleUpcomingCoursesVisibility();

      setCourseDeleted(true);

      setTimeout(() => {
        // Assuming you have a function to set the state, replace this with your actual state-setting logic
        setCourseDeleted(false);
      }, 5000);

    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };
  


  return (
    <main>
      <section className='flex items-center flex-col py-[20px]'>
        <div className='flex justify-between w-[300px] gap-16 lg:min-h-[75px] lg:w-[500px]'>
          <div>
            <motion.div className='flex gap-2 cursor-pointer' onClick={toggleFormVisibility}
            whileTap={{ scale: 0.9 }}
            >
              <h3  className='font-bebas text-xl'>Create Course</h3>
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
        <div id='ccForm'
          className={`transition-all duration-500 ease-in-out flex flex-col gap-3 items-center overflow-hidden ${formVisible ? 'max-h-[1210px]' : 'max-h-0'}`}>
          <GenInput inputId="courseName" labelContent="Course name" inputType="text" inputStyle="primaryInput" />
          <GenInput inputId="courseDate" labelContent="Date" inputType="date" inputStyle="primaryInput" />
          <GenInput inputId="courseLocation" labelContent="Location" inputType="text" inputStyle="primaryInput" />
          <GenInput inputId="coursePrize" labelContent="Price per person (kr)" inputType="number" inputStyle="primaryInput" />
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
          <GenBtn content="Create course" btnType="tertiaryBtn" click={createCourse} />
        </div>
      </section>
      <div className='flex font-mont items-center flex-col py-[20px] text-[#3BB230]'>{courseCreated ? 'Course created' : null}</div>
      <section className='flex items-center flex-col gap-10 py-[20px]'>
        <motion.div className='flex w-[300px] cursor-pointer gap-2 lg:w-[500px]' onClick={toggleUpcomingCoursesVisibility}
        whileTap={{ scale: 0.9 }}
        >
          <h3 className='font-bebas text-xl'>Upcoming courses</h3>
          <motion.div className=""
            animate={upcomingCoursesVisible ? 'open' : 'closed'}
            variants={{
              open: { rotate: 180, y: -3, transition: { duration: 0.2 } },
              closed: { rotate: 0, y: 0, transition: { duration: 0.2 } },
            }}
          >
            <CaretDown size={24} />
          </motion.div>
        </motion.div>
        <div className={`flex flex-col gap-2 transition-all duration-500 ease-in-out overflow-hidden ${upcomingCoursesVisible ? 'max-h-[1210px]' : 'max-h-0'}`}>
          {pastCourses.map(course => (
            <DeleteCourse course={course} key={course.id} onDelete={() => deleteCourse(course.id)} />
          ))}
        </div>
      </section>
      <div className='flex font-mont items-center flex-col py-[20px] text-[#3BB230]'>{courseDeleted ? 'Course deleted' : null}</div>
    </main>
  );
}