import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import Typed from 'typed.js';
import Spline from '@splinetool/react-spline';

import aiProfile from '../assets/aiProfile.jpg';


const Main = () => {

    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
          strings: ['FRONTEND^1000', 'SOFTWARE^1000', 'ENGINEER^1000'],
          typeSpeed: 50,
          backSpeed: 50,
          loop: true,
          showCursor: true,
          cursorChar: '|',
          autoInsertCss: true,
        });
    
        return () => {
          typed.destroy();
        };
      }, []);

    return (
    <>
         <main className="relative pt-16">
        {/* Spline Background */}
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/AIpWj8c6fgxFEqe2/scene.splinecode" />
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8 lg:text-left text-center">
              {/* Profile Image for Mobile/Tablet */}
              <div className="lg:hidden relative">
                <div className="relative w-[280px] h-[280px] mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3366]/20 via-[#9933FF]/20 to-[#33CCFF]/20 rounded-full blur-xl"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10">
                    <Image
                      src={aiProfile}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-6xl sm:text-7xl font-bold mb-6">
                  <span ref={typedRef} className="bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-transparent bg-clip-text"></span>
                </h1>
                <p className="text-xl mb-8 text-gray-300">
                  I am John Shephard – <span className="text-[#33CCFF]">web developer</span> with a passion for creating beautiful and responsive websites.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <button className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#33CCFF] to-[#FF3366] rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative px-7 py-4 bg-[#0B0F19] rounded-lg leading-none">
                      <span className="bg-gradient-to-r from-[#33CCFF] to-[#FF3366] text-transparent bg-clip-text font-semibold">
                        VIEW MY WORK
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Image for Desktop */}
            <div className="hidden lg:block relative">
              <div className="relative w-[400px] h-[400px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3366]/20 via-[#9933FF]/20 to-[#33CCFF]/20 rounded-full blur-xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10">
                    <Image
                      src={aiProfile}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>)
    ;
};

export default Main;