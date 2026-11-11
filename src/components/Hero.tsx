import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, FileDown, Sparkles, Terminal, Cpu, Network } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface HeroProps {
  onNavigateToProjects: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToProjects, onOpenResume }) => {
  return (
    <section id="hero" className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden" data-scroll-section>
      {/* Background Animated Neural Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.28, 0.15],
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.25, 0.12],
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-10 right-0 w-[28rem] h-[28rem] rounded-full bg-sky-500/20 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen 2-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
            data-scroll
            data-scroll-speed="1"
          >
            {/* Clean kicker - No pill box */}
            <div className="flex items-center gap-2 text-xs font-medium text-indigo-600 dark:text-indigo-400">
              <span className="uppercase tracking-wider font-mono font-bold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                AI Engineer
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 dark:text-slate-400">SUIIT & IIT Madras</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.1] text-balance"
            >
              Architecting intelligent AI systems, neural RAG pipelines & real-time models.
            </motion.h1>

            {/* Lead copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              Hello, I&apos;m <strong className="text-slate-900 dark:text-slate-100 font-semibold">{PROFILE.name}</strong>, an <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">AI Engineer</strong>. 
              I design and deploy production-ready GenAI architectures, LangChain RAG pipelines, distributed Kafka-Spark streaming systems, and deep CNN transfer-learning classifiers.
            </motion.p>

            {/* Clean unboxed metadata row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pt-1"
            >
              <span>Bhubaneswar / Sambalpur</span>
              <span aria-hidden="true">·</span>
              <span>Class of 2026</span>
              <span aria-hidden="true">·</span>
              <span>GDSC ML Core Lead</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">Available for AI Engineering Roles</span>
            </motion.div>

            {/* Action buttons with Framer Motion animations */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onNavigateToProjects}
                className="px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm hover:shadow-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-2"
              >
                <Network className="w-4 h-4" />
                <span>Explore AI Projects</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg hover:border-slate-400 dark:hover:border-slate-700 transition-colors whitespace-nowrap cursor-pointer shadow-sm"
              >
                <FileDown className="w-4 h-4 text-indigo-500" />
                <span>View & Download CV</span>
              </motion.button>

              {/* Direct links */}
              <div className="flex items-center gap-2 pl-2">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${PROFILE.email}`}
                  className="p-2.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                  aria-label="Email Satyajit"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Container at Matching Height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="lg:col-span-5 relative"
            data-scroll
            data-scroll-speed="-0.5"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Subtle ambient blur backdrop with slow pulse */}
              <motion.div
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/25 via-sky-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10"
              />

              {/* Main Portrait Card with smooth hover lift */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900/5 dark:bg-slate-900/40 shadow-xl group"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={PROFILE.avatarUrl}
                    alt="Satyajit Mohapatra — AI Engineer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Sub-card verified status */}
                <div className="p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-slate-100">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
                      <span>AI Engineer</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      PyTorch · LangChain · Kafka · FAISS
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                      Open to Work
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Code Snippet Card with floating motion */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:block absolute -bottom-6 -left-6 max-w-xs p-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
                  <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                  <span>ai_pipeline.py</span>
                </div>
                <p className="text-xs font-mono text-slate-800 dark:text-slate-200">
                  <span className="text-indigo-600 dark:text-indigo-400">class</span> <span className="text-emerald-600 dark:text-emerald-400">AIEngineer</span>: <br />
                  &nbsp;&nbsp;role = <span className="text-amber-600 dark:text-amber-400">&quot;AI Engineer&quot;</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Full-width proof metric row below the split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PROFILE.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="space-y-1 p-3 rounded-lg hover:bg-slate-100/50 dark:hover:bg-slate-900/50 transition-colors"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono tracking-tight text-slate-900 dark:text-slate-100 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
