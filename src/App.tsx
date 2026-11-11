import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useLocomotiveScroll } from './hooks/useLocomotiveScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { Vue3Showcase } from './components/Vue3Showcase';
import { SkillsSection } from './components/SkillsSection';
import { EducationJourney } from './components/EducationJourney';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const { containerRef, scrollToSection } = useLocomotiveScroll(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div
      ref={containerRef}
      data-scroll-container
      className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 selection:bg-indigo-500 selection:text-white"
    >
      {/* Top Bar Navigation */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections with Locomotive Scroll attributes */}
      <main>
        <Hero
          onNavigateToProjects={() => scrollToSection('projects')}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <ProjectsSection />

        <Vue3Showcase />

        <SkillsSection />

        <EducationJourney />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onScrollToTop={() => scrollToSection('hero')}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Verified Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
