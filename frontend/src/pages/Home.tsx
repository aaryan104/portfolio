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
import { Services } from '../sections/Services';
import { GitHubStats } from '../sections/GitHubStats';
import { Contact } from '../sections/Contact';

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
    
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];
    
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
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Services />
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
