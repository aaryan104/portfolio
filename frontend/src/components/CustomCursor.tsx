import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useStore } from '../store/useStore';

export const CustomCursor: React.FC = () => {
  const { cursorHovered } = useStore();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const touchMediaQuery = window.matchMedia('(hover: none) and (pointer: coarse)');
    setIsTouchDevice(touchMediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    if (!touchMediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent-blue rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 border border-accent-blue/30 rounded-full pointer-events-none z-[9998]"
        animate={{
          width: cursorHovered ? 60 : 36,
          height: cursorHovered ? 60 : 36,
          backgroundColor: cursorHovered ? 'rgba(59, 130, 246, 0.08)' : 'rgba(59, 130, 246, 0)',
          borderColor: cursorHovered ? 'rgba(96, 165, 250, 0.6)' : 'rgba(59, 130, 246, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};
