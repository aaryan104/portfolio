import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { useStore } from '../store/useStore';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { setCursorHovered } = useStore();

  useEffect(() => {
    const toggleVisibility = () => {
      // Show BackToTop button when scrolled down past 400px
      setVisible(window.scrollY >= 400);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-8 right-6 z-40"
        >
          <MagneticButton
            onClick={scrollToTop}
            className="p-4 bg-accent-blue text-white rounded-full border border-accent-blue-light/20 shadow-glow-blue hover:bg-accent-blue-light hover:shadow-lg transition-all"
          >
            <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)} className="flex items-center justify-center">
              <ArrowUp size={22} />
            </span>
          </MagneticButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default BackToTop;
