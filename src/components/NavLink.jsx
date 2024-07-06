import React from 'react';
import { Link } from 'react-scroll';

function NavLink({ screen, link, name, handleClick, delay }) {
  return screen ? (
    <li
      className='mx-6 hover:text-[#64ffda] duration-200 cursor-pointer'
      data-aos='fade-in'
      data-aos-delay={delay}
    >
      <Link to={link} smooth={true} duration={1000}>
        {name}
      </Link>
    </li>
  ) : (
    <li className='my-6 text-4xl hover:text-[#64ffda] duration-200 cursor-pointer'>
      <Link onClick={handleClick} to={link} smooth={true} duration={1000}>
        {name}
      </Link>
    </li>
  );
}

export default NavLink;
