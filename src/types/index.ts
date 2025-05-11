export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  category: 'AI' | 'Design' | 'Dev';
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  category: 'Frontend' | 'Backend' | 'AI/ML' | 'Design' | 'Other';
}

export interface Activity {
  id: number;
  title: string;
  role: string;
  description: string;
  image: string;
}

export interface NavItem {
  name: string;
  href: string;
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}