// Portfolio data for Saad Ahmed

export const personalInfo = {
  name: "Saad Ahmed",
  title: "Software Engineer",
  tagline: "Shipping AI-native products & scalable full-stack systems",
  email: "iamsaad640@gmail.com",
  location: "Lahore, Pakistan",
  timezone: "PKT (UTC+5)",
  status: "Open to Opportunities",
  avatar: "/avatar.jpg",
  socials: {
    github: "https://github.com/iamsaad640",
    linkedin: "https://www.linkedin.com/in/saadsolves/",
  },
  bio: `Software Engineer specializing in full-stack development and AI-powered systems. I architect production-grade platforms — from multi-tenant SaaS dashboards to RAG-based conversational agents — using Next.js, TypeScript, Python, and LangChain.

My work sits at the intersection of solid engineering and applied AI: building systems that are not just functional, but reliable, maintainable, and designed for scale.`,
  resumeUrl: "/saadahmed-resume.pdf",
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 92, icon: "react" },
      { name: "Next.js", level: 90, icon: "nextjs" },
      { name: "TypeScript", level: 88, icon: "typescript" },
      { name: "Tailwind CSS", level: 95, icon: "tailwind" },
      { name: "Material UI", level: 78, icon: "materialui" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 88, icon: "nodejs" },
      { name: "Python", level: 85, icon: "python" },
      { name: "NestJS", level: 80, icon: "nestjs" },
      { name: "FastAPI", level: 82, icon: "fastapi" },
      { name: "Prisma", level: 88, icon: "prisma" },
    ],
  },
  {
    category: "AI & LLMs",
    items: [
      { name: "LangChain", level: 88, icon: "langchain" },
      { name: "OpenAI SDK", level: 90, icon: "openai" },
      { name: "RAG Systems", level: 85, icon: "rag" },
      { name: "vLLM", level: 72, icon: "vllm" },
      { name: "AI Agents", level: 86, icon: "agent" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", level: 88, icon: "postgresql" },
      { name: "MongoDB", level: 80, icon: "mongodb" },
      { name: "MySQL", level: 78, icon: "mysql" },
      { name: "pgvector", level: 82, icon: "pgvector" },
      { name: "Qdrant", level: 72, icon: "qdrant" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "TopCareersCaribbean",
    description:
      "AI-powered job board platform supporting four business models with intelligent candidate matching, automated job scraping, and an integrated resume builder.",
    longDescription: `Rebuilt and completed a full-stack job board platform from an unfinished WordPress codebase — now supporting four distinct business models with custom job posting and applicant search modules.

Key Engineering Decisions:
• Developed intelligent AI agents using the OpenAI Agent SDK — a job search agent for candidate matching, an applicant recommendation engine for employers, and an automated job description generator
• Architected a scalable backend API with Express and PostgreSQL for multi-tenant operations and secure data separation
• Integrated advanced search and filtering to connect employers with qualified candidates and improve match relevance
• Built an integrated CV/resume builder with PDF export and real-time preview`,
    image: "/projects/topcareers.jpg",
    tags: ["Next.js 15", "Express", "Prisma", "PostgreSQL", "OpenAI SDK"],
    liveUrl: "https://topcareerscaribbean.com",
    githubUrl: "",
    featured: true,
    nda: false,
    stats: {
      models: "4 Business Models",
      features: "AI Agents",
      stack: "Full-Stack",
    },
  },
  {
    id: 2,
    title: "AI Chatbot SaaS Platform",
    description:
      "Multi-tenant SaaS platform that lets businesses create and deploy AI chatbots in minutes — with an embeddable widget, Stripe billing, and RAG-powered knowledge retrieval.",
    longDescription: `Engineered a full-stack SaaS platform from the ground up — enabling businesses to spin up AI chatbots without writing a single line of code.

Technical Architecture:
• Rebuilt the dashboard with multi-tenant auth, Stripe checkout, knowledge base management, and a one-click embeddable chatbot widget generator
• Developed a content extraction microservice with async webhook processing for intelligent web scraping, document chunking, and vector embedding pipelines
• Architected the RAG conversational layer using LangGraph and pgvector for semantic document retrieval and context-aware responses
• Designed isolated tenant data pipelines ensuring zero cross-contamination between customer knowledge bases`,
    image: "/projects/chatbot-saas.jpg",
    tags: ["Next.js", "FastAPI", "LangGraph", "pgvector", "Stripe"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    nda: true,
    stats: {
      arch: "Multi-Tenant",
      deploy: "One-Click",
      ai: "LangGraph + RAG",
    },
  },
  {
    id: 3,
    title: "AI Resume Builder",
    description:
      "AI-powered resume generation platform with an action-oriented agent chatbot — users answer questions in plain English and watch their resume build in real time.",
    longDescription: `Built the entire product end-to-end — an AI-powered resume builder that turns a profile summary and job description into a polished, tailored resume.

What Makes It Different:
• Action-oriented AI agent chatbot that guides users through the process conversationally — extracting details and populating sections by just answering questions in plain English
• Real-time live editing with undo, redo, and instant PDF download
• Smart resume generation that adapts content to match target job descriptions
• Full-stack implementation — frontend, backend, and AI orchestration layer`,
    image: "/projects/resume-builder.jpg",
    tags: ["Next.js", "TypeScript", "OpenAI", "LangChain", "Puppeteer"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    nda: true,
    stats: {
      input: "Plain English",
      output: "PDF Resume",
      editing: "Real-Time",
    },
  },
  {
    id: 4,
    title: "n8n Multi-Tenant AI Backend",
    description:
      "Production multi-tenant AI backend orchestrated entirely through n8n — with PLLuM, reranker models, Nomic embeddings, and a separate Python service for tool execution.",
    longDescription: `Architected a modular AI backend using n8n as the orchestration layer paired with a standalone Python service for operations that n8n couldn't handle natively.

Technical Depth:
• Built full tenant-based architecture with isolated data pipelines and user-level separation
• Integrated PLLuM (Polish LLM) as the primary language model with custom prompt engineering
• Implemented a lightweight RAG layer with Nomic embeddings for semantic retrieval
• Added an output-checking pipeline using GPT-OSS and a reranker model to ensure stable, verifiable results
• Designed the Python service to handle tool execution and business logic that required more control than n8n workflows allow`,
    image: "/projects/n8n.jpg",
    tags: ["n8n", "Python", "PLLuM", "Nomic", "Reranker"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    nda: true,
    stats: {
      arch: "Multi-Tenant",
      models: "PLLuM + Nomic",
      platform: "n8n + Python",
    },
  },
  {
    id: 5,
    title: "Human Activity Recognition",
    description:
      "Real-time multi-person action recognition system for hospital robotics — achieving 33 FPS with pose estimation, DeepSort tracking, and activity classification across 9 action classes.",
    longDescription: `Collaborated with a PhD researcher to deliver a production-ready human activity classification model for a hospital robot project.

Technical Achievement:
• 33 FPS real-time multi-person processing pipeline
• Pose estimation via trt_pose with TensorRT optimization for inference speed
• Person tracking using DeepSort for consistent identity across frames
• Activity classification using DNN/XGBoost across 9 action classes: stand, walk, run, jump, sit, squat, kick, punch, wave
• Custom dataset generation and classifier training from scratch`,
    image: "/projects/har.jpg",
    tags: ["Python", "PyTorch", "TensorRT", "YOLO", "XGBoost"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    nda: true,
    stats: {
      fps: "33 FPS",
      classes: "9 Actions",
      tracking: "DeepSort",
    },
  },
  {
    id: 6,
    title: "Stock Suggestion Tool",
    description:
      "Dashboard frontend with an integrated AI chatbot that connects to a custom action-based agent — enabling conversational stock analysis and suggestions.",
    longDescription: `Built the frontend dashboard and conversational AI layer for a stock suggestion platform.

Implementation:
• Developed the dashboard frontend pixel-perfect to the provided UI specifications
• Created an AI chatbot integrated directly into the dashboard
• Connected the chatbot to a custom action-based agent capable of executing dashboard-specific operations
• Conversational interface allows users to query stock data and receive contextual suggestions`,
    image: "/projects/stock-tool.jpg",
    tags: ["React", "TypeScript", "OpenAI", "AI Agents", "Tailwind"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    nda: true,
    stats: {
      type: "Dashboard + AI",
      interface: "Chat-Driven",
      agent: "Action-Based",
    },
  },
];

export const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Teczon LLC",
    companyUrl: "https://teczonlabs.com",
    location: "On-site, Lahore",
    type: "Full-time",
    startDate: "2025-01",
    endDate: null, // Current
    description: `Building AI-native products and full-stack platforms — from multi-tenant SaaS systems to autonomous AI agents and workflow automation.`,
    highlights: [
      "Architected a RAG-based conversational AI service using LangGraph and pgvector for semantic retrieval and context-aware responses",
      "Rebuilt a SaaS dashboard with multi-tenant auth, Stripe billing, and an embeddable chatbot widget generator",
      "Developed content extraction microservices with async webhook processing for web scraping and vector embedding pipelines",
      "Built agentic memory modules and structured roadmap tools enabling long-term contextual reasoning in AI mentoring workflows",
      "Shipped LinkedIn and Blog AI agents with automated posting, SEO keyword research, and Google Sheets integration",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "LangChain",
      "LangGraph",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "n8n",
      "OpenAI SDK",
    ],
  },
  {
    id: 2,
    role: "Full Stack Web Developer",
    company: "Rutal, Inc",
    companyUrl: "https://rutal.net",
    location: "On-site, Lahore",
    type: "Full-time",
    startDate: "2024-07",
    endDate: "2024-12",
    description: `Owned backend architecture and full-stack delivery across multiple client products — from mobile app APIs to admin panels and content platforms.`,
    highlights: [
      "Built the Kitty mobile app backend from scratch — Node.js, Prisma ORM, PostgreSQL with token-based auth and Swagger documentation",
      "Designed and developed the Midhah.com admin panel in React TypeScript with full CRUD operations for lyrics, poets, languages, and genres",
      "Developed backend APIs and refactored existing schemas to fix incorrect implementations using Prisma, Zod, and Express",
      "Integrated view-tracking analytics and designed engagement features to surface less-trending content",
    ],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Express",
      "Swagger",
      "Zod",
    ],
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Punjab Information Technology Board — NEP / NIC",
    companyUrl: "https://pitb.gov.pk/",
    location: "On-site, Gujrat",
    type: "Full-time",
    startDate: "2023-03",
    endDate: "2023-12",
    description: `First professional role in a government-backed incubator environment — building and shipping real products for startup teams.`,
    highlights: [
      "Developed and deployed a production website for a startup incubated under the National Expansion Plan",
      "Collaborated with cross-functional teams to build a mobile application as the backend developer",
      "Gained hands-on experience with end-to-end product delivery — from development through deployment",
    ],
    technologies: ["JavaScript", "React", "Node.js", "Git", "MongoDB"],
  },
];

export const education = [
  {
    degree: "BS Software Engineering",
    school: "University of Gujrat",
    location: "Gujrat, Pakistan",
    startDate: "2020",
    endDate: "2024",
    gpa: "",
    highlights: [],
  },
];

export const certifications = [
  {
    name: "Advanced React",
    issuer: "Meta — Coursera",
    date: "2024",
    credentialUrl: "https://coursera.org",
  },
  {
    name: "Next.js with TypeScript",
    issuer: "Code with Chai",
    date: "2024",
    credentialUrl: "#",
  },
  {
    name: "The Complete Node.js Course",
    issuer: "codewithmosh.com",
    date: "2023",
    credentialUrl: "https://codewithmosh.com",
  },
  {
    name: "Intro to Frontend Development",
    issuer: "Meta — Coursera",
    date: "2023",
    credentialUrl: "https://coursera.org",
  },
];

export const testimonials = [
  {
    id: 1,
    content:
      "Fantastic work by Saad! He delivered the API ahead of schedule and exceeded my expectations in terms of quality and performance. A truly professional developer who I'd gladly work with again.",
    author: "Lisa Bowe",
    role: "",
    company: "United States",
    avatar: "/testimonials/default.jpg",
  },
  {
    id: 2,
    content:
      "Working with Saad has been a pleasure. He understands the assignments and delivers well, making the project easy and effortless.",
    author: "Lisa Bowe",
    role: "",
    company: "Caribbean",
    avatar: "/testimonials/default.jpg",
  },
  {
    id: 3,
    content:
      "Working with Saad was great. He is very knowledgeable about his craft and very easy to talk to and work with. We are making great progress. Will be working with him again.",
    author: "Lisa Bowe",
    role: "",
    company: "Caribbean",
    avatar: "/testimonials/default.jpg",
  },
  {
    id: 4,
    content:
      "Saad is always fast to respond, his English communication skills are exceptional, he is efficient, has great attention to detail, and has helped me greatly. Takes the stress out of doing it all myself. I know I can trust the job will be done in a reasonable time.",
    author: "breezer37",
    role: "",
    company: "Australia",
    avatar: "/testimonials/default.jpg",
  },
  {
    id: 5,
    content:
      "Very Very Good Work! Exceptional — I'm extremely happy. I will DEFINITELY hire again. Saad was very patient and helpful in solving a problem in two hours that I tried to solve by myself for over twelve hours.",
    author: "lotsofjobs",
    role: "",
    company: "United States",
    avatar: "/testimonials/default.jpg",
  },
  {
    id: 6,
    content:
      "Very nice work, I'm happy to collaborate with Saad, and will continue with him definitely. Well organised and always here to explain.",
    author: "programmingma",
    role: "",
    company: "France",
    avatar: "/testimonials/default.jpg",
  },
  {
    id: 7,
    content:
      "Saad is a lifesaver! The spec was followed exactly and he is very responsive. Thank you for saving the day!",
    author: "renewedl",
    role: "",
    company: "United Kingdom",
    avatar: "/testimonials/default.jpg",
  },
  {
    id: 8,
    content:
      "Saad answered all of my questions. I had been very confused on what to do, who to hire, how it works — but Saad cleared up all these questions for me and now I feel like I understand the process a lot better.",
    author: "embee7",
    role: "",
    company: "United States",
    avatar: "/testimonials/default.jpg",
  },
  {
    id: 9,
    content:
      "Quick and efficient — he did exactly what I asked a lot quicker than I expected. He also was very easy to work with.",
    author: "realtynichole",
    role: "",
    company: "United States",
    avatar: "/testimonials/default.jpg",
  },
  {
    id: 10,
    content:
      "Working with Saad was extremely easy. He was very knowledgeable and supportive. Great job Saad.",
    author: "Lisa Bowe",
    role: "",
    company: "Caribbean",
    avatar: "/testimonials/default.jpg",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt:
      "A deep dive into patterns and practices for building React apps that scale to millions of users.",
    date: "2024-01-15",
    readTime: "8 min",
    tags: ["React", "Architecture", "Performance"],
    slug: "building-scalable-react-applications",
  },
  {
    id: 2,
    title: "The Art of Code Review",
    excerpt:
      "How to give and receive code reviews that actually improve code quality and team dynamics.",
    date: "2024-01-02",
    readTime: "6 min",
    tags: ["Best Practices", "Team", "Culture"],
    slug: "the-art-of-code-review",
  },
  {
    id: 3,
    title: "TypeScript Tips for 2024",
    excerpt:
      "Advanced TypeScript patterns that will make your code more type-safe and maintainable.",
    date: "2023-12-20",
    readTime: "10 min",
    tags: ["TypeScript", "JavaScript", "Tips"],
    slug: "typescript-tips-2024",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Products Shipped", value: "15+" },
  { label: "AI Systems Built", value: "10+" },
  { label: "Global Clients", value: "20+" },
];
