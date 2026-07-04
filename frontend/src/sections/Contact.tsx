import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useStore } from '../store/useStore';
import { GlassCard } from '../components/GlassCard';
import { GradientText } from '../components/GradientText';
import { MagneticButton } from '../components/MagneticButton';
import { Mail, MapPin, Send, AlertCircle, CheckCircle, Linkedin, Phone } from 'lucide-react';
import { SiWhatsapp, SiGithub } from 'react-icons/si';
import { RESUME_DATA } from '../content/resume-data';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export const Contact: React.FC = () => {
  const { setCursorHovered } = useStore();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { honeypot: '' }
  });

  const onSubmit = async (data: ContactFormValues) => {
    if (data.honeypot) {
      setStatus('success'); // honeypot decoy
      reset();
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message
        })
      });

      if (res.status === 429) {
        setStatus('error');
        setErrorMessage('Too many requests. Please try again in an hour.');
        return;
      }

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('Could not connect to backend server. Please try again later.');
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
      <div className="space-y-4 text-center md:text-left mb-16">
        <span className="text-accent-blue font-mono tracking-wider font-semibold uppercase text-xs block">
          Get in touch
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Contact <GradientText from="from-accent-blue" to="to-accent-cyan">Me</GradientText>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Contact Info & Maps */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <GlassCard className="p-6 space-y-6 text-left" hoverEffect={false}>
            <h3 className="text-xl font-bold text-white">Contact Info</h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} className="text-accent-blue shrink-0" />
                <a href={`mailto:${RESUME_DATA.personalInfo.email}`} className="text-sm hover:text-white transition-colors select-all">
                  {RESUME_DATA.personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} className="text-accent-blue shrink-0" />
                <span className="text-sm">{RESUME_DATA.personalInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} className="text-accent-purple shrink-0" />
                <span className="text-sm">Gujarat, India</span>
              </div>
            </div>

            {/* Micro Social icons tray */}
            <div className="flex items-center space-x-4 pt-4 border-t border-glass-border">
              <MagneticButton
                onClick={() => window.open(`https://wa.me/919714112411`, 'Hello Aaryan Mangukiya,\n I saw your profile. I would like to discuss about ')}
                className="p-3 bg-glass-bg border border-glass-border text-gray-400 hover:text-green-400 rounded-full transition-colors"
              >
                <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)}>
                  <SiWhatsapp size={16} />
                </span>
              </MagneticButton>

              <MagneticButton
                onClick={() => window.open(RESUME_DATA.personalInfo.linkedinUrl, '_blank')}
                className="p-3 bg-glass-bg border border-glass-border text-gray-400 hover:text-blue-400 rounded-full transition-colors"
              >
                <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)} className="flex items-center justify-center">
                  <Linkedin size={16} />
                </span>
              </MagneticButton>

              <MagneticButton
                onClick={() => window.open(RESUME_DATA.personalInfo.githubUrl, '_blank')}
                className="p-3 bg-glass-bg border border-glass-border text-gray-400 hover:text-white rounded-full transition-colors"
              >
                <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)}>
                  <SiGithub size={16} />
                </span>
              </MagneticButton>
            </div>
          </GlassCard>

          {/* Location Map Embed */}
          <div className="rounded-xl-16 overflow-hidden border border-glass-border h-64 md:h-72 w-full bg-background-elevated relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.52982230402!2d72.73111005820311!3d21.170240100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              title="Aaryan Location (Surat, Gujarat)"
              className="w-full h-full border-none opacity-60 hover:opacity-85 transition-opacity"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Column: Reactive Zod form validation panel */}
        <div className="lg:col-span-7">
          <GlassCard className="p-8 h-full flex flex-col justify-between text-left border border-glass-border bg-glass-bg/10" hoverEffect={false}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
              {/* Bot Honeypot field (hidden) */}
              <input
                type="text"
                {...register('honeypot')}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Your Name</label>
                  <input
                    type="text"
                    {...register('name')}
                    className="w-full p-3 rounded-lg-12 bg-background-base/60 border border-glass-border text-white text-sm focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 outline-none transition-all"
                    placeholder="Enter name"
                  />
                  {errors.name && (
                    <span className="text-xs text-rose-400 flex items-center gap-1.5"><AlertCircle size={12} /> {errors.name.message}</span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Email Address</label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full p-3 rounded-lg-12 bg-background-base/60 border border-glass-border text-white text-sm focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 outline-none transition-all"
                    placeholder="name@example.com"
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-400 flex items-center gap-1.5"><AlertCircle size={12} /> {errors.email.message}</span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Subject</label>
                <input
                  type="text"
                  {...register('subject')}
                  className="w-full p-3 rounded-lg-12 bg-background-base/60 border border-glass-border text-white text-sm focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 outline-none transition-all"
                  placeholder="Subject title"
                />
                {errors.subject && (
                  <span className="text-xs text-rose-400 flex items-center gap-1.5"><AlertCircle size={12} /> {errors.subject.message}</span>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Message</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  className="w-full p-3 rounded-lg-12 bg-background-base/60 border border-glass-border text-white text-sm focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 outline-none transition-all resize-none"
                  placeholder="Write your details here..."
                />
                {errors.message && (
                  <span className="text-xs text-rose-400 flex items-center gap-1.5"><AlertCircle size={12} /> {errors.message.message}</span>
                )}
              </div>

              {/* Status Feedbacks */}
              {status === 'success' && (
                <div className="p-4 rounded-lg-12 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-2.5 text-sm">
                  <CheckCircle size={18} />
                  <span>Message sent successfully! I will reply shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-lg-12 bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center gap-2.5 text-sm">
                  <AlertCircle size={18} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <MagneticButton
                type="submit"
                disabled={status === 'loading'}
                className="w-full md:w-auto px-6 py-3 bg-accent-blue text-white rounded-lg-12 font-semibold hover:bg-accent-blue-light transition-all flex items-center justify-center space-x-2 shadow-glow-blue cursor-pointer disabled:opacity-50"
              >
                <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)} className="flex items-center space-x-2">
                  <Send size={16} />
                  <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                </span>
              </MagneticButton>

            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
export default Contact;
