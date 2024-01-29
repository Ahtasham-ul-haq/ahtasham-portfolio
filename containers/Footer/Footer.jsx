import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { TbBrandFiverr } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center text-white-800 body-text w-full gap-y-10 border-t border-lightGray-color dark:border-light-dark-bg bg-black-100 px-20 py-8 max-md:flex-col">
      <p>© 2024, All rights reserved.</p>
      <div className="flex gap-x-6">
        <Link
          target="_blank"
          href={"https://github.com/Ahtasham-ul-haq"}
          className="text-3xl text-gray-color dark:text-white hover:text-secondary-color"
        >
          <AiFillGithub />
        </Link>
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/ahtasham-ul-haq-9b0a41246/"}
          className="text-3xl text-gray-color dark:text-white hover:text-secondary-color"
        >
          <AiFillLinkedin />
        </Link>
        <Link
          target="_blank"
          href={"https://twitter.com/ahtasham1802"}
          className="text-3xl text-gray-color dark:text-white hover:text-secondary-color"
        >
          <RiTwitterXFill />
        </Link>
        <Link
          target="_blank"
          href={"https://www.fiverr.com/ahtasham1802?up_rollout=true"}
          className="text-3xl text-gray-color dark:text-white hover:text-secondary-color"
        >
          <TbBrandFiverr />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
