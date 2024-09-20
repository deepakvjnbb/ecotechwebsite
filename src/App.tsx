import React from 'react';
import './App.css';
import HeadSection from './components/HeadSection';
import WhatwedoSection from './components/WhatwedoSection';
import WhoweareSection from './components/WhoweareSection';
import ProductSection from './components/ProductSection';
import FooterSection from './components/FooterSection';
import ContactSection from './components/ContactSection';
import StatSection from './components/StatSection';
import TestimonialsSection from './components/Testimonials';
import CalltoactionSection from './components/CalltoactionSection';

function App() {
  return (
    <div>
    <HeadSection/>
    <WhoweareSection/>
    <StatSection/>
    <ProductSection/>
    <CalltoactionSection/>
    <WhatwedoSection/>
    <TestimonialsSection/>
    <ContactSection/>
    <FooterSection/>

    </div>
  );
}

export default App;
