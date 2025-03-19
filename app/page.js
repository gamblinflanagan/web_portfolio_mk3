'use client';

import Nav from '../components/nav';
import Main from '../components/main-section';
import Skills from '../components/skills-section';
import Portfolio from '../components/portfolio-section';
import Contact from '../components/contact-section';

export default function Home() {

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white relative overflow-hidden">
      <Nav />
      <Main />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}