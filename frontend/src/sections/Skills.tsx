import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';
import { GradientText } from '../components/GradientText';
import { RESUME_DATA } from '../content/resume-data';
import { 
  SiPython, SiJavascript, SiHtml5, SiCss, SiTailwindcss, SiBootstrap, 
  SiReact, SiFlask, SiGit, SiGithub, SiPostman, SiMongodb, 
  SiPostgresql, SiMysql, SiDotnet
} from 'react-icons/si';
import { Terminal, Database, BookOpen } from 'lucide-react';

const CATEGORIES = [
  { id: 'programmingLanguages', label: 'Programming Languages' },
  { id: 'webTechnologies', label: 'Web Technologies' },
  { id: 'frameworksLibraries', label: 'Frameworks & Libraries' },
  { id: 'databases', label: 'Databases' },
  { id: 'tools', label: 'Tools' },
  { id: 'concepts', label: 'Concepts' }
] as const;

type CategoryId = typeof CATEGORIES[number]['id'];

// Get brand icon, color details and radial glowing styling
const getSkillDetails = (name: string) => {
  const normalized = name.toLowerCase();
  if (normalized.includes('python')) return { icon: SiPython, color: 'text-yellow-400', glowColor: 'rgba(234, 179, 8, 0.15)', accentColor: '#eab308' };
  if (normalized.includes('javascript')) return { icon: SiJavascript, color: 'text-yellow-300', glowColor: 'rgba(234, 179, 8, 0.15)', accentColor: '#eab308' };
  if (normalized.includes('c#') || normalized.includes('dotnet') || normalized.includes('asp.net')) return { icon: SiDotnet, color: 'text-purple-400', glowColor: 'rgba(168, 85, 247, 0.15)', accentColor: '#a855f7' };
  if (normalized.includes('html')) return { icon: SiHtml5, color: 'text-orange-500', glowColor: 'rgba(249, 115, 22, 0.15)', accentColor: '#f97316' };
  if (normalized.includes('css')) return { icon: SiCss, color: 'text-blue-500', glowColor: 'rgba(59, 130, 246, 0.15)', accentColor: '#3b82f6' };
  if (normalized.includes('tailwind')) return { icon: SiTailwindcss, color: 'text-sky-400', glowColor: 'rgba(56, 189, 248, 0.15)', accentColor: '#38bdf8' };
  if (normalized.includes('bootstrap')) return { icon: SiBootstrap, color: 'text-indigo-400', glowColor: 'rgba(129, 140, 248, 0.15)', accentColor: '#818cf8' };
  if (normalized.includes('react')) return { icon: SiReact, color: 'text-cyan-400', glowColor: 'rgba(34, 211, 238, 0.15)', accentColor: '#22d3ee' };
  if (normalized.includes('flask')) return { icon: SiFlask, color: 'text-teal-400', glowColor: 'rgba(45, 212, 191, 0.15)', accentColor: '#2dd4bf' };
  if (normalized.includes('git') && !normalized.includes('github')) return { icon: SiGit, color: 'text-orange-500', glowColor: 'rgba(249, 115, 22, 0.15)', accentColor: '#f97316' };
  if (normalized.includes('github')) return { icon: SiGithub, color: 'text-gray-300', glowColor: 'rgba(255, 255, 255, 0.08)', accentColor: '#ffffff' };
  if (normalized.includes('postman')) return { icon: SiPostman, color: 'text-orange-400', glowColor: 'rgba(251, 146, 60, 0.15)', accentColor: '#fb923c' };
  if (normalized.includes('mongodb')) return { icon: SiMongodb, color: 'text-green-500', glowColor: 'rgba(34, 197, 94, 0.15)', accentColor: '#22c55e' };
  if (normalized.includes('postgresql')) return { icon: SiPostgresql, color: 'text-blue-400', glowColor: 'rgba(96, 165, 250, 0.15)', accentColor: '#60a5fa' };
  if (normalized.includes('mysql') && !normalized.includes('sql server')) return { icon: SiMysql, color: 'text-blue-500', glowColor: 'rgba(59, 130, 246, 0.15)', accentColor: '#3b82f6' };
  if (normalized.includes('sql server')) return { icon: Database, color: 'text-accent-blue', glowColor: 'rgba(59, 130, 246, 0.15)', accentColor: '#3b82f6' };
  
  if (normalized.includes('dbms') || normalized.includes('database')) return { icon: Database, color: 'text-accent-blue', glowColor: 'rgba(59, 130, 246, 0.12)', accentColor: '#3b82f6' };
  if (normalized.includes('rest api') || normalized.includes('crud')) return { icon: Terminal, color: 'text-accent-cyan', glowColor: 'rgba(6, 182, 212, 0.12)', accentColor: '#06b6d4' };
  return { icon: BookOpen, color: 'text-accent-purple', glowColor: 'rgba(168, 85, 247, 0.12)', accentColor: '#a855f7' };
};

// Premium Spotlight Mouse Tracker Card Component
const SpotlightCard: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  glowColor: string; 
  accentColor: string;
}> = ({ children, className = '', glowColor, accentColor }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`relative overflow-hidden rounded-2xl border border-glass-border bg-glass-bg/10 w-full min-h-[7.5rem] md:min-h-[8.5rem] h-auto flex items-center justify-center py-4 px-3 md:p-6 transition-all duration-300 hover:border-white/10 ${className}`}
      style={{
        // Store accent color as CSS custom property
        ['--accent-color' as any]: accentColor
      }}
    >
      {/* Radial spotlight hover background */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 z-0"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
        }}
      />
      
      {/* Glowing border accent */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 z-0"
        style={{
          opacity: isFocused ? 0.3 : 0,
          background: `radial-gradient(120px circle at ${coords.x}px ${coords.y}px, var(--accent-color), transparent 85%)`,
        }}
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none">
        {children}
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryId>('programmingLanguages');
  const { setCursorHovered } = useStore();

  const activeSkillsList = RESUME_DATA.skills[activeTab] || [];

  return (
    <section id="skills" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
      {/* Section Headers */}
      <div className="space-y-4 text-center md:text-left mb-16">
        <span className="text-accent-cyan font-mono tracking-wider font-semibold uppercase text-xs block">
          Technical Stack
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Skills & <GradientText from="from-accent-cyan" to="to-accent-blue">Technologies</GradientText>
        </h2>
      </div>

      <div className="space-y-10">
        {/* Modern Tab Bar Selector with sliding animation pill */}
        <div className="flex flex-wrap gap-3 border-b border-glass-border pb-5 justify-start">
          {CATEGORIES.map(category => {
            const hasSkills = RESUME_DATA.skills[category.id]?.length > 0;
            if (!hasSkills) return null;

            const isSelected = activeTab === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                onMouseEnter={() => setCursorHovered(true)}
                onMouseLeave={() => setCursorHovered(false)}
                className="relative px-5 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 cursor-pointer outline-none"
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-accent-blue/15 border border-accent-blue/30 rounded-xl z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <span className={`relative z-10 ${isSelected ? 'text-accent-cyan' : 'text-gray-400 hover:text-white'}`}>
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic skills grid cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {activeSkillsList.map((skill, index) => {
              const { icon: IconComponent, color, glowColor, accentColor } = getSkillDetails(skill);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  <SpotlightCard 
                    glowColor={glowColor}
                    accentColor={accentColor}
                  >
                    <IconComponent className={`w-10 h-10 transition-transform duration-300 group-hover:scale-110 ${color}`} />
                    <span className="text-sm font-semibold text-white tracking-wide mt-3">
                      {skill}
                    </span>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
export default Skills;
