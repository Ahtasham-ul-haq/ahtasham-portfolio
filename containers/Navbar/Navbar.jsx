"use client"

import React, { useState } from "react";
import "./Navbar.css";
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { easeOut, motion } from 'framer-motion'
import { SocialMedia } from "@/components";


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={'/logo.png'} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
          <SocialMedia />
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: .85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                </li>
              ))}
            </ul>

          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
