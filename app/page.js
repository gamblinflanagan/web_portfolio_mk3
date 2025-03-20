'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';

// const Nav = dynamic(
//   () => import('@/components/nav'),
//   {
//     ssr: false,
//   }
// );

const Top = dynamic(
  () => import('@/components/top-section'),
  {
    ssr: false,
  }
);

// const Skills = dynamic(
//   () => import('@/components/skills-section'),
//   {
//     ssr: false,
//   }
// );

// const Portfolio = dynamic(
//   () => import('@/components/portfolio-section'),
//   {
//     ssr: false,
//   }
// );

// const Contact = dynamic(
//   () => import('@/components/contact-section'),
//   {
//     ssr: false,
//   }
// );

import Nav from '@/components/nav';
// import Top from '@/components/top-section';
import Skills from '@/components/skills-section';
import Portfolio from '@/components/portfolio-section';
import Contact from '@/components/contact-section';

export default function Home() {

  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const handleClick = (element) => {
    //console.log("ICLICKED", element);
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
      <Top ClickHandler={handleClick}/>
      <Skills ref={skillsRef}/>
      <Portfolio ref={portfolioRef}/>
      <Contact ref={contactRef}/>
    </main>
  );
}