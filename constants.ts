import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Gemini Assistant',
    description: 'A smart context-aware chatbot built with Google Gemini API and React.',
    techStack: ['React', 'TypeScript', 'Gemini API', 'Tailwind'],
    iconName: 'Cpu',
    color: '#3b82f6', // blue-500
  },
  {
    id: '2',
    title: 'E-Commerce Dash',
    description: 'Real-time analytics dashboard for high-volume online retailers.',
    techStack: ['Next.js', 'D3.js', 'Supabase'],
    iconName: 'Database',
    color: '#10b981', // emerald-500
  },
  {
    id: '3',
    title: 'Nebula UI',
    description: 'An open-source component library focused on accessibility and motion.',
    techStack: ['React', 'Framer Motion', 'Storybook'],
    iconName: 'Code',
    color: '#8b5cf6', // violet-500
  },
  {
    id: '4',
    title: 'EcoTracker App',
    description: 'Mobile application for tracking personal carbon footprint with gamification.',
    techStack: ['React Native', 'Firebase', 'Node.js'],
    iconName: 'Smartphone',
    color: '#f59e0b', // amber-500
  },
  {
    id: '5',
    title: 'Global News AI',
    description: 'Aggregates and summarizes global news streams using NLP models.',
    techStack: ['Python', 'FastAPI', 'React'],
    iconName: 'Globe',
    color: '#ef4444', // red-500
  },
  {
    id: '6',
    title: 'HyperSpeed',
    description: 'WebGL-based racing game running directly in the browser.',
    techStack: ['Three.js', 'WebGL', 'Socket.io'],
    iconName: 'Zap',
    color: '#ec4899', // pink-500
  },
];

export const AVATAR_URL = "https://picsum.photos/id/64/400/400";
