import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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

  const closeBurger = () => {
    const navLinks = document.getElementById("navLinks");
    const bars = document.querySelectorAll(".hamburger span");
    bars.forEach((bar) => {
      bar.classList.remove("change");
    });
    navLinks.classList.remove("visible");
  }

  const navigate = useNavigate();

 function navigateHome() {
    navigate("/");
  }

  //make it so the body has a padding equal to the navbars height
  useEffect(() => {
    const navBar = document.getElementById("navBar");
    if (showNavBar) {
      document.body.style.paddingTop = navBar.offsetHeight + "px";
    } else {
      document.body.style.paddingTop = "0px";
    }
  }, [showNavBar]);

  const currentPage = location.pathname;

  useEffect(() => {
    const navLinks = document.querySelectorAll(".link");

    navLinks.forEach((link) => {
      link.style.textDecoration = "none";
    });
  
    if (currentPage === "/kurser") {
      navLinks[0].style.textDecoration = "underline";
      navLinks[0].style.textDecorationColor = "#db6439";
      navLinks[0].style.textDecorationThickness = "2px";
      navLinks[0].style.textUnderlineOffset = "5px";
    } else if (currentPage === "/historie") {
      navLinks[1].style.textDecoration = "underline";
      navLinks[1].style.textDecorationColor = "#db6439";
      navLinks[1].style.textDecorationThickness = "2px";
      navLinks[1].style.textUnderlineOffset = "5px";
    } else if (currentPage === "/contact") {
      navLinks[2].style.textDecoration = "underline";
      navLinks[2].style.textDecorationColor = "#db6439";
      navLinks[2].style.textDecorationThickness = "2px";
      navLinks[2].style.textUnderlineOffset = "5px";
    }
  }, [currentPage]);
  
  


  return (
    <>
      {showNavBar && (
        <nav id="navBar" className="flex fixed z-[1000] w-[100vw] top-0 bg-background justify-between items-center h-20 drop-shadow-lg md:h-28 ">
          <img src={logo} onClick={navigateHome} className=" w-36 mx-4 md:w-52 md:mx-10 cursor-pointer" />
          <div id="navLinks" className="flex  flex-col z-40 h-[100vh] bg-prime-orange pt-20 gap-10 w-[70%] pl-10 text-2xl text-off-white md:bg-background md:flex-row md:h-auto md:p-0 md:w-auto md:text-off-black md:mx-10 md:gap-20 ">
            <NavLink to="/kurser" className="link border-b-[1px] pb-2 border-solid w-[70%] md:border-none" onClick={closeBurger}>Kurser</NavLink>
            <NavLink to="/historie" className="link border-b-[1px] pb-2 border-solid w-[70%] md:border-none" onClick={closeBurger} >Historie</NavLink>
            <NavLink to="/contact" className="link border-b-[1px] pb-2 border-solid w-[70%] md:border-none" onClick={closeBurger} >Kontakt</NavLink>
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
