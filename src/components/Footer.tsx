import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, FileText, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { PROFILE } from '../data/portfolioData';

interface FooterProps {
  onScrollToTop: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop, onOpenResume }) => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center justify-center md:justify-start gap-2">
              <Cpu className="w-4 h-4 text-indigo-500" />
              {PROFILE.name}
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              AI Engineer · Specializing in GenAI, Neural RAG Architectures & Real-Time Streaming
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={onOpenResume}
              className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
            >
              Curriculum Vitae
            </motion.button>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              GitHub
            </motion.a>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              LinkedIn
            </motion.a>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={onScrollToTop}
              className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Satyajit Mohapatra. All rights reserved.</p>
          <p className="font-mono">
            IIT Madras &middot; SUIIT &middot; GDSC ML Core Lead
          </p>
        </div>
      </div>
    </footer>
  );
};
