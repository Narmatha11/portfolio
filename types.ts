import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  role: string;
  description: string[];
  tech: string[];
  award?: string;
  link?: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  type: 'education' | 'work' | 'achievement';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}