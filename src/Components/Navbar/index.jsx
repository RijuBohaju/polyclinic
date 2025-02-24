import React, { useEffect } from "react";
import "./style.scss";
import MobileMenu from "../MobMenu";
import BookingForm from "../BodyWrapper/components/BookingForm/index.jsx";
import logo from "../../images/vhcslogo.png";

import { useCycle } from "framer-motion";
import { links } from "../MobMenu";

// import React, { useState } from "react";

import { useNavigate } from "react-router-dom"



const Navbar = () => {

  const [showmenu, setShowMenu] = React.useState(false);
  const [open, cycleOpen] = useCycle(false, true);
  const mobileNavRef = React.useRef(null);
  const route = useNavigate()


  const handleAppointmentButtonClick = () => {
    // Redirect to the booking form page
    // history.push("/BookingForm");
      route("/booking")
  };

  const handleClickOutside = (e) => {
    if (mobileNavRef.current && !mobileNavRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", navHighlighter);

    return () => {
      window.removeEventListener("scroll", navHighlighter);
    };
  }, [location.pathname]);

  // Add an event listener listening for scroll
  function navHighlighter() {
    const sections = document.querySelectorAll("section[id]");

    // Get current scroll position
    let scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 150;
      const sectionId = section.getAttribute("id");

      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight &&
        window.innerWidth >= 768
      ) {
        document
          .querySelector("nav a[href*=" + sectionId + "]")
          .classList.add("active");
      } else {
        document
          .querySelector("nav a[href*=" + sectionId + "]")
          .classList.remove("active");
      }
    });
  }

  return (
    <>
      <div className="navbar__container">
        <nav>
          <div className="logo">
            {/* <Link to={"/"}> */}
              <img src={logo} alt="logo" width={80} height={80} />
            {/* </Link> */}
          </div>
          {location.pathname === "/" && (
            <div className="nav__links">
              <ul>
                {links.map((link, i) => {
                  return (
                    <li key={i}>
                      <a href={link.href} id={link.href}>
                        {link.link}{" "}
                      </a> 
                    </li>
                  );
                })}
                 <li>
                <button className="appointment-button" onClick={handleAppointmentButtonClick}>
                  Book an Appointment
                </button>
              </li>
              </ul>
            </div>
          )}
          <div className="hamburgermenu">
            <p>
              <i
                className="ri-menu-fill"
                onClick={() => {
                  setShowMenu(true), cycleOpen();
                }}
              ></i>
            </p>
          </div>
        </nav>
      </div>
      {showmenu && (
        <MobileMenu
          mobileNavRef={mobileNavRef}
          setShowMenu={setShowMenu}
          open={open}
        />
      )}
    </>
  );
};

export default Navbar;
