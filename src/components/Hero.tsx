import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail, FileDown, Sparkles, Terminal } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface HeroProps {
  onNavigateToProjects: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToProjects, onOpenResume }) => {
  return (
    <section id="hero" className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden" data-scroll-section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen 2-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
            data-scroll
            data-scroll-speed="1"
          >
            {/* Clean kicker - No pill box */}
            <div className="flex items-center gap-2 text-xs font-medium text-indigo-600 dark:text-indigo-400">
              <span className="uppercase tracking-wider font-mono">Senior Frontend & ML Engineer</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 dark:text-slate-400">SUIIT & IIT Madras</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.1] text-balance">
              Architecting modern reactive interfaces backed by intelligent ML pipelines.
            </h1>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Hello, I&apos;m <strong className="text-slate-900 dark:text-slate-100 font-semibold">{PROFILE.name}</strong>. 
              I design and build high-performance web applications using Vue 3, React, and Tailwind CSS, coupled with production-ready GenAI, Kafka-Spark streaming pipelines, and neural transfer learning models.
            </p>

            {/* Clean unboxed metadata row */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <span>Bhubaneswar / Sambalpur</span>
              <span aria-hidden="true">·</span>
              <span>Class of 2026</span>
              <span aria-hidden="true">·</span>
              <span>GDSC ML Core Lead</span>
              <span aria-hidden="true">·</span>
              <span>Available for High-Impact Roles</span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onNavigateToProjects}
                className="px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer"
              >
                Explore Selected Works
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg hover:border-slate-400 dark:hover:border-slate-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-indigo-500" />
                <span>View & Download CV</span>
              </button>

              {/* Direct links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="p-2.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                  aria-label="Email Satyajit"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Container at Matching Height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
            data-scroll
            data-scroll-speed="-0.5"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Subtle ambient blur backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-sky-500/20 rounded-3xl blur-2xl -z-10" />

              {/* Main Portrait Card */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900/5 dark:bg-slate-900/40 shadow-xl">
                <img
                  src={PROFILE.avatarUrl}
                  alt="Satyajit Mohapatra portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-square object-cover"
                />

                {/* Sub-card verified status */}
                <div className="p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-slate-100">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                      <span>Full-Stack & Machine Learning</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Vue 3 · PyTorch · Kafka · LangChain
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">Open to Work</span>
                  </div>
                </div>
              </div>

              {/* Floating Code Snippet Card */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 max-w-xs p-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
                  <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                  <span>satyajit.dev.ts</span>
                </div>
                <p className="text-xs font-mono text-slate-800 dark:text-slate-200">
                  <span className="text-indigo-600 dark:text-indigo-400">const</span> stack = [<span className="text-amber-600 dark:text-amber-400">&apos;Vue3&apos;</span>, <span className="text-amber-600 dark:text-amber-400">&apos;PyTorch&apos;</span>, <span className="text-amber-600 dark:text-amber-400">&apos;Kafka&apos;</span>];
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-width proof metric row below the split */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PROFILE.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono tracking-tight text-slate-900 dark:text-slate-100 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
