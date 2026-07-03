export const DESIGN_TOKENS = {
  colors: {
    bg: {
      base: '#050505',
      elevated: '#0A0A0F',
      elevatedHover: '#12121A',
    },
    accent: {
      blue: '#3B82F6',
      blueLight: '#60A5FA',
      purple: '#8B5CF6',
      cyan: '#22D3EE',
      gradient: 'from-accent-blue via-accent-purple to-accent-cyan',
    },
    glass: {
      bg: 'rgba(255, 255, 255, 0.04)',
      bgHover: 'rgba(255, 255, 255, 0.08)',
      border: 'rgba(255, 255, 255, 0.08)',
      borderHover: 'rgba(255, 255, 255, 0.15)',
    }
  },
  shadows: {
    soft: '0 4px 30px rgba(0, 0, 0, 0.5)',
    glowBlue: '0 0 25px rgba(59, 130, 246, 0.2)',
    glowPurple: '0 0 25px rgba(139, 92, 246, 0.2)',
    glowCyan: '0 0 25px rgba(34, 211, 238, 0.2)',
  },
  radius: {
    lg: 'rounded-lg-12',
    xl: 'rounded-xl-16',
    '2xl': 'rounded-2xl-24',
    '3xl': 'rounded-3xl-32',
  },
  typography: {
    display: 'font-display',
    body: 'font-body',
  }
};
