export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  iconName: 'Cpu' | 'Code' | 'Globe' | 'Smartphone' | 'Database' | 'Zap';
  color: string;
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}
