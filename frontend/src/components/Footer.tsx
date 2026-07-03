import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Github, Linkedin, Mail } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Footer: React.FC = () => {
  const { setCursorHovered } = useStore();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-glass-border bg-background-elevated/30 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <Link
            to="/"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
            className="text-lg font-display font-extrabold tracking-wider text-white"
          >
            AARYAN<span className="text-accent-blue font-body font-light">.DEV</span>
          </Link>
          <p className="text-sm text-gray-500 mt-2">
            Built with ❤️ using React, Tailwind & FastAPI.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <MagneticButton
            onClick={() => window.open('https://github.com/AaryanMangukiya', '_blank')}
            className="p-3 bg-glass-bg border border-glass-border text-gray-400 hover:text-white hover:bg-glass-bgHover rounded-full transition-colors"
          >
            <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)}>
              <Github size={18} />
            </span>
          </MagneticButton>

          <MagneticButton
            onClick={() => window.open('https://linkedin.com/in/aaryanmangukiya', '_blank')}
            className="p-3 bg-glass-bg border border-glass-border text-gray-400 hover:text-white hover:bg-glass-bgHover rounded-full transition-colors"
          >
            <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)}>
              <Linkedin size={18} />
            </span>
          </MagneticButton>

          <MagneticButton
            onClick={() => window.open('mailto:aaryanmangukiya.dev@gmail.com', '_blank')}
            className="p-3 bg-glass-bg border border-glass-border text-gray-400 hover:text-white hover:bg-glass-bgHover rounded-full transition-colors"
          >
            <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)}>
              <Mail size={18} />
            </span>
          </MagneticButton>
        </div>

        <div className="text-center md:text-right text-sm text-gray-500">
          <p>&copy; {currentYear} Aaryan Mangukiya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
