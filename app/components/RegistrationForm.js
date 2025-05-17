'use client';

import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
  });

  const [animate, setAnimate] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, event } = formData;

    if (!name || !email || !phone || !event) {
      toast.error('Please fill out all fields before submitting.', {
        position: 'top-center',
        autoClose: 3000,
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setFormData({ name: '', email: '', phone: '', event: '' });
      setIsSubmitting(false);
      toast.success('Registration successful!', {
        position: 'top-center',
        autoClose: 3000,
      });
    }, 2000);
  };

  return (
    <div
      id="register"
      className={`max-w-xl mx-auto bg-[#222222] p-10 md:rounded-2xl shadow-[0_0_20px_rgba(255,203,58,0.3)] text-white md:mt-12 md:mb-12
        transform transition-all duration-700 ease-in-out
        ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `}
    >
      <ToastContainer />
      <h2 className="text-4xl mb-8 headliner text-center tracking-wide text-yellow-400 drop-shadow-lg animate-fadeIn">
        Event Registration
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          id="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          isSubmitting={isSubmitting}
        />
        <InputField
          id="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          type="email"
          isSubmitting={isSubmitting}
        />
        <InputField
          id="phone"
          label="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 98765 43210"
          type="tel"
          isSubmitting={isSubmitting}
        />

        <div>
          <label htmlFor="event" className="block mb-2 font-semibold text-yellow-400">
            Select Event
          </label>
          <select
            id="event"
            name="event"
            value={formData.event}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-5 py-3 rounded-lg bg-[#2b2b2b] border border-gray-700 text-white
              focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:border-yellow-400 transition
              duration-300 ease-in-out transform
              focus:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <option value="" disabled>
              -- Choose an event --
            </option>
            <option value="bgmi">BGMI Tournament</option>
            <option value="ctf">CTF Challenge</option>
            <option value="both">Both Events</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-extrabold py-3 rounded-lg shadow-md
          transition duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Spinner />
              Submitting...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin h-5 w-5 text-black"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  );
}

function InputField({ id, label, value, onChange, placeholder, type = 'text', isSubmitting }) {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 font-semibold text-yellow-400">
        {label}
      </label>
      <input
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        disabled={isSubmitting}
        className="w-full px-5 py-3 rounded-lg bg-[#2b2b2b] border border-gray-700 text-white placeholder-gray-400 
          focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:border-yellow-400 transition
          duration-300 ease-in-out transform
          focus:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
      />
    </div>
  );
}

export default RegistrationForm;
