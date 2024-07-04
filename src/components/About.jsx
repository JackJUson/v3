import React from "react";
import Profile from "../assets/profile.png";

function About() {
  return (
    <div
      name="about"
      className="w-full h-full bg-[#0a192f] flex justify-evenly items-center"
    >
      <div
        className="lg:h-[50vh] min-h-[500px] max-w-[80%] w-[1000px] mx-auto flex 
        justify-evenly text-[#8892b0] flex-col lg:flex-row items-center"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <p className="lg:w-1/2 m-11 mt-[4rem] lg:m-0">
          <span
            className="text-3xl text-[#ccd6f6] block font-bold border-b-4 
            border-[#64ffda] w-[140px] mb-5"
          >
            About Me
          </span>
          Hi there! My name is Jackson and I love creating useful web
          applications that could help others and myself.
          <br />
          <br />
          My interest in{" "}
          <span className="text-[#64ffda] text-underline">
            web development
          </span>{" "}
          started with building my own websites such as productivity apps,
          games and tools during the lockdown of 2019.
          <br />
          <br />
          As of today, I have graduated from UNSW within Computer Science and working
          as a software engineer at {" "}
          <span className="text-[#64ffda] text-underline">
            Telstra!
          </span>
          <br />
          <br />
          Here are a few technologies I’ve been working with recently!
          <ul className="relative h-full w-[70%] text-[#a8b2d1] grid grid-cols-2 gap-4 text-sm mt-4">
            <li className="before-arrow pl-7">Java</li>
            <li className="before-arrow pl-7">Selenium</li>
            <li className="before-arrow pl-7">Appium</li>
            <li className="before-arrow pl-7">Node.js</li>
            <li className="before-arrow pl-7">Next.js</li>
            <li className="before-arrow pl-7">TypeScript</li>
          </ul>
        </p>
        <div className="relative group hidden sm:block group mb-[4rem] lg:mb-0">
          <img
            src={Profile}
            alt="Profile Image"
            className="relative w-[300px] z-20 rounded-md"
          />
          <div
            className="absolute border-2 rounded-md border-[#64ffda] w-[300px]
            h-[300px] top-5 left-5 z-10 group-hover:top-3 group-hover:left-3 duration-200"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default About;
