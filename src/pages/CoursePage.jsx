import CourseCard from "../components/CourseCard";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import FirebaseApp from '../../firebaseConfig';

export default function CoursePage() {
    const [courses, setCourses] = useState([]);
    const today = new Date();
    const todayString = today.toISOString();
    console.log(todayString);

    useEffect(() => {
        async function getCourses() {
            const db = getFirestore(FirebaseApp);
            const coursesCollection = collection(db, 'courses');
            const querySnapshot = await getDocs(coursesCollection);

            const coursesArray = [];
            querySnapshot.forEach((doc) => {
                coursesArray.push({ id: doc.id, ...doc.data() });
            });

            // Filter out courses with dates in the past
            const currentCourses = coursesArray.filter(course => course.courseDate > todayString);

            setCourses(currentCourses);
        }

        getCourses();
    }, []);

    if (courses.length === 0) {
        return <div>Der er ingen kurser</div>;
    }

    return (
        <main>
            <div>
                {courses.map(course => (
                    <CourseCard course={course} key={course.id} />
                ))}
            </div>
        </main>
    )
}
