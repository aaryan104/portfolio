import React, { useRef } from 'react';
import { RESUME_DATA } from '../content/resume-data';
import { Calendar, Award } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { GradientText } from '../components/GradientText';
import { motion, useScroll, useSpring } from 'framer-motion';

export const Education: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 65%"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  if (RESUME_DATA.education.length === 0) return null;

  return (
    <section id="education" className="relative py-24 px-6 max-w-5xl mx-auto z-10">
      <div className="space-y-4 text-center md:text-left mb-16">
        <span className="text-accent-blue font-mono tracking-wider font-semibold uppercase text-xs block">
          Academic Profile
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          My <GradientText from="from-accent-blue" to="to-accent-cyan">Education</GradientText>
        </h2>
      </div>

      <div ref={containerRef} className="relative pl-8 md:pl-12 space-y-12">
        {/* Connecting timeline line */}
        <div className="absolute left-[9px] md:left-[11px] top-2 bottom-2 w-[2px] bg-glass-border" />
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-[9px] md:left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent-blue via-accent-purple to-accent-cyan"
        />

        {RESUME_DATA.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative text-left group"
          >
            {/* Pop-on-scroll timeline node */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: index * 0.15 + 0.1 }}
              className="absolute -left-[31px] md:-left-[43px] top-1.5 w-[16px] h-[16px] md:w-[20px] md:h-[20px] rounded-full bg-background-base border-[3px] border-accent-blue shadow-glow-blue group-hover:scale-125 transition-transform duration-200 z-20" 
            />

            <GlassCard className="p-6 md:p-8 space-y-4 border border-glass-border bg-glass-bg/10 hover:border-accent-blue/30 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs uppercase tracking-widest text-accent-cyan font-mono font-semibold">
                  {edu.grade.includes('Pursuing') ? 'Current Studies' : 'Graduated'}
                </span>
                <div className="flex items-center space-x-1.5 text-xs text-gray-500 font-mono">
                  <Calendar size={12} />
                  <span>{edu.duration}</span>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight">
                  {edu.degree}
                </h3>
                <p className="text-sm md:text-base text-gray-400 font-medium">
                  {edu.institution}
                </p>
              </div>

              <div className="flex items-center space-x-2 text-sm text-accent-blue font-mono font-bold">
                <Award size={16} />
                <span>{edu.grade}</span>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Education;
