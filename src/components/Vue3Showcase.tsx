import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Play, Check, Copy, Layers, Zap, Sparkles, RefreshCw } from 'lucide-react';
import { VUE3_DEMO_CODE } from '../data/portfolioData';

export const Vue3Showcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'interactive' | 'code'>('interactive');
  const [copied, setCopied] = useState(false);

  // Vue 3 simulator state
  const [queryText, setQueryText] = useState('How does RAG semantic caching optimize vector search?');
  const [latencyMs, setLatencyMs] = useState(38);
  const [confidence, setConfidence] = useState(0.94);
  const [isProcessing, setIsProcessing] = useState(false);
  const [executionLog, setExecutionLog] = useState<string[]>([
    'Reactivity system initialized with Composition API',
    'Embedding cache verified in memory (FAISS cluster)',
  ]);

  // Computed properties simulation
  const tokenCount = queryText.trim().split(/\s+/).filter(Boolean).length;
  const characterCount = queryText.length;

  const handleRunLookup = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const newLatency = Math.floor(Math.random() * 25 + 20);
      const newConf = +(Math.random() * 0.06 + 0.92).toFixed(3);
      setLatencyMs(newLatency);
      setConfidence(newConf);
      setIsProcessing(false);
      setExecutionLog((prev) => [
        `Vector lookup executed in ${newLatency}ms with ${(newConf * 100).toFixed(1)}% confidence`,
        ...prev.slice(0, 3),
      ]);
    }, 280);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(VUE3_DEMO_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="vue3-lab" className="py-20 border-t border-slate-200 dark:border-slate-800" data-scroll-section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Frontend Architecture Lab</span>
            <span aria-hidden="true">·</span>
            <span>Vue 3 &middot; Tailwind CSS &middot; Framer Motion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Vue 3 Composition API & Modern Reactive Systems
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            I build frontend systems with fine-grained reactivity, modular single-file components, declarative animations, and zero runtime overhead. Test this interactive Vue 3 state sandbox below.
          </p>
        </div>

        {/* Interactive Lab Container */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
          {/* Top Bar with Mode Switcher */}
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-600 dark:text-slate-300 font-medium">
                RagVectorLookup.vue
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('interactive')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeTab === 'interactive'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                <span>Live Component</span>
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeTab === 'code'
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Vue 3 Code</span>
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8">
            {activeTab === 'interactive' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Interactive Vue 3 UI */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      v-model=&quot;searchQuery&quot; (Reactive Ref)
                    </label>
                    <input
                      type="text"
                      value={queryText}
                      onChange={(e) => setQueryText(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-100 focus:outline-emerald-500 transition-colors"
                      placeholder="Type a natural language prompt..."
                    />
                  </div>

                  {/* Computed Telemetry Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 rounded-xl text-center">
                      <div className="text-xl font-bold font-mono text-slate-900 dark:text-slate-100 tabular-nums">
                        {tokenCount}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Tokens (computed)</div>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 rounded-xl text-center">
                      <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400 tabular-nums">
                        {latencyMs}ms
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Latency (ref)</div>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 rounded-xl text-center">
                      <div className="text-xl font-bold font-mono text-indigo-600 dark:text-indigo-400 tabular-nums">
                        {(confidence * 100).toFixed(1)}%
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Confidence (ref)</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleRunLookup}
                      disabled={isProcessing}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isProcessing ? 'animate-spin' : ''}`} />
                      <span>{isProcessing ? 'Vectorizing Embeddings...' : 'Trigger runRAGLookup()'}</span>
                    </button>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Auto-computes token metrics via <code className="font-mono text-emerald-600 dark:text-emerald-400">computed()</code>
                    </span>
                  </div>

                  {/* Execution Terminal Feed */}
                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
                    <div className="text-slate-500 text-[10px] uppercase tracking-wider">
                      Reactivity Observer Stream
                    </div>
                    {executionLog.map((log, i) => (
                      <div key={i} className="text-slate-300 flex items-start gap-2">
                        <span className="text-emerald-400 shrink-0">&gt;</span>
                        <span className="truncate">{log}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Architecture Highlights */}
                <div className="lg:col-span-5 p-5 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-slate-100">
                    <Layers className="w-4 h-4 text-emerald-500" />
                    <span>Vue 3 & Frontend Strengths</span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <Zap className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Composition API:</strong> Modular logic hooks (`composables`) with high reusability and explicit dependency tracking.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Tailwind CSS Architecture:</strong> Scalable design tokens, zero runtime style cost, responsive mobile-first grids.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Motion & Inertia:</strong> Compositor-only transforms, spring physics, and Locomotive smooth scroll inertia.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Type-Safe Contracts:</strong> Strict TypeScript interfaces shared between REST API schemas and frontend components.</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={handleCopyCode}
                  className="absolute top-3 right-3 px-3 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg flex items-center gap-1.5 transition-colors z-10"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
                <pre className="p-5 bg-slate-950 text-slate-100 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                  <code>{VUE3_DEMO_CODE}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
