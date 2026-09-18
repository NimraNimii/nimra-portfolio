import { SkillGroup } from "@/types";

export interface RefinedSkillCategory extends SkillGroup {
  description: string;
}

export const coreStackData = [
  "Next.js",
  "TypeScript",
  "Python",
  "Generative AI",
  "PyTorch",
  "React",
  "Tailwind CSS"
];

export const engineeringPracticesData = [
  "Modular Architecture",
  "Requirements Analysis",
  "API Integration",
  "Machine Learning Experimentation",
  "Model Evaluation",
  "Full-Stack Product Development",
  "Research & Prototyping"
];

export const skillsCategoriesData: RefinedSkillCategory[] = [
  {
    category: "Software Engineering",
    description: "System architecture, modular design, and robust software development practices.",
    skills: [
      "Software Architecture",
      "Modular System Design",
      "RESTful APIs",
      "Requirement Engineering",
      "Agile Development",
      "Code Refactoring"
    ]
  },
  {
    category: "Programming & Development",
    description: "Core languages and web development frameworks for scalable applications.",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "HTML5 / CSS3",
      "ES6+ Standards"
    ]
  },
  {
    category: "AI & Machine Learning",
    description: "Artificial intelligence models, deep neural networks, and research domains.",
    skills: [
      "Generative AI Pipelines",
      "PyTorch",
      "TensorFlow",
      "Federated Learning",
      "Reinforcement Learning",
      "Computer Vision",
      "Natural Language Processing"
    ]
  },
  {
    category: "Full-Stack Development",
    description: "Modern web frontend, backend integration, and responsive UI engineering.",
    skills: [
      "Next.js (App Router)",
      "React",
      "Node.js",
      "Tailwind CSS",
      "PostCSS"
    ]
  },
  {
    category: "Data & Experimentation",
    description: "Model training, evaluation benchmarks, and empirical analysis tools.",
    skills: [
      "Model Evaluation",
      "Gymnasium / OpenAI Gym",
      "OpenCV Vision Tools",
      "Multi-Criteria Decision Models"
    ]
  },
  {
    category: "Developer Tools",
    description: "Version control, environment management, and development toolchains.",
    skills: [
      "Git & GitHub",
      "VS Code",
      "ESLint",
      "npm / Node Tooling"
    ]
  }
];
