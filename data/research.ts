import { ResearchItem } from "@/types";

export interface RefinedResearchItem extends ResearchItem {
  methods?: string[];
  type?: string;
}

export const researchData: RefinedResearchItem[] = [
  {
    id: "requirement-prioritization-research",
    slug: "software-requirement-prioritization",
    title: "Intelligent ML-Based Software Requirement Prioritization",
    field: "Software Engineering & Algorithmic Optimization",
    summary: "Systematic algorithmic framework and decision support models for evaluating, scoring, and prioritizing software requirements across engineering lifecycles.",
    keyFocusAreas: [
      "Multi-Criteria Decision Analysis",
      "Requirement Engineering",
      "Software Lifecycle Optimization"
    ],
    methods: ["Algorithmic Decision Support", "Multi-Criteria Evaluation", "Requirement Ranking Models"],
    type: "Software Engineering & ML Research",
    status: "Academic & Engineering Research"
  },
  {
    id: "federated-learning-research",
    slug: "federated-learning",
    title: "Federated Learning & Privacy-Preserving Machine Learning",
    field: "Privacy-Preserving Machine Learning",
    summary: "Investigation into decentralized machine learning paradigms that train neural models across distributed nodes while maintaining data privacy and governance.",
    keyFocusAreas: [
      "Privacy-Preserving Machine Learning",
      "Decentralized Model Training",
      "Data Governance & Privacy Protocols"
    ],
    methods: ["Federated Aggregation Protocols", "Decentralized Model Training", "Differential Privacy Concepts"],
    type: "Machine Learning Research",
    status: "Active Research Direction"
  },
  {
    id: "skin-lesion-segmentation-research",
    slug: "skin-lesion-segmentation",
    title: "Skin Lesion Segmentation & Classification",
    field: "Medical Image Analysis & Computer Vision",
    summary: "Deep neural network architectures evaluated for automated skin lesion boundary segmentation and diagnostic classification from dermoscopy imagery.",
    keyFocusAreas: [
      "Deep Learning Architectures",
      "Semantic Boundary Segmentation",
      "Diagnostic Medical Vision"
    ],
    methods: ["Deep Convolutional Networks", "U-Net Architecture Concepts", "Dermoscopy Vision Analysis"],
    type: "Computer Vision Research",
    status: "Completed Experimental Work"
  },
  {
    id: "bipedalwalker-rl-research",
    slug: "bipedalwalker-rl",
    title: "BipedalWalker Reinforcement Learning",
    field: "Reinforcement Learning & Continuous Control",
    summary: "Study of continuous control reinforcement learning algorithms applied to simulated legged locomotion and motion control in Gym environments.",
    keyFocusAreas: [
      "Continuous Action Space Optimization",
      "Policy Gradient Methods",
      "Simulated Locomotion Dynamics"
    ],
    methods: ["Policy Gradient Optimization", "Gymnasium Benchmark Simulation", "Reward Function Structuring"],
    type: "Reinforcement Learning Project",
    status: "Completed Experimental Project"
  }
];
