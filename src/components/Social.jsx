import React from "react";
import { BsPerson } from "react-icons/bs";
import { RxDiscordLogo } from "react-icons/rx";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import Resume from "../assets/cv.pdf";
import SocialLink from "./SocialLink";

function Social() {
  return (
    <div className="hidden lg:flex text-[#ccd6f6] text-xs">
      <div className="fixed bottom-0 left-[55px] flex-col h-[340px]">
        <div className="h-full flex flex-col justify-center items-center">
          <ul className="h-full flex flex-col justify-between mb-10">
            <li>
              <a href="">
                <FiGithub
                  size={20}
                  className="hover:text-[#64ffda] duration-300 transform hover:-translate-y-1"
                />
              </a>
            </li>
            <li>
              <a href="">
                <FiLinkedin
                  size={20}
                  className="hover:text-[#64ffda] duration-300 transform hover:-translate-y-1"
                />
              </a>
            </li>
            <li>
              <a href="">
                <RxDiscordLogo
                  size={20}
                  className="hover:text-[#64ffda] duration-300 transform hover:-translate-y-1"
                />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram
                  size={20}
                  className="hover:text-[#64ffda] duration-300 transform hover:-translate-y-1"
                />
              </a>
            </li>
            <li>
              <a href="">
                <BsPerson
                  size={20}
                  className="hover:text-[#64ffda] duration-300 transform hover:-translate-y-1"
                />
              </a>
            </li>
          </ul>
          <div className="h-2/5 border-r-[1px] border-[#8892b0]"></div>
        </div>
      </div>
      <div className="fixed bottom-[128px] right-[-125px] rotate-90 tracking-[0.2em] w-[400px]">
        <div className="flex items-center">
          <a
            href=""
            className="mr-11 hover:text-[#64ffda] duration-200 transform hover:-translate-x-1.5 "
          >
            jackson.w.jung@gmail.com
          </a>
          <div className="w-full h-full border-t-[1px] border-[#8892b0]"></div>
        </div>
      </div>
    </div>
  );
}

export default Social;
