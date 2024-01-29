"use client";

import React from "react";
import { motion } from "framer-motion";
import "./Header.css";
import { AppWrap } from "../../wrapper";
import Link from "next/link";
import Image from "next/image";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      {/* <div className="absolute w-12 h-12 bg-gradient-to-tr from-slate-400 to-white left-32 bottom-36 rounded-full" /> */}
      {/* <div className="absolute w-48 h-48 bg-gradient-to-tl from-slate-500 to-white/75 right-12 top-24 dark:hidden rounded-full" /> */}
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
              <h1 className="text-[2.75rem] font-medium text-center text-black-color dark:text-white font-abril">
                Ahtasham
              </h1>
            </div>
          </div>
          <div className="tag-cmp app__flex dark:bg-light-dark-bg">
            <p className="p-text dark:text-white">Web Developer</p>
            <p className="p-text dark:text-white">Web Designer</p>
          </div>
          <Link
            href={"mailto:ahtasham1802@gmail.com"}
            className="min-w-[290px] transition duration-300 box-shadow-white shadow-lg lg:mt-24 mt-12 flex flex-row justify-start items-center my-4 p-4 rounded-[10px] cursor-pointer dark:bg-light-dark-bg"
          >
            <img
              src="/email.png"
              alt="email"
              width={40}
              height={40}
              className="mx-[0.7rem]"
            />
            <p className="text-[0.8rem] dark:text-white">
              ahtasham1802@gmail.com
            </p>
          </Link>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="app__header-img"
      >
        {/* <img src={'/profile.png'} alt="profile-bg" className="profile_img" /> */}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle mix-blend-soft-light"
          src={"/circle.svg"}
          alt="profile_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        <div className="circle-cmp app__flex dark:bg-light-dark-bg">
          <Image src={"/figma.png"} width={60} height={60} alt="circle" />
        </div>
        <div className="circle-cmp app__flex dark:bg-light-dark-bg">
          <Image src={"/next.png"} width={90} height={90} alt="circle" />
        </div>
        <div className="circle-cmp app__flex dark:bg-light-dark-bg">
          <Image src={"/python.png"} width={42} height={42} alt="circle" />
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
