'use client';

import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] px-6 lg:px-20 text-white py-8 md:py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-start">
        
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3 md:space-y-4">
          <img
            src="/cpc.svg"
            alt="CPC Logo"
            className="h-10 sm:h-12 md:h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
          />
          <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide">
            KIIT University | Cyber Peace Corps
          </p>
          <p className="text-gray-500 text-xs md:text-sm italic select-none">
            © {new Date().getFullYear()} CPC. All rights reserved.
          </p>
        </div>

        
        <div className="flex justify-between w-full md:hidden px-4">
          
          <div className="flex flex-col text-gray-400 items-start gap-2 text-sm font-semibold">
            <h3 className="text-yellow-500 text-lg mb-2 tracking-wide">Quick Links</h3>
            <a href="#about" className="hover:text-yellow-400 transition-colors duration-200">Events</a>
            <a href="#register" className="hover:text-yellow-400 transition-colors duration-200">Register</a>
          </div>

         
          <div className="flex flex-col items-start gap-2 text-sm font-semibold">
            <h3 className="text-yellow-500 text-lg mb-2 tracking-wide">Follow Us</h3>
            <div className="flex gap-5 text-2xl">
              {[{
                href: "https://www.instagram.com/cpc_kiit?igsh=djdoa284ZHlrc3Zp",
                icon: <FaInstagram />
              },{
                href: "https://www.linkedin.com/company/cpc-kiit/posts/?feedView=all",
                icon: <FaLinkedin />
              },{
                href: "mailto:cpc.kiit@kiit.ac.in",
                icon: <FaEnvelope />
              }].map(({href, icon}, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 transform hover:scale-125"
                  aria-label="social-link"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-evenly md:col-span-2 gap-20">
          
          <div className="flex flex-col gap-4 text-sm font-semibold">
            <h3 className="text-yellow-500 text-xl tracking-wide">Quick Links</h3>
            <a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Events</a>
            <a href="#register" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Register</a>
          </div>

      
          <div className="flex flex-col gap-4 text-sm font-semibold">
            <h3 className="text-yellow-500 text-xl tracking-wide">Follow Us</h3>
            <div className="flex gap-8 text-3xl">
              {[{
                href: "https://www.instagram.com/cpc.kiit",
                icon: <FaInstagram />
              },{
                href: "https://www.linkedin.com/company/cpc-kiit",
                icon: <FaLinkedin />
              },{
                href: "mailto:cpc@kiit.ac.in",
                icon: <FaEnvelope />
              }].map(({href, icon}, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 transform hover:scale-125"
                  aria-label="social-link"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
