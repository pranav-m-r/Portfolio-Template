export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  scholar: string;
  website?: string;
  location: string;
  bio: string;
  resumeUrl: string;
  profileImage: string;
}

export interface Education {
  id: string;
  institution: string;
  location: string;
  degree: string;
  minor?: string;
  metric: string;
  score: string;
  period: string;
  logo: string;
  link?: string;
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  type: 'research' | 'industry' | 'teaching';
  highlights: string[];
  tags?: string[];
  image: string;
  link?: string;
  courses?: {
    name: string;
    instructor?: string;
    semester: string;
  }[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  status: string;
  award?: string;
  link?: string;
  links: {
    paper?: string;
    code?: string;
    info?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  link?: string;
}

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  link?: string;
}

export interface TeachingExperience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  courses: {
    name: string;
    instructor?: string;
    semester: string;
  }[];
}

export interface News {
  id: string;
  date: string;
  summary: string;
  link?: string;
}

export interface Service {
  role: string;
  organization?: string;
  period: string;
  description: string;
  link?: string;
}
