import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../utils/projects-data';
import { useStore } from '../store/useStore';
import { ArrowLeft, Github, Globe, CheckCircle } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import { GlassCard } from '../components/GlassCard';
import { GradientText } from '../components/GradientText';
import { motion } from 'framer-motion';

export const ProjectCaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { setCursorHovered } = useStore();
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-background-base text-white flex flex-col items-center justify-center p-6 text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-accent-purple">Project Not Found</h1>
        <p className="text-gray-400">The project case study you are looking for does not exist.</p>
        <Link to="/" className="text-accent-blue hover:underline">Return to Home</Link>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'In Progress': return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-background-base text-gray-300 pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors cursor-pointer group bg-transparent border-none"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)} className="text-sm font-semibold">
              Back to Projects
            </span>
          </button>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="border-b border-glass-border pb-6 space-y-3"
        >
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              <GradientText>{project.title}</GradientText>
            </h1>
            <span className={`text-xs font-semibold px-3 py-1 border rounded-full ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-medium">
            {project.oneLiner}
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="space-y-4">
              <div className="relative h-64 md:h-96 w-full rounded-2xl-24 overflow-hidden border border-glass-border shadow-soft bg-background-elevated">
                <img
                  src={project.images[activeImageIdx]}
                  alt={`${project.title} screenshot ${activeImageIdx + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
              <div className="flex items-center gap-3">
                {project.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIdx(index)}
                    onMouseEnter={() => setCursorHovered(true)}
                    onMouseLeave={() => setCursorHovered(false)}
                    className={`w-16 h-12 md:w-24 md:h-16 rounded-lg-12 overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIdx === index ? 'border-accent-cyan scale-105 shadow-glow-cyan' : 'border-glass-border opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <GlassCard className="p-8 space-y-4" hoverEffect={false}>
              <h3 className="text-2xl font-bold text-white">Project Overview</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>
            </GlassCard>

            <GlassCard className="p-8 space-y-6" hoverEffect={false}>
              <h3 className="text-2xl font-bold text-white">Key Features</h3>
              <ul className="space-y-4">
                {project.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start space-x-3 text-sm md:text-base text-gray-300">
                    <CheckCircle size={18} className="text-accent-cyan shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-4 space-y-6"
          >
            <GlassCard className="p-6 space-y-4 border border-accent-cyan/15 shadow-glow-cyan/5" hoverEffect={false}>
              <h3 className="text-lg font-bold text-white">Project Links</h3>
              <div className="flex flex-col gap-3">
                {project.githubUrl && (
                  <MagneticButton
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="w-full py-3 bg-glass-bg border border-glass-border text-white rounded-lg-12 font-medium hover:border-white/20 hover:bg-glass-bgHover transition-colors flex items-center justify-center space-x-2"
                  >
                    <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)} className="flex items-center space-x-2">
                      <Github size={18} />
                      <span>Source Code</span>
                    </span>
                  </MagneticButton>
                )}

                {project.demoUrl && (
                  <MagneticButton
                    onClick={() => window.open(project.demoUrl, '_blank')}
                    className="w-full py-3 bg-accent-cyan text-background-base rounded-lg-12 font-bold hover:bg-accent-cyan/80 transition-all flex items-center justify-center space-x-2 shadow-glow-cyan hover:shadow-lg"
                  >
                    <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)} className="flex items-center space-x-2">
                      <Globe size={18} />
                      <span>Live Demonstration</span>
                    </span>
                  </MagneticButton>
                )}
              </div>
            </GlassCard>

            <GlassCard className="p-6 space-y-6" hoverEffect={false}>
              <h3 className="text-lg font-bold text-white">Technical Details</h3>
              
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block">Role</span>
                  <span className="text-sm font-semibold text-white mt-1 block">{project.role}</span>
                </div>

                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block">Timeline</span>
                  <span className="text-sm font-semibold text-white mt-1 block">{project.timeline}</span>
                </div>

                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block">Tech Stack</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono font-medium px-2 py-0.5 bg-background-base border border-glass-border text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
