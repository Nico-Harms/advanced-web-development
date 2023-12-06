export default function BookingCard({booking}) {
  return (
    <div className="flex odd:bg-gray-300 even:bg-white px-2 flex-col justify-between font-mont text-sm md:items-center md:h-10 md:flex-row md:grid md:grid-cols-[1fr,1fr,1fr,1fr] md:text-center">
        <span>{booking.courseName}</span>
        <span>{booking.courseDate}</span>
        <span>{booking.email}</span>
        <span>{booking.numOfPers} person(s)</span>
    </div>
  )
}