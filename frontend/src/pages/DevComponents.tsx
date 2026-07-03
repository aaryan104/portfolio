import React from 'react';
import { GradientText } from '../components/GradientText';
import { GlassCard } from '../components/GlassCard';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';

export const DevComponents: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-base text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="border-b border-glass-border pb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
            <GradientText>Design System Primitives</GradientText>
          </h1>
          <p className="text-gray-400">
            Interactive preview of the reusable UI components built for Aaryan Mangukiya's Portfolio.
          </p>
        </header>

        {/* Gradient Text Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-l-4 border-accent-blue pl-3">GradientText</h2>
          <div className="bg-background-elevated p-6 rounded-xl-16 border border-glass-border space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-2">Default Gradient (Blue-Purple-Cyan):</p>
              <h3 className="text-3xl font-extrabold">
                <GradientText>Cybernetic Intelligence & Design</GradientText>
              </h3>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Custom Gradient (Orange-Pink):</p>
              <h3 className="text-3xl font-extrabold">
                <GradientText from="from-orange-400" via="via-red-500" to="to-pink-500">
                  Aaryan Mangukiya Portfolio
                </GradientText>
              </h3>
            </div>
          </div>
        </section>

        {/* Glass Card Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-l-4 border-accent-purple pl-3">GlassCard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="p-6">
              <h3 className="text-xl font-bold mb-2">Standard Card</h3>
              <p className="text-gray-400 text-sm">
                Default glass surface with blur-xl and a subtle border. Moves up slightly on hover.
              </p>
            </GlassCard>

            <GlassCard className="p-6" glowColor="blue">
              <h3 className="text-xl font-bold mb-2 text-accent-blue-light">Blue Glow Card</h3>
              <p className="text-gray-400 text-sm">
                Same glass card, but triggers an electric blue shadow glow on mouse hover.
              </p>
            </GlassCard>

            <GlassCard className="p-6" glowColor="purple">
              <h3 className="text-xl font-bold mb-2 text-accent-purple">Purple Glow Card</h3>
              <p className="text-gray-400 text-sm">
                Triggers an elegant purple shadow glow, highlighting design elements on hover.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Magnetic Button Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-l-4 border-accent-cyan pl-3">MagneticButton</h2>
          <div className="bg-background-elevated p-8 rounded-xl-16 border border-glass-border flex flex-wrap gap-6 items-center">
            <MagneticButton className="px-6 py-3 bg-accent-blue text-white rounded-lg-12 font-medium hover:bg-accent-blue-light">
              Blue Magnetic CTA
            </MagneticButton>

            <MagneticButton className="px-6 py-3 border border-glass-border hover:border-white/20 text-white rounded-lg-12 font-medium">
              Secondary Button
            </MagneticButton>

            <MagneticButton className="p-4 bg-background-base text-accent-cyan border border-accent-cyan/30 rounded-full">
              ★
            </MagneticButton>
            <span className="text-sm text-gray-500">
              Hover cursor close to buttons to witness physics-based magnetic attraction.
            </span>
          </div>
        </section>

        {/* Tilt Card Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-l-4 border-accent-blue pl-3">TiltCard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TiltCard className="p-8 h-64 flex flex-col justify-between" glowColor="blue">
              <div>
                <span className="text-xs uppercase tracking-wider text-accent-blue-light font-bold">Tilt Interaction</span>
                <h3 className="text-2xl font-bold mt-2">Interactive 3D Card</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Hover over this card and move your mouse to tilt the card in 3D space. Note the active radial spotlight.
              </p>
            </TiltCard>

            <TiltCard className="p-8 h-64 flex flex-col justify-between" glowColor="purple">
              <div>
                <span className="text-xs uppercase tracking-wider text-accent-purple font-bold">Ambient Spot Light</span>
                <h3 className="text-2xl font-bold mt-2">Purple Spotlight Tilt</h3>
              </div>
              <p className="text-gray-400 text-sm">
                The radial spotlight coordinates dynamically align with the mouse offset, producing realistic lighting.
              </p>
            </TiltCard>
          </div>
        </section>
      </div>
    </div>
  );
};
