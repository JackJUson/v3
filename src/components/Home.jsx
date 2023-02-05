import React from "react";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[80%] w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p
          className="text-[#64ffda] tracking-wider mb-4 font-bold"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Hi, my name is
        </p>
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#ccd6f6] mb-3"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          Jackson Jung.
        </h1>
        <h2
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#8892b0] mb-4"
          data-aos="fade-up"
          data-aos-delay="1400"
        >
          I'm a Frontend Developer.
        </h2>
        <p
          className="text-[#8892b0] py-4 max-w-[500px] mb-4"
          data-aos="fade-up"
          data-aos-delay="1600"
        >
          I have a strong passion for software engineering with experience
          building responsive multiplatform web applications. Currently, I'm
          focused on making interactive websites with{" "}
          <span className="text-[#64ffda] text-underline">React</span> and{" "}
          <span className="text-[#64ffda] text-underline">NextJs</span>.
        </p>
        <div>
          <Link to="about" smooth={true} duration={600}>
            <button
              className="text-[#ccd6f6] border-[#ccd6f6] group border-2 px-6 py-3 my-2 flex items-center 
              rounded hover:bg-[#64ffda] hover:text-white hover:bg-opacity-40 hover:border-[#64ffda] duration-300"
              data-aos="fade-up"
              data-aos-delay="1800"
            >
              View Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
