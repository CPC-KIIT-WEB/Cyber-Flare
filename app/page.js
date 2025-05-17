import React from 'react';
import About from './components/About';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
function page() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About />
      <RegistrationForm/>
      <Footer/>
    </div>
  );
}

export default page;
