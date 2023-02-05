import React from "react";
import { CiFolderOn } from "react-icons/ci";
import { FiExternalLink, FiGithub } from "react-icons/fi";

function Project({ project }) {
  return (
    <div
      className="shadow-sm shadow-[#040c16] hover:-translate-y-1.5 duration-300
      group text-[#a8b2d1] bg-[#112240] rounded-sm py-3 px-1"
    >
      <div className="flex justify-between items-center m-6">
        <CiFolderOn size={40} className="text-[#64ffda]" />
        <div className="flex items-center">
          <a
            href={project.github}
            target="_blank"
            className="mr-6 hover:text-[#64ffda] duration-200"
          >
            <FiGithub size={20} />
          </a>
          <a
            href={project.live}
            target="_blank"
            className="hover:text-[#64ffda] duration-200"
          >
            <FiExternalLink size={20} />
          </a>
        </div>
      </div>
      <div className="flex flex-col text-left m-6 min-h-[150px]">
        <a
          href={project.live}
          target="_blank"
          className="group-hover:text-[#64ffda] font-bold text-[#ccd6f6] text-xl"
        >
          {project.title}
        </a>
        <p className="text-sm my-4 pr-4">{project.description}</p>
      </div>
      <ul className="flex m-6 w-1/2 justify-between text-xs opacity-70">
        {project.techs.map((tech, techIndex) => (
          <li className="cursor-default" key={techIndex}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Project;
