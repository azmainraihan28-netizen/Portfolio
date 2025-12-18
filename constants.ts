
import { GitBranch, Database, Bot, Sparkles, Mail, MessageSquare, Mic, FileText, Youtube, Linkedin, Zap, Slack, Cloud, MessageCircle, Calendar } from 'lucide-react';
import { Service, Project, Testimonial, CaseStudy } from './types';

export const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'How It Works', href: '#process' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Custom Workflow Architecture',
    description: 'Bespoke automation systems using n8n and Make. Connect your entire tech stack into a single, cohesive engine.',
    icon: GitBranch,
    features: ['Complex Logic Routing', 'Error Handling & Retries', 'Scalable Infrastructure'],
  },
  {
    id: '2',
    title: 'AI Agent Deployment',
    description: 'Custom LLM-powered agents that handle customer support, lead qualification, and internal knowledge retrieval.',
    icon: Bot,
    features: ['RAG Systems (Vector DBs)', 'Function Calling / Tool Use', 'Personalized Tone of Voice'],
  },
  {
    id: '3',
    title: 'Data & API Solutions',
    description: 'Seamlessly migrate, transform, and sync data between disconnected tools. If it has an API, I can automate it.',
    icon: Database,
    features: ['Advanced Data Mapping', 'Custom API Connectors', 'Legacy System Integration'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Intelligent Lead Enrichment',
    category: 'Sales Ops',
    description: 'Automated outreach system that scrapes LinkedIn, enriches data via Apollo, and drafts personalized emails with Gemini 1.5 Pro.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tools: ['n8n', 'Gemini API', 'HubSpot'],
    stat: '320% Response Rate Boost',
    workflowSteps: [
      { icon: Linkedin, label: 'Scrape' },
      { icon: Database, label: 'Enrich' },
      { icon: Sparkles, label: 'AI Personalize' },
      { icon: Mail, label: 'Send' },
    ]
  },
  {
    id: 'p2',
    title: 'Autonomous Support Desk',
    category: 'Customer Experience',
    description: 'AI-first ticketing system that classifies urgency, summarizes history, and suggests verified answers to support agents.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    tools: ['Make', 'Zendesk', 'OpenAI'],
    stat: '75% Faster Ticket Resolution',
    workflowSteps: [
      { icon: Mail, label: 'Inbound' },
      { icon: Bot, label: 'Analyze' },
      { icon: FileText, label: 'Knowledge Match' },
      { icon: MessageSquare, label: 'Slack Alert' },
    ]
  },
  {
    id: 'p3',
    title: 'Multi-Channel Content Engine',
    category: 'Digital Marketing',
    description: 'Takes a long-form YouTube video, transcribes it, and automatically generates 15+ pieces of micro-content for TikTok and X.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800',
    tools: ['Zapier', 'Whisper', 'Notion'],
    stat: '15 hrs/week Saved',
    workflowSteps: [
      { icon: Youtube, label: 'Source' },
      { icon: Mic, label: 'Transcribe' },
      { icon: Sparkles, label: 'GenAI Clips' },
      { icon: FileText, label: 'Draft Post' },
    ]
  },
];

export const HOW_IT_WORKS = [
  {
    id: 1,
    title: "Strategy & Roadmap",
    description: "We start with a deep-dive audit of your current processes to identify the highest ROI opportunities. We define clear KPIs and map out the future-state architecture before a single line of code is written.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200", 
    bgColor: "bg-[#eef2ff] dark:bg-indigo-950/20",
    accentColor: "text-indigo-600 dark:text-indigo-400"
  },
  {
    id: 2,
    title: "Agile Development",
    description: "Using low-code powerhouses like n8n or Make combined with custom code where needed, I build robust, self-healing workflows. Every step is logged and monitored for absolute reliability.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200", 
    bgColor: "bg-[#fdf2f8] dark:bg-pink-950/20",
    accentColor: "text-pink-600 dark:text-pink-400"
  },
  {
    id: 3,
    title: "Deployment & Growth",
    description: "Go live with a stable, documented system. I provide training and post-launch support to ensure your automation continues to evolve as your business scales.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200", 
    bgColor: "bg-[#ecfdf5] dark:bg-emerald-950/20",
    accentColor: "text-emerald-600 dark:text-emerald-400"
  }
];

export const INTEGRATIONS = [
  { name: 'Zapier', icon: Zap, color: 'text-orange-500' },
  { name: 'Slack', icon: Slack, color: 'text-purple-500' },
  { name: 'Make', icon: GitBranch, color: 'text-blue-500' },
  { name: 'Google Drive', icon: Cloud, color: 'text-blue-400' },
  { name: 'WhatsApp', icon: MessageCircle, color: 'text-green-500' },
  { name: 'Calendly', icon: Calendar, color: 'text-blue-600' },
  { name: 'HubSpot', icon: Database, color: 'text-orange-600' },
  { name: 'OpenAI', icon: Bot, color: 'text-emerald-600' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'COO',
    company: 'TechFlow Inc.',
    quote: "The automation systems built completely transformed our operations. We saved 40+ hours a week immediately.",
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    id: 't2',
    name: 'David Chen',
    role: 'Founder',
    company: 'StartUp Vision',
    quote: "Incredible expertise in AI. The custom agent acts exactly like our best support rep. Highly recommended.",
    avatar: 'https://i.pravatar.cc/150?u=david',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    industry: 'Real Estate',
    title: 'Automated Property Marketing',
    client: 'EstateMax Agencies',
    techStack: ['Make', 'Gemini API', 'Airtable', 'Webflow'],
    challenge: 'Agents spent 3+ hours per listing writing descriptions and formatting images, delaying time-to-market significantly.',
    solution: 'Created an automation where uploading photos to a drive folder triggers Gemini to write SEO-optimized descriptions and updates the Webflow CMS instantly.',
    results: ['90% reduction in listing time', '2x increase in daily listings', 'Consistent brand voice across all regions']
  },
  {
    id: 'cs2',
    industry: 'FinTech',
    title: 'KYC Verification Pipeline',
    client: 'SecurePay Ltd.',
    techStack: ['n8n', 'Cloud Vision', 'PostgreSQL', 'Slack'],
    challenge: 'Manual review of ID documents was causing a 48-hour backlog in user approvals during peak sign-up periods.',
    solution: 'Built a secure pipeline using Vision API to extract data and check validity scores. High-confidence matches are auto-approved; edge cases route to Slack for human review.',
    results: ['Instant approval for 70% of users', 'Backlog eliminated in 1 week', 'GDPR compliant secure data handling']
  },
];
