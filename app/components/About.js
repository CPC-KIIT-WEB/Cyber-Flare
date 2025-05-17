'use client';

import React, { useState } from 'react';
import { TbTargetArrow } from 'react-icons/tb';
import { IoGameController } from 'react-icons/io5';
import { FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Modal from './Modal';
import Modal1 from './Modal1';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren"
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  const [isCTFModalOpen, setCTFModalOpen] = useState(false);
  const [isBGMIModalOpen, setBGMIModalOpen] = useState(false);

  return (
    <motion.div
      id="about"
      className="bg-[#121212] px-6 md:px-16 py-12 text-white font-sans"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-center text-3xl md:text-7xl font-extrabold pb-8 headliner text-yellow-400 drop-shadow-[0_0_10px_rgba(255,204,0,0.8)] tracking-wide"
        variants={itemVariants}
      >
        ABOUT THE EVENT
      </motion.h1>

      <motion.div
        className="lg:flex items-center gap-14 max-w-7xl mx-auto"
        variants={containerVariants}
      >
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 flex flex-col justify-center space-y-4 md:space-y-6"
          variants={itemVariants}
        >
          <motion.h2
            className="text-xl md:text-3xl font-semibold text-center md:text-left text-yellow-400 drop-shadow-md"
            variants={itemVariants}
          >
            Get Ready for the Cyber Flare!
          </motion.h2>
          <motion.p
            className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
            variants={itemVariants}
          >
            Join us for an electrifying event where <span className="font-semibold text-yellow-400">BGMI action</span> meets <span className="font-semibold text-yellow-400">Capture The Flag</span> intensity in a one-of-a-kind competitive fusion!
          </motion.p>

          <motion.ul
            className="list-disc list-inside text-gray-400 max-w-md mx-auto md:mx-0 space-y-1"
            variants={itemVariants}
          >
            <li>🎮 Battle it out in the virtual arena</li>
            <li>💻 Crack challenges that test your cybersecurity genius</li>
            <li>🏆 Only the smartest and sharpest will claim victory!</li>
          </motion.ul>

          <motion.p
            className="text-gray-300 text-base md:text-lg max-w-md mx-auto md:mx-0"
            variants={itemVariants}
          >
            Think you’ve got what it takes? Gear up, lock in, and dominate both the battlefield and the code!
          </motion.p>

          {/* Link Section */}
          <motion.div
            className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 max-w-md mx-auto md:mx-0"
            variants={itemVariants}
          >
            <button
              onClick={() => setBGMIModalOpen(true)}
              className="flex items-center gap-3 text-yellow-400 font-semibold hover:text-yellow-500 transition-colors text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-60 rounded"
              aria-label="Open BGMI Tournament Details"
            >
              <IoGameController size={24} />
              BGMI Tournament (Round-1)
            </button>

            <button
              onClick={() => setCTFModalOpen(true)}
              className="flex items-center gap-3 text-yellow-400 font-semibold hover:text-yellow-500 transition-colors text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-60 rounded"
              aria-label="Open CTF Challenges Details"
            >
              <TbTargetArrow size={24} />
              CTF Challenges (Round-2)
            </button>

            <a
              href="#prizes"
              className="flex items-center gap-3 text-yellow-400 font-semibold hover:text-yellow-500 transition-colors text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-60 rounded"
              aria-label="Jump to Prizes Section"
            >
              <FaTrophy size={24} />
              Amazing Prizes
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="hidden lg:flex lg:w-1/2 justify-center mt-10 lg:mt-0"
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img
            className="h-[420px] rounded-xl shadow-xl border border-yellow-400/40 transition-transform duration-300 hover:scale-105 hover:shadow-yellow-400/60"
            src="/about2.jpg"
            alt="Event Illustration"
            loading="lazy"
            draggable={false}
          />
        </motion.div>
      </motion.div>

      {/* CTF Modal */}
      <Modal isOpen={isCTFModalOpen} onClose={() => setCTFModalOpen(false)}>
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400 drop-shadow-md">CTF Challenges</h2>
        <p className="text-gray-300 leading-relaxed text-justify">
          Round 2 of the competition is a Capture The Flag (CTF) Challenge, where participants test their cybersecurity and problem-solving skills. In this Jeopardy-style CTF, you&apos;ll solve puzzles across categories like cryptography, steganography, OSINT, web exploitation, and reverse engineering to find hidden &quot;flags&quot; (e.g., FLAG&#123;example&#125;).
        </p>
        <p className="text-gray-300 mt-5 leading-relaxed text-justify">
          Each flag earns points, and the more flags you capture, the higher you climb on the leaderboard. Challenges vary in difficulty, and time is limited. Follow the rules, play ethically, and prove your digital detective skills to advance to the next stage!
        </p>
      </Modal>

      {/* BGMI Modal */}
      <Modal1 isOpen={isBGMIModalOpen} onClose={() => setBGMIModalOpen(false)}>
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400 drop-shadow-md">BGMI Tournament</h2>
        <p className="text-gray-300 leading-relaxed text-justify">
          Round 1 is an intense BGMI tournament where teams battle it out in a virtual warzone. Assemble your squad, drop in, loot up, and survive against rival teams. Strategy, aim, and teamwork are key to winning. Rise through the ranks and secure your spot in Round 2!
        </p>
      </Modal1>
    </motion.div>
  );
}

export default About;
