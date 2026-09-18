import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "nimii-labs",
    slug: "nimii-labs",
    title: "Nimii Labs",
    subtitle: "AI-Powered Content Generation Platform",
    isFeatured: true,
    category: "AI Platform",
    summary: "An AI-powered content generation platform built with Next.js, TypeScript, and a generative AI pipeline, featuring Content DNA analysis, Viral Score evaluation, Remix workflows, and Pattern Break content strategies.",
    features: [
      "Content DNA",
      "Viral Score",
      "Remix Workflows",
      "Pattern Break Strategy",
      "Generative AI Pipeline"
    ],
    techStack: ["Next.js", "TypeScript", "Generative AI", "React", "Tailwind CSS"],
    architectureNotes: [
      "Modular generative AI pipeline architecture",
      "Next.js App Router for dynamic content rendering",
      "Extensible data structures for rapid feature iteration"
    ],
    status: "Active Development",
    links: {}
  },
  {
    id: "dhaal",
    slug: "dhaal",
    title: "Dhaal",
    subtitle: "AI-Powered Suspicious-Message Analyzer",
    isFeatured: true,
    category: "Security & Intelligence",
    summary: "An AI-powered suspicious-message analyzer using a forward-anything inbox concept to process text messages, URL links, and image screenshots with evidence-based explanations and Roman Urdu guidance.",
    features: [
      "Forward-Anything Inbox Concept",
      "Multi-Input Analysis (Text, URLs, Screenshots)",
      "Evidence-Based Explanations",
      "Roman Urdu Guidance for Accessibility",
      "Categorical Verdict Classification"
    ],
    techStack: ["TypeScript", "AI / Machine Learning", "Next.js", "Tailwind CSS"],
    dhaalDetails: {
      inboxConcept: "Forward-anything inbox concept supporting text, URL links, and image screenshots.",
      supportedInputTypes: ["Suspicious text messages", "URL links", "Screenshots"],
      explanationType: "Evidence-based explanations",
      languageGuidance: "Roman Urdu guidance",
      verdicts: ["red_flag", "looks_okay_but_confirm", "not_enough_info"]
    },
    status: "Active System",
    links: {}
  },
  {
    id: "federated-learning",
    slug: "federated-learning",
    title: "Federated Learning / Privacy-Preserving ML",
    subtitle: "Privacy-preserving decentralized machine learning systems",
    isFeatured: false,
    category: "Machine Learning",
    summary: "Research and implementation focused on privacy-preserving machine learning frameworks and federated learning protocols for decentralized data protection.",
    techStack: ["Python", "PyTorch / TensorFlow", "Federated Learning", "Privacy-Preserving ML"],
    status: "Research & Engineering",
    links: {}
  },
  {
    id: "bipedalwalker-rl",
    slug: "bipedalwalker-rl",
    title: "BipedalWalker Reinforcement Learning",
    subtitle: "Continuous control reinforcement learning environment",
    isFeatured: false,
    category: "Reinforcement Learning",
    summary: "Reinforcement learning policy implementation for continuous control task navigation and motion control in the BipedalWalker environment.",
    techStack: ["Python", "Reinforcement Learning", "Gymnasium / OpenAI Gym", "PyTorch"],
    status: "Completed Research",
    links: {}
  },
  {
    id: "skin-lesion-segmentation",
    slug: "skin-lesion-segmentation",
    title: "Skin Lesion Segmentation & Classification",
    subtitle: "Computer vision deep learning models for medical image analysis",
    isFeatured: false,
    category: "Computer Vision",
    summary: "Deep neural network architectures developed for automated skin lesion boundary segmentation and diagnostic classification.",
    techStack: ["Python", "Computer Vision", "Deep Learning", "PyTorch", "OpenCV"],
    status: "Completed Engineering",
    links: {}
  },
  {
    id: "software-requirement-prioritization",
    slug: "software-requirement-prioritization",
    title: "Software Requirement Prioritization",
    subtitle: "Algorithmic decision support for software engineering requirements",
    isFeatured: false,
    category: "Software Engineering",
    summary: "Systematic framework and algorithmic optimization model designed for evaluating and prioritizing requirements across the software development lifecycle.",
    techStack: ["Python / TypeScript", "Software Engineering", "Algorithms", "Decision Support"],
    status: "Completed Project",
    links: {}
  }
];
