export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectChallenge {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  role: string;
  features: string[];
  challenges?: ProjectChallenge[];
  stack: string[];
  liveUrl?: string;
  images?: ProjectImage[];
}
