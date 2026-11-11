import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, CheckCircle, Globe2, BookOpen } from 'lucide-react';
import { EDUCATION_DATA, ACHIEVEMENTS, PROFILE } from '../data/portfolioData';

export const EducationJourney: React.FC = () => {
  return (
    <section id="journey" className="py-20 border-t border-slate-200 dark:border-slate-800" data-scroll-section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
            Academic Track & Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Education & Honors
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl">
            A rigorous engineering foundation rooted in Computer Science theory, applied Data Science from IIT Madras, and recognized competitive test results.
          </p>
        </div>

        {/* 2-Column Split: Education on Left, Achievements & Leadership on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Formal Education */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Formal Education
              </h3>
            </div>

            <div className="space-y-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    <span>{edu.institution}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">{edu.score}</span>
                  </div>

                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="pt-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-medium text-slate-700 dark:text-slate-300">Coursework: </span>
                      {edu.coursework.join(' · ')}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Achievements, Leadership & Spoken Languages */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Certifications & Leadership
              </h3>
            </div>

            <div className="space-y-4">
              {ACHIEVEMENTS.map((ach, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="p-5 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      {ach.title}
                    </h4>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
                      {ach.date}
                    </span>
                  </div>

                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    {ach.issuer}
                    {ach.highlight && (
                      <span className="ml-2 font-mono text-slate-900 dark:text-slate-100 font-semibold">
                        ({ach.highlight})
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {ach.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Multilingual Fluency & Focus Box */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                <Globe2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Languages & Focus Areas</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="block text-slate-500 dark:text-slate-400 font-medium mb-1">Languages:</span>
                  <div className="space-y-1 text-slate-800 dark:text-slate-200">
                    {PROFILE.spokenLanguages.map((l, i) => (
                      <div key={i} className="flex justify-between">
                        <span>{l.language}</span>
                        <span className="font-mono text-slate-500">{l.proficiency}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="block text-slate-500 dark:text-slate-400 font-medium mb-1">Focus Interests:</span>
                  <div className="space-y-1 text-slate-800 dark:text-slate-200">
                    {PROFILE.interests.map((it, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-indigo-500 shrink-0" />
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
