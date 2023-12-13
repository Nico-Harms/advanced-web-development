/*===============================================
=          Kodet af Emil og Mads           =
===============================================*/


import React, { useState, useEffect } from 'react';
import FirebaseApp from '../../../firebaseConfig';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default function TotalCourses() {
    const today = new Date();
    const db = getFirestore(FirebaseApp);
    const todayString = today.toISOString();
    const [pastCourses, setPastCourses] = useState([]);


    useEffect(() => {
        async function getCourses() {
            try {

                const coursesCollection = collection(db, 'courses');
                const querySnapshot = await getDocs(coursesCollection);

                const coursesArray = [];
                querySnapshot.forEach((doc) => {
                    coursesArray.push({ id: doc.id, ...doc.data() });
                });

                // Filter out courses with dates in the past
                const pastCourses = coursesArray.filter(course => course.courseDate > todayString);
                setPastCourses(pastCourses);

            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        }

        getCourses();
    }, []);
    
    return (
        <div>
              <span className="font-bebas text-3xl">{pastCourses.length}</span>
        </div>
    )
}