import React from "react";
import { BsPerson } from "react-icons/bs";
import { RxDiscordLogo } from "react-icons/rx";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

function Social() {
  return (
    <div className="hidden md:flex text-[#a8b2d1] text-xs">
      <div
        className="fixed bottom-0 left-[50px] flex-col h-[340px]"
        data-aos="fade-in"
        data-aos-delay="2400"
      >
        <div className="h-full flex flex-col justify-center items-center">
          <ul className="h-full flex flex-col justify-between mb-10">
            <li>
              <a href="https://github.com/JackJUson" target="_blank">
                <FiGithub
                  size={20}
                  className="hover:text-[#64ffda] duration-300 transform hover:-translate-y-1"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jackson-jung-07837616a/"
                target="_blank"
              >
                <FiLinkedin
                  size={20}
                  className="hover:text-[#64ffda] duration-300 transform hover:-translate-y-1"
                />
              </a>
            </li>
            <li>
              <a
                href="https://discordapp.com/users/169382718587535360"
                target="_blank"
              >
                <RxDiscordLogo
                  size={20}
                  className="hover:text-[#64ffda] duration-300 transform hover:-translate-y-1"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jacksonwjung/?hl=en"
                target="_blank"
              >
                <FaInstagram
                  size={20}
                  className="hover:text-[#64ffda] duration-300 transform hover:-translate-y-1"
                />
              </a>
            </li>
            <li>
              <a href='/Resume.pdf' target="_blank">
                <BsPerson
                  size={20}
                  className="hover:text-[#64ffda] duration-300 transform hover:-translate-y-1"
                />
              </a>
            </li>
          </ul>
          <div className="h-2/5 border-r-[1px] border-[#a8b2d1]"></div>
        </div>
      </div>
      <div
        className="fixed bottom-[128px] right-[-140px] tracking-[0.2em] w-[400px]"
        data-aos="fade-in"
        data-aos-delay="2400"
      >
        <div className="flex items-center rotate-90">
          <a
            href="mailto:jackson.w.jung@gmail.com"
            target="_blank"
            className="mr-11 hover:text-[#64ffda] duration-200 transform hover:-translate-x-1.5 "
          >
            jackson.w.jung@gmail.com
          </a>
          <div className="w-full h-full border-t-[1px] border-[#a8b2d1]"></div>
        </div>
      </div>
    </div>
  );
}

export default Social;
