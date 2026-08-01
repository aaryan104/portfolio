import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import { GradientText } from '../components/GradientText';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../content/resume-data';

const RESUME_PDF_URL = RESUME_DATA.personalInfo.resumePdfUrl;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export const ResumePage: React.FC = () => {
  const navigate = useNavigate();
  const { setCursorHovered } = useStore();

  const handleDownload = () => {
    try {
      // Fire and forget download tracking call
      fetch(`${API_BASE_URL}/api/resume/download`, { method: 'POST' }).catch(() => { });

      // Open / trigger standard browser download
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
    <div className="min-h-screen bg-background-base text-gray-300 pt-28 pb-16 px-6 flex flex-col">
      <div className="max-w-5xl mx-auto w-full space-y-8 flex-grow flex flex-col">

        {/* Back navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none"
          >
            <ArrowLeft size={16} />
            <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)} className="text-sm font-semibold">
              Back to Home
            </span>
          </button>
        </motion.div>

        {/* Title and Download CTA */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-glass-border pb-6"
        >
          <div className="space-y-1 text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white flex items-center gap-3">
              <FileText className="text-accent-blue w-8 h-8" />
              <GradientText>Resume</GradientText>
            </h1>
            <p className="text-gray-400 text-sm">
              Review or download the latest PDF profile of Aaryan Mangukiya
            </p>
          </div>

          <MagneticButton
            onClick={handleDownload}
            className="px-6 py-3 bg-accent-blue text-white rounded-lg-12 font-semibold hover:bg-accent-blue-light transition-colors flex items-center space-x-2 shadow-glow-blue cursor-pointer self-start sm:self-center"
          >
            <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)} className="flex items-center space-x-2">
              <Download size={18} />
              <span>Download PDF</span>
            </span>
          </MagneticButton>
        </motion.header>

        {/* Desktop PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="hidden md:flex flex-grow rounded-2xl-24 overflow-hidden border border-glass-border shadow-soft bg-background-elevated min-h-[600px] flex-col"
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
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="md:hidden p-6 rounded-2xl border border-glass-border bg-glass-bg/10 text-center space-y-4"
        >
          <div className="text-gray-400 text-sm leading-relaxed font-medium">
            PDF previews are optimized for wider desktop displays. Please click the button below to download and view your resume on mobile.
          </div>
          <button
            onClick={handleDownload}
            className="w-full py-3 bg-accent-blue text-white rounded-xl font-semibold hover:bg-accent-blue-light transition-all flex items-center justify-center space-x-2 shadow-glow-blue cursor-pointer"
          >
            <Download size={16} />
            <span>Download PDF Resume</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};
