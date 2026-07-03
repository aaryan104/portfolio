import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useStore } from '../store/useStore';
import { MapPin, Globe, GraduationCap } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { GradientText } from '../components/GradientText';

// TODO: Aaryan to confirm exact dates/CGPA, school names, and credentials
const EDUCATION_HISTORY = [
  {
    type: "Bachelor's Degree",
    title: "Bachelor of Technology in Computer Science",
    institution: "Confirm Institution Name // TODO: Aaryan to edit",
    duration: "2023 - 2027 (Expected) // TODO: Aaryan to edit",
    grade: "CGPA: Confirm CGPA // TODO: Aaryan to edit",
    description: "Focusing on Artificial Intelligence architectures, Distributed Systems, Neural Networks, and Advanced Software Design."
  },
  {
    type: "Diploma / Higher Secondary",
    title: "Diploma in Computer Engineering / High School",
    institution: "Confirm School/College Name // TODO: Aaryan to edit",
    duration: "2020 - 2023 // TODO: Aaryan to edit",
    grade: "Grade / percentage: Confirm // TODO: Aaryan to edit",
    description: "Gained core fundamentals in Algorithms, database schema structures, and object-oriented paradigms."
  },
  {
    type: "Secondary School",
    title: "Secondary School Certificate",
    institution: "Confirm School Name // TODO: Aaryan to edit",
    duration: "2018 - 2020 // TODO: Aaryan to edit",
    grade: "Grade / percentage: Confirm // TODO: Aaryan to edit",
    description: "Acquired fundamentals in Physics, Mathematics, and Computer Science basics."
  }
];

const SOFT_SKILLS = [
  'Analytical Thinking', 'Problem Solving', 'Fast Learner', 'Collaboration', 
  'Adaptability', 'Effective Communication', 'Critical Observation'
];

export const About: React.FC = () => {
  const { setCursorHovered } = useStore();
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position over the timeline container
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <section id="about" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
      <div className="space-y-4 text-center md:text-left mb-16">
        <span className="text-accent-purple font-mono tracking-wider font-semibold uppercase text-sm block">
          Get to know me
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          About <GradientText from="from-accent-purple" to="to-accent-cyan">Me</GradientText>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Bio Details */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <GlassCard className="p-8 space-y-6">
            <h3 className="text-2xl font-bold text-white">My Journey</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              I am a dedicated Computer Science Student, AI Developer, and Full-Stack Engineer who enjoys solving abstract problems and bringing digital ideas to life. I blend deep machine learning models with polished, responsive web architectures to design comprehensive, premium user experiences.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Whether building custom server systems, configuring data scraping caches, or experimenting with large language model integrations, my goal is to ensure visual excellence and operational robustness.
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-glass-border pt-6">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} className="text-accent-purple" />
                <span className="text-sm">Gujarat, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Globe size={18} className="text-accent-cyan" />
                <span className="text-sm">English, Hindi, Gujarati</span>
              </div>
            </div>
          </GlassCard>

          {/* Soft Skills Tag Box */}
          <GlassCard className="p-8 space-y-4">
            <h3 className="text-xl font-bold text-white">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {SOFT_SKILLS.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-3.5 py-1.5 bg-glass-bg border border-glass-border rounded-full text-xs md:text-sm font-medium text-gray-300 hover:border-accent-purple/30 hover:text-white transition-colors cursor-default"
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Right Column: Education Timeline */}
        <div className="lg:col-span-6 text-left space-y-6">
          <div className="flex items-center space-x-3 mb-6 pl-2">
            <GraduationCap size={24} className="text-accent-blue" />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          {/* Timeline Wrapper */}
          <div ref={timelineRef} className="relative pl-6 md:pl-8 space-y-12">
            {/* Scroll-animated vertical progress bar */}
            <div className="absolute left-[9px] top-0 bottom-0 w-[2px] bg-glass-border" />
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute left-[9px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-blue via-accent-purple to-accent-cyan"
            />

            {EDUCATION_HISTORY.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative space-y-2 group"
              >
                {/* Timeline node node-glow */}
                <div className="absolute -left-[29px] md:-left-[37px] top-1.5 w-4 h-4 rounded-full bg-background-base border-2 border-accent-purple shadow-glow-purple group-hover:scale-125 transition-transform duration-200" />
                
                <span className="text-xs uppercase tracking-wider text-accent-cyan font-mono font-semibold">
                  {edu.type}
                </span>
                
                <h4 className="text-lg font-bold text-white group-hover:text-accent-blue transition-colors">
                  {edu.title}
                </h4>
                
                <div className="flex flex-wrap items-center gap-x-3 text-xs md:text-sm text-gray-500 font-medium">
                  <span>{edu.institution}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="text-gray-400">{edu.duration}</span>
                </div>
                
                <div className="text-xs text-accent-purple/80 font-mono">
                  {edu.grade}
                </div>
                
                <p className="text-sm text-gray-400 leading-relaxed pt-1">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
