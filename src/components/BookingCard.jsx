export default function BookingCard({booking}) {
  return (
    <div className="flex flex-col justify-between font-mont text-sm md:flex-row">
        <span>{booking.courseName}</span>
        <span>{booking.courseDate}</span>
        <span>{booking.email}</span>
        <span>{booking.numOfPers} person(s)</span>
    </div>
  )
}