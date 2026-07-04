import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Navbar } from '../components/Navbar';
import { CustomCursor } from '../components/CustomCursor';
import { Loader } from '../components/Loader';
import { BackToTop } from '../components/BackToTop';
import { FloatingContact } from '../components/FloatingContact';
import { Footer } from '../components/Footer';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Experience } from '../sections/Experience';
import { Certifications } from '../sections/Certifications';
import { Resume } from '../sections/Resume';
import { GitHubStats } from '../sections/GitHubStats';
import { Contact } from '../sections/Contact';
import { RESUME_DATA } from '../content/resume-data';

export const Home: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const { setActiveSection } = useStore();
  const location = useLocation();

  useEffect(() => {
    if (loaded && location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo;
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [loaded, location]);

  useEffect(() => {
    if (!loaded) return;
    
    const sections = [
      'hero',
      RESUME_DATA.personalInfo.profile && 'about',
      Object.values(RESUME_DATA.skills).some(arr => arr.length > 0) && 'skills',
      RESUME_DATA.projects.length > 0 && 'projects',
      RESUME_DATA.experience.length > 0 && 'experience',
      RESUME_DATA.certifications.length > 0 && 'certifications',
      'resume',
      'contact'
    ].filter(Boolean) as string[];
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [loaded, setActiveSection]);

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />
      
      {loaded && (
        <div className="flex flex-col min-h-screen">
          <CustomCursor />
          <Navbar />
          
          <main className="flex-grow">
            <Hero />
            {RESUME_DATA.personalInfo.profile && <About />}
            {Object.values(RESUME_DATA.skills).some(arr => arr.length > 0) && <Skills />}
            {RESUME_DATA.projects.length > 0 && <Projects />}
            {RESUME_DATA.experience.length > 0 && <Experience />}
            {RESUME_DATA.certifications.length > 0 && <Certifications />}
            <Resume />
            <GitHubStats />
            <Contact />
          </main>

          <Footer />
          <BackToTop />
          <FloatingContact />
        </div>
      )}
    </>
  );
};
export default Home;
