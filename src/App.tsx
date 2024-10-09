import React from 'react';
import './App.css';
import HeadSection from './components/HeadSection';
import WhatwedoSection from './components/WhatwedoSection';
import WhoweareSection from './components/WhoweareSection';
import ProductSection from './components/ProductSection';
import FooterSection from './components/FooterSection';
import ContactSection from './components/ContactSection';
import LogoSection from './components/LogoSection';
import TestimonialsSection from './components/Testimonials';
import CalltoactionSection from './components/CalltoactionSection';
import ProjectGallery from './components/ProjectGallary'

function App() {
  return (
    <div >
    <HeadSection/>
    <WhoweareSection/>
    <LogoSection/>
    <ProductSection/>
    <ProjectGallery/>
    <WhatwedoSection/>
    <CalltoactionSection/>
    <TestimonialsSection/>
    <ContactSection/>
    <FooterSection/>

    </div>
  );
}

export default App;
