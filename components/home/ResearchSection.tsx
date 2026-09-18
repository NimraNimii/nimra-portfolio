import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { researchData } from "@/data/research";

const researchFocusAreas = [
  "Machine Learning",
  "Artificial Intelligence",
  "Software Engineering",
  "Requirements Engineering",
  "Privacy-Preserving / Federated Learning",
  "Deep Learning & Computer Vision",
  "Experimental Evaluation",
];

const methodologySteps = [
  { step: "01", name: "Problem Definition", desc: "Formulating research questions and scoping system constraints." },
  { step: "02", name: "Literature & Background", desc: "Reviewing prior algorithmic approaches and state-of-the-art frameworks." },
  { step: "03", name: "Data & Preprocessing", desc: "Structuring benchmark datasets, synthetic inputs, or feature matrices." },
  { step: "04", name: "Model / Method Design", desc: "Architecting machine learning pipelines, algorithms, or policy networks." },
  { step: "05", name: "Experimentation", desc: "Executing training loops, optimization runs, or algorithm benchmarks." },
  { step: "06", name: "Evaluation", desc: "Analyzing empirical performance, loss curves, or multi-criteria metrics." },
  { step: "07", name: "Findings & Insights", desc: "Synthesizing experimental results into structured engineering conclusions." },
];

export function ResearchSection() {
  return (
    <section id="research" className="py-24 bg-[#061416] relative overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#2DD4BF]/10 via-transparent to-transparent blur-[150px] pointer-events-none" />

      <Container className="space-y-16 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="RESEARCH"
          title="Research & Machine Learning"
          description="A concise description of my work across machine learning, AI, software engineering research, and experimental projects."
        />

        {/* 1. Research Focus Panel */}
        <Card className="p-6 sm:p-8 space-y-4 border-[rgba(94,234,212,0.2)] bg-[#0B2022]/90">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-[#F0FDFA]">Core Research & Domain Specializations</h3>
              <p className="text-xs text-[#B6C9C9]">Supported research domains and methodology focus areas.</p>
            </div>
            <Badge variant="purple" className="self-start sm:self-auto text-[11px]">
              Academic & Experimental Scope
            </Badge>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-[rgba(94,234,212,0.12)]">
            {researchFocusAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#061416] text-[#5EEAD4] border border-[rgba(94,234,212,0.25)] hover:border-[#5EEAD4] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                {area}
              </span>
            ))}
          </div>
        </Card>

        {/* 2. Featured Research Cards Grid */}
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5EEAD4]" />
            <h3 className="text-lg font-semibold text-[#F0FDFA] tracking-wide">
              Featured Research & Thesis Work
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchData.map((item) => (
              <Card
                key={item.id}
                className="flex flex-col justify-between p-6 sm:p-8 space-y-6 border-[rgba(94,234,212,0.2)] hover:border-[#5EEAD4]/60 group transition-all"
              >
                <div className="space-y-4">
                  {/* Top Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Badge variant="purple" className="text-[10px]">
                      {item.field}
                    </Badge>
                    <span className="text-[11px] font-mono text-[#5EEAD4]">{item.status}</span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-[#F0FDFA] group-hover:text-[#5EEAD4] transition-colors">
                    {item.title}
                  </h4>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#B6C9C9] leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Methods & Models */}
                  {item.methods && (
                    <div className="space-y-2 pt-2 border-t border-[rgba(94,234,212,0.12)]">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7F9899]">
                        Methods & Algorithms:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.methods.map((method) => (
                          <span
                            key={method}
                            className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#061416] text-[#99F6E4] border border-[rgba(94,234,212,0.2)]"
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Focus Areas */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7F9899]">
                      Key Focus Areas:
                    </span>
                    <ul className="grid grid-cols-1 gap-1 text-xs text-[#B6C9C9]">
                      {item.keyFocusAreas.map((focus) => (
                        <li key={focus} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#2DD4BF]" />
                          {focus}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-[rgba(94,234,212,0.12)]">
                  <Link
                    href={`/projects/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5EEAD4] hover:text-[#99F6E4] transition-colors group/link"
                  >
                    View Research Project Details
                    <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 3. Research Methodology Workflow */}
        <div className="space-y-8 pt-8 border-t border-[rgba(94,234,212,0.12)]">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5EEAD4]">
              METHODOLOGY PIPELINE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F0FDFA]">
              Experimental Research Workflow
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {methodologySteps.map((stepItem) => (
              <div
                key={stepItem.step}
                className="p-4 rounded-xl bg-[#0B2022] border border-[rgba(94,234,212,0.16)] space-y-2 flex flex-col justify-between hover:border-[#5EEAD4]/50 transition-colors"
              >
                <div className="space-y-1">
                  <span className="font-mono text-xs font-bold text-[#5EEAD4]">
                    {stepItem.step}
                  </span>
                  <h4 className="text-xs font-bold text-[#F0FDFA] leading-snug">
                    {stepItem.name}
                  </h4>
                </div>
                <p className="text-[10px] text-[#B6C9C9] leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Current Research Direction & Integrity Panel */}
        <Card className="p-6 sm:p-8 space-y-6 border-[rgba(94,234,212,0.25)] bg-[#0B2022]/95 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-bl from-[#2DD4BF]/15 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Badge variant="purple">Academic & Research Alignment</Badge>
              <span className="text-xs font-mono text-[#5EEAD4]">Software Engineering & AI</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#F0FDFA]">
              Thesis & Current Research Directions
            </h3>

            <p className="text-xs sm:text-sm text-[#B6C9C9] leading-relaxed max-w-3xl">
              My current academic and experimental research focuses on <strong className="text-[#F0FDFA]">Software Requirement Prioritization algorithms</strong> and <strong className="text-[#F0FDFA]">Privacy-Preserving Federated Learning</strong>. All research models and experimental benchmarks are conducted as part of my graduate software engineering studies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-[#061416] border border-[rgba(94,234,212,0.15)] space-y-1">
                <span className="text-xs font-bold text-[#5EEAD4]">Active Research Focus</span>
                <p className="text-xs text-[#B6C9C9]">Decentralized federated training protocols & algorithmic requirement decision models.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#061416] border border-[rgba(94,234,212,0.15)] space-y-1">
                <span className="text-xs font-bold text-[#99F6E4]">Completed Experimental Projects</span>
                <p className="text-xs text-[#B6C9C9]">Continuous control reinforcement learning environments & medical vision image segmentation.</p>
              </div>
            </div>
          </div>
        </Card>

      </Container>
    </section>
  );
}
