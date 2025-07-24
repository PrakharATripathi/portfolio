import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import resume from "../assets/pdfs/prakhar.pdf";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggle && !event.target.closest('.mobile-menu-container')) {
        setToggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggle]);

  // Close mobile menu when scrolling
  useEffect(() => {
    const handleScrollClose = () => {
      if (toggle) setToggle(false);
    };

    window.addEventListener("scroll", handleScrollClose);
    return () => window.removeEventListener("scroll", handleScrollClose);
  }, [toggle]);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled 
          ? "bg-primary/95 backdrop-blur-sm shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-3'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt='logo'
            className='w-10 h-10 object-contain hover:rotate-12 transition-transform duration-300'
          />
          <p className='text-white text-[18px] font-bold cursor-pointer flex items-center'>
            Prakhar Tripathi
            <span className='sm:block hidden ml-2 text-secondary font-medium'>
              {" "}
              | <span className="text-[#915EFF]">Software Engineer</span>
            </span>
          </p>
        </Link>

        <div className='flex items-center gap-6'>
          {/* Social Media Links */}
          <div className='hidden md:flex items-center gap-5'>
            {/* GitHub */}
            <a
              href='https://github.com/PrakharATripathi'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center w-9 h-9 rounded-full bg-[#1A1A1A] hover:bg-[#333333] transition-all duration-300 shadow-md hover:shadow-[#915EFF]/40 hover:translate-y-[-2px]'
              aria-label='GitHub Profile'
              title="GitHub"
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='#FFFFFF'
              >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href='https://www.linkedin.com/in/prakhartripathi1'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center w-9 h-9 rounded-full bg-[#0077B5] hover:bg-[#0077B5]/90 transition-all duration-300 shadow-md hover:shadow-[#915EFF]/40 hover:translate-y-[-2px]'
              aria-label='LinkedIn Profile'
              title="LinkedIn"
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='#FFFFFF'
              >
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
            </a>
          </div>

          {/* Navigation Links - Desktop */}
          <ul className='list-none hidden sm:flex flex-row gap-8'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[17px] font-medium cursor-pointer transition-colors duration-300 relative group`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
                <span className='absolute bottom-[-5px] left-0 w-0 h-[2px] bg-[#915EFF] group-hover:w-full transition-all duration-300'></span>
              </li>
            ))}
          </ul>

          {/* Resume Download Button */}
          <a
            href={resume}
            download='Prakhar_Tripathi.pdf'
            className='hidden sm:flex items-center gap-2.5 text-white bg-gradient-to-r from-[#915EFF] to-[#7049c7] hover:from-[#A77BFF] hover:to-[#8A65DD] px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300 shadow-md hover:shadow-[#915EFF]/30 hover:translate-y-[-2px]'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
              <polyline points='14 2 14 8 20 8'></polyline>
              <line x1='16' y1='13' x2='8' y2='13'></line>
              <line x1='16' y1='17' x2='8' y2='17'></line>
              <polyline points='10 9 9 9 8 9'></polyline>
            </svg>
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <div className='sm:hidden flex flex-1 justify-end items-center mobile-menu-container'>
            <button
              onClick={() => setToggle(!toggle)}
              className='w-10 h-10 flex items-center justify-center rounded-full bg-primary/80 backdrop-blur-sm border border-[#2A2A40] shadow-lg hover:bg-[#1A1A30] transition-all duration-300'
              aria-label={toggle ? "Close menu" : "Open menu"}
            >
              <img
                src={toggle ? close : menu}
                alt='menu'
                className='w-[18px] h-[18px] object-contain transition-all duration-300'
              />
            </button>

            {/* Mobile Menu Dropdown - Animated */}
            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className='p-6 bg-[#0F0F1B]/90 backdrop-blur-lg absolute top-20 right-0 mx-4 my-2 min-w-[250px] z-10 rounded-xl shadow-xl border border-[#2A2A40]'
                >
                  <ul className='list-none flex flex-col gap-4'>
                    {navLinks.map((nav) => (
                      <li
                        key={nav.id}
                        className={`font-medium cursor-pointer text-[16px] ${
                          active === nav.title ? "text-white" : "text-secondary"
                        } hover:text-white transition-colors duration-300`}
                        onClick={() => {
                          setToggle(!toggle);
                          setActive(nav.title);
                        }}
                      >
                        <a 
                          href={`#${nav.id}`}
                          className="flex items-center gap-2 py-1"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#915EFF]"></span>
                          {nav.title}
                        </a>
                      </li>
                    ))}

                    {/* Mobile social links */}
                    <div className='flex gap-4 mt-5 py-3 border-t border-[#2A2A40]'>
                      <a
                        href='https://github.com/PrakharATripathi'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center justify-center w-9 h-9 rounded-full bg-[#1A1A1A] hover:bg-[#333333] transition-all duration-300 shadow-md'
                        aria-label='GitHub Profile'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='18'
                          height='18'
                          viewBox='0 0 24 24'
                          fill='#FFFFFF'
                        >
                          <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                        </svg>
                      </a>
                      <a
                        href='https://www.linkedin.com/in/prakhartripathi1'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center justify-center w-9 h-9 rounded-full bg-[#0077B5] hover:bg-[#0077B5]/90 transition-all duration-300 shadow-md'
                        aria-label='LinkedIn Profile'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='18'
                          height='18'
                          viewBox='0 0 24 24'
                          fill='#FFFFFF'
                        >
                          <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                        </svg>
                      </a>
                    </div>

                    {/* Mobile resume button */}
                    <li className='mt-2'>
                      <a
                        href={resume}
                        download='Prakhar_Tripathi.pdf'
                        className='flex items-center justify-center gap-2 text-white bg-gradient-to-r from-[#915EFF] to-[#7049c7] hover:from-[#A77BFF] hover:to-[#8A65DD] px-4 py-2.5 rounded-md transition-all duration-300 shadow-md w-full'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
                          <polyline points='14 2 14 8 20 8'></polyline>
                          <line x1='16' y1='13' x2='8' y2='13'></line>
                          <line x1='16' y1='17' x2='8' y2='17'></line>
                          <polyline points='10 9 9 9 8 9'></polyline>
                        </svg>
                        Download Resume
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
