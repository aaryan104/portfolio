import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GradientText } from './GradientText';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('portfolio_visited');
    if (hasVisited) {
      setShouldRender(false);
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem('portfolio_visited', 'true');
      setShouldRender(false);
      onComplete();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 bg-background-base z-[99999] flex flex-col items-center justify-center"
        >
          <div className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-16 h-16 mx-auto rounded-xl-16 border border-accent-blue/30 flex items-center justify-center shadow-glow-blue bg-background-elevated"
            >
              <span className="font-display font-extrabold text-2xl text-white">A</span>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
            >
              <h1 className="text-2xl font-display font-bold uppercase tracking-widest">
                <GradientText>Aaryan Mangukiya</GradientText>
              </h1>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-mono mt-1">
                Loading Experience
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
