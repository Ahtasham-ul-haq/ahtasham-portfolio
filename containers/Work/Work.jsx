"use client";

import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.css";
import Image from "next/image";

const works = [
  {
    title: "Gramify",
    description: "A Full Stack Social Media App created by React JS, Tailwind CSS, and Appwrite.io as a Backend. It is a fully functional social media app where you can upload posts like Instagram inclues likes, save and CRUD features.",
    imgUrl: "/work0.png",
    projectLink: "https://gramify.vercel.app/",
    codeLink: "https://github.com/Ahtasham-ul-haq/gramify",
    tag: "React JS",
  },
  {
    title: "JS Mastery Resources",
    description: "A javascript mastery resources page clone created by Next JS, Tailwind CSS, and Sanity.io as a CMS. This page is fully responsive and search engine optimized.",
    imgUrl: "/about04.png",
    projectLink: "https://jsm-clone-chi.vercel.app/",
    codeLink: "https://github.com/Ahtasham-ul-haq/jsm_clone",
    tag: "Next JS",
  },
  {
    title: "Codex",
    description: "A modern codind blog build by Next JS, Tailwind CSS, and Graph QL as a CMS. It is a multipage website. It is a fully responsive website with unique layout.",
    imgUrl: "/about03.png",
    projectLink: "https://codex-snowy-theta.vercel.app/",
    codeLink: "https://github.com/Ahtasham-ul-haq/codex",
    tag: "Next JS",
  },
  {
    title: "Hoobank",
    description: "A modern UI banking landing page created by React JS, and Tailwing CSS. A fully responsive website can be run on all devices with unique.",
    imgUrl: "/about02.png",
    projectLink: "https://hoobank-liard-psi.vercel.app/",
    codeLink: "https://github.com/Ahtasham-ul-haq/hoobank",
    tag: "React JS",
  },
  {
    title: "Manage Landing Page",
    description: "A modern Landing Page",
    imgUrl: "/about01.png",
    projectLink: "https://ahtasham-ul-haq.github.io/manage-landing-page/",
    codeLink: "https://github.com/Ahtasham-ul-haq/manage-landing-page",
    tag: "UI/UX",
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  // const [works, setWorks] = useState([])
  // const [filterWork, setFilterWork] = useState([])

  // useEffect(() => {
  //   const query = '*[_type == "works"]'

  //   client.fetch(query)
  //     .then((data) => {
  //       setWorks(data)
  //       setFilterWork(data)
  //     })
  // }, [])

  const handleWorkFilter = (item) => { };
  return (
    <>
      <h2 className="head-text dark:text-white">
        My Creative <span className="dark:text-yellow-bg">Portfolio </span>
        Section
      </h2>
      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio-lg"
      >
        {works.map((work, index) => (
          <div className="app__work-item flex items-center" key={index}>
            <div className="app__work-img app__flex">
              <Image width={230} height={230} priority={true} src={work.imgUrl} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text dark:text-white">{work.title}</h4>
              <p
                className="p-text dark:text-white/70"
                style={{ marginTop: 10 }}
              >
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text dark:text-white">{work.tag}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <div className="app__work-item flex items-center" key={index}>
            <div className="app__work-img app__flex">
              <Image width={230} height={230} priority={true} src={work.imgUrl} alt={work.title} />
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text dark:text-white">{work.title}</h4>
              <p
                className="p-text dark:text-white/70"
                style={{ marginTop: 10 }}
              >
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text dark:text-white">{work.tag}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg  "
);
