/*===============================================
=          Kodet af Tobias, Nicolai og Emil           =
===============================================*/


import React, { useState } from 'react';
import { motion } from 'framer-motion';

/*===============================================
=  Accordion effect that takes parameters for next input   =
===============================================*/


const Accordion = ({ title, content, foldIcon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: { duration: 0.2 },
    }
  };

  const containerVariants = {
    open: {
      height: 'auto',
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: {
      height: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="border-b-[1px] w-[90%] lg:w-[100%] border-prime-brown md:max-w-[400px]"
    >
      <div
        className="flex items-center cursor-pointer p-4 lg:p-3 "
        onClick={toggleAccordion}
      >
        <motion.span className="text-xl m-2"
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { rotate: 45 },
            closed: { rotate: 0 },
          }}
        >{foldIcon}</motion.span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bebas w-[100%]">{title}</h2>

      </div>
      {isOpen && (
        <motion.div className="m-4"
          variants={containerVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <motion.p className='font-mont text-xs md:text-base'
            variants={itemVariants}
          >{content}</motion.p>
        </motion.div>
      )}
    </div>
  );
};

export default Accordion;
