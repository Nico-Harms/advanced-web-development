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

  return (
    <>
      {showNavBar && (
        <nav id="navBar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      )}
    </>
  );
}
