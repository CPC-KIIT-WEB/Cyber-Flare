'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleNav = () => setNavOpen(!navOpen);
  const closeMenu = () => setNavOpen(false);

  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home',  'events', 'register'];
      const scrollPosition = window.scrollY + 100; 

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-[#222222] px-6 md:px-14 text-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 md:py-5">
        
        <a href="#home" className="flex items-center space-x-3 select-none">
          <img
            src="/cpc.svg"
            alt="CPC Logo"
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 hover:scale-110"
            draggable={false}
          />
          <span className="text-2xl tracking-wide headliner select-text">
            Cyber Peace Corps
          </span>
        </a>

        
        <nav className="hidden md:flex gap-10 text-base font-semibold">
          {['home', 'about',  'register'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={closeMenu}
              className={`relative px-2 py-1 transition-colors duration-300 ${
                activeSection === section
                  ? 'text-yellow-500'
                  : 'text-gray-300 hover:text-yellow-500'
              }`}
              aria-current={activeSection === section ? 'page' : undefined}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-500 rounded"></span>
              )}
            </a>
          ))}
        </nav>

        
        <button
          onClick={toggleNav}
          className="md:hidden text-yellow-500 text-2xl focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={navOpen}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      
      {navOpen && (
        <nav className="md:hidden bg-[#1a1a1a] px-6 py-6 space-y-5 text-base font-semibold shadow-lg rounded-b-lg">
          {['home', 'about', 'events', 'register'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={closeMenu}
              className={`block transition-colors duration-300 ${
                activeSection === section
                  ? 'text-yellow-500'
                  : 'text-gray-400 hover:text-yellow-500'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
