import React, { useEffect } from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Resume from "../assets/cv.pdf";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import NavLink from "./NavLink";
import { useDetectScroll } from "@smakss/react-scroll-direction";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [scrollDir] = useDetectScroll({});

  const [scrollY, setScrollY] = useState(window.scrollY);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full h-[70px] flex justify-center items-center duration-300
      bg-[#0a192f] text-gray-300 px-8 z-50 bg-opacity-80 bg-clip-padding blur-backdrop-filter
      ${scrollDir === "down" ? "translate-y-[-100%]" : ""}
      ${scrollY === 0 ? "mt-3" : "shadow-2xl"}`}
    >
      <div className="flex w-full justify-between items-center max-w-7xl">
        <Link to="home" smooth={true} duration={500}>
          <img
            src={Logo}
            alt="Logo Image"
            style={{ width: "60px" }}
            className="cursor-pointer hover:brightness-50 duration-300"
          />
        </Link>
        {/* Main menu */}
        <ul className="hidden md:flex items-center">
          <NavLink screen={true} link={"home"} name={"Home"} />
          <NavLink screen={true} link={"about"} name={"About"} />
          <NavLink screen={true} link={"work"} name={"Work"} />
          <NavLink screen={true} link={"contact"} name={"Contact"} />
          <li>
            <a
              className="border-2 border-gray-300 px-2 py-1 mx-3 flex items-center rounded
          hover:bg-[#64ffda] hover:bg-opacity-40 hover:text-white hover:border-[#64ffda] duration-300"
              href={Resume}
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer text-2xl"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <NavLink link={"home"} name={"Home"} handleClick={handleClick} />
        <NavLink link={"about"} name={"About"} handleClick={handleClick} />
        <NavLink link={"work"} name={"Work"} handleClick={handleClick} />
        <NavLink link={"contact"} name={"Contact"} handleClick={handleClick} />
        <li className="my-6 text-4xl hover:text-[#64ffda] duration-300">
          <a href={Resume} target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
