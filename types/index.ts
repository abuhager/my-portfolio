export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
  primary?: boolean;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  contribution: string;
  highlights: string[];
  technologies: string[];
  links: ProjectLink[];
  image?: string;
  imageAlt?: string;
  status: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  kind: 'Experience' | 'Training' | 'Education';
  detail: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'mail' | 'github' | 'linkedin' | 'phone';
}

export interface SiteData {
  name: string;
  initials: string;
  role: string;
  location: string;
  headline: string;
  introduction: string;
  availability: string;
  about: string;
  focus: Array<{ title: string; detail: string }>;
  skillGroups: SkillGroup[];
  projects: Project[];
  timeline: TimelineItem[];
  contact: {
    headline: string;
    tagline: string;
    links: SocialLink[];
  };
}
