import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { useStore } from '../store/useStore';
import { useLocation, useNavigate } from 'react-router-dom';

export const FloatingContact: React.FC = () => {
  const { setCursorHovered } = useStore();
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Hide Mail button when scrolled down past 400px
      setVisible(window.scrollY < 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'contact' } });
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-8 right-6 z-40 animate-bounce" 
          style={{ animationDuration: '3s' }}
        >
          <MagneticButton
            onClick={handleClick}
            className="p-4 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-full border border-white/10 shadow-glow-blue hover:shadow-glow-purple hover:scale-105 transition-all duration-300"
          >
            <span
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
              className="flex items-center justify-center"
            >
              <Mail size={22} />
            </span>
          </MagneticButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default FloatingContact;
