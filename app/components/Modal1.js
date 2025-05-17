import React, { useEffect } from 'react';

function Modal({ isOpen, onClose, children }) {

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0  bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
    >
      <div
        className="bg-[#121212] border border-yellow-500 rounded-xl shadow-2xl max-w-4xl w-[90%] lg:w-[70%] p-8 relative flex flex-col lg:flex-row gap-6 animate-fadeIn"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-300 transition-colors text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
        >
          &times;
        </button>


        <div className="lg:w-1/2 text-gray-300 overflow-y-auto max-h-[70vh] pr-4">
          {children}
          <a
            href="https://drive.google.com/file/d/1kZOzkKr_uoE0bIaQCyW1SHdiWh6jFwcP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="inline-flex items-center gap-2 mt-6 text-yellow-400 font-semibold hover:text-yellow-500 transition-colors underline"
          >
            📄 Rules and Guidelines for BGMI Challenge
          </a>
        </div>

  
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src="/pub.png"
            alt="Event Illustration"
            className="h-[350px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 select-none"
            draggable={false}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
}

export default Modal;
