"use client"

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.css";
import { AppWrap, MotionWrap } from "../../wrapper";
import Image from "next/image";

const abouts = [
  { title: 'About me', description: 'I am a web developer with a passion for building responsive and functional web applications', imgUrl: '/about04.png' },
  { title: 'Frontend Development', description: 'I can create websites using HTML, CSS, JavaScript, React, and Next JS. I can convert figma designs into fully functional and interactive web applications.', imgUrl: '/about02.png' },
  { title: 'Responsive Designs', description: 'I can create responsive web designs with CSS frameworks like Tailwind CSS, for theming and more.', imgUrl: '/about06.png' },
  { title: 'Next JS', description: 'I can create lightning fast website using Next JS, which one of the leading frontend framework includes multi-routing and SSR.', imgUrl: '/about05.png' },
]

const About = () => {

  return (
    <>
      <h2 className="head-text dark:text-white">I know that <span className="dark:text-yellow-bg">Good Development</span><br />means <span className="dark:text-yellow-bg">Good Bussiness</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <Image className="" width={170} height={170} priority={true} src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text dark:text-white" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text dark:text-white/70" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
