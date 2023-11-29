import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/JumboLogo.svg";

export default function Navigation() {
  const [showNavBar, setShowNavBar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Hide the navigation bar on specific routes
    if (location.pathname === "/adminlogin" || location.pathname === "/admin" || location.pathname === "/admincourse") {
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
        <nav id="navBar" className="flex bg-background justify-between items-center h-20 relative drop-shadow-lg md:h-28 ">
          <img src={logo} className=" w-36 mx-4 md:w-52 md:mx-10 " />
          <div id="navLinks" className="flex flex-col z-40 h-[100vh] bg-prime-orange pt-20 gap-8 w-[50%] pl-10 text-xl text-off-white md:bg-background md:flex-row md:h-auto md:p-0 md:w-auto md:text-off-black md:mx-10 md:gap-20 ">
            <NavLink to="/" className="link" >Home</NavLink>
            <NavLink to="/about" className="link" >About</NavLink>
            <NavLink to="/contact" className="link" >Contact</NavLink>
          </div>
          <div className="hamburger mx-4 z-50 md:hidden" onClick={toggleBurger}>
            <span className="block bg-prime-orange h-[3px] w-6 rounded m-[2px]"></span>
            <span className="block bg-prime-orange h-[3px] w-6 rounded m-[2px]"></span>
            <span className="block bg-prime-orange h-[3px] w-6 rounded m-[2px]"></span>
          </div>
        </nav>
      )}
    </>
  );
}
