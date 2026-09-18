import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const focusAreas = [
  {
    title: "Software Engineering",
    description:
      "Scalable architecture, modular design, clean code, and production-focused software development.",
    icon: (
      <svg
        className="w-5 h-5 text-[#5EEAD4]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Artificial Intelligence",
    description:
      "Generative AI applications, LLM pipelines, structured outputs, prompt engineering, and AI evaluation.",
    icon: (
      <svg
        className="w-5 h-5 text-[#5EEAD4]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Machine Learning",
    description:
      "Classical ML, deep learning, computer vision, reinforcement learning, and applied experimentation.",
    icon: (
      <svg
        className="w-5 h-5 text-[#5EEAD4]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
  },
  {
    title: "Full-Stack Development",
    description:
      "Production web applications using Next.js, TypeScript, React, Python, APIs, and modern UI engineering.",
    icon: (
      <svg
        className="w-5 h-5 text-[#5EEAD4]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
        />
      </svg>
    ),
  },
  {
    title: "Research & Experimentation",
    description:
      "Applied AI/ML research, model experimentation, evaluation, and intelligent decision-support systems.",
    icon: (
      <svg
        className="w-5 h-5 text-[#5EEAD4]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
];

const principles = [
  {
    number: "01",
    title: "Understand & Define Requirements",
    description:
      "Analyze the problem domain, user needs, constraints, and technical requirements before designing the solution.",
  },
  {
    number: "02",
    title: "Design Modular Architectures",
    description:
      "Structure maintainable components and decoupled AI pipelines that can evolve as the product grows.",
  },
  {
    number: "03",
    title: "Build & Validate Systems",
    description:
      "Implement robust software and evaluate AI/ML outputs using structured validation, testing, and real-world cases.",
  },
  {
    number: "04",
    title: "Iterate Through Evidence",
    description:
      "Improve products and models through empirical results, user feedback, evaluation, and continuous iteration.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-[#061416] relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#2DD4BF]/10 via-[#5EEAD4]/5 to-transparent blur-[140px] pointer-events-none" />

      <Container className="space-y-16 relative z-10">

        {/* Section Heading */}
        <SectionHeading
          eyebrow="ABOUT ME"
          title="Building Intelligent Software for Real-World Problems"
          description="AI Engineer & Full-Stack AI Product Developer building intelligent, production-ready software products."
        />

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column - Biography */}
          <div className="lg:col-span-7 space-y-6">
            <Card className="p-6 sm:p-8 space-y-5 border-[rgba(94,234,212,0.2)]">

              {/* Professional Tags */}
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="purple">
                  AI Engineer & Product Developer
                </Badge>

                <Badge variant="lilac" className="text-[10px]">
                  Software & ML
                </Badge>
              </div>

              {/* Biography */}
              <div className="space-y-4 text-sm sm:text-base text-[#B6C9C9] leading-relaxed">

                <p>
                  I’m{" "}
                  <strong className="text-[#F0FDFA]">
                    Nimra Rasheed
                  </strong>
                  , an AI Engineer and Full-Stack AI Product Developer focused
                  on building practical software products and intelligent
                  systems. My work combines software engineering, AI/ML, and
                  production-focused development to turn ideas into working
                  applications.
                </p>

                <p>
                  I build full-stack applications with modern AI technologies,
                  from frontend and backend development to AI pipelines,
                  structured outputs, evaluation, and deployment. My featured
                  products include{" "}
                  <strong className="text-[#5EEAD4]">
                    Nimii Labs
                  </strong>
                  , an AI-powered content intelligence platform, and{" "}
                  <strong className="text-[#5EEAD4]">
                    Dhaal
                  </strong>
                  , an evidence-based AI verification tool.
                </p>

                <p>
                  Alongside product development, I explore machine learning,
                  computer vision, reinforcement learning, and privacy-preserving
                  AI through academic and experimental projects. I’m particularly
                  interested in building AI systems that are reliable,
                  explainable, and useful in real-world applications.
                </p>

              </div>

              {/* Technical Domains */}
              <div className="pt-4 border-t border-[rgba(94,234,212,0.12)]">
                <span className="text-xs font-mono text-[#5EEAD4] leading-relaxed">
                  Key Technical Domains: Next.js • TypeScript • Python •
                  Generative AI • Machine Learning
                </span>
              </div>

            </Card>
          </div>

          {/* Right Column - Engineering Focus & Photo */}
          <div className="lg:col-span-5 space-y-6">

            {/* Engineering Focus */}
            <Card className="p-6 space-y-5 border-[rgba(94,234,212,0.2)]">

              <div className="flex items-center justify-between pb-3 border-b border-[rgba(94,234,212,0.12)]">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F0FDFA]">
                  Engineering Focus Areas
                </h3>

                <span className="w-2 h-2 rounded-full bg-[#5EEAD4]" />
              </div>

              <div className="space-y-4">
                {focusAreas.map((area) => (
                  <div
                    key={area.title}
                    className="flex items-start gap-3 group"
                  >
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

            {/* Professional Photo */}
            <div className="relative w-full overflow-hidden rounded-xl border border-[rgba(94,234,212,0.2)] shadow-[0_0_24px_rgba(45,212,191,0.12)]">
           
            </div>

          </div>
        </div>

        {/* Engineering Methodology */}
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
              <Card
                key={item.number}
                className="p-6 space-y-3 flex flex-col justify-between"
              >
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