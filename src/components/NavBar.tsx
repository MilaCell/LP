"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClasses = `
    inline-flex items-center justify-start
    py-5 px-8 text-2xl leading-none
    bg-[#ffffff] text-black
    italic -skew-x-12
    transition-all duration-300
    hover:bg-[#fe090a]
    hover:px-10
    font-['Mona_Sans_Medium',_Tahoma,_sans-serif]
  `;

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 bg-transparent`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className='bg-[#fe090a] min-w-60 h-full -skew-x-12 px-6 py-[6.5px]'>
            
              <Link href="#Hero" className="flex-shrink-0  text-white">
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  width={180}
                  height={80}
                  className="w-auto h-full skew-x-12"
                  />
              </Link>
            </div>
              <nav className={`hidden md:flex`}>
            <Link href="#Hero" className={`${navLinkClasses}`}>
              <span className="skew-x-12 inline-block">Home</span>
            </Link>
            <Link href="#About" className={`${navLinkClasses}`}>
              <span className="skew-x-12 inline-block">Sobre</span>
            </Link>
            <Link href="#Service" className={`${navLinkClasses}`}>
              <span className="skew-x-12 inline-block">Serviços</span>
            </Link>
            <Link href="#WhyMe" className={`${navLinkClasses}`}>
              <span className="skew-x-12 inline-block">Diferenciais</span>
            </Link>
            <Link href="#Contact" className={`${navLinkClasses}`}>
              <span className="skew-x-12 inline-block">Contato</span>
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#070708]">
          <Link href="#Hero" className="block py-2 px-4 text-white hover:bg-[#fe090a]">Home</Link>
          <Link href="#About" className="block py-2 px-4 text-white hover:bg-[#fe090a]">Sobre</Link>
          <Link href="#Service" className="block py-2 px-4 text-white hover:bg-[#fe090a]">Serviços</Link>
          <Link href="#WhyMe" className="block py-2 px-4 text-white hover:bg-[#fe090a]">Diferenciais</Link>
          <Link href="#Contact" className="block py-2 px-4 text-white hover:bg-[#fe090a]">Contato</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;