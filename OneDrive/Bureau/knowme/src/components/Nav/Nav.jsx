import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { motion } from 'framer-motion';
import './Nav.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <nav className="flex justify-between items-center bg-black shadow-black shadow-sm p-2">
      <div className="flex items-center">
        <img src="fulllogo.png" alt="logo" className="h-16 w-fit ml-8" />
      </div>
      <ul className="hidden md:flex items-center space-x-8 text-white">
        <li className="p-2 font-semibold text-lg font-sans transition duration-300 ease-in-out transform hover:text-purple-400 hover:-translate-y-1">
          <a href="#home">Home</a>
        </li>
        <li className="p-2 font-semibold text-lg font-sans transition duration-300 ease-in-out transform hover:text-purple-400 hover:-translate-y-1">
          <a href="#know">What is KnowMe?</a>
        </li>
        <li>
          <button className="reward-btn">
            <span className="IconContainer">
            <svg  xmlns="http://www.w3.org/2000/svg"  fill="none"  viewBox="0 0 60 20"  className="box-top box" >
<path strokeLinecap="round" strokeWidth="4" stroke="#6A8EF6" d="M2 18L58" />
<circle strokeWidth="5" stroke="#6A8EF6"  fill="#101218" r="7" cy="9.5"  cx="20.5"  />
<circle strokeWidth="5" stroke="#6A8EF6" fill="#101218" r="7"cy="9.5"cx="38.5" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 58 44" className="box-body box" >
<mask fill="white" id="path-1-inside-1_81_19">
  <rect rx="3" height="44" width="58"></rect>
</mask>
<rect  mask="url(#path-1-inside-1_81_19)" strokeWidth="8" stroke="#6A8EF6" fill="#101218" rx="3" height="44" width="58" />
<line strokeWidth="6" stroke="#6A8EF6" y2="29" x2="58" y1="29"x1="-3.61529e-09"/>
<path strokeLinecap="round" strokeWidth="5" stroke="#6A8EF6" d="M45.0005 20L36 3" />
<path strokeLinecap="round" strokeWidth="5" stroke="#6A8EF6" d="M21 3L13.0002 19.9992" />
</svg>

              <span className="coin"></span>
            </span>
            <span className="text">Earning</span>
          </button>
        </li>
      </ul>
      <div className="hidden md:flex items-center space-x-5">
        <button className="btn-17 rounded-lg">
          <span className="text-container">
            <span className="text">Connect</span>
          </span>
        </button>
        <button className="Btn3">
          Get Cards
          <svg className="svgIcon2" viewBox="0 0 576 512">
            <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
          </svg>
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>
      <motion.div
        className="md:hidden absolute top-16 left-0 w-full bg-black shadow-black shadow-sm"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
      >
        <Menu as="div" className="w-full">
          <Menu.Items as="ul" className="flex flex-col items-center space-y-4 text-white py-4">
            <Menu.Item as="li" className="p-2">
              <a href="#home">Home</a>
            </Menu.Item>
            <Menu.Item as="li" className="p-2">
              <a href="#know">What is KnowMe?</a>
            </Menu.Item>
            <Menu.Item as="li">
              <button className="reward-btn">
                <span className="IconContainer">
                <svg  xmlns="http://www.w3.org/2000/svg"  fill="none"  viewBox="0 0 60 20"  className="box-top box" >
<path strokeLinecap="round" strokeWidth="4" stroke="#6A8EF6" d="M2 18L58" />
<circle strokeWidth="5" stroke="#6A8EF6"  fill="#101218" r="7" cy="9.5"  cx="20.5"  />
<circle strokeWidth="5" stroke="#6A8EF6" fill="#101218" r="7"cy="9.5"cx="38.5" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 58 44" className="box-body box" >
<mask fill="white" id="path-1-inside-1_81_19">
  <rect rx="3" height="44" width="58"></rect>
</mask>
<rect  mask="url(#path-1-inside-1_81_19)" strokeWidth="8" stroke="#6A8EF6" fill="#101218" rx="3" height="44" width="58" />
<line strokeWidth="6" stroke="#6A8EF6" y2="29" x2="58" y1="29"x1="-3.61529e-09"/>
<path strokeLinecap="round" strokeWidth="5" stroke="#6A8EF6" d="M45.0005 20L36 3" />
<path strokeLinecap="round" strokeWidth="5" stroke="#6A8EF6" d="M21 3L13.0002 19.9992" />
</svg>

                  <span className="coin"></span>
                </span>
                <span className="text">Earning</span>
              </button>
            </Menu.Item>
            <Menu.Item as="li">
              <button className="btn-17 rounded-lg">
                <span className="text-container">
                  <span className="text">Connect</span>
                </span>
              </button>
            </Menu.Item>
            <Menu.Item as="li">
              <button className="Btn3">
                Get Cards
                <svg className="svgIcon2" viewBox="0 0 576 512">
                  <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
                </svg>
              </button>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </motion.div>
    </nav>
  );
}

export default Nav;










