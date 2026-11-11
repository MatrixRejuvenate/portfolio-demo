import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCatId, setSelectedCatId] = useState<string>('ai-ml');
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = SKILL_CATEGORIES.find((c) => c.id === selectedCatId) || SKILL_CATEGORIES[0];

  // Global search filtering if query exists
  const allSkills = SKILL_CATEGORIES.flatMap((c) =>
    c.skills.map((s) => ({ ...s, categoryName: c.name }))
  );

  const displayedSkills = searchQuery.trim()
    ? allSkills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.details.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currentCategory.skills;

  return (
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-800" data-scroll-section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
              Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Skills & Engineering Stack
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl">
              Proven proficiency spanning deep learning algorithms, reactive frontend engineering, distributed streaming, and cloud tooling.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Vue 3, PyTorch)..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-indigo-500"
            />
          </div>
        </div>

        {/* Category Navigation (when not searching) */}
        {!searchQuery.trim() && (
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCatId(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedCatId === cat.id
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Category Description */}
        {!searchQuery.trim() && (
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {currentCategory.description}
          </p>
        )}

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((skill, index) => (
            <motion.div
              key={skill.name + index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="p-5 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-indigo-500/40 transition-colors space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                  {skill.name}
                </span>
                <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400">
                  {skill.level}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {skill.details}
              </p>
              {'categoryName' in skill && (
                <div className="pt-2 text-[11px] text-slate-400 font-mono">
                  {String(skill.categoryName)}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
