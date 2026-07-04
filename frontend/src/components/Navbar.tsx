import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { motion, AnimatePresence } from 'framer-motion';
import { RESUME_DATA } from '../content/resume-data';

const NAV_ITEMS = [
  { label: 'Home', id: 'hero', show: true },
  { label: 'About', id: 'about', show: !!RESUME_DATA.personalInfo.profile },
  { label: 'Skills', id: 'skills', show: Object.values(RESUME_DATA.skills).some(arr => arr.length > 0) },
  { label: 'Projects', id: 'projects', show: RESUME_DATA.projects.length > 0 },
  { label: 'Experience', id: 'experience', show: RESUME_DATA.experience.length > 0 },
  { label: 'Certifications', id: 'certifications', show: RESUME_DATA.certifications.length > 0 },
  // { label: 'Resume', id: 'resume', show: true },
  { label: 'Contact', id: 'contact', show: true },
].filter(item => item.show);

export const Navbar: React.FC = () => {
  const { theme, toggleTheme, activeSection, mobileNavOpen, setMobileNavOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileNavOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-background-base/80 backdrop-blur-md border-b border-glass-border py-4'
        : 'bg-transparent py-6'
        }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-display font-extrabold tracking-wider text-white">
          A<span className="text-accent-blue font-body font-semibold">M</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors py-1 cursor-pointer"
            >
              {item.label}
              {isHome && activeSection === item.id && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-blue"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
          <Link
            to="/resume"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Resume
          </Link>
        </div>

        {/* Toolbar (Theme & Mobile Menu Toggle) */}
        <div className="flex items-center space-x-4">
          <MagneticButton
            onClick={toggleTheme}
            className="p-2 rounded-full border border-glass-border text-gray-400 hover:text-white hover:bg-glass-bg transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </MagneticButton>

          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="md:hidden p-2 rounded-full border border-glass-border text-gray-400 hover:text-white hover:bg-glass-bg transition-colors"
          >
            {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-background-elevated/95 backdrop-blur-xl border-b border-glass-border p-6 flex flex-col space-y-4 md:hidden shadow-soft"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-lg font-medium text-gray-300 hover:text-white py-2"
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/resume"
              onClick={() => setMobileNavOpen(false)}
              className="text-left text-lg font-medium text-gray-300 hover:text-white py-2"
            >
              Resume
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
