import { useState, } from 'react';
import { Globe, Menu } from 'lucide-react';


const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <>
        <nav className="fixed w-full z-50 bg-[#0B0F19]/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              {/* <span className="text-xl font-semibold">Joey Flanagan</span> */}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-[#33CCFF] transition-colors">Skills</a>
              <a href="#" className="text-gray-300 hover:text-[#33CCFF] transition-colors">Portfolio</a>
              <a href="#" className="text-gray-300 hover:text-[#33CCFF] transition-colors">Contact</a>
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
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-[#33CCFF]">Skills</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-[#33CCFF]">Portfolio</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-[#33CCFF]">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </>)
    ;
};

export default Nav;