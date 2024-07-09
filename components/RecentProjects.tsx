import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/Pin";
import { FaEye, FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(
          ({ id, title, des, img, iconLists, liveLink, githubLink }) => (
            <div
              key={id}
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] sm:w-[570px] flex items-center justify-center w-[80vw]"
            >
              <PinContainer
                title={`visit`}
                // href={link}
              >
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 rounded-lg absolute top-2 bottom-0 p-3 left-4 rotate-3 object-contain"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </p>
                <div className="flex items-center justify-between mt-7">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex items-center justify-center p-2 rounded-lg">
                      <Link
                        target="_blank"
                        href={githubLink}
                        className="flex lg:text-xl md:text-xs text-sm text-purple"
                      >
                        Code
                      </Link>
                      <FaEye className="ml-2 mt-1" color="#CBACF9" />
                    </div>
                    <div className="flex items-center justify-center bg-[#161A31] p-2 rounded-lg">
                      <Link
                        target="_blank"
                        href={liveLink}
                        className="flex lg:text-xl md:text-xs text-sm text-white"
                      >
                        Live Site
                      </Link>
                      <FaLocationArrow className="ml-2 mt-1" color="#fff" />
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
