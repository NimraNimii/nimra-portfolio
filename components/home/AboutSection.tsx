import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const focusAreas = [
  {
    title: "Software Engineering",
    description: "Scalable product architecture, modular design, and clean, maintainable codebases.",
    icon: (
      <svg className="w-5 h-5 text-[#5EEAD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Artificial Intelligence",
    description: "Generative AI pipelines, content intelligence workflows, and prompt engineering.",
    icon: (
      <svg className="w-5 h-5 text-[#5EEAD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Machine Learning",
    description: "Privacy-preserving federated learning, continuous control RL, and computer vision models.",
    icon: (
      <svg className="w-5 h-5 text-[#5EEAD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: "Full-Stack Development",
    description: "Production web applications using Next.js, TypeScript, React, and modern UI engineering.",
    icon: (
      <svg className="w-5 h-5 text-[#5EEAD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
      </svg>
    ),
  },
  {
    title: "Research & Experimentation",
    description: "Algorithmic decision optimization and software requirement prioritization frameworks.",
    icon: (
      <svg className="w-5 h-5 text-[#5EEAD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

const principles = [
  {
    number: "01",
    title: "Understand & Define Requirements",
    description: "Thoroughly analyzing problem domains, user constraints, and software specifications before architecture design.",
  },
  {
    number: "02",
    title: "Design Modular Architectures",
    description: "Structuring clean, maintainable components and decoupled AI data pipelines for long-term scalability.",
  },
  {
    number: "03",
    title: "Build & Validate Systems",
    description: "Implementing robust full-stack code and evaluating ML model outputs against real-world test cases.",
  },
  {
    number: "04",
    title: "Iterate Through Evidence",
    description: "Refining software products and machine learning algorithms based on empirical results, feedback, and evidence.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#061416] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#2DD4BF]/10 via-[#5EEAD4]/5 to-transparent blur-[140px] pointer-events-none" />

      <Container className="space-y-16 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="ABOUT ME"
          title="Building Software With an Engineering Mindset"
          description="A concise professional introduction based only on the existing portfolio data."
        />

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column - Biography */}
          <div className="lg:col-span-7 space-y-6">
            <Card className="p-6 sm:p-8 space-y-5 border-[rgba(94,234,212,0.2)]">
              <div className="flex items-center gap-2">
                <Badge variant="purple">Graduate Student & Engineer</Badge>
                <Badge variant="lilac" className="text-[10px]">
                  Software & ML
                </Badge>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#B6C9C9] leading-relaxed">
                <p>
                  I am <strong className="text-[#F0FDFA]">Nimra Rasheed</strong>, a Software Engineering graduate student focused on building real-world software products and exploring artificial intelligence and machine learning systems.
                </p>
                <p>
                  My work spans full-stack software development, generative AI platforms, and evidence-based security tools. Projects like <strong className="text-[#5EEAD4]">Nimii Labs</strong> showcase my interest in AI content intelligence, Content DNA modeling, and modular generation pipelines, while <strong className="text-[#5EEAD4]">Dhaal</strong> demonstrates a focus on practical security classification, evidence-based explanations, and Roman Urdu guidance.
                </p>
                <p>
                  Alongside product development, I explore core machine learning domains including federated privacy-preserving learning, continuous control reinforcement learning, medical image segmentation, and software requirement prioritization algorithms.
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(94,234,212,0.12)] flex flex-wrap gap-2">
                <span className="text-xs font-mono text-[#5EEAD4]">
                  Key Technical Domains: Next.js &bull; TypeScript &bull; Python &bull; Generative AI &bull; PyTorch
                </span>
              </div>
            </Card>
          </div>

          {/* Right Column - Engineering Focus & Photo Slot */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 space-y-5 border-[rgba(94,234,212,0.2)]">
              <div className="flex items-center justify-between pb-3 border-b border-[rgba(94,234,212,0.12)]">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F0FDFA]">
                  Engineering Focus Areas
                </h3>
                <span className="w-2 h-2 rounded-full bg-[#5EEAD4]" />
              </div>

              <div className="space-y-4">
                {focusAreas.map((area) => (
                  <div key={area.title} className="flex items-start gap-3 group">
                    <div className="p-2 rounded-lg bg-[#061416] border border-[rgba(94,234,212,0.15)] group-hover:border-[#5EEAD4]/50 transition-colors shrink-0 mt-0.5">
                      {area.icon}
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-[#F0FDFA] group-hover:text-[#5EEAD4] transition-colors">
                        {area.title}
                      </h4>
                      <p className="text-xs text-[#B6C9C9] leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Professional Headshot */}
            <div className="relative w-full overflow-hidden rounded-xl border border-[rgba(94,234,212,0.2)] shadow-[0_0_24px_rgba(45,212,191,0.12)]">
              <Image
                src="/images/nimra-rasheed.jpg"
                alt="Nimra Rasheed — Software & ML Engineer"
                width={500}
                height={600}
                className="w-full object-cover object-center"
                priority
              />
            </div>
          </div>

        </div>

        {/* Subsection: How I Approach Problems */}
        <div className="space-y-8 pt-8 border-t border-[rgba(94,234,212,0.12)]">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5EEAD4]">
              ENGINEERING METHODOLOGY
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F0FDFA]">
              How I Approach Problems
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((item) => (
              <Card key={item.number} className="p-6 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-[#5EEAD4] tracking-wider">
                    {item.number}
                  </span>
                  <h4 className="text-sm font-bold text-[#F0FDFA]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#B6C9C9] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
