import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'cyan' | 'none';
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  glowColor = 'none',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse positions relative to the card's dimensions (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring settings for smooth physics transitions
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

  // Glow position tracker
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const relativeX = (clientX - left) / width;
    const relativeY = (clientY - top) / height;

    x.set(relativeX - 0.5);
    y.set(relativeY - 0.5);

    setGlowPos({
      x: clientX - left,
      y: clientY - top,
    });
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  const glowColors = {
    none: '',
    blue: 'rgba(59, 130, 246, 0.15)',
    purple: 'rgba(139, 92, 246, 0.15)',
    cyan: 'rgba(34, 211, 238, 0.15)',
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative bg-glass-bg backdrop-blur-xl border border-glass-border rounded-xl-16 shadow-soft overflow-hidden transition-colors duration-300 ${className}`}
    >
      {/* Spotlight overlay following cursor */}
      {hovered && glowColor !== 'none' && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 120px at ${glowPos.x}px ${glowPos.y}px, ${glowColors[glowColor]}, transparent 80%)`,
          }}
        />
      )}
      
      <div style={{ transform: 'translateZ(20px)' }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};
