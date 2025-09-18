import React from 'react';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[80%] w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#64ffda] tracking-wider mb-4' data-aos='fade-up' data-aos-delay='1000'>
          Hi, my name is
        </p>
        <h1
          className='text-5xl md:text-6xl lg:text-7xl font-bold text-[#ccd6f6] mb-3'
          data-aos='fade-up'
          data-aos-delay='1200'
        >
          Jackson Jung.
        </h1>
        <h2
          className='text-4xl md:text-5xl lg:text-7xl font-bold text-[#8892b0] mb-4'
          data-aos='fade-up'
          data-aos-delay='1400'
        >
          I turn coffee into code.
        </h2>
        <p
          className='text-[#8892b0] py-4 max-w-[620px] mb-4'
          data-aos='fade-up'
          data-aos-delay='1600'
        >
          Joke aside, I am actually a <span className='text-[#64ffda] text-underline'>backend</span>{' '}
          engineer at Telstra, building the payments APIs that keep the lights on (and the
          transactions flowing). I also teach{' '}
          <span className='text-[#64ffda] text-underline'>frontend</span> at UNSW, turning tricky
          concepts into those “aha!” moments.
        </p>
        <div data-aos='fade-up' data-aos-delay='1800'>
          <Link to='about' smooth={true} duration={600} class='relative inline-block'>
            <span
              class='absolute top-0 left-0 rounded h-full px-8 py-4 border border-[#64ffda]'
              style={{ backgroundColor: '#64ffda' }}
              transition-all
              duration-300
            >
              <span class='opacity-0 font-medium'>View Portfolio</span>
            </span>
            <span
              class='font-medium relative inline-block rounded border bg-[#0a192f] px-8 py-4 text-[#64ffda] 
            border-[#64ffda] transition-all duration-200 ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px]'
            >
              View Portfolio
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
