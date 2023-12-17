"use client"

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.css";
import { AppWrap, MotionWrap } from "../../wrapper";

const abouts = [
  { title: 'Web Developer', description: 'I am a web developer with a passion for building beautiful and functional web        applications', imgUrl: '/about01.png' },
  { title: 'Frontend Developer', description: 'I am a frontend developer with a passion for building beautiful and functional web applications', imgUrl: '/about02.png' },
  { title: 'React Native', description: 'I am a mobile app developer with a passion for building beautiful and functional web applications', imgUrl: '/about03.png' },
]

const About = () => {

  return (
    <>
      <h2 className="head-text">I know that <span>Good Development</span><br />means <span>Good Bussiness</span>
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
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
