import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { PROJECTS_DATA } from '../utils/projects-data';
import { GlassCard } from '../components/GlassCard';
import { GradientText } from '../components/GradientText';
import { ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const navigate = useNavigate();
  const { setCursorHovered } = useStore();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'In Progress': return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'Archived': return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="projects" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
      <div className="space-y-4 text-center md:text-left mb-16">
        <span className="text-accent-cyan font-mono tracking-wider font-semibold uppercase text-sm block">
          My Creations
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Featured <GradientText from="from-accent-cyan" to="to-accent-blue">Projects</GradientText>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <GlassCard
            key={index}
            onClick={() => navigate(`/projects/${project.slug}`)}
            className="flex flex-col h-[460px] overflow-hidden group border border-glass-border bg-glass-bg/25 hover:border-accent-cyan/30"
          >
            <div className="relative h-48 w-full overflow-hidden border-b border-glass-border">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-base/90 to-transparent" />
              
              <span className={`absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 border rounded-full ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 
                    onMouseEnter={() => setCursorHovered(true)} 
                    onMouseLeave={() => setCursorHovered(false)}
                    className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors"
                  >
                    {project.title}
                  </h3>
                  <ExternalLink size={16} className="text-gray-500 group-hover:text-accent-cyan transition-colors" />
                </div>
                <p className="text-xs font-semibold text-accent-blue-light uppercase font-mono tracking-wide">
                  {project.role}
                </p>
                <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
                  {project.oneLiner}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4">
                {project.techStack.slice(0, 4).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] md:text-xs font-mono font-medium px-2 py-0.5 bg-background-base border border-glass-border text-gray-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="text-[10px] md:text-xs font-mono font-medium px-2 py-0.5 bg-background-base border border-glass-border text-accent-cyan rounded-full">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
