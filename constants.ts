import { Zap, GitBranch, Database, Bot, Cpu, LayoutTemplate, Globe, Sparkles, Mail, MessageSquare, Mic, FileText, Youtube, Linkedin, Sheet } from 'lucide-react';
import { Service, Project, Testimonial } from './types';

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