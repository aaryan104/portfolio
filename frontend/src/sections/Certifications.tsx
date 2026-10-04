import React from 'react';
import { RESUME_DATA } from '../content/resume-data';
import { Award } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { GradientText } from '../components/GradientText';
import { motion } from 'framer-motion';

export const Certifications: React.FC = () => {
  if (RESUME_DATA.certifications.length === 0) return null;

  return (
    <section id="certifications" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
      <div className="space-y-4 text-center md:text-left mb-16">
        <span className="text-accent-purple font-mono tracking-wider font-semibold uppercase text-sm block">
          Verified Credentials
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Licenses & <GradientText from="from-accent-purple" to="to-accent-cyan">Certifications</GradientText>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESUME_DATA.certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <GlassCard
              className="p-6 flex flex-col justify-between h-44 border border-glass-border bg-glass-bg/15 hover:border-accent-purple/30 text-left"
              hoverEffect={true}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="p-2 bg-glass-bg border border-glass-border rounded-xl-16 text-accent-purple shrink-0">
                    <Award size={20} />
                  </div>
                  <span className="text-xs text-gray-500 font-semibold font-mono">
                    {cert.date}
                  </span>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white leading-snug line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>

            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Certifications;
