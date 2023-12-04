import CourseCard from "../components/CourseCard";

export default function CoursePage() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function getCourses() {
            const url = "";
            const response = await fetch(url);
            const data = await response.json();
            const coursesArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
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