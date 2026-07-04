import React from 'react';
import { RESUME_DATA } from '../content/resume-data';
import { useStore } from '../store/useStore';
import { Github, Code } from 'lucide-react';
import { GradientText } from '../components/GradientText';
import { motion } from 'framer-motion';

export const Projects: React.FC = () => {
  const { setCursorHovered } = useStore();

  if (RESUME_DATA.projects.length === 0) return null;

  return (
    <section id="projects" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
      <div className="space-y-4 text-center md:text-left mb-20">
        <span className="text-accent-cyan font-mono tracking-wider font-semibold uppercase text-xs block">
          Featured Creations
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Key <GradientText from="from-accent-cyan" to="to-accent-blue">Projects</GradientText>
        </h2>
      </div>

      <div className="space-y-24">
        {RESUME_DATA.projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={index}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 text-left`}
            >
              {/* Left/Right Visual Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 aspect-video relative rounded-2xl border border-glass-border overflow-hidden bg-glass-bg/10 flex items-center justify-center shadow-glow-blue/5"
              >
                {/* Abstract Coding Background Grid */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                {/* Visual Art Box */}
                <div className="flex flex-col items-center space-y-4 p-8 text-center relative z-10">
                  <div className="p-4 bg-background-base/80 border border-glass-border rounded-full text-accent-cyan shadow-glow-blue animate-pulse">
                    <Code size={40} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold tracking-wider font-mono text-gray-500 uppercase">
                      Screenshot Placeholder
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">
                      {project.title}
                    </h4>
                  </div>
                </div>

                {/* Glowing subtle overlay */}
                <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-accent-blue/10 blur-2xl pointer-events-none" />
              </motion.div>

              {/* Left/Right Project Text Details */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-accent-cyan font-mono tracking-wider uppercase">
                    {project.subtitle}
                  </p>
                </div>

                {/* Exact Resume Bullet Points */}
                <ul className="space-y-3">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start text-sm text-gray-300 leading-relaxed">
                      <span className="text-accent-blue mr-3 mt-1.5 font-bold shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Project Actions */}
                {project.githubUrl && (
                  <div className="pt-4 flex items-center space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setCursorHovered(true)}
                      onMouseLeave={() => setCursorHovered(false)}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 bg-glass-bg border border-glass-border hover:border-white/20 text-white rounded-xl-16 font-semibold text-sm transition-colors"
                    >
                      <Github size={16} />
                      <span>Code on GitHub</span>
                    </a>
                  </div>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
