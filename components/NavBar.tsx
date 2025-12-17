import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Get email from constants
  const emailUrl = SOCIAL_LINKS.find(link => link.platform === "Email")?.url || "mailto:m.narmatha23cb@psnacet.edu.in";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      // 85px offset to account for the fixed navbar height
      const headerOffset = 85; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-4 shadow-lg' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-2xl font-bold font-heading text-white tracking-tight cursor-pointer hover:text-primary transition-colors"
          >
            Narmatha<span className="text-primary">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-300 hover:text-primary transition-colors relative group cursor-pointer"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <a 
              href={emailUrl}
              className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-full transition-colors border border-slate-700 cursor-pointer shadow-md hover:shadow-primary/20"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-slate-950 md:hidden flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-bold text-white hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={emailUrl}
              className="px-8 py-3 bg-primary hover:bg-indigo-600 text-white text-lg font-medium rounded-full transition-colors shadow-lg shadow-primary/25"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;