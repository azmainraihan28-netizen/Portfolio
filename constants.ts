
import { GitBranch, Database, Bot, Sparkles, Mail, MessageSquare, Mic, FileText, Youtube, Linkedin, Zap, Slack, Cloud, MessageCircle, Calendar } from 'lucide-react';
import { Service, Project, Testimonial, CaseStudy } from './types';

export const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Workflow Automation',
    description: 'End-to-end business process automation using n8n and Make. Eliminate repetitive tasks and reduce human error.',
    icon: GitBranch,
    features: ['Custom Webhooks', 'Data Transformation', 'Cross-app Sync'],
  },
  {
    id: '2',
    title: 'AI Agent Development',
    description: 'Custom LLM-powered agents that handle customer support, lead qualification, and internal knowledge retrieval.',
    icon: Bot,
    features: ['RAG Systems', 'Fine-tuning', 'Multi-modal Agents'],
  },
  {
    id: '3',
    title: 'API Integration',
    description: 'Seamlessly connect disconnected tools. If it has an API, I can automate it.',
    icon: Database,
    features: ['REST & GraphQL', 'Authentication Handling', 'Error Recovery'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Lead Gen Auto-Pilot',
    category: 'Sales Automation',
    description: 'Automated outreach system scraping LinkedIn, enriching data via Clearbit, and drafting personalized emails with Gemini.',
    image: 'https://picsum.photos/800/600?random=1',
    tools: ['n8n', 'Gemini API', 'HubSpot'],
    stat: '300% Increase in Leads',
    workflowSteps: [
      { icon: Linkedin, label: 'Scrape' },
      { icon: Database, label: 'Enrich' },
      { icon: Sparkles, label: 'AI Draft' },
      { icon: Mail, label: 'Send' },
    ]
  },
  {
    id: 'p2',
    title: 'Support Ticket Triaging',
    category: 'Customer Operations',
    description: 'AI system that reads incoming tickets, classifies urgency, suggests answers, and routes to the correct Slack channel.',
    image: 'https://picsum.photos/800/600?random=2',
    tools: ['Make', 'Zendesk', 'OpenAI'],
    stat: '4hr → 5min Response Time',
    workflowSteps: [
      { icon: Mail, label: 'Ticket' },
      { icon: Bot, label: 'Classify' },
      { icon: Sparkles, label: 'Draft' },
      { icon: MessageSquare, label: 'Slack' },
    ]
  },
  {
    id: 'p3',
    title: 'Content Repurposing Engine',
    category: 'Marketing',
    description: 'Takes a YouTube video URL, transcribes it, generates blog posts, tweets, and LinkedIn articles automatically.',
    image: 'https://picsum.photos/800/600?random=3',
    tools: ['Zapier', 'Whisper', 'Notion'],
    stat: '10x Content Output',
    workflowSteps: [
      { icon: Youtube, label: 'Video' },
      { icon: Mic, label: 'Transcribe' },
      { icon: Sparkles, label: 'Generate' },
      { icon: FileText, label: 'Publish' },
    ]
  },
];

export const HOW_IT_WORKS = [
  {
    id: 1,
    title: "Book Discovery call && Planning",
    description: "We start with a quick strategy call to understand your goals, existing tools, and automation needs. Together, we outline a roadmap that identifies the most impactful workflows to build first for faster results.",
    image: "https://images.unsplash.com/photo-1573496132002-f6374df330f6?auto=format&fit=crop&q=80&w=800",
    bgColor: "bg-[#e0f2fe] dark:bg-blue-900/20",
    accentColor: "text-blue-600 dark:text-blue-400"
  },
  {
    id: 2,
    title: "Build & Integration",
    description: "Once the plan is set, I design and implement tailored n8n workflows and AI agents. Each automation is built to connect your tools, streamline daily operations, and eliminate manual work — giving you more time to focus on growth.",
    image: "https://images.unsplash.com/photo-1522071823991-b9671f903f79?auto=format&fit=crop&q=80&w=800",
    bgColor: "bg-[#dcfce7] dark:bg-green-900/20",
    accentColor: "text-green-600 dark:text-green-400"
  },
  {
    id: 3,
    title: "Launch & Optimization",
    description: "After testing every step end-to-end, we deploy your automation system. I continue monitoring and refining performance to ensure reliability, speed, and long-term scalability — keeping your business running on autopilot.",
    image: "https://images.unsplash.com/photo-1600880212319-7834e53f3ee0?auto=format&fit=crop&q=80&w=800",
    bgColor: "bg-[#ccfbf1] dark:bg-teal-900/20",
    accentColor: "text-teal-600 dark:text-teal-400"
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
    avatar: 'https://picsum.photos/100/100?random=4',
  },
  {
    id: 't2',
    name: 'David Chen',
    role: 'Founder',
    company: 'StartUp Vision',
    quote: "Incredible expertise in AI. The custom agent acts exactly like our best support rep. Highly recommended.",
    avatar: 'https://picsum.photos/100/100?random=5',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    industry: 'Real Estate',
    title: 'Automated Property Listing',
    client: 'EstateMax Agencies',
    techStack: ['Make', 'Gemini API', 'Airtable', 'Webflow'],
    challenge: 'Agents spent 3+ hours per listing writing descriptions and formatting images, delaying time-to-market significantly.',
    solution: 'Created an automation where uploading photos to a drive folder triggers Gemini to write SEO-optimized descriptions and updates the Webflow CMS instantly.',
    results: ['90% reduction in listing time', '2x increase in daily listings', 'Consistent brand voice across all regions']
  },
  {
    id: 'cs2',
    industry: 'FinTech',
    title: 'KYC Document Verification',
    client: 'SecurePay Ltd.',
    techStack: ['n8n', 'Cloud Vision', 'PostgreSQL', 'Slack'],
    challenge: 'Manual review of ID documents was causing a 48-hour backlog in user approvals during peak sign-up periods.',
    solution: 'Built a secure pipeline using Vision API to extract data and check validity scores. High-confidence matches are auto-approved; edge cases route to Slack for human review.',
    results: ['Instant approval for 70% of users', 'Backlog eliminated in 1 week', 'GDPR compliant secure data handling']
  },
  {
    id: 'cs3',
    industry: 'Healthcare',
    title: 'Patient Follow-up System',
    client: 'MediCare Clinic',
    techStack: ['Zapier', 'Twilio', 'OpenAI', 'Calendly'],
    challenge: 'High no-show rates and lack of post-visit follow-ups were affecting revenue and long-term patient care outcomes.',
    solution: 'Integrated Calendly with Twilio to send SMS reminders. Post-visit, an AI agent sends personalized care tips and review requests based on visit type.',
    results: ['30% decrease in no-shows', '4.8/5 star rating average', 'Improved patient adherence to treatment']
  }
];
