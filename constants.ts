import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Gemini Assistant',
    description: 'A smart context-aware chatbot built with Google Gemini API and React.',
    techStack: ['React', 'TypeScript', 'Gemini API', 'Tailwind'],
    iconName: 'Cpu',
    color: '#3b82f6', // blue-500
    url: 'https://code.codeovertcp.com',
    githubUrl: 'https://github.com/ChonSong/gemini-assistant',
  },
  {
    id: '2',
    title: 'E-Commerce Dash',
    description: 'Real-time analytics dashboard for high-volume online retailers.',
    techStack: ['Next.js', 'D3.js', 'Supabase'],
    iconName: 'Database',
    color: '#10b981', // emerald-500
    url: 'https://sean.codeovertcp.com/ecommerce',
    githubUrl: 'https://github.com/ChonSong/ecommerce-dash',
  },
  {
    id: '3',
    title: 'Nebula UI',
    description: 'An open-source component library focused on accessibility and motion.',
    techStack: ['React', 'Framer Motion', 'Storybook'],
    iconName: 'Code',
    color: '#8b5cf6', // violet-500
    url: 'https://sean.codeovertcp.com/nebula',
    githubUrl: 'https://github.com/ChonSong/nebula-ui',
  },
  {
    id: '4',
    title: 'EcoTracker App',
    description: 'Mobile application for tracking personal carbon footprint with gamification.',
    techStack: ['React Native', 'Firebase', 'Node.js'],
    iconName: 'Smartphone',
    color: '#f59e0b', // amber-500
    url: 'https://sean.codeovertcp.com/ecotracker',
    githubUrl: 'https://github.com/ChonSong/ecotracker-app',
  },
  {
    id: '5',
    title: 'Global News AI',
    description: 'Aggregates and summarizes global news streams using NLP models.',
    techStack: ['Python', 'FastAPI', 'React'],
    iconName: 'Globe',
    color: '#ef4444', // red-500
    url: 'https://sean.codeovertcp.com/news',
    githubUrl: 'https://github.com/ChonSong/global-news-ai',
  },
  {
    id: '6',
    title: 'HyperSpeed',
    description: 'WebGL-based racing game running directly in the browser.',
    techStack: ['Three.js', 'WebGL', 'Socket.io'],
    iconName: 'Zap',
    color: '#ec4899', // pink-500
    url: 'https://sean.codeovertcp.com/hyperspeed',
    githubUrl: 'https://github.com/ChonSong/hyperspeed',
  },
];

export const AVATAR_URL = "https://picsum.photos/id/64/400/400";
