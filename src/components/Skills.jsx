import React from 'react';

function Skills() {
  return (
    <div name='skills' className='w-full h-full bg-[#0a192f]'>
      {/* Container */}
      <div
        className='min-h-[600px] max-w-[80%] w-[1000px] mx-auto flex justify-center items-center'
        data-aos='fade-up'
        data-aos-delay='500'
      >
        <div className='w-[100%] md:w-[70%]'>
          <p className='text-3xl font-bold inline border-b-4 border-[#64ffda] text-[#ccd6f6]'>
            Where I’ve Worked
          </p>
          <div className='flex mt-11 text-[#64ffda]'>
            <ul className='text-sm'>
              <li className='p-2'>Telstra</li>
            </ul>
            <div className='flex flex-col ml-4'>
              <div className='text-[#ccd6f6] mb-4'>
                <h4 className='font-bold text-lg'>
                  Grad Software Engineer{' '}
                  <a href='https://www.telstra.com.au/' target='_blank' className='text-[#64ffda] text-underline'>
                    &nbsp;@ Telstra Limited
                  </a>
                </h4>
                <h5 className='opacity-70 text-sm'>Feb 2024 - Present</h5>
              </div>
              <ul className='relative flex flex-col justify-evenly h-full text-[#a8b2d1]'>
                <li className='before-arrow pl-7 my-2 text-[15px]'>
                  Improved test automation coverage and minimized defects in the MyTelstra
                  application for iOS, Android, and web platforms.
                </li>
                <li className='before-arrow pl-7 my-2 text-[15px]'>
                  Updated and optimized automation test scripts following UI updates to ensure
                  reliable and efficient testing.
                </li>
                <li className='before-arrow pl-7 my-2 text-[15px]'>
                  Conducted comprehensive testing and debugging using Java, Selenium, and Chrome
                  DevTools to enhance application performance and user experience.
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
