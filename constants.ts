import { 
  Code, 
  Database, 
  Brain, 
  Cloud, 
  Linkedin, 
  Github, 
  Mail, 
  Terminal,
  Server
} from 'lucide-react';
import { Project, SkillCategory, Experience, SocialLink } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/narmatha-m-a849212a1",
    icon: Linkedin
  },
  {
    platform: "GitHub",
    url: "https://github.com/narmatha17", // Inferred from LeetCode handle
    icon: Github
  },
  {
    platform: "Email",
    url: "mailto:m.narmatha23cb@psnacet.edu.in",
    icon: Mail
  },
  {
    platform: "LeetCode",
    url: "https://leetcode.com/u/narmatha17/",
    icon: Code
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Core",
    icon: Server,
    skills: ["Java", "Python", "Node.js", "Flask", "SQL", "OOPs"]
  },
  {
    title: "Web & Mobile",
    icon: Terminal,
    skills: ["React", "HTML/CSS", "React Native", "Tailwind"]
  },
  {
    title: "Data & Cloud",
    icon: Database,
    skills: ["MongoDB", "Firebase", "MySQL", "AWS", "Azure", "Git"]
  },
  {
    title: "AI & IoT",
    icon: Brain,
    skills: ["LLM Integration", "IoT Architecture", "Arduino", "Raspberry Pi", "Sensors"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "ReShare Hub",
    role: "Backend Developer",
    tech: ["Flask", "Python", "React Native", "LLM", "APIs"],
    description: [
      "Designed and implemented Flask backend for a food donation platform.",
      "Integrated LLM-based automation to analyze donation quality.",
      "Developed secure APIs for real-time data synchronization.",
      "Collaborated with a multidisciplinary team for social impact."
    ],
    award: "🏆 3rd Prize - KPR HackXeralate 2025",
    link: "https://github.com/narmatha17" // Placeholder linking to profile
  },
  {
    id: 2,
    title: "Virtual Try-On E-Commerce",
    role: "AI Integrator & Backend Dev",
    tech: ["AI/ML", "LLM Chatbot", "Python", "Node.js"],
    description: [
      "Implemented AI-powered virtual try-on using facial recognition.",
      "Integrated LLM chatbot for real-time style suggestions.",
      "Managed backend architecture for product data and image processing.",
      "Enhanced shopping experience with personalized recommendations."
    ],
    link: "https://github.com/narmatha17" // Placeholder linking to profile
  },
  {
    id: 3,
    title: "Solar Panel Tracking System",
    role: "IoT Engineer",
    tech: ["IoT", "Hydraulics", "Sensors", "Hardware"],
    description: [
      "Hydraulic-based tracker automatically adjusting to sun position.",
      "Integrated light sensors and control valves for real-time movement.",
      "Enhanced energy conversion efficiency compared to static panels.",
      "Designed specifically for rural areas with minimal maintenance."
    ],
    link: "https://github.com/narmatha17" // Placeholder linking to profile
  }
];

export const EDUCATION_EXPERIENCE: Experience[] = [
  {
    id: 1,
    type: 'education',
    role: "B.Tech in Computer Science and Business Systems",
    company: "PSNA College of Engineering and Technology",
    period: "2025 – Present",
    location: "Dindigul, India",
    description: ["CGPA: 8.86", "First Rank Holder in 3rd Semester (CGPA 9.7)"]
  },
  {
    id: 2,
    type: 'achievement',
    role: "Google Student Ambassador",
    company: "Google / PSNA",
    period: "2025",
    location: "Campus",
    description: ["Representing the institution in Google's student community initiatives."]
  },
  {
    id: 3,
    type: 'work',
    role: "UI Path Secretary",
    company: "Uizera Club",
    period: "Present",
    location: "Dindigul",
    description: ["Organizing events and promoting AI-based learning activities."]
  }
];