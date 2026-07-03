import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'cyan' | 'none';
  onClick?: () => void;
  hoverEffect?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'none',
  onClick,
  hoverEffect = true,
  onMouseEnter,
  onMouseLeave,
}) => {
  const glowClasses = {
    none: '',
    blue: 'hover:shadow-glow-blue glow-card-blue',
    purple: 'hover:shadow-glow-purple glow-card-purple',
    cyan: 'hover:shadow-glow-cyan glow-card-cyan',
  };

  const cardClasses = `
    bg-glass-bg backdrop-blur-xl border border-glass-border rounded-xl-16 shadow-soft
    transition-all duration-300 ease-out
    ${hoverEffect ? 'hover:bg-glass-bgHover hover:border-white/15 hover:-translate-y-1' : ''}
    ${glowClasses[glowColor]}
    ${className}
  `;

  if (onClick) {
    return (
      <button 
        onClick={onClick} 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`${cardClasses} text-left w-full block focus-visible:ring-offset-4`}
      >
        {children}
      </button>
    );
  }

  return (
    <div 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cardClasses}
    >
      {children}
    </div>
  );
};
