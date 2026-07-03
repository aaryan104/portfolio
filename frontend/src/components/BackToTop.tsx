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
      setVisible(window.scrollY > 600);
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
          className="fixed bottom-24 right-6 z-40"
        >
          <MagneticButton
            onClick={scrollToTop}
            className="p-3 bg-accent-blue text-white rounded-full border border-accent-blue-light/20 shadow-glow-blue hover:bg-accent-blue-light hover:shadow-lg transition-all"
          >
            <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)}>
              <ArrowUp size={20} />
            </span>
          </MagneticButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
