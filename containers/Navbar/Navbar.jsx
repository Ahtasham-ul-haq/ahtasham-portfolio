"use client";

import React, { useState } from "react";
import "./Navbar.css";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { easeOut, motion } from "framer-motion";
// import { SocialMedia , ThemeSwitch} from "@/components";
import SocialMedia from "@/components/SocialMedia";
import ThemeSwitch from "@/components/ThemeSwitcher";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/">
          {/* <img src={'/portfolio.png'} alt="logo" /> */}
          <p className="text-3xl font-abril text-secondary-color dark:text-yellow-bg">
            Portfolio<span className="dark:text-white">.</span>
          </p>
        </a>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`} className="dark:hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center">
          <ThemeSwitch />
          {/* <SocialMedia /> */}
        </div>
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <>
              <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className=""
              >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {["home", "about", "work"].map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
