import React from "react";
import "./style.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const links = [
  { link: "Home", href: "#hero__container" },
  { link: "About Us", href: "#about__container" },
  { link: "Services", href: "#services__container" },
  { link: "Doctor", href: "#training__container" },
  { link: "Contact", href: "#contact__container" },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const MobileMenu = ({ mobileNavRef, setShowMenu, open }) => {
  const route = useNavigate()
  const handleAppointmentButtonClick = ()=> {
    route("/booking")
  }
  return (
    <AnimatePresence>
      {/* {open && ( */}
      <motion.div
        className="mobilemenu__container"
        ref={mobileNavRef}
        initial={{ width: 0 }}
        animate={{ width: 250 }}
        exit={{
          width: 0,
          transition: { delay: 0.7, duration: 0.3 },
        }}
        variants={itemVariants}
        transition={{
          type: "tween",
          stiffness: 80,
        }}
      >
        <motion.nav variants={sideVariants}>
          <ul>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a
                    href={`${link.href}`}
                    onClick={() => setShowMenu(false)}
                  >{`${link.link}`}</a>
                </li>
              );
            })}
             <button className="appointment-button" onClick={handleAppointmentButtonClick}>
                  Book an Appointment
                </button>
          </ul>
        </motion.nav>
      </motion.div>
      {/*  )} */}
    </AnimatePresence>
  );
};

export default MobileMenu;
