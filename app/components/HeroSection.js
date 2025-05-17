'use client';

import React from 'react';

function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'url("/hero.jpg")',
      }}
    >
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-0"></div>

      
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-yellow-400 drop-shadow-[0_2px_8px_rgba(255,204,0,0.8)] tracking-wide headliner animate-fadeInUp">
          Cyber Flare
        </h1>
        <p className="text-lg md:text-xl font-semibold text-gray-200 mb-8 max-w-xl mx-auto leading-relaxed drop-shadow-md">
          A competitive tech showdown hosted by the <span className="text-yellow-400 font-bold">Cyber Peace Corps</span> at KIIT University.
          Join us for an electrifying blend of gaming, innovation, and cyber brilliance.
        </p>
        <a
          href="#register"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black text-2xl font-semibold px-8 py-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50 headliner"
          aria-label="Register Now"
        >
          Register Now
        </a>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
