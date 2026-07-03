import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GradientText } from '../components/GradientText';
import { GlassCard } from '../components/GlassCard';

describe('GradientText Component', () => {
  it('renders children text correctly', () => {
    render(<GradientText>Hello World</GradientText>);
    expect(screen.getByText('Hello World')).toBeDefined();
  });
  
  it('applies gradient CSS classes', () => {
    const { container } = render(<GradientText from="from-red-500" to="to-blue-500">Test</GradientText>);
    const span = container.querySelector('span');
    expect(span?.className).toContain('bg-gradient-to-r');
    expect(span?.className).toContain('from-red-500');
    expect(span?.className).toContain('to-blue-500');
  });
});

describe('GlassCard Component', () => {
  it('renders child element contents', () => {
    render(
      <GlassCard>
        <div>Inner Text</div>
      </GlassCard>
    );
    expect(screen.getByText('Inner Text')).toBeDefined();
  });
});
