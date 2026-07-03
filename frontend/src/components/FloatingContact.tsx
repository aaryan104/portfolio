import React from 'react';
import { Mail } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { useStore } from '../store/useStore';
import { useLocation, useNavigate } from 'react-router-dom';

export const FloatingContact: React.FC = () => {
  const { setCursorHovered } = useStore();
  const location = useLocation();
  const navigate = useNavigate();

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
    <div 
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
    </div>
  );
};
