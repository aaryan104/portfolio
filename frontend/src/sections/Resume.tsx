import React from 'react';
import { RESUME_DATA } from '../content/resume-data';
import { useStore } from '../store/useStore';
import { Download } from 'lucide-react';
import { GradientText } from '../components/GradientText';
import { MagneticButton } from '../components/MagneticButton';
import { motion } from 'framer-motion';

const RESUME_PDF_URL = RESUME_DATA.personalInfo.resumePdfUrl;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export const Resume: React.FC = () => {
  const { setCursorHovered } = useStore();

  const handleDownload = () => {
    try {
      fetch(`${API_BASE_URL}/api/resume/download`, { method: 'POST' }).catch(() => { });
      const link = document.createElement('a');
      link.href = RESUME_PDF_URL;
      link.download = 'Aaryan_Mangukiya_Resume_Updated.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Failed to track download', err);
    }
  };

  return (
    <section id="resume" className="relative py-24 px-6 max-w-5xl mx-auto z-10 text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 border-b border-glass-border pb-6">
        <div className="space-y-4">
          <span className="text-accent-blue font-mono tracking-wider font-semibold uppercase text-xs block">
            Curriculum Vitae
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My <GradientText from="from-accent-blue" to="to-accent-cyan">Resume</GradientText>
          </h2>
        </div>

        <MagneticButton
          onClick={handleDownload}
          className="px-6 py-3 bg-accent-blue text-white rounded-xl-16 font-semibold hover:bg-accent-blue-light transition-all flex items-center space-x-2 shadow-glow-blue cursor-pointer self-start md:self-center"
        >
          <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)} className="flex items-center space-x-2">
            <Download size={18} />
            <span>Download PDF</span>
          </span>
        </MagneticButton>
      </div>

      {/* Desktop PDF Viewer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex rounded-2xl overflow-hidden border border-glass-border shadow-soft bg-glass-bg/10 h-[600px] flex-col"
      >
        <iframe
          src={`${RESUME_PDF_URL}#toolbar=0`}
          title="Aaryan Mangukiya Resume Preview"
          className="w-full flex-grow border-none"
          loading="lazy"
        />
      </motion.div>

      {/* Mobile PDF Fallback Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="md:hidden p-6 rounded-2xl border border-glass-border bg-glass-bg/10 text-center space-y-4"
      >
        <div className="text-gray-400 text-sm leading-relaxed">
          PDF previews may not render correctly on mobile browsers. Please download the document to view it comfortably.
        </div>
        <button
          onClick={handleDownload}
          className="w-full py-3 bg-accent-blue text-white rounded-xl font-semibold hover:bg-accent-blue-light transition-all flex items-center justify-center space-x-2 shadow-glow-blue cursor-pointer"
        >
          <Download size={16} />
          <span>Download PDF Resume</span>
        </button>
      </motion.div>
    </section>
  );
};
export default Resume;
