import GenBtn from "./GenBtn";


export default function DeleteCourse({ course, onDelete }) {

  const handleDeleteClick = () => {
    // Call the onDelete function passed from the parent component
    onDelete();
  };

  return (
    <div className="flex items-center gap-2">
        <div className=" bg-prime-orange flex flex-col rounded-[10px] px-4 py-2 lg:flex-row lg:min-w-[350px]">
            <p className="text-sm text-off-white">{course.courseName}</p>
            <p className="text-sm text-off-white">"number" participants</p>
            <p className="text-sm text-off-white">{course.courseDate}</p>
        </div>
        <div>
        <GenBtn click={handleDeleteClick} content="Cancel" btnType="cancelBtn" />
      </div>
    </div>
  )
}