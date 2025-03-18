import { useState, useEffect, useRef } from 'react';
import { Globe, Menu, CodeXml as Html5, Rss as Css3, FileJson, Palette, PackageSearch, Figma, AtomIcon, Boxes, GitBranch, Share2, Scissors, ExternalLink, MessageSquare, Mail, Linkedin, Facebook, Instagram, Github, Send } from 'lucide-react';


const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <>
        <nav className="fixed w-full z-50 bg-[#0B0F19]/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-semibold">JOHN DOE</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#technologies" className="text-gray-300 hover:text-white transition-colors">Technologies</a>
              <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <button className="flex items-center space-x-1 bg-white/5 px-3 py-1 rounded-full hover:bg-white/10 transition-colors">
                <Globe className="w-4 h-4" />
                <span>ENG</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0B0F19] border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-white">Services</a>
              <a href="#technologies" className="block px-3 py-2 text-gray-300 hover:text-white">Technologies</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-300 hover:text-white">Portfolio</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white">Contact</a>
              <button className="flex items-center space-x-1 px-3 py-2 text-gray-300 hover:text-white">
                <Globe className="w-4 h-4" />
                <span>ENG</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </>)
    ;
};

export default Nav;