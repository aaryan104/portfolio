import React from 'react';
import { RESUME_DATA } from '../content/resume-data';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { GradientText } from '../components/GradientText';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
  if (RESUME_DATA.experience.length === 0) return null;

  return (
    <section id="experience" className="relative py-24 px-6 max-w-5xl mx-auto z-10">
      <div className="space-y-4 text-center md:text-left mb-16">
        <span className="text-accent-purple font-mono tracking-wider font-semibold uppercase text-xs block">
          Employment History
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Work <GradientText from="from-accent-purple" to="to-accent-blue">Experience</GradientText>
        </h2>
      </div>

      {/* Horizontal / Wide format layout (distinct from Education vertical line) */}
      <div className="space-y-8 text-left">
        {RESUME_DATA.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassCard className="p-8 md:p-10 border border-glass-border bg-glass-bg/10 hover:border-accent-purple/30 transition-all space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-glass-border pb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-glass-bg border border-glass-border rounded-2xl text-accent-purple shadow-glow-purple">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-accent-blue-light uppercase tracking-wider mt-0.5">
                      {exp.organization}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-500 font-mono font-semibold self-start md:self-center">
                  <Calendar size={14} />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Work Details List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start space-x-3 text-sm text-gray-300 leading-relaxed">
                    <CheckCircle2 size={16} className="text-accent-purple shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Experience;
