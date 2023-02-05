import React from "react";
import { CiFolderOn } from "react-icons/ci";
import { FiExternalLink, FiGithub } from "react-icons/fi";

function Project() {
  return (
    <div
      className="shadow-sm shadow-[#040c16] hover:-translate-y-2 duration-200 
      hover:font-bold text-[#a8b2d1] bg-[#112240] rounded-[3px]"
    >
      <div className="flex justify-between items-center m-4">
        <CiFolderOn size={40} className="text-[#64ffda]" />
        <div className="flex items-center">
          <a
            href=""
            target="_blank"
            className="mr-6 hover:text-[#64ffda] duration-200"
          >
            <FiGithub size={20} />
          </a>
          <a
            href=""
            target="_blank"
            className="hover:text-[#64ffda] duration-200"
          >
            <FiExternalLink size={20} />
          </a>
        </div>
      </div>
      <a href="" className="my-4">
        Project Title
      </a>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum optio
        corrupti totam ducimus deserunt perferendis?
      </p>
      <ul className="flex">
        <li>Tag</li>
        <li>Tag</li>
        <li>Tag</li>
      </ul>
    </div>
  );
}

export default Project;
