import CourseCard from "../components/CourseCard";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import FirebaseApp from '../../firebaseConfig';

export default function CoursePage() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function getCourses() {
            const db = getFirestore(FirebaseApp);
            const coursesCollection = collection(db, 'courses');
            const querySnapshot = await getDocs(coursesCollection);

            const coursesArray = [];
            querySnapshot.forEach((doc) => {
                coursesArray.push({ id: doc.id, ...doc.data() });
            });

            setCourses(coursesArray);
        }

        getCourses();
    }, []);

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
