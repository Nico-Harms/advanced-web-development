/*===============================================
=          Kodet af Nicolai           =
===============================================*/


// BookingStatus.jsx
import { User } from '@phosphor-icons/react';

import React from 'react';  // Import React if not already imported

function BookingStatus({ totalNumOfPersForCourse, courseNumOfPart }) {
  return (
    <div className="flex items-center justify-end">
      {totalNumOfPersForCourse < courseNumOfPart ? (
        <div className="flex items-center">
          <div className="">{totalNumOfPersForCourse} / {courseNumOfPart}</div>
          <User size={28} weight="light" color='#DB6439' />
        </div>
      ) : (
        <p className="text-red-500">Fuld booket</p>
      )}
    </div>
  );
}

export default BookingStatus;  // Ensure that you export the component here
