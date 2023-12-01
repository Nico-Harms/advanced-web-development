// Accordion.jsx

import React, { useState } from 'react';

const Accordion = ({ title, content, foldIcon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-[1px] w-[90%] border-prime-brown">
      <div
        className="flex  items-center cursor-pointer p-4"
        onClick={toggleAccordion}
      >
        <span className="text-xl m-2">{foldIcon}</span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bebas w-[100%]">{title}</h2>
        
      </div>
      {isOpen && (
        <div className="p-4">
          <p className='font-mont font-mont text-xs md:text-base'>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
