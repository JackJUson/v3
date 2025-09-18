import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import NavLink from './NavLink';
import { useDetectScroll } from '@smakss/react-scroll-direction';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [scrollDir] = useDetectScroll({});

  const [scrollY, setScrollY] = useState(window.scrollY);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full h-[70px] flex justify-center items-center duration-300
      bg-[#0a192f] text-[#ccd6f6] px-8 z-50 bg-opacity-80 bg-clip-padding blur-backdrop-filter
      ${scrollDir === 'down' ? 'translate-y-[-100%]' : ''}
      ${scrollY === 0 ? 'py-11' : 'shadow-2xl'}`}
    >
      <div className='flex w-full justify-between items-center'>
        <Link to='home' smooth={true} duration={500}>
          <img
            src={Logo}
            alt='Logo Image'
            style={{ width: '50px' }}
            className='cursor-pointer'
            data-aos='fade-in'
            data-aos-delay='0'
          />
        </Link>
        {/* Main menu */}
        <ul className='hidden md:flex items-center'>
          <NavLink screen={true} link={'home'} name={'Home'} delay={'0'} />
          <NavLink screen={true} link={'about'} name={'About'} delay={'100'} />
          <NavLink screen={true} link={'skills'} name={'Experience'} delay={'200'} />
          <NavLink screen={true} link={'work'} name={'Projects'} delay={'300'} />
          <NavLink screen={true} link={'contact'} name={'Contact'} delay={'400'} />
          <li data-aos='fade-in' data-aos-delay='400'>
            <a class='relative inline-block' href='/Resume.pdf' target='_blank'>
              <span
                class='absolute top-0 left-0 rounded h-full px-3 py-1 mx-2 border border-[#64ffda]'
                style={{ backgroundColor: '#64ffda' }}
                transition-all
                duration-300
              >
                <span class='opacity-0 font-medium'>Resume</span>
              </span>
              <span
                class='font-medium relative inline-block rounded border bg-[#0a192f] px-3 py-1 mx-2 text-[#64ffda] 
              border-[#64ffda] transition-all duration-200 ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px]'
              >
                Resume
              </span>
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className='md:hidden z-10 cursor-pointer text-2xl'
        data-aos='fade-in'
        data-aos-delay='0'
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <NavLink link={'home'} name={'Home'} handleClick={handleClick} />
        <NavLink link={'about'} name={'About'} handleClick={handleClick} />
        <NavLink link={'skills'} name={'Experience'} handleClick={handleClick} />
        <NavLink link={'work'} name={'Projects'} handleClick={handleClick} />
        <NavLink link={'contact'} name={'Contact'} handleClick={handleClick} />
        <li className='my-6 text-4xl hover:text-[#64ffda] duration-300'>
          <a href='/Resume.pdf' target='_blank'>
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
