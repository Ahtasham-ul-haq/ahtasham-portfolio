"use client"

import React from "react";
import { motion } from "framer-motion";
import "./Header.css";
import { AppWrap } from '../../wrapper'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {

  return (
    <div className="app__header app__flex dark:bg-dark-bg">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge ">
          <div className="app__flex badge-cmp dark:bg-light-dark-bg">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text dark:text-white">Hello, I am</p>
              <h1 className="text-[2.75rem] font-medium text-center text-black-color dark:text-white font-abril">Ahtasham</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex dark:bg-light-dark-bg">
            <p className="p-text dark:text-white">Web Developer</p>
            <p className="p-text dark:text-white">Web Designer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="app__header-img"
      >
        <img src={'/profile.png'} alt="profile-bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="overlay_circle"
          src={'/circle.svg'}
          alt="profile_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
          <div className="circle-cmp app__flex dark:bg-light-dark-bg">
            <img src={"/figma.png"} alt="circle" />
          </div>
          <div className="circle-cmp app__flex dark:bg-light-dark-bg">
            <img src={"/python.png"} alt="circle" />
          </div>
          <div className="circle-cmp app__flex dark:bg-light-dark-bg">
            <img src={"/react.png"} alt="circle" />
          </div>
      </motion.div>

    </div>
  )
};

export default AppWrap(Header, 'home');
