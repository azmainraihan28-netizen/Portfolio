import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tools: string[];
  stat: string;
  workflowSteps: {
    icon: React.ElementType;
    label: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  title: string;
  client: string;
  techStack: string[];
  challenge: string;
  solution: string;
  results: string[];
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot',
}

export interface ChatMessage {
  id: string;
  sender: ChatSender;
  text: string;
}