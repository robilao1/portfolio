export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  role: string;
  features: string[];
  stack: string[];
  liveUrl?: string;
}