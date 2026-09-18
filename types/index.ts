export type ProjectCategory = 
  | "AI Platform" 
  | "Security & Intelligence" 
  | "Machine Learning" 
  | "Reinforcement Learning" 
  | "Computer Vision" 
  | "Software Engineering";

export type DhaalVerdict = "red_flag" | "looks_okay_but_confirm" | "not_enough_info";

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  isFeatured: boolean;
  category: ProjectCategory;
  summary: string;
  features?: string[];
  techStack: string[];
  architectureNotes?: string[];
  dhaalDetails?: {
    inboxConcept: string;
    supportedInputTypes: string[];
    explanationType: string;
    languageGuidance: string;
    verdicts: DhaalVerdict[];
  };
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
  status?: string;
}

export interface ResearchItem {
  id: string;
  slug: string;
  title: string;
  field: string;
  summary: string;
  keyFocusAreas: string[];
  status?: string;
  links?: {
    paper?: string;
    repository?: string;
  };
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  timeframe: string;
  location?: string;
  description: string;
  bullets?: string[];
  isPlaceholder?: boolean;
}
