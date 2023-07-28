import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className='sticky top-0 z-[999] p-2 bg-gradient-to-b from-[#1f1f1f] to-transparent'>
    <div
      className="flex items-center justify-center md:flex-row md:justify-between px-8 py-4"
    >
      <div className="flex items-center space-x-4" id='header'>
        <div className="flex justify-center md:mx-0 md:mr-4 md:items-center md:justify-start">
          <Image
            src="https://user-images.githubusercontent.com/32769592/256317225-f3c7607f-e661-4d0a-96a1-83665e4918bc.png"
            alt="Logo"
            width={64}
            height={64}
            className='min-w-[32px]'
          />
        </div>
        <h1 className="font-reem-kufi text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-slate-100">Query IQ</h1>
      </div>
      <div className="flex items-center text-slate-200 mr-4">
        <ul className="menu-items flex space-x-4 lg:space-x-8 text-xl md:text-2xl lg:text-4xl">
          <li className="py-2 hover:text-gray-700 transition-colors duration-200">
            <a href="#about">About</a>
          </li>
          <li className="py-2 hover:text-gray-700 transition-colors duration-200">
            <a href="#features">Features</a>
          </li>
          <li className="py-2 hover:text-gray-700 transition-colors duration-200">
            <a href="#faq">FAQ</a>
          </li>
          <li className="py-2 hover:text-gray-700 transition-colors duration-200">
            <a href="#team">Team</a>
          </li>
          <li className="py-2 hover:text-gray-700 transition-colors duration-200">
            <a
              href="https://github.com/oslabs-beta/QueryIQ/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Header;
