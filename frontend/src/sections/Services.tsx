import React from 'react';
import { useStore } from '../store/useStore';
import { Brain, Terminal, Layers, Eye, ArrowRight } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { GradientText } from '../components/GradientText';

const SERVICES_DATA = [
  {
    icon: Brain,
    title: "AI Development & Integrations",
    desc: "Seamless integration of Large Language Models (OpenAI, Gemini, Claude) into web products. Custom prompt crafting, agent workflows, and Model Context Protocol integrations.",
    glow: "purple"
  },
  {
    icon: Terminal,
    title: "Full-Stack Development",
    desc: "Robust backends using FastAPI, Express, and Node.js combined with modern databases (MongoDB, PostgreSQL) and lightning-fast Redis cache integrations.",
    glow: "blue"
  },
  {
    icon: Layers,
    title: "Web Apps & Scraping Automation",
    desc: "Automated document scraper pipelines, automated workflows, and complex state management layouts built on React, Zustand, and TanStack query platforms.",
    glow: "cyan"
  },
  {
    icon: Eye,
    title: "UI/UX & Glassmorphism design",
    desc: "Premium, responsive digital interfaces utilizing custom Tailwind tokens, micro-interactions, spring physics, and high-performance Web animations.",
    glow: "purple"
  }
];

export const Services: React.FC = () => {
  const { setCursorHovered } = useStore();

  const handleTalkClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
      <div className="space-y-4 text-center md:text-left mb-16">
        <span className="text-accent-purple font-mono tracking-wider font-semibold uppercase text-sm block">
          What I offer
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Professional <GradientText from="from-accent-purple" to="to-accent-blue">Services</GradientText>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES_DATA.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <GlassCard
              key={index}
              glowColor={service.glow as any}
              className="p-8 flex flex-col justify-between space-y-6 border border-glass-border bg-glass-bg/15 text-left hover:border-accent-purple/30 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl-16 bg-glass-bg border border-glass-border flex items-center justify-center text-white group-hover:bg-background-base transition-colors shrink-0">
                  <IconComponent size={24} className="text-accent-purple group-hover:text-accent-blue transition-colors" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent-blue transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{service.desc}</p>
                </div>
              </div>

              <button
                onClick={handleTalkClick}
                onMouseEnter={() => setCursorHovered(true)}
                onMouseLeave={() => setCursorHovered(false)}
                className="flex items-center space-x-1.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-accent-cyan hover:text-white transition-colors bg-transparent border-none cursor-pointer self-start group/btn"
              >
                <span>Let's talk</span>
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
};
