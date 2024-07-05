import React from 'react';

function Contact() {
  return (
    <div
      name='contact'
      className='w-full h-[50vh] min-h-[600px] bg-[#0a192f] text-[#8892b0] text-center'
    >
      <div className='h-full max-w-[80%] w-[1000px] mx-auto flex flex-col justify-center items-center'>
        <h3 className='text-[#64ffda] tracking-wider' data-aos='fade-up' data-aos-delay='500'>
          What's Next?
        </h3>
        <h1
          className='text-5xl md:text-6xl text-[#ccd6f6] block font-bold my-6'
          data-aos='fade-up'
          data-aos-delay='500'
        >
          Get In Touch
        </h1>
        <p className='max-w-[600px] mx-8' data-aos='fade-up' data-aos-delay='500'>
          I am currently looking for new opportunities so my inbox is always open. Whether you have
          a question or just want to say hi, please send me a message and I'll get back to you!
        </p>
        <div data-aos='fade-up' data-aos-delay='500'>
          <a
            href='mailto:jackson.w.jung@gmail.com'
            target='_blank'
            class='relative inline-block my-11 '
          >
            <span
              class='absolute top-0 left-0 rounded h-full px-8 py-4 border border-[#64ffda]'
              style={{ backgroundColor: '#64ffda' }}
              transition-all
              duration-300
            >
              <span class='opacity-0 font-medium'>Say Hello</span>
            </span>
            <span
              class='font-medium relative inline-block rounded border bg-[#0a192f] px-8 py-4 text-[#64ffda] 
            border-[#64ffda] transition-all duration-200 ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px]'
            >
              Say Hello
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
