'use client';

import { useRef } from 'react';

import Nav from '../components/nav';
import Main from '../components/main-section';
import Skills from '../components/skills-section';
import Portfolio from '../components/portfolio-section';
import Contact from '../components/contact-section';

export default function Home() {

  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const handleClick = (element) => {
    console.log("ICLICKED", element);
    if (element === 'skills') {
      skillsRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    if (element === 'portfolio') {
      portfolioRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    if (element === 'contact') {
      contactRef.current?.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white relative overflow-hidden">
      <Nav ClickHandler={handleClick}/>
      <Main ClickHandler={handleClick}/>
      <Skills ref={skillsRef}/>
      <Portfolio ref={portfolioRef}/>
      <Contact ref={contactRef}/>
    </main>
  );
}