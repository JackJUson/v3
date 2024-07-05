import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { featuredProjects as projects } from "../data/featured";

function Work() {
  return (
    <div name="work" className="w-full text-[#ccd6f6] bg-[#0a192f]">
      <div className="max-w-[80%] w-[1000px] mx-auto p-11 flex flex-col justify-center">
        <div className="my-11">
          <h1
            className="text-3xl font-bold inline border-b-2 border-[#64ffda]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Some Apps I’ve Built
          </h1>
        </div>

        {projects.map((project, index) =>
          index % 2 === 0 ? (
            <div
              className="flex max-h-[50%] mb-[4rem] background"
              data-aos="fade-up"
              data-aos-delay="300"
              key={index}
            >
              <div className="hidden md:flex items-center hover:scale-105 duration-300">
                <a href={project.github} target="_blank">
                  <img
                    src={project.image}
                    alt="Project Image"
                    className="w-full shadow-2xl rounded-sm object-fill"
                  />
                </a>
              </div>
              <div className="text-left md:text-right items-start md:items-end flex flex-col justify-evenly min-h-[350px] sm:z-40">
                <div>
                  <h3 className="text-[#64ffda] text-sm tracking-wide mb-2">
                    Featured Project
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-3xl font-bold tracking-wide hover:text-[#64ffda] duration-200"
                  >
                    {project.title}
                  </a>
                </div>
                <p className="md:bg-[#112240] md:w-[130%] min-w-[200px] md:p-6 md:pr-9 z-40 rounded-sm shadow-xl text-[#a8b2d1]">
                  {project.description}
                </p>
                <ul className="flex justify-between text-sm w-[50vw] md:w-[130%] md:min-w-[200px] lg:w-[90%] z-40 font-thin">
                  {project.techs.map((tech, techIndex) => (
                    <li className="cursor-default" key={techIndex}>
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex">
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
            </div>
          ) : (
            <div
              className="flex max-h-[50%] mb-[4rem] background"
              data-aos="fade-up"
              data-aos-delay="300"
              key={index}
            >
              <div className="text-left items-start flex flex-col justify-evenly min-h-[350px]">
                <div>
                  <h3 className="text-[#64ffda] text-sm tracking-wide mb-2">
                    Featured Project
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-3xl font-bold tracking-wide hover:text-[#64ffda] duration-200"
                  >
                    {project.title}
                  </a>
                </div>
                <p className="md:bg-[#112240] md:w-[130%] min-w-[200px] md:p-6 md:pl-7 z-40 rounded-sm shadow-xl text-[#a8b2d1]">
                  {project.description}
                </p>
                <ul className="flex wrap justify-between text-sm w-[50vw] md:w-[150%] md:min-w-[200px] lg:w-[120%] z-40 font-thin">
                  {project.techs.map((tech, techIndex) => (
                    <li className="cursor-default margin" key={techIndex}>
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex">
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
              <div className="hidden md:flex items-center hover:scale-105 duration-300 max-w-[500px]">
                <a href={project.github} target="_blank">
                  <img
                    src={project.image}
                    alt="Project Image"
                    className="w-full shadow-2xl rounded-sm"
                  />
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Work;
