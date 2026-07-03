import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useStore } from '../store/useStore';
import { Briefcase, Award, ExternalLink, Calendar, ShieldCheck, X } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { GradientText } from '../components/GradientText';
import { MagneticButton } from '../components/MagneticButton';

// TODO: Aaryan to confirm exact internships, hackathons, and certifications
const EXPERIENCE_DATA = [
  {
    role: "Freelance AI & Full-Stack Developer",
    organization: "Self-Employed / Remote // TODO: Aaryan to edit",
    duration: "2024 - Present",
    bullets: [
      "Engineered high-performance web applications using React, Vite, and custom design tokens.",
      "Integrated LLM inference models (OpenAI, Gemini) into web tools, prompt templates, and backends.",
      "Designed and deployed FastAPI backends utilizing Redis caches and MongoDB database managers."
    ]
  },
  {
    role: "AI & Web3 Hackathon Competitor",
    organization: "Campus / Regional Hackathons // TODO: Aaryan to edit",
    duration: "2023 - 2024",
    bullets: [
      "Designed and pitched 'GreenCoin' carbon waste incentive platform, winning category awards.",
      "Collaborated with cross-functional teams to build mobile emergency triggers in under 36 hours.",
      "Integrated blockchain wallet connectors and contract communication layers on frontends."
    ]
  }
];

const ACHIEVEMENTS_DATA = [
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services",
    credentialId: "AWS-ACAD-CF-101 // TODO: Aaryan to edit",
    verifyUrl: "https://www.credly.com",
    date: "2025"
  },
  {
    title: "Generative AI Specialist Certificate",
    issuer: "Google Cloud Skill Boost",
    credentialId: "GCP-GENAI-984 // TODO: Aaryan to edit",
    verifyUrl: "https://www.cloudskillsboost.google",
    date: "2024"
  },
  {
    title: "LeetCode 50 Days Coding Badge",
    issuer: "LeetCode Platform",
    credentialId: "LC-50-BADGE // TODO: Aaryan to edit",
    verifyUrl: "https://leetcode.com/u/AaryanMangukiya/",
    date: "2024"
  }
];

export const Experience: React.FC = () => {
  const { setCursorHovered } = useStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<typeof ACHIEVEMENTS_DATA[0] | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <section id="experience" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
      <div className="space-y-4 text-center md:text-left mb-16">
        <span className="text-accent-blue font-mono tracking-wider font-semibold uppercase text-sm block">
          Qualifications
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Experience & <GradientText from="from-accent-blue" to="to-accent-purple">Achievements</GradientText>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Work Experience Timeline */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center space-x-3 mb-6 pl-2">
            <Briefcase size={24} className="text-accent-blue" />
            <h3 className="text-2xl font-bold text-white">Work & Leadership</h3>
          </div>

          <div ref={containerRef} className="relative pl-6 md:pl-8 space-y-12">
            <div className="absolute left-[9px] top-0 bottom-0 w-[2px] bg-glass-border" />
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute left-[9px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-blue to-accent-purple"
            />

            {EXPERIENCE_DATA.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative space-y-3 group text-left"
              >
                {/* Timeline node */}
                <div className="absolute -left-[29px] md:-left-[37px] top-1.5 w-4 h-4 rounded-full bg-background-base border-2 border-accent-blue shadow-glow-blue group-hover:scale-125 transition-transform duration-200" />
                
                <h4 className="text-lg font-bold text-white group-hover:text-accent-blue transition-colors">
                  {exp.role}
                </h4>
                
                <div className="flex flex-wrap items-center gap-x-3 text-xs md:text-sm text-gray-500 font-semibold">
                  <span>{exp.organization}</span>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center space-x-1.5 text-gray-400">
                    <Calendar size={12} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <ul className="list-none space-y-2 pt-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-sm text-gray-400 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-accent-purple/60 before:rounded-full">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Achievements & Credentials Grid */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="flex items-center space-x-3 mb-6">
            <Award size={24} className="text-accent-purple" />
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {ACHIEVEMENTS_DATA.map((cert, index) => (
              <GlassCard
                key={index}
                onClick={() => setSelectedCert(cert)}
                onMouseEnter={() => setCursorHovered(true)}
                onMouseLeave={() => setCursorHovered(false)}
                className="p-5 flex items-center justify-between border border-glass-border hover:border-accent-purple/30 bg-glass-bg/15"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-semibold text-accent-purple/80 uppercase">
                    {cert.issuer}
                  </span>
                  <h4 className="text-sm md:text-base font-bold text-white leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    Earned: {cert.date}
                  </p>
                </div>
                <div className="p-2 bg-glass-bg border border-glass-border rounded-full hover:bg-glass-bgHover text-gray-400 hover:text-white transition-colors shrink-0 ml-3">
                  <ShieldCheck size={18} className="text-accent-purple" />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>

      {/* Credential Expand Dialog Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background-base/80 backdrop-blur-md p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md bg-background-elevated border border-glass-border rounded-2xl-24 p-6 shadow-soft space-y-6 relative"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1.5 rounded-full border border-glass-border bg-glass-bg"
            >
              <X size={16} />
            </button>

            <div className="space-y-2 text-left pt-2">
              <span className="text-xs font-mono font-semibold text-accent-purple uppercase block">{selectedCert.issuer}</span>
              <h3 className="text-xl font-bold text-white leading-snug">{selectedCert.title}</h3>
              <p className="text-xs text-gray-500">Date Earned: {selectedCert.date}</p>
            </div>

            <div className="bg-background-base p-4 rounded-xl-16 border border-glass-border text-left">
              <span className="text-xs text-gray-500 block">Credential ID</span>
              <span className="text-sm font-mono text-white mt-1 block select-all">{selectedCert.credentialId}</span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedCert(null)}
                className="flex-1 py-3 border border-glass-border text-white text-sm font-medium rounded-lg-12 hover:bg-glass-bg transition-colors"
              >
                Close
              </button>
              
              <MagneticButton
                onClick={() => window.open(selectedCert.verifyUrl, '_blank')}
                className="flex-1 py-3 bg-accent-purple text-white text-sm font-semibold rounded-lg-12 hover:bg-accent-purple/80 transition-colors flex items-center justify-center space-x-1.5 shadow-glow-purple"
              >
                <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)} className="flex items-center space-x-1.5">
                  <ExternalLink size={14} />
                  <span>Verify License</span>
                </span>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
