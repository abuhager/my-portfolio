export interface SkillGroup {
  title: string;
  description: string;
  items: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
  primary?: boolean;
}

export interface ProjectHighlight {
  title: string;
  detail: string;
}

export interface ProjectMedia {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  status: string;
  problem: string;
  summary: string;
  contribution: string;
  features: string[];
  highlights: ProjectHighlight[];
  technologies: string[];
  links: ProjectLink[];
  media?: ProjectMedia[];
  flow?: string[];
}

export interface BackgroundItem {
  id: string;
  category: 'Experience' | 'Training' | 'Education';
  period: string;
  title: string;
  organization: string;
  detail: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'mail' | 'github' | 'linkedin' | 'phone';
  external?: boolean;
}

export interface SiteData {
  name: string;
  initials: string;
  role: string;
  location: string;
  headline: string;
  introduction: string;
  about: string;
  principles: Array<{ title: string; detail: string }>;
  skillGroups: SkillGroup[];
  projects: Project[];
  background: BackgroundItem[];
  contact: {
    headline: string;
    description: string;
    links: SocialLink[];
  };
}
