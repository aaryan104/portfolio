import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  from = 'from-accent-blue-light',
  via = 'via-accent-purple',
  to = 'to-accent-cyan',
}) => {
  return (
    <span className={`bg-gradient-to-r ${from} ${via} ${to} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};
