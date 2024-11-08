"use client"
import React, { useState } from 'react';
import Hero from './components/HeroSection'; 
import Section from './components/Section'; 
import SecondSection from './components/Section2'; 
import SponsorshipSection from './components/SponsorshipSection.jsx';
import Testimonials from './components/Solved.jsx';
import FAQ from './components/Faq.jsx';
import ContactSection from './components/ContactSection.jsx';

const Page = () => {

  return (
    <div>
      {/* Sidebar */}
      
      {/* Main Content */}
      <div className={`flex-1 transition-all duration-30`}>
        <Hero />
        <SecondSection />
        <Section />
        <SponsorshipSection />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </div>
    </div>
  );
};

export default Page;
