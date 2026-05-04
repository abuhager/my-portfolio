export interface ArchNode {
  label: string;
  accent?: boolean;
}

export interface Project {
  id: string;
  title: string;
  tag: string;
  problem: string;
  role: string;
  badges: string[];
    githubFrontendUrl: string | null;
  githubUrl: string;
  demoUrl: string | null;
    archNodes: ArchNode[][];
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  detail: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'mail' | 'github' | 'linkedin';
}

export interface SiteData {
  name: string;
  initials: string;
  eyebrow: string;
  heroValue: string;
  techStack: {
    backend: string[];
    frontend: string[];
    devops: string[];
  };
  projects: Project[];
  timeline: TimelineItem[];
  contact: {
    tagline: string;
    links: SocialLink[];
  };
}