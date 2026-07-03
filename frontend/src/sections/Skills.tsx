import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';
import { GradientText } from '../components/GradientText';
import { TiltCard } from '../components/TiltCard';
import { Cpu, Brain } from 'lucide-react';
import { 
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiHtml5, SiCss,
  SiReact, SiFastapi, SiNodedotjs, SiExpress, SiTailwindcss, SiVite,
  SiMongodb, SiRedis, SiPostgresql, SiMysql,
  SiGit, SiDocker, SiPostman,
  SiGoogle, SiAnthropic, SiGithubcopilot
} from 'react-icons/si';
import { TbPlug, TbHierarchy, TbAtom, TbLayersIntersect, TbUfo } from 'react-icons/tb';

const CORE_CATEGORIES = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'Python', icon: SiPython, color: 'text-yellow-400', glow: 'blue' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400', glow: 'blue' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-300', glow: 'blue' },
      { name: 'C++', icon: SiCplusplus, color: 'text-blue-500', glow: 'blue' },
      { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500', glow: 'cyan' },
      { name: 'CSS3', icon: SiCss, color: 'text-blue-600', glow: 'cyan' },
    ]
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    skills: [
      { name: 'React', icon: SiReact, color: 'text-cyan-400', glow: 'cyan' },
      { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-400', glow: 'blue' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', glow: 'purple' },
      { name: 'Express', icon: SiExpress, color: 'text-gray-300', glow: 'none' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400', glow: 'cyan' },
      { name: 'Vite', icon: SiVite, color: 'text-purple-400', glow: 'purple' },
    ]
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', glow: 'purple' },
      { name: 'Redis', icon: SiRedis, color: 'text-red-500', glow: 'blue' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400', glow: 'cyan' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-600', glow: 'blue' },
    ]
  },
  {
    id: 'tools',
    label: 'Dev Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: 'text-orange-500', glow: 'blue' },
      { name: 'Docker', icon: SiDocker, color: 'text-blue-500', glow: 'cyan' },
      { name: 'Postman', icon: SiPostman, color: 'text-orange-400', glow: 'none' },
    ]
  }
];

const AI_ECOSYSTEM = {
  label: 'AI & Agentic Ecosystem',
  skills: [
    { name: 'ChatGPT / OpenAI', icon: Brain, color: 'text-green-400', glow: 'purple', desc: 'LLM integration, Prompting, Assistants API' },
    { name: 'Gemini / Google', icon: SiGoogle, color: 'text-blue-400', glow: 'blue', desc: 'Multimodal APIs, structured outputs' },
    { name: 'Claude / Anthropic', icon: SiAnthropic, color: 'text-orange-300', glow: 'purple', desc: 'Advanced reasoning and document parsing' },
    { name: 'GitHub Copilot', icon: SiGithubcopilot, color: 'text-purple-400', glow: 'cyan', desc: 'Contextual AI pairing and autofills' },
    { name: 'Cursor', icon: TbUfo, color: 'text-sky-400', glow: 'blue', desc: 'Agentic IDE workspace navigation' },
    { name: 'Context7', icon: TbLayersIntersect, color: 'text-indigo-400', glow: 'purple', desc: 'Semantic indexing and vector searches' },
    { name: 'MCP (Model Context)', icon: TbHierarchy, color: 'text-teal-400', glow: 'cyan', desc: 'Model Context Protocol server integrations' },
    { name: 'Antigravity', icon: TbAtom, color: 'text-cyan-400', glow: 'blue', desc: 'AI agentic pair programming loops' },
    { name: 'Stitch', icon: TbPlug, color: 'text-pink-400', glow: 'purple', desc: 'Dynamic interface variant generation' },
  ]
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('languages');
  const { setCursorHovered } = useStore();

  const currentCategory = CORE_CATEGORIES.find(c => c.id === activeTab);

  return (
    <section id="skills" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
      <div className="space-y-4 text-center md:text-left mb-16">
        <span className="text-accent-blue font-mono tracking-wider font-semibold uppercase text-sm block">
          Technical Stack
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Skills & <GradientText>Technologies</GradientText>
        </h2>
      </div>

      {/* CORE SKILLS SECTION */}
      <div className="space-y-8 mb-16">
        <div className="flex flex-wrap gap-2 border-b border-glass-border pb-4 justify-start">
          {CORE_CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
              className={`px-5 py-2.5 rounded-lg-12 text-sm font-medium transition-all cursor-pointer ${
                activeTab === category.id
                  ? 'bg-accent-blue text-white shadow-glow-blue'
                  : 'text-gray-400 hover:text-white bg-glass-bg border border-glass-border hover:border-white/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {currentCategory?.skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <TiltCard key={index} glowColor={skill.glow as any} className="p-6 flex flex-col items-center justify-center space-y-4 text-center h-36">
                  <IconComponent className={`w-10 h-10 ${skill.color}`} />
                  <span className="text-sm font-semibold text-white tracking-wide">{skill.name}</span>
                </TiltCard>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* AI & ECOSYSTEM HIGHLIGHTED SECTION */}
      <div className="border border-accent-purple/20 bg-background-elevated/40 rounded-2xl-24 p-8 md:p-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-glass-border pb-6">
          <div className="flex items-center space-x-3 text-left">
            <Cpu className="text-accent-purple w-8 h-8 animate-pulse" />
            <div>
              <h3 className="text-2xl font-bold text-white tracking-wide">{AI_ECOSYSTEM.label}</h3>
              <p className="text-sm text-gray-400 mt-1">Specialized engineering toolkits for modern generative workflows</p>
            </div>
          </div>
          <span className="text-xs font-mono px-3 py-1 bg-accent-purple/20 border border-accent-purple/30 rounded-full text-accent-purple font-semibold self-start md:self-center">
            AI-Focused Profile
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_ECOSYSTEM.skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <TiltCard
                key={index}
                glowColor={skill.glow as any}
                className="p-6 flex items-start space-x-4 border border-glass-border bg-glass-bg/20 text-left hover:border-accent-purple/30 hover:bg-glass-bgHover transition-all"
              >
                <div className="p-3 bg-glass-bg border border-glass-border rounded-xl-16 group-hover:bg-background-base transition-colors shrink-0">
                  <IconComponent className={`w-6 h-6 ${skill.color}`} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white">{skill.name}</h4>
                  <p className="text-xs text-gray-400 leading-normal">{skill.desc}</p>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
