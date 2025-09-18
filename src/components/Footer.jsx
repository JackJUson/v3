import React from 'react';

function Footer() {
  return (
    <div className='w-full bg-[#0a192f] text-[#a8b2d1] text-xs'>
      <div className='flex flex-col justify-center items-center py-4'>
        <p className='mb-2'>
          <a
            href='https://github.com/JackJUson/v3'
            target='_blank'
            className='hover:text-[#64ffda] duration-200'
          >
            Developed by Jackson Jung
          </a>
        </p>
        <p className='mb-2'>&copy; Copyright 2025 | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
