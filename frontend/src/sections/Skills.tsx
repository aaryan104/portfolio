import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';
import { GradientText } from '../components/GradientText';
import { TiltCard } from '../components/TiltCard';
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

const getSkillIcon = (name: string) => {
  const normalized = name.toLowerCase();
  if (normalized.includes('python')) return { icon: SiPython, color: 'text-yellow-400', glow: 'blue' as const };
  if (normalized.includes('javascript')) return { icon: SiJavascript, color: 'text-yellow-300', glow: 'blue' as const };
  if (normalized.includes('c#') || normalized.includes('dotnet') || normalized.includes('asp.net')) return { icon: SiDotnet, color: 'text-purple-400', glow: 'purple' as const };
  if (normalized.includes('html')) return { icon: SiHtml5, color: 'text-orange-500', glow: 'cyan' as const };
  if (normalized.includes('css')) return { icon: SiCss, color: 'text-blue-500', glow: 'cyan' as const };
  if (normalized.includes('tailwind')) return { icon: SiTailwindcss, color: 'text-sky-400', glow: 'cyan' as const };
  if (normalized.includes('bootstrap')) return { icon: SiBootstrap, color: 'text-indigo-400', glow: 'blue' as const };
  if (normalized.includes('react')) return { icon: SiReact, color: 'text-cyan-400', glow: 'cyan' as const };
  if (normalized.includes('flask')) return { icon: SiFlask, color: 'text-teal-400', glow: 'blue' as const };
  if (normalized.includes('git') && !normalized.includes('github')) return { icon: SiGit, color: 'text-orange-500', glow: 'blue' as const };
  if (normalized.includes('github')) return { icon: SiGithub, color: 'text-gray-300', glow: 'none' as const };
  if (normalized.includes('postman')) return { icon: SiPostman, color: 'text-orange-400', glow: 'none' as const };
  if (normalized.includes('mongodb')) return { icon: SiMongodb, color: 'text-green-500', glow: 'purple' as const };
  if (normalized.includes('postgresql')) return { icon: SiPostgresql, color: 'text-blue-400', glow: 'cyan' as const };
  if (normalized.includes('mysql') && !normalized.includes('sql server')) return { icon: SiMysql, color: 'text-blue-500', glow: 'blue' as const };
  if (normalized.includes('sql server')) return { icon: Database, color: 'text-accent-blue', glow: 'blue' as const };
  
  if (normalized.includes('dbms') || normalized.includes('database')) return { icon: Database, color: 'text-accent-blue', glow: 'blue' as const };
  if (normalized.includes('rest api') || normalized.includes('crud')) return { icon: Terminal, color: 'text-accent-cyan', glow: 'cyan' as const };
  return { icon: BookOpen, color: 'text-accent-purple', glow: 'purple' as const };
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryId>('programmingLanguages');
  const { setCursorHovered } = useStore();

  const activeSkillsList = RESUME_DATA.skills[activeTab] || [];

  return (
    <section id="skills" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
      <div className="space-y-4 text-center md:text-left mb-16">
        <span className="text-accent-blue font-mono tracking-wider font-semibold uppercase text-xs block">
          Technical Stack
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Skills & <GradientText from="from-accent-blue" to="to-accent-cyan">Technologies</GradientText>
        </h2>
      </div>

      <div className="space-y-8">
        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 border-b border-glass-border pb-4 justify-start">
          {CATEGORIES.map(category => {
            const hasSkills = RESUME_DATA.skills[category.id]?.length > 0;
            if (!hasSkills) return null;

            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                onMouseEnter={() => setCursorHovered(true)}
                onMouseLeave={() => setCursorHovered(false)}
                className={`px-5 py-2.5 rounded-xl-12 text-sm font-medium transition-all cursor-pointer ${
                  activeTab === category.id
                    ? 'bg-accent-blue text-white shadow-glow-blue'
                    : 'text-gray-400 hover:text-white bg-glass-bg border border-glass-border hover:border-white/20'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Constellation Grid Layout */}
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
              const { icon: IconComponent, color, glow } = getSkillIcon(skill);
              return (
                <TiltCard 
                  key={index} 
                  glowColor={glow} 
                  className="p-6 flex flex-col items-center justify-center space-y-4 text-center h-36 border border-glass-border bg-glass-bg/10 hover:border-white/20 transition-colors"
                >
                  <IconComponent className={`w-10 h-10 ${color}`} />
                  <span className="text-sm font-semibold text-white tracking-wide">{skill}</span>
                </TiltCard>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
export default Skills;
