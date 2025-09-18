import React from 'react';
import Profile from '../assets/upscaleprofile.png';

function About() {
  return (
    <div name='about' className='w-full h-full bg-[#0a192f] flex justify-evenly items-center'>
      <div
        className='lg:h-[50vh] min-h-[500px] max-w-[80%] w-[1000px] mx-auto flex 
        justify-evenly text-[#8892b0] flex-col lg:flex-row items-center'
        data-aos='fade-up'
        data-aos-delay='400'
      >
        <p className='lg:w-1/2 m-11 mt-[4rem] lg:m-0'>
          <span
            className='text-3xl text-[#ccd6f6] block font-bold border-b-2 
            border-[#64ffda] w-[155px] mb-5'
          >
            About Me
          </span>
          Hey! I’m Jackson — a{' '}
          <span className='text-[#64ffda] text-underline'>backend engineer</span>
          &nbsp;in Telstra’s <span className='text-[#64ffda] text-underline'>Payments team</span>,
          where I design and ship &nbsp;<span className='text-[#64ffda] text-underline'>APIs</span>{' '}
          and <span className='text-[#64ffda] text-underline'>microservices</span> that keep
          transactions humming.
          <br />
          <br />I also teach frontend development{' '}
          <span className='text-[#64ffda] text-underline'>COMP6080</span>
          &nbsp;at <span className='text-[#64ffda] text-underline'>UNSW</span>, helping students
          turn tricky topics into clean, working code.
          <br />
          <br />
          Outside of code, you’ll find me sprinting or doing calisthenics, playing a little too much
          League, and planning trips to Japan!
          <br />
          <br />
          Here are a few technologies I’ve been working with recently:
          <ul className='relative h-full w-[70%] text-[#a8b2d1] grid grid-cols-2 gap-4 text-sm mt-4'>
            <li className='before-arrow pl-7'>Java (Spring Boot)</li>
            <li className='before-arrow pl-7'>TypeScript</li>
            <li className='before-arrow pl-7'>AWS</li>
            <li className='before-arrow pl-7'>Kubernetes</li>
            <li className='before-arrow pl-7'>Terraform</li>
            <li className='before-arrow pl-7'>Splunk</li>
          </ul>
        </p>
        <div className='hidden sm:block mb-[4rem] lg:mb-0'>
          <div
            className='group relative w-[300px] rounded-md bg-[#64ffda] transition-transform duration-200
            hover:-translate-x-1 hover:-translate-y-1'
          >
            <div className='relative block w-full rounded-md overflow-hidden'>
              <img
                src={Profile}
                alt='Profile Image'
                className='img relative w-full h-full object-cover rounded-md mix-blend-multiply grayscale contrast-100 transition-all duration-200
                group-hover:mix-blend-normal group-hover:grayscale-0'
              />
              <div
                className='pointer-events-none absolute inset-0 rounded-md bg-[#0a192f] mix-blend-screen transition-opacity duration-200
                group-hover:opacity-0'
              ></div>
            </div>
            <div
              className='absolute inset-0 rounded-md border-2 border-[#64ffda] -z-10 translate-x-[14px] translate-y-[14px]
              transition-transform duration-200 group-hover:translate-x-[22px] group-hover:translate-y-[22px]'
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
