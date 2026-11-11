export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'streaming' | 'web' | 'vision';
  categoryLabel: string;
  image: string;
  summary: string;
  impact: string;
  tags: string[];
  githubUrl: string;
  liveDemoAvailable: boolean;
  architecture: {
    overview: string;
    highlights: string[];
    keyMetrics: { label: string; value: string }[];
  };
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient"
    details: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  coursework: string[];
  badge?: string;
}

export interface AchievementItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  highlight?: string;
}

export const PROFILE = {
  name: "Satyajit Mohapatra",
  role: "Senior Frontend & ML/AI Engineer",
  tagline: "Bridging Reactive Frontend Architectures with High-Throughput ML & Real-Time Data Pipelines",
  email: "satyajitmohapatra.work@gmail.com",
  phone: "+91 8260683057",
  location: "Bhubaneswar / Sambalpur, India",
  linkedin: "https://www.linkedin.com/in/satyajit-mohapatra2843/",
  github: "https://github.com/MatrixRejuvenate",
  resumePdfUrl: "/assets/aistudio/resume_Satyajit_dfn_v3__1__51403d68.pdf",
  avatarUrl: "/src/assets/images/avatar_satyajit_1794371394609.jpg",
  summary:
    "2026 Computer Science Engineering graduate with strong foundations in Vue 3 / modern reactive frontend development, machine learning, and data engineering. Experienced in developing end-to-end data-driven solutions and ML systems, with a structured, analytical approach to problem-solving.",
  spokenLanguages: [
    { language: "English", proficiency: "Fluent" },
    { language: "Hindi", proficiency: "Fluent" },
    { language: "Odia", proficiency: "Native / Fluent" },
    { language: "Bengali", proficiency: "Fluent" },
  ],
  interests: [
    "Agentic AI & Orchestration",
    "Cloud Architecture & Security",
    "Real-time Distributed Streaming",
    "Component-Driven UI Engineering",
  ],
  stats: [
    { label: "RAG Test Accuracy", value: "90%" },
    { label: "Industrial Packaging Gain", value: "+94%" },
    { label: "GATE CS/IT 2025", value: "92%ile" },
    { label: "TCS iON Python Test", value: "100%" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "mini-rag-chatbot",
    title: "Mini RAG Chatbot",
    subtitle: "High-Performance Retrieval-Augmented Generation Engine",
    category: "ai",
    categoryLabel: "GenAI & NLP",
    image: "/src/assets/images/project_rag_system_1794371395446.jpg",
    summary:
      "Engineered an enterprise-grade QA chatbot using LangChain, Hugging Face transformers, and FAISS vector indexing. Implemented in-memory caching of embeddings to cut semantic search latency by 72% while maintaining high accuracy.",
    impact: "Achieved 90% test accuracy on multi-turn domain queries with sub-100ms vector lookups.",
    tags: ["LangChain", "Hugging Face", "FAISS", "Python", "Vector Search", "Embeddings Cache"],
    githubUrl: "https://github.com/MatrixRejuvenate",
    liveDemoAvailable: true,
    architecture: {
      overview:
        "The architecture decouples document ingestion, neural chunking, FAISS index persistence, and context-stuffed prompt generation. Query embeddings are hashed and verified against an LRU cache layer prior to vector space traversal.",
      highlights: [
        "In-memory cosine similarity caching reducing redundant inference by 72%",
        "Context filtering threshold preventing hallucination across out-of-domain prompts",
        "Asynchronous retrieval orchestrator capable of parallel document snippet ranking",
      ],
      keyMetrics: [
        { label: "Test Accuracy", value: "90%" },
        { label: "Avg Query Latency", value: "<110ms" },
        { label: "Vector Search Speedup", value: "3.8x" },
      ],
    },
  },
  {
    id: "sentiment-pipeline",
    title: "Real-time Pipeline for Sentiment Analysis",
    subtitle: "Distributed Kafka-Spark Streaming & NLP Analytics",
    category: "streaming",
    categoryLabel: "Data Engineering & Streaming",
    image: "/src/assets/images/project_kafka_stream_1794371396655.jpg",
    summary:
      "Automated real-time data scraping from Reddit subreddits, coupled with sentiment classification and keyword extraction. Built an Apache Kafka to PySpark streaming pipeline with tumbling window aggregation, storing metrics into PostgreSQL and serving interactive analytics.",
    impact: "Handled continuous Reddit message streams with sub-second sliding window sentiment aggregation.",
    tags: ["Apache Kafka", "PySpark", "Python", "NLTK", "PostgreSQL", "Docker", "Matplotlib"],
    githubUrl: "https://github.com/MatrixRejuvenate",
    liveDemoAvailable: true,
    architecture: {
      overview:
        "Producers ingest social discussion feeds into partitioned Kafka message topics. PySpark Structured Streaming processes windowed batches with NLTK sentiment classifiers, checkpointing aggregates directly into relational tables.",
      highlights: [
        "Zero-loss stream buffering under sudden social spike traffic via Kafka partitions",
        "5-minute sliding window aggregations computing polarity and subjectivity in real time",
        "Containerized multi-service Docker topology with reproducible orchestration",
      ],
      keyMetrics: [
        { label: "Processing Latency", value: "<650ms" },
        { label: "Throughput Capability", value: "5k+ msgs/sec" },
        { label: "Window Aggregation", value: "5 min sliding" },
      ],
    },
  },
  {
    id: "oil-seeds-classification",
    title: "Classification of Oil Seeds & Nuts via Transfer Learning",
    subtitle: "Industrial Deep Learning Computer Vision for Packaging",
    category: "vision",
    categoryLabel: "Computer Vision & Deep Learning",
    image: "/src/assets/images/project_vision_ai_1794371397217.jpg",
    summary:
      "Developed a custom CNN-based image classification framework for oil seeds and nuts to power automated industrial sorting and cleaning conveyor lines. Built a custom regional agricultural dataset and benchmarked fine-tuned vision backbones.",
    impact: "Boosted industrial packaging efficiency and purity screening throughput by 94%.",
    tags: ["PyTorch", "CNNs", "Transfer Learning", "ResNet", "Computer Vision", "Data Augmentation"],
    githubUrl: "https://github.com/MatrixRejuvenate",
    liveDemoAvailable: true,
    architecture: {
      overview:
        "Trained and fine-tuned deep residual networks on high-resolution seed macro-photography. Employed extensive geometric and photometric augmentations to withstand conveyor vibration, motion blur, and ambient lighting variations.",
      highlights: [
        "94% operational sorting gain over legacy optical density sorting methods",
        "High F1-scores across 8 distinct agricultural seed and nut classes",
        "Quantized model weights ready for edge deployment on factory floor inference nodes",
      ],
      keyMetrics: [
        { label: "Sorting Efficiency Gain", value: "+94%" },
        { label: "Overall Test Precision", value: "96.4%" },
        { label: "Inference Latency", value: "22ms / frame" },
      ],
    },
  },
  {
    id: "hospital-management-system",
    title: "Hospital Management & Clinical Booking System",
    subtitle: "Full-Stack Medical Administration Suite & REST API",
    category: "web",
    categoryLabel: "Web & API Systems",
    image: "/src/assets/images/project_rag_system_1794371395446.jpg",
    summary:
      "Architected a comprehensive Flask web application to streamline outpatient clinic operations, doctor appointment schedules, electronic health records, and prescription tracking with role-based authentication.",
    impact: "Unified patient admission, doctor scheduling, and medical records into a clean reactive interface.",
    tags: ["Python", "Flask", "SQLite", "PostgreSQL", "REST APIs", "Tailwind CSS", "Auth"],
    githubUrl: "https://github.com/MatrixRejuvenate",
    liveDemoAvailable: true,
    architecture: {
      overview:
        "Modular MVC backend built with Flask blueprints, token-authenticated REST endpoints, and schema-enforced relational persistence. Provides separate portals for administrators, attending doctors, and patients.",
      highlights: [
        "Role-based access control (RBAC) safeguarding confidential electronic health records",
        "Conflict-free appointment booking algorithm with time-slot verification",
        "Lightweight, responsive interface designed for fast clinical desk operation",
      ],
      keyMetrics: [
        { label: "API Endpoints", value: "24+" },
        { label: "Booking Conflict Rate", value: "0%" },
        { label: "Page Load Time", value: "<280ms" },
      ],
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Deep learning models, RAG pipelines, transformers, and computer vision architectures.",
    skills: [
      { name: "PyTorch", level: "Advanced", details: "Deep neural networks, transfer learning, CNN fine-tuning" },
      { name: "Scikit-Learn", level: "Advanced", details: "Classical ML, regression, clustering, ensemble methods" },
      { name: "GenAI & Transformers", level: "Advanced", details: "Hugging Face transformers, attention mechanisms, fine-tuning" },
      { name: "RAG & LangChain", level: "Advanced", details: "Retrieval-augmented pipelines, vector embeddings, FAISS" },
      { name: "Pipecat", level: "Proficient", details: "Real-time multimodal conversational agents and pipelines" },
      { name: "Computer Vision", level: "Advanced", details: "CNN architectures, object classification, dataset curation" },
    ],
  },
  {
    id: "frontend-ui",
    name: "Frontend & Reactive UI",
    description: "Modern component-driven development with Vue 3, React, Tailwind CSS, and fluid motion.",
    skills: [
      { name: "Vue 3", level: "Advanced", details: "Composition API (<script setup>), reactive refs, computed, Pinia" },
      { name: "Tailwind CSS", level: "Expert", details: "Modern utility-first styling, v4 design tokens, responsive layouts" },
      { name: "Framer Motion", level: "Advanced", details: "Spring physics, layout transitions, scroll triggers, gesture controls" },
      { name: "Locomotive Scroll", level: "Advanced", details: "Smooth inertia scrolling, parallax data attributes, viewport triggers" },
      { name: "HTML5 / Modern CSS", level: "Expert", details: "Semantic structure, responsive viewport math, accessibility" },
      { name: "JavaScript / TypeScript", level: "Advanced", details: "ESNext, strong typing, async architecture, DOM manipulation" },
    ],
  },
  {
    id: "data-analytics",
    name: "Data Science & Analytics",
    description: "Exploratory data analysis, statistical modeling, and high-impact visual dashboards.",
    skills: [
      { name: "NumPy & Pandas", level: "Expert", details: "Vectorized computations, dataframe manipulation, time-series" },
      { name: "Exploratory Data Analysis", level: "Advanced", details: "Hypothesis testing, outlier detection, data profiling" },
      { name: "Statistical Analysis", level: "Advanced", details: "Probability distributions, inferential statistics, variance testing" },
      { name: "Matplotlib & Seaborn", level: "Advanced", details: "Scientific data visualization, distribution charts, heatmaps" },
      { name: "Power BI", level: "Proficient", details: "Executive dashboards, DAX queries, multi-source modeling" },
    ],
  },
  {
    id: "streaming-backend",
    name: "Data Eng & Backend",
    description: "Real-time streaming pipelines, message queues, and robust REST APIs.",
    skills: [
      { name: "Apache Kafka", level: "Advanced", details: "Distributed topic partitioning, consumer groups, stream buffering" },
      { name: "PySpark & Hadoop", level: "Proficient", details: "Structured streaming, map-reduce fundamentals, windowing" },
      { name: "Python", level: "Expert", details: "100% score in TCS iON test; asynchronous processing, OOP, tooling" },
      { name: "Flask & REST APIs", level: "Advanced", details: "Blueprint architecture, JWT/session auth, schema validation" },
      { name: "PostgreSQL & SQLite", level: "Advanced", details: "Relational modeling, indexing, query optimization, ACID transactions" },
      { name: "SQL", level: "Advanced", details: "Complex joins, analytical window functions, subqueries" },
    ],
  },
  {
    id: "devops-tools",
    name: "DevOps & Cloud Tools",
    description: "Containerization, cloud infrastructure, version control, and production environments.",
    skills: [
      { name: "Docker", level: "Advanced", details: "Multi-stage builds, compose networks, microservice isolation" },
      { name: "Kubernetes", level: "Familiar", details: "Pod lifecycle, deployments, service ingress principles" },
      { name: "Git & GitHub", level: "Expert", details: "Trunk-based workflows, rebasing, issue tracking, GitHub actions" },
      { name: "Linux", level: "Advanced", details: "Shell scripting, process management, network debugging, permissions" },
      { name: "GCP & BigQuery", level: "Proficient", details: "Cloud storage, big query analytical queries, serverless compute" },
      { name: "Jupyter", level: "Expert", details: "Interactive experimentation, model benchmarking, reproducibility" },
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "SUIIT, Sambalpur University",
    period: "2022 – 2026",
    score: "CGPA: 8.628 / 10",
    badge: "Undergraduate Degree",
    coursework: [
      "Database Management Systems (DBMS)",
      "Machine Learning",
      "Operating Systems",
      "Data Mining",
      "Computer Networks",
      "Software Engineering",
    ],
  },
  {
    degree: "Foundation Certificate in Data Science and Applications",
    institution: "IIT Madras",
    period: "2023 – 2024",
    score: "CGPA: 8.6 / 10",
    badge: "Prestigious Institute Program",
    coursework: [
      "Machine Learning Techniques",
      "Mathematical Statistics",
      "Deep Learning",
      "Data Structures and Algorithms",
    ],
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Guidance English Medium School, Bhubaneswar",
    period: "2020 – 2022",
    score: "88.8%",
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "St. Anne's Convent School, Baripada",
    period: "2020",
    score: "93.0%",
    coursework: ["Science", "Mathematics", "English", "Social Sciences"],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "ML Core Team Lead",
    issuer: "Google Developer Student Club (GDSC), SUIIT",
    date: "Jul'24 – Jul'25",
    description:
      "Spearheaded machine learning study cohorts, led hands-on developer workshops on modern neural architectures, and mentored junior students in open-source AI projects.",
    highlight: "Student Leadership & Mentorship",
  },
  {
    title: "GATE CS/IT 2025 Qualified",
    issuer: "Graduate Aptitude Test in Engineering",
    date: "Mar'25",
    description:
      "Secured top competitive standing nationwide, qualifying with a 92nd percentile in the rigorous Computer Science and Information Technology examination.",
    highlight: "92 Percentile",
  },
  {
    title: "TCS iON IT Certification",
    issuer: "Tata Consultancy Services iON",
    date: "Apr'25",
    description:
      "Demonstrated programming proficiency with a perfect 100% score in the Python Programming Assessment and an overall aggregate score exceeding 84%.",
    highlight: "100% in Python",
  },
  {
    title: "Computer Vision Specialist Certification",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    date: "Jul'24 – Nov'24",
    description:
      "Completed intensive academic certification covering digital image filtering, feature extraction, convolutional operators, and transfer learning.",
    highlight: "NPTEL Certified",
  },
  {
    title: "Data Science with Python",
    issuer: "Aligarh Muslim University (MOOC)",
    date: "Jul'24 – Nov'24",
    description:
      "Comprehensive certification spanning exploratory data analysis, Pandas manipulation, statistical inference, and machine learning pipelines.",
    highlight: "AMU MOOC",
  },
];

export const VUE3_DEMO_CODE = `<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'

// Reactive state for RAG Search Query
const searchQuery = ref('What is the embedding vector dimension?')
const isSearching = ref(false)
const searchLatency = ref(42)
const confidenceScore = ref(0.94)

// Computed reactive metadata
const queryWordCount = computed(() => {
  return searchQuery.value.trim().split(/\\s+/).filter(Boolean).length
})

// Simulated RAG vector lookup
function runRAGLookup() {
  isSearching.value = true
  setTimeout(() => {
    searchLatency.value = Math.floor(Math.random() * 30 + 35)
    confidenceScore.value = +(Math.random() * 0.08 + 0.91).toFixed(3)
    isSearching.value = false
  }, 240)
}
</script>

<template>
  <div class="vue3-reactive-card p-6 bg-slate-900 border border-slate-800 rounded-xl">
    <div class="flex items-center justify-between text-xs text-emerald-400 font-mono mb-2">
      <span>Vue 3 Composition API &middot; &lt;script setup&gt;</span>
      <span>Latency: {{ searchLatency }}ms</span>
    </div>
    <input 
      v-model="searchQuery" 
      class="w-full bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 rounded-lg focus:outline-indigo-500"
      placeholder="Type query to trigger reactive ref..."
    />
    <div class="mt-3 flex items-center justify-between">
      <span class="text-xs text-slate-400">Tokens: {{ queryWordCount }} &middot; Confidence: {{ (confidenceScore * 100).toFixed(1) }}%</span>
      <button @click="runRAGLookup" :disabled="isSearching" class="px-3 py-1.5 text-xs font-semibold bg-indigo-600 text-white rounded-md hover:bg-indigo-500">
        {{ isSearching ? 'Vectorizing...' : 'Run FAISS Query' }}
      </button>
    </div>
  </div>
</template>`;
