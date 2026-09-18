import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "nimii-labs",
    slug: "nimii-labs",
    title: "Nimii Labs",
    subtitle: "AI-Powered Content Generation & Evaluation Platform",
    isFeatured: true,
    category: "AI Platform",

    summary:
      "An AI-powered content intelligence platform built with React, Vite, Express.js, and generative AI. Nimii Labs uses a multi-stage pipeline to plan, generate, evaluate, and refine short-form video scripts.",

    features: [
      "Content DNA",
      "Viral Score",
      "Remix Workflows",
      "Pattern Break Strategy",
      "Multi-Stage AI Pipeline",
    ],

    featureDescriptions: {
      "Content DNA":
        "Analyzes content patterns and identifies structural characteristics that influence short-form performance.",

      "Viral Score":
        "Evaluates scripts across hook strength, retention, readability, and platform fit.",

      "Remix Workflows":
        "Transforms existing content ideas into new script variations while preserving the creative intent.",

      "Pattern Break Strategy":
        "Introduces structural variations designed to create stronger attention and engagement.",

      "Multi-Stage AI Pipeline":
        "Coordinates planning, generation, judging, scoring, and review through a structured AI workflow.",
    },

    techStack: [
      "React",
      "Vite",
      "Express.js",
      "Generative AI",
      "Groq API",
      "Gemini API",
    ],

    architectureNotes: [
      "Multi-stage AI workflow for planning, generation, judging, scoring, and review",
      "Structured AI outputs with parsing and validation before results reach the UI",
      "Modular provider architecture supporting multiple AI model providers",
      "React and Vite frontend with Express.js backend services",
    ],

    status: "Active Development",

    links: {
      live: "https://nimii-labs-ai.vercel.app/",
      github: "https://github.com/NimraNimii/nimii-labs-ai",
    },
  },

  {
    id: "dhaal",
    slug: "dhaal",
    title: "Dhaal",
    subtitle: "AI-Powered Suspicious-Message Analyzer",
    isFeatured: true,
    category: "Security & Intelligence",

    summary:
      "An AI-powered suspicious-message analyzer using a forward-anything inbox concept to process text messages, URL links, and image screenshots with evidence-based explanations and Roman Urdu guidance.",

    features: [
      "Forward-Anything Inbox Concept",
      "Multi-Input Analysis (Text, URLs, Screenshots)",
      "Evidence-Based Explanations",
      "Roman Urdu Guidance for Accessibility",
      "Categorical Verdict Classification",
    ],
    featureDescriptions: {
  "Forward-Anything Inbox Concept":
    "Provides a simple workflow for forwarding suspicious messages and content into one place for analysis.",

  "Multi-Input Analysis (Text, URLs, Screenshots)":
    "Analyzes suspicious text messages, URL links, and image screenshots as supported input types.",

  "Evidence-Based Explanations":
    "Explains suspicious indicators using evidence from the submitted content instead of unsupported claims.",

  "Roman Urdu Guidance for Accessibility":
    "Presents guidance in Roman Urdu to make security explanations easier to understand for the target audience.",

  "Categorical Verdict Classification":
    "Classifies analyzed content into clear verdict categories: red_flag, looks_okay_but_confirm, or not_enough_info.",
},

    techStack: [
      "TypeScript",
      "AI / Machine Learning",
      "Next.js",
      "Tailwind CSS",
    ],

    dhaalDetails: {
      inboxConcept:
        "Forward-anything inbox concept supporting text, URL links, and image screenshots.",
      supportedInputTypes: [
        "Suspicious text messages",
        "URL links",
        "Screenshots",
      ],
      explanationType: "Evidence-based explanations",
      languageGuidance: "Roman Urdu guidance",
      verdicts: [
        "red_flag",
        "looks_okay_but_confirm",
        "not_enough_info",
      ],
    },

    status: "Active System",

    links: {},
  },

  {
    id: "federated-learning",
    slug: "federated-learning",
    title: "Federated Learning / Privacy-Preserving ML",
    subtitle: "Privacy-preserving decentralized machine learning systems",
    isFeatured: false,
    category: "Machine Learning",

   summary:
  "Research and implementation focused on privacy-preserving machine learning frameworks and federated learning protocols for decentralized data protection.",

features: [
  "Federated Model Training",
  "Privacy-Preserving Learning",
  "Decentralized Data Processing",
  "Secure Model Aggregation",
],

featureDescriptions: {
  "Federated Model Training":
    "Enables machine learning models to be trained across distributed data sources without requiring the underlying data to be centralized.",

  "Privacy-Preserving Learning":
    "Focuses on protecting sensitive training data while allowing participating clients to contribute to a shared machine learning model.",

  "Decentralized Data Processing":
    "Keeps data at its local source while model training is coordinated across participating clients.",

  "Secure Model Aggregation":
    "Combines model updates from participating clients to build a shared model while reducing the need to transfer raw training data.",
},

architectureNotes: [
  "Distributed clients perform local model training using their own data",
  "Only model updates are communicated rather than raw training data",
  "A central coordination layer aggregates updates from participating clients",
  "The shared model is updated iteratively through federated training rounds",
],

techStack: [
  "Python",
  "PyTorch / TensorFlow",
  "Federated Learning",
  "Privacy-Preserving ML",
],

status: "Research & Engineering",

links: {},
},

{
  id: "bipedalwalker-rl",
    slug: "bipedalwalker-rl",
    title: "BipedalWalker Reinforcement Learning",
    subtitle: "Continuous control reinforcement learning environment",
    isFeatured: false,
    category: "Reinforcement Learning",

   summary:
  "Reinforcement learning policy implementation for continuous control task navigation and motion control in the BipedalWalker environment.",

features: [
  "Continuous Control Learning",
  "PPO & SAC Policies",
  "Reward Shaping",
  "Long-Horizon Training",
],

featureDescriptions: {
  "Continuous Control Learning":
    "Trains reinforcement learning policies to control a simulated bipedal agent through continuous action outputs.",

  "PPO & SAC Policies":
    "Explores PPO and SAC reinforcement learning algorithms for learning locomotion policies in the BipedalWalker environment.",

  "Reward Shaping":
    "Uses additional reward signals to encourage coordinated movement and more effective use of both legs during training.",

  "Long-Horizon Training":
    "Evaluates policy learning across progressively larger training budgets to study improvements in walking behavior.",
},

architectureNotes: [
  "Gymnasium BipedalWalker environment provides observations, continuous actions, and rewards",
  "Stable-Baselines3 is used to train PPO and SAC reinforcement learning policies",
  "Reward shaping adds task-specific feedback to encourage coordinated leg movement",
  "Training checkpoints are evaluated across increasing numbers of environment timesteps",
],

techStack: [
      "Python",
      "Reinforcement Learning",
      "Gymnasium / OpenAI Gym",
      "PyTorch",
    ],

    status: "Completed Research",

    links: {},
  },

  
 {
  id: "skin-lesion-segmentation",
  slug: "skin-lesion-segmentation",
  title: "Skin Lesion Segmentation & Classification",
  subtitle: "Computer vision deep learning models for medical image analysis",
  isFeatured: false,
  category: "Computer Vision",

  summary:
    "Deep neural network architectures developed for automated skin lesion boundary segmentation and diagnostic classification.",

  features: [
    "Lesion Boundary Segmentation",
    "Deep Learning Classification",
    "U-Net Segmentation Model",
    "ResNet-50 Classification",
  ],

  featureDescriptions: {
    "Lesion Boundary Segmentation":
      "Segments skin lesion regions from dermoscopic images to identify the lesion boundary for further analysis.",

    "Deep Learning Classification":
      "Uses deep learning models to classify skin lesion images into diagnostic categories.",

    "U-Net Segmentation Model":
      "Applies a U-Net based architecture for pixel-level skin lesion segmentation and boundary detection.",

    "ResNet-50 Classification":
      "Uses a ResNet-50 based classification model to extract visual features and predict lesion categories.",
  },

  techStack: [
    "Python",
    "Computer Vision",
    "Deep Learning",
    "PyTorch",
    "OpenCV",
  ],

  architectureNotes: [
    "Dermoscopic images are preprocessed and prepared for deep learning analysis",
    "U-Net is used for pixel-level skin lesion segmentation",
    "ResNet-50 is used for diagnostic image classification",
    "Segmentation and classification results are evaluated using task-specific performance metrics",
  ],

  status: "Completed Engineering",

  links: {},
},
  {
    id: "software-requirement-prioritization",
    slug: "software-requirement-prioritization",
    title: "Software Requirement Prioritization",
    subtitle: "Algorithmic decision support for software engineering requirements",
    isFeatured: false,
    category: "Software Engineering",

    summary:
      "Systematic framework and algorithmic optimization model designed for evaluating and prioritizing requirements across the software development lifecycle.",

    techStack: [
      "Python / TypeScript",
      "Software Engineering",
      "Algorithms",
      "Decision Support",
    ],

    status: "Completed Project",

    links: {},
  },
];