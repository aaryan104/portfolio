import React from 'react';
import { RESUME_DATA } from '../content/resume-data';
import { useStore } from '../store/useStore';
import { MapPin, Mail, Phone, Globe, Award } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { GradientText } from '../components/GradientText';
import { motion } from 'framer-motion';

const SOFT_SKILLS = [
  'Analytical Thinking',
  'Problem Solving',
  'Fast Learner',
  'Collaboration',
  'Adaptability',
  'Effective Communication',
  'Critical Observation'
];

export const About: React.FC = () => {
  const { setCursorHovered } = useStore();

  return (
    <section id="about" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
      <div className="space-y-4 text-center md:text-left mb-16">
        <span className="text-accent-purple font-mono tracking-wider font-semibold uppercase text-xs block">
          Get to know me
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          About <GradientText from="from-accent-purple" to="to-accent-cyan">Me</GradientText>
        </h2>
      </div>

      {/* Asymmetric Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Personal Narrative Story (Larger split: col-span-7) */}
        <div className="lg:col-span-7 text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-8 space-y-6 border border-glass-border bg-glass-bg/10 hover:border-accent-purple/20 transition-all">
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                My Story & Professional Profile
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                {RESUME_DATA.personalInfo.profile}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-glass-border pt-6 mt-6">
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin size={18} className="text-accent-blue" />
                  <span className="text-sm font-medium">Gujarat, India</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Globe size={18} className="text-accent-cyan" />
                  <span className="text-sm font-medium">
                    {RESUME_DATA.skills.languages.join(', ')}
                  </span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Right Column: Visual Info Cards (Smaller split: col-span-5) */}
        <div className="lg:col-span-5 text-left space-y-6">
          {/* Quick Stats/Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlassCard className="p-6 space-y-4 border border-glass-border bg-glass-bg/10">
              <h4 className="text-lg font-bold text-white tracking-tight">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Mail size={16} className="text-accent-purple" />
                  <a 
                    href={`mailto:${RESUME_DATA.personalInfo.email}`} 
                    className="hover:text-white transition-colors"
                    onMouseEnter={() => setCursorHovered(true)}
                    onMouseLeave={() => setCursorHovered(false)}
                  >
                    {RESUME_DATA.personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Phone size={16} className="text-accent-purple" />
                  <span>{RESUME_DATA.personalInfo.phone}</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Soft Skills Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassCard className="p-6 space-y-4 border border-glass-border bg-glass-bg/10">
              <h4 className="text-lg font-bold text-white tracking-tight flex items-center space-x-2">
                <Award size={18} className="text-accent-cyan" />
                <span>Soft Skills & Competencies</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {SOFT_SKILLS.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-glass-bg/30 border border-glass-border rounded-full text-xs font-semibold text-gray-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
