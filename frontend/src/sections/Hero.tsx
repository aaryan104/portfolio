import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useStore } from '../store/useStore';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import { GradientText } from '../components/GradientText';
import { SiLeetcode } from 'react-icons/si';

const TITLES = ['AI Developer', 'Software Engineer', 'Full-Stack Developer', 'Problem Solver'];

export const Hero: React.FC = () => {
  const { setCursorHovered } = useStore();
  const [typedText, setTypedText] = useState('');
  const [titleIdx, setTitleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timer: any;
    const currentFullText = TITLES[titleIdx];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(prev => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentFullText.slice(0, typedText.length + 1));
      }, 100);
    }

    if (!isDeleting && typedText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setTitleIdx(prev => (prev + 1) % TITLES.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, titleIdx]);

  const { scrollY } = useScroll();
  const yBlob1 = useTransform(scrollY, [0, 800], [0, -100]);
  const yBlob2 = useTransform(scrollY, [0, 800], [0, 100]);
  const yBlob3 = useTransform(scrollY, [0, 800], [0, -50]);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* 3D Floating Background blobs */}
      <motion.div
        style={{ y: yBlob1 }}
        className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-accent-blue/10 blur-3xl pointer-events-none animate-pulse-slow"
      />
      <motion.div
        style={{ y: yBlob2 }}
        className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent-purple/10 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: yBlob3 }}
        className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none animate-float"
      />

      {/* Grid Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full">
        {/* Text Area */}
        <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <span className="text-accent-blue font-mono tracking-wider font-semibold uppercase text-sm block">
              Welcome to my space
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Hi, I'm <br />
              <GradientText>Aaryan Mangukiya</GradientText>
            </h1>
          </motion.div>

          {/* Typewriter title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-8 md:h-10 text-xl md:text-3xl font-medium text-gray-300"
          >
            <span>I build solutions as an </span>
            <span className="text-white border-r-2 border-accent-blue pr-1 animate-pulse">
              {typedText}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed"
          >
            AI Developer & Full-Stack Developer specializing in building high-performance,
            visually stunning web experiences, automation tooling, and artificial intelligence integrations.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <MagneticButton
              onClick={() => window.open('https://res.cloudinary.com/demo/image/upload/sample.pdf', '_blank')}
              className="px-6 py-3 bg-accent-blue text-white rounded-lg-12 font-medium hover:bg-accent-blue-light shadow-glow-blue hover:shadow-lg transition-all"
            >
              <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)}>
                Download Resume
              </span>
            </MagneticButton>

            <MagneticButton
              onClick={handleContactClick}
              className="px-6 py-3 border border-glass-border hover:border-white/20 text-white rounded-lg-12 font-medium hover:bg-glass-bg transition-colors"
            >
              <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)}>
                Contact Me
              </span>
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center space-x-4 pt-6"
          >
            <MagneticButton
              onClick={() => window.open('https://github.com/AaryanMangukiya', '_blank')}
              className="p-3 bg-glass-bg border border-glass-border text-gray-400 hover:text-white rounded-full transition-colors"
            >
              <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)}>
                <Github size={18} />
              </span>
            </MagneticButton>

            <MagneticButton
              onClick={() => window.open('https://linkedin.com/in/aaryanmangukiya', '_blank')}
              className="p-3 bg-glass-bg border border-glass-border text-gray-400 hover:text-white rounded-full transition-colors"
            >
              <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)}>
                <Linkedin size={18} />
              </span>
            </MagneticButton>

            <MagneticButton
              onClick={() => window.open('https://leetcode.com/u/AaryanMangukiya/', '_blank')}
              className="p-3 bg-glass-bg border border-glass-border text-gray-400 hover:text-white rounded-full transition-colors"
            >
              <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)}>
                <SiLeetcode size={18} />
              </span>
            </MagneticButton>

            <MagneticButton
              onClick={() => window.open('mailto:aaryanmangukiya.dev@gmail.com', '_blank')}
              className="p-3 bg-glass-bg border border-glass-border text-gray-400 hover:text-white rounded-full transition-colors"
            >
              <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)}>
                <Mail size={18} />
              </span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Profile Image Area */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan p-[2px] animate-float shadow-glow-blue"
            style={{ animationDuration: '8s' }}
          >
            <div className="w-full h-full rounded-full bg-background-base overflow-hidden flex items-center justify-center">
              <span className="text-gray-600 font-mono text-sm">[ Profile Image Placeholder ]</span>
            </div>
            <div className="absolute inset-0 rounded-full border border-dashed border-accent-blue/30 animate-spin" style={{ animationDuration: '40s' }} />
            <div className="absolute -inset-4 rounded-full border border-dotted border-accent-purple/20 animate-spin" style={{ animationDuration: '60s', animationDirection: 'reverse' }} />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown size={20} className="text-gray-500" />
      </div>
    </section>
  );
};
