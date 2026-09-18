import { Experience } from "@/types";

export interface RefinedExperience extends Experience {
  category?: string;
  techUsed?: string[];
}

export const experienceData: RefinedExperience[] = [
  {
    id: "exp-nimii-labs",
    role: "Software & AI Product Engineer",
    organization: "Nimii Labs",
    timeframe: "Active Development",
    category: "AI Product Development",
    description: "Architecting and developing an AI-powered content generation platform built with Next.js, TypeScript, and a generative AI pipeline.",
    bullets: [
      "Engineered Content DNA analysis and Viral Score evaluation algorithms.",
      "Implemented Remix workflows and Pattern Break content generation strategies.",
      "Designed modular Next.js App Router component architecture for rapid feature iteration."
    ],
    techUsed: ["Next.js", "TypeScript", "Generative AI", "React", "Tailwind CSS"],
    isPlaceholder: false
  },
  {
    id: "exp-dhaal",
    role: "Software & Security AI Developer",
    organization: "Dhaal",
    timeframe: "Active System",
    category: "Security & Intelligence",
    description: "Engineering an AI-powered suspicious-message analysis tool utilizing a forward-anything inbox concept for text messages, URL links, and image screenshots.",
    bullets: [
      "Structured multi-input parsing pipelines for suspicious text, URL links, and image screenshots.",
      "Implemented evidence-based explanation logic and verdict classification (red_flag, looks_okay_but_confirm, not_enough_info).",
      "Designed Roman Urdu guidance features to enhance user accessibility."
    ],
    techUsed: ["TypeScript", "AI / Machine Learning", "Next.js", "Tailwind CSS"],
    isPlaceholder: false
  },
  {
    id: "exp-research",
    role: "Graduate Software & ML Researcher",
    organization: "Graduate Research Studies",
    timeframe: "Academic & Research",
    category: "Research & Engineering",
    description: "Conducting academic research and experimental engineering across privacy-preserving federated learning, continuous control RL, medical vision, and requirement algorithms.",
    bullets: [
      "Investigated federated learning protocols and privacy-preserving decentralized machine learning.",
      "Implemented continuous control reinforcement learning policies in Gym locomotion environments.",
      "Evaluated computer vision deep learning architectures for skin lesion boundary segmentation.",
      "Designed multi-criteria decision models for software requirement prioritization."
    ],
    techUsed: ["Python", "PyTorch", "Gymnasium", "Computer Vision", "Algorithms"],
    isPlaceholder: false
  },
  {
    id: "exp-placeholder-1",
    role: "Software Engineer / ML Engineer",
    organization: "[Add Employer / Organization Name]",
    timeframe: "[Add Dates]",
    location: "[Add Location]",
    category: "Career History Placeholder",
    description: "This placeholder is reserved for adding formal employment experience, company roles, or industry positions as career history grows.",
    bullets: [
      "[Add key contribution bullet 1]",
      "[Add key contribution bullet 2]",
      "[Add key contribution bullet 3]"
    ],
    techUsed: [],
    isPlaceholder: true
  }
];
