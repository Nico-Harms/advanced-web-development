/*===============================================
=          Kodet af Mads           =
===============================================*/


export default function UpcomingEventsCard({course}) {
  return (
    <div>
      <div className="font-mont flex flex-col w-[90%] mx-auto text-sm">
        <p>{course.courseDate}</p>
        <div className="font-mont text-sm bg-prime-orange w-[100%] h-8 rounded-md text-off-white flex justify-between items-center px-2">
          <div className="">{course.courseName}</div>
          <div className="">{course.courseLocation}</div>
        </div>
      </div>
    </div>
  )
}