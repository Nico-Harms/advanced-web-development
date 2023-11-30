// Accordion.jsx

import React, { useState } from 'react';

const Accordion = ({ title, content, foldIcon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <div
        className="flex justify-between items-center cursor-pointer p-4"
        onClick={toggleAccordion}
      >
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="text-xl">{foldIcon}</span>
      </div>
      {isOpen && (
        <div className="p-4">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
