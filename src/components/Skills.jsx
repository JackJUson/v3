import React from "react";

function Skills() {
  return (
    <div name="skills" className="w-full h-full bg-[#0a192f]">
      {/* Container */}
      <div
        className="min-h-[600px] max-w-[80%] w-[1000px] mx-auto flex justify-center items-center"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="w-[100%] md:w-[70%]">
          <p className="text-3xl font-bold inline border-b-4 border-[#64ffda] text-[#ccd6f6]">
            Where I’ve Worked
          </p>
          <div className="flex mt-11 text-[#64ffda]">
            <ul className="text-sm">
              <li className="p-2">Frontend Simplified</li>
            </ul>
            <div className="flex flex-col ml-4">
              <div className="text-[#ccd6f6] mb-4">
                <h4 className="font-bold text-lg">
                  Frontend Developer{" "}
                  <a
                    href="https://frontendsimplified.com/"
                    className="text-[#64ffda]"
                  >
                    &nbsp;@ Frontend Simplified
                  </a>
                </h4>
                <h5 className="opacity-70 text-sm">Sep 2022 - Present</h5>
              </div>
              <ul className="relative flex flex-col justify-evenly h-full text-[#a8b2d1]">
                <li className="before-arrow pl-7 my-2 text-[15px]">
                  Support students and developers using HTML, CSS, Flexbox,
                  JavaScript and React best practises.
                </li>
                <li className="before-arrow pl-7 my-2 text-[15px]">
                  Utilized debugging best practises using Google Chrome inspect
                  element tooling.
                </li>
                <li className="before-arrow pl-7 my-2 text-[15px]">
                  Simplified difficult programming concepts including responsive
                  website development, Promises and API requests.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
