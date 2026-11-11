import React, { useState } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Zap, Activity, Database, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Simulator states
  const [ragQuery, setRagQuery] = useState('How does in-memory caching accelerate vector retrieval in FAISS?');
  const [ragOutput, setRagOutput] = useState<{
    status: 'idle' | 'searching' | 'done';
    latencyMs?: number;
    similarity?: number;
    cached?: boolean;
    answer?: string;
  }>({ status: 'idle' });

  // Streaming simulator state
  const [streamActive, setStreamActive] = useState(false);
  const [streamCount, setStreamCount] = useState(1240);
  const [sentimentScores, setSentimentScores] = useState({ positive: 64, neutral: 26, negative: 10 });

  // Vision simulator state
  const [selectedSeed, setSelectedSeed] = useState<'almond' | 'coffee' | 'sunflower' | 'cashew'>('almond');
  const [visionInference, setVisionInference] = useState<{
    running: boolean;
    prediction?: string;
    confidence?: number;
    latency?: number;
  }>({ running: false });

  // RAG Simulator handler
  const handleRunRAG = () => {
    setRagOutput({ status: 'searching' });
    setTimeout(() => {
      const isCached = ragQuery.toLowerCase().includes('caching') || ragQuery.toLowerCase().includes('faiss');
      setRagOutput({
        status: 'done',
        latencyMs: isCached ? 18 : 88,
        similarity: 0.942,
        cached: isCached,
        answer: isCached
          ? "FAISS index uses an LRU vector cache for frequent semantic queries. Hashing query embeddings before traversing the inverted index avoids redundant GPU/CPU matrix multiplications, achieving a 3.8x retrieval speedup."
          : "Retrieved 3 document chunks from LangChain recursive character splitter (chunk_size=500, overlap=50). Top semantic chunk matches with 0.912 cosine similarity.",
      });
    }, 400);
  };

  // Streaming simulator toggle
  const toggleStreaming = () => {
    setStreamActive((prev) => {
      const next = !prev;
      if (next) {
        setStreamCount((c) => c + Math.floor(Math.random() * 80 + 40));
        setSentimentScores({
          positive: Math.floor(Math.random() * 15 + 60),
          neutral: Math.floor(Math.random() * 10 + 20),
          negative: Math.floor(Math.random() * 10 + 5),
        });
      }
      return next;
    });
  };

  // Vision classifier handler
  const handleRunVision = () => {
    setVisionInference({ running: true });
    setTimeout(() => {
      const classMap: Record<string, { label: string; conf: number }> = {
        almond: { label: 'Prunus dulcis (Almond Grade-A)', conf: 99.4 },
        coffee: { label: 'Coffea arabica (Dark Roast)', conf: 98.7 },
        sunflower: { label: 'Helianthus annuus (Confectionery)', conf: 97.9 },
        cashew: { label: 'Anacardium occidentale (W-240)', conf: 99.1 },
      };
      const result = classMap[selectedSeed];
      setVisionInference({
        running: false,
        prediction: result.label,
        confidence: result.conf,
        latency: 21,
      });
    }, 350);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
            <div className="space-y-1">
              <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider">
                {project.categoryLabel}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
                {project.title}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Project Media & Quick Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 aspect-video bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                System Key Metrics
              </h4>
              <div className="space-y-2">
                {project.architecture.keyMetrics.map((km, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-lg"
                  >
                    <div className="text-lg font-bold font-mono text-slate-900 dark:text-slate-100 tabular-nums">
                      {km.value}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{km.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture Narrative */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              Architecture & System Design
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.architecture.overview}
            </p>
            <div className="space-y-2 pt-1">
              {project.architecture.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Live Simulator Sandbox */}
          <div className="p-5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                <Cpu className="w-4 h-4" />
                <span>Interactive Live System Simulator</span>
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Client Simulation Sandbox
              </span>
            </div>

            {/* Sub-simulator depending on project */}
            {project.id === 'mini-rag-chatbot' && (
              <div className="space-y-3">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Test the FAISS embedding cache and LangChain prompt synthesis in real time:
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={ragQuery}
                    onChange={(e) => setRagQuery(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-indigo-500"
                    placeholder="Enter QA prompt..."
                  />
                  <button
                    onClick={handleRunRAG}
                    disabled={ragOutput.status === 'searching'}
                    className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg whitespace-nowrap"
                  >
                    {ragOutput.status === 'searching' ? 'Vectorizing...' : 'Run RAG Search'}
                  </button>
                </div>

                {ragOutput.status === 'done' && (
                  <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs space-y-2">
                    <div className="flex items-center justify-between font-mono text-slate-500 dark:text-slate-400">
                      <span>Cosine Similarity: {ragOutput.similarity}</span>
                      <span className={ragOutput.cached ? 'text-emerald-500' : 'text-sky-500'}>
                        {ragOutput.cached ? '⚡ Cached Hit (18ms)' : 'Cold Traverse (88ms)'}
                      </span>
                    </div>
                    <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                      {ragOutput.answer}
                    </p>
                  </div>
                )}
              </div>
            )}

            {project.id === 'sentiment-pipeline' && (
              <div className="space-y-3">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Trigger streaming batch ingestion through Apache Kafka and PySpark windowing:
                </p>
                <div className="flex items-center justify-between">
                  <button
                    onClick={toggleStreaming}
                    className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg flex items-center gap-1.5"
                  >
                    <Activity className="w-3.5 h-3.5" />
                    <span>{streamActive ? 'Inject Event Spike' : 'Start Streaming Telemetry'}</span>
                  </button>
                  <div className="text-xs font-mono text-slate-600 dark:text-slate-300">
                    Total Processed: <span className="font-bold text-slate-900 dark:text-slate-100">{streamCount} msgs</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs font-mono">
                  <div className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <div className="text-emerald-500 font-bold">{sentimentScores.positive}%</div>
                    <div className="text-slate-500 text-[10px]">Positive Polarity</div>
                  </div>
                  <div className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <div className="text-slate-400 font-bold">{sentimentScores.neutral}%</div>
                    <div className="text-slate-500 text-[10px]">Neutral Discussion</div>
                  </div>
                  <div className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <div className="text-rose-500 font-bold">{sentimentScores.negative}%</div>
                    <div className="text-slate-500 text-[10px]">Critical / Negative</div>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'oil-seeds-classification' && (
              <div className="space-y-3">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Select an agricultural specimen to run PyTorch CNN transfer learning inference:
                </p>
                <div className="flex flex-wrap gap-2">
                  {(['almond', 'coffee', 'sunflower', 'cashew'] as const).map((seed) => (
                    <button
                      key={seed}
                      onClick={() => {
                        setSelectedSeed(seed);
                        setVisionInference({ running: false });
                      }}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors capitalize ${
                        selectedSeed === seed
                          ? 'bg-indigo-600 text-white border-indigo-600'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                      }`}
                    >
                      {seed}
                    </button>
                  ))}
                  <button
                    onClick={handleRunVision}
                    disabled={visionInference.running}
                    className="ml-auto px-4 py-1.5 text-xs font-semibold text-white bg-slate-900 dark:bg-indigo-500 hover:bg-slate-800 dark:hover:bg-indigo-400 rounded-lg"
                  >
                    {visionInference.running ? 'Inferencing...' : 'Classify Specimen'}
                  </button>
                </div>

                {visionInference.prediction && (
                  <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs space-y-1">
                    <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 font-mono">
                      <span>Confidence: {visionInference.confidence}%</span>
                      <span>Latency: {visionInference.latency}ms</span>
                    </div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">
                      Detected Class: {visionInference.prediction}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                      Conveyor belt automated air-jet sorting actuator triggered for Grade-A packaging line.
                    </p>
                  </div>
                )}
              </div>
            )}

            {project.id === 'hospital-management-system' && (
              <div className="space-y-3">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Simulate Flask REST API appointment slot reservation & conflict check:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <div className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs">
                    <span className="text-slate-400 block text-[10px] font-mono">Dr. Senapati (Cardiology)</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">10:00 AM · Available</span>
                  </div>
                  <div className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs">
                    <span className="text-slate-400 block text-[10px] font-mono">Dr. Mohanty (Neurology)</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">11:30 AM · Reserved</span>
                  </div>
                  <div className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs">
                    <span className="text-slate-400 block text-[10px] font-mono">Outpatient Triage API</span>
                    <span className="font-semibold text-emerald-500">HTTP 200 OK</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer action buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              {project.tags.map((tag, idx) => (
                <span key={idx}>
                  {tag}
                  {idx < project.tags.length - 1 && <span className="mx-1.5 opacity-60">·</span>}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-indigo-600 rounded-lg hover:bg-slate-800 dark:hover:bg-indigo-500 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
