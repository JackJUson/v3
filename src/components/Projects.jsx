import React from "react";
import Project from "./Project";

function Projects() {
  return (
    <div name="projects" className="w-full h-full bg-[#0a192f] text-center">
      <div className="min-h-[900px] max-w-[80%] w-[1000px] mx-auto text-center flex flex-col justify-center items-center">
        <p className="text-3xl font-bold text-[#ccd6f6] mb-4">
          Other Noteworthy Projects
        </p>
        <a href="#" className="text-[#64ffda]">
          View the archive
        </a>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center pt-8">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
        <button
          className="border-[#ccd6f6] text-[#ccd6f6] group border-2 px-6 py-3 my-11 flex items-center rounded
          hover:bg-[#64ffda] hover:bg-opacity-40 hover:border-[#64ffda] hover:text-white duration-300"
        >
          Show More
        </button>
      </div>
    </div>
  );
}

export default Projects;