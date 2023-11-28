import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navigation() {
  const [showNavBar, setShowNavBar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Hide the navigation bar on specific routes
    if (location.pathname === "/adminlogin" || location.pathname === "/admin") {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
  }, [location.pathname]);

  const toggleBurger = () => {
    const navLinks = document.getElementById("navLinks");
    const bars = document.querySelectorAll(".hamburger span");
    bars.forEach((bar) => {
      bar.classList.toggle("change");
    });
    navLinks.classList.toggle("visible");
  };


  return (
    <>
      {showNavBar && (
        <nav id="navBar" className="flex bg-off-white justify-between items-center h-14 relative">
          <div className="font-bebas text-2xl text-prime-orange mx-4">Jumbo Bakery</div>
          <div id="navLinks" className="flex flex-col h-[100vh] bg-prime-orange pt-20 gap-8 w-[50%] pl-10 text-xl text-off-white ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div className="hamburger mx-4 z-10" onClick={toggleBurger}>
            <span className="block bg-prime-orange h-1 w-6 rounded m-[2px]"></span>
            <span className="block bg-prime-orange h-1 w-6 rounded m-[2px]"></span>
            <span className="block bg-prime-orange h-1 w-6 rounded m-[2px]"></span>
          </div>
        </nav>
      )}
    </>
  );
}
