import {
  SiSpringboot, SiReact, SiDocker, SiRabbitmq, SiNodedotjs,
  SiMongodb, SiMysql, SiKeycloak, SiGit, SiGithub,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Code2, ShieldCheck, MessageSquare, Wrench, BrainCircuit, Sparkles, Cloud } from 'lucide-react';
import hospitalImage from './assets/images/hospital.png';
import heroBackgroundImage from './assets/images/2.jpg';
import sport from './assets/images/sport.png';
import fit from './assets/images/4.png';

export const profile = {
  name: 'Abhishek Mali',
  heroBackground: heroBackgroundImage,
  roles: [
    'Java Backend Developer',
    'Spring Boot Developer',
    'Microservices Engineer',
    'Full Stack Developer',
    'AI Enthusiast',
  ],
  heroRoles: [
    'Generative AI',
    'Python',
    'Spring Boot',
    'AI Agents',
  ],
  email: 'abhishekmali7710@gmail.com',
  phone: '+91 70113 22428',
  github: 'https://github.com/abhishekmali09',
  linkedin: 'https://linkedin.com/in/abhishekmali09',
  bio: 'B.Tech Computer Science student graduating in 2026, focused on building intelligent AI and backend systems with Python, Spring Boot, and Generative AI technologies. Completed a 6-month Java Developer Internship at Mogli Labs where I worked on backend development and system integration. I have built full-stack projects spanning AI agents, FastMCP integrations, workflow automation, and Spring Boot microservices with RabbitMQ, Keycloak, and Gemini AI. I care about clean architecture, reliable APIs, and writing maintainable code.',
  objective: 'To join a high-performing engineering team where I can build production-grade AI and backend systems, grow as a Generative AI and Java developer, and contribute to impactful products.',
};

export const floatingTech = [
  { name: 'Java', icon: FaJava, color: '#ED8B00' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'RabbitMQ', icon: SiRabbitmq, color: '#FF6600' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Keycloak', icon: SiKeycloak, color: '#4D4D4D' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
];

export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: Code2,
    accent: 'from-blue-500 to-cyan-400',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python'],
  },
  {
    title: 'Frontend',
    icon: SiReact,
    accent: 'from-cyan-400 to-blue-500',
    skills: ['React', 'Tailwind', 'Material UI', 'React Router', 'Vite'],
  },
  {
    title: 'Backend',
    icon: SiSpringboot,
    accent: 'from-emerald-400 to-green-500',
    skills: ['Spring Boot', 'Spring MVC', 'Node', 'Express', 'REST APIs', 'Microservices', 'Spring Cloud', 'API Gateway', 'Eureka'],
  },
  {
    title: 'Databases',
    icon: SiMysql,
    accent: 'from-amber-400 to-orange-500',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Security',
    icon: ShieldCheck,
    accent: 'from-red-400 to-rose-500',
    skills: ['JWT', 'OAuth2', 'Keycloak', 'RBAC'],
  },
  {
    title: 'Messaging',
    icon: MessageSquare,
    accent: 'from-orange-400 to-amber-500',
    skills: ['RabbitMQ'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    accent: 'from-violet-400 to-purple-500',
    skills: ['Docker', 'Git', 'GitHub', 'Linux', 'Postman', 'Figma'],
  },
  {
    title: 'CS Fundamentals',
    icon: BrainCircuit,
    accent: 'from-indigo-400 to-blue-500',
    skills: ['OOP', 'Data Structures', 'Algorithms', 'Clean Architecture'],
  },
  {
    title: 'Generative AI',
    icon: Sparkles,
    accent: 'from-fuchsia-400 to-purple-500',
    skills: [
      'AI Agents',
      'FastMCP',
      'MCP',
      'Prompt Engineering',
      'Gemini API',
      'OpenAI API',
      'LLM Applications',
      'Workflow Automation',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    accent: 'from-sky-400 to-blue-500',
    skills: ['Docker', 'Docker Compose', 'Linux'],
  },
];

export const experience = [
  {
    role: 'Java Developer Intern',
    company: 'Mogli Labs (India) Pvt. Ltd.',
    period: 'January 2026 – June 2026',
    points: [
      'Developed and maintained robust Java backend applications using Spring Boot.',
      'Built RESTful APIs with a focus on clean architecture, business logic, and system integration.',
      'Contributed to database design and optimization using SQL and ORM tools.',
      'Collaborated with the engineering team on debugging, testing, and deploying features in an agile environment.',
      'Delivered reliable backend solutions for e-commerce platforms.',
    ],
    stack: ['Java', 'Spring Boot', 'REST APIs', 'SQL', 'JPA/Hibernate', 'Agile'],
  },
];

export const projects = [
  {
    name: 'HR Assistant Agent',
    category: 'AI Agent Platform',
    tagline: 'Enterprise AI-Powered HR Assistant with MCP',
    shortDescription:
      'Enterprise AI HR Assistant built with Python and MCP that automates onboarding, leave management, meeting scheduling, ticket handling, and email workflows using intelligent AI Agents.',
    description: 'An enterprise AI-powered HR Assistant built with Python and the Model Context Protocol (MCP) to automate HR operations through natural language. The application manages employee onboarding, leave requests, meeting scheduling, ticket management, and automated email notifications using modular AI Agent workflows.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
    liveDemo: 'https://github.com/abhishekmali09',
    features: [
      'Natural language HR operations powered by modular AI Agent workflows',
      'Employee onboarding, leave requests, and meeting scheduling automation',
      'Ticket management with automated email notifications via MCP integrations',
      'Python-based architecture using the Model Context Protocol (MCP)',
    ],
    stack: ['Python', 'MCP', 'FastMCP', 'AI Agents', 'Workflow Automation', 'SMTP'],
    accent: 'from-purple-500 via-violet-400 to-indigo-400',
    github: 'https://github.com/abhishekmali09/HR-Assistant-Agent',
  },
  {
    name: 'FitInsight',
    category: 'Microservices Platform',
    tagline: 'Spring Boot Microservices Platform with AI Insights',
    shortDescription:
      'A modular fitness analytics platform with Spring Cloud, RabbitMQ, Keycloak, and Gemini AI-powered insights.',
    description: 'A modular fitness analytics platform built as a microservices architecture. Services communicate through an API Gateway and register via Eureka, with asynchronous events flowing through RabbitMQ. Keycloak handles OAuth2-based authentication and RBAC, and a React dashboard visualizes insights enriched by Gemini AI.',
    image: fit,
    liveDemo: 'https://fit-track-omega-ten.vercel.app/',
    features: [
      'Spring Boot microservices with Spring Cloud, API Gateway, and Eureka service discovery',
      'RabbitMQ-based asynchronous messaging between services',
      'Keycloak OAuth2 authentication with role-based access control',
      'Gemini AI integration for personalized fitness insights',
      'Containerized with Docker for reproducible deployments',
      'React dashboard for real-time data visualization',
    ],
    stack: ['Spring Boot', 'Spring Cloud', 'API Gateway', 'Eureka', 'RabbitMQ', 'Keycloak', 'OAuth2', 'Docker', 'Gemini AI', 'React'],
    accent: 'from-blue-500 via-cyan-400 to-emerald-400',
    github: 'https://github.com/abhishekmali09',
  },
  {
    name: 'SafePathAI',
    category: 'AI Safety App',
    tagline: 'AI Safety Assistant with Live Location & SOS',
    shortDescription:
      'Personal safety companion with live location tracking, SOS alerts, and AI-powered emergency guidance.',
    description: 'A personal safety companion that combines live location tracking with an AI assistant capable of generating contextual emergency guidance. Authenticated with JWT, the app can trigger SOS alerts and route them to trusted contacts, while Gemini and OpenAI models provide real-time safety recommendations.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    liveDemo: 'https://github.com/abhishekmali09',
    features: [
      'Live location tracking with SOS alert dispatch',
      'JWT authentication securing user sessions and contacts',
      'Gemini + OpenAI integration for contextual safety guidance',
      'AI assistant that adapts recommendations to the situation',
    ],
    stack: ['React', 'JWT', 'Gemini', 'OpenAI', 'Live Location', 'SOS'],
    accent: 'from-rose-500 via-red-400 to-orange-400',
    github: 'https://github.com/abhishekmali09',
  },
  {
    name: 'Cure It Abroad',
    category: 'Web Application',
    tagline: 'Medical Tourism Platform with Responsive UI',
    shortDescription:
      'Medical tourism platform connecting patients with treatment providers abroad through a responsive React UI.',
    description: 'A medical tourism web application that helps patients discover and connect with treatment providers abroad. Built with a fully responsive UI using React, Tailwind, and Material UI, with form flows validated through React Hook Form and Zod for type-safe, user-friendly submissions.',
    image: hospitalImage,
    liveDemo: 'https://medicomedical.netlify.app/',
    features: [
      'Responsive, mobile-first UI with Tailwind and Material UI',
      'Validated multi-step forms using React Hook Form + Zod',
      'Clean information architecture for medical tourism discovery',
    ],
    stack: ['React', 'Tailwind', 'Material UI', 'React Hook Form', 'Zod'],
    accent: 'from-emerald-400 via-teal-400 to-cyan-400',
    github: 'https://github.com/abhishekmali09',
  },
  {
    name: 'Live Sports Tracker',
    category: 'Real-Time Dashboard',
    tagline: 'Real-Time Sports Dashboard',
    shortDescription:
      'Responsive sports dashboard streaming live match scores and events through real-time API integration.',
    description: 'A responsive sports dashboard that surfaces live match updates in real time. Integrates real-time APIs to stream scores and match events into a clean React dashboard, optimized for quick scanning across devices.',
    image: sport,
    liveDemo: 'https://livesportsync.netlify.app/',
    features: [
      'Real-time API integration for live match updates',
      'Responsive React dashboard for desktop and mobile',
      'Optimized rendering for fast score updates',
    ],
    stack: ['React', 'Real-time APIs', 'Live Match Updates', 'Responsive Dashboard'],
    accent: 'from-violet-500 via-indigo-400 to-blue-400',
    github: 'https://github.com/abhishekmali09',
  },
 
];

export const education = [
  {
    degree: 'B.Tech, Computer Science',
    institution: 'Guru Gobind Singh Indraprastha University',
    period: 'Expected 2026',
    detail: 'B.Tech in Computer Science. GPA maintained throughout the program.',
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
