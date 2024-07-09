import React, { useState } from 'react';
import Project from './Project';
import { projects } from '../data/projects';

function Projects() {
  const initialNumberOfItems = 6;
  const [numOfResults, setNumOfResults] = useState(initialNumberOfItems);

  function showMore() {
    setNumOfResults(projects.length);
  }

  function showLess() {
    setNumOfResults(initialNumberOfItems);
  }

  return (
    <div name='projects' className='w-full h-full bg-[#0a192f] text-center'>
      <div className='max-w-[80%] w-[1000px] mx-auto text-center flex flex-col justify-center items-center'>
        <div data-aos='fade-up' data-aos-delay='400'>
          <p className='text-3xl font-bold text-[#ccd6f6] mb-4 mt-[7rem]'>
            Other Noteworthy Projects
          </p>
          <a href='#' className='text-[#64ffda]'>
            View the archive
          </a>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center py-8'>
          {projects.slice(0, numOfResults).map((project, index) => (
            <Project project={project} key={index} delay={200 + index * 100} />
          ))}
        </div>

        <div data-aos='fade-up' data-aos-delay='400'>
          {numOfResults < projects.length ? (
            <div>
              <button onClick={() => showMore()} class='relative inline-block my-11 mb-[7rem]'>
                <span
                  class='absolute top-0 left-0 rounded h-full px-8 py-4 border border-[#64ffda]'
                  style={{ backgroundColor: '#64ffda' }}
                  transition-all
                  duration-300
                >
                  <span class='opacity-0 font-medium'>Show More</span>
                </span>
                <span
                  class='font-medium relative inline-block rounded border bg-[#0a192f] px-8 py-4 text-[#64ffda] 
                border-[#64ffda] transition-all duration-200 ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px]'
                >
                  Show More
                </span>
              </button>
            </div>
          ) : (
            <button onClick={() => showLess()} class='relative inline-block my-11 mb-[7rem]'>
              <span
                class='absolute top-0 left-0 rounded h-full px-8 py-4 border border-[#64ffda]'
                style={{ backgroundColor: '#64ffda' }}
                transition-all
                duration-300
              >
                <span class='opacity-0 font-medium'>Show Less</span>
              </span>
              <span
                class='font-medium relative inline-block rounded border bg-[#0a192f] px-8 py-4 text-[#64ffda] 
            border-[#64ffda] transition-all duration-200 ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px]'
              >
                Show Less
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
