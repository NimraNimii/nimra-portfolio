import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { coreStackData, engineeringPracticesData, skillsCategoriesData } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-[#061416] relative overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-[#2DD4BF]/10 via-transparent to-transparent blur-[140px] pointer-events-none" />

      <Container className="space-y-16 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="SKILLS"
          title="Technical Skills & Tools"
          description="A structured overview of the technologies, engineering practices, and AI/ML tools I use across software development and research."
        />

        {/* 1. Core Stack Highlight Panel */}
        <Card className="p-6 sm:p-8 space-y-4 border-[rgba(94,234,212,0.25)] bg-[#0B2022]/95 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#5EEAD4]">
                CORE TECHNOLOGIES
              </span>
              <h3 className="text-lg font-bold text-[#F0FDFA]">Primary Engineering Stack</h3>
            </div>
            <Badge variant="purple" className="self-start sm:self-auto text-[11px]">
              Software & ML Core
            </Badge>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-3 border-t border-[rgba(94,234,212,0.12)]">
            {coreStackData.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#061416] text-[#F0FDFA] border border-[#2DD4BF]/40 hover:border-[#5EEAD4] hover:bg-[#102A2C] transition-all shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#5EEAD4] shadow-[0_0_8px_#5EEAD4]" />
                {tech}
              </span>
            ))}
          </div>
        </Card>

        {/* 2. Categorized Skill Cards Grid */}
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5EEAD4]" />
            <h3 className="text-lg font-semibold text-[#F0FDFA] tracking-wide">
              Technical Skill Taxonomy
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsCategoriesData.map((cat) => (
              <Card
                key={cat.category}
                className="p-6 space-y-5 flex flex-col justify-between border-[rgba(94,234,212,0.16)] hover:border-[#5EEAD4]/50 transition-all group"
              >
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-[#F0FDFA] group-hover:text-[#5EEAD4] transition-colors">
                      {cat.category}
                    </h4>
                    <p className="text-xs text-[#B6C9C9] leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[rgba(94,234,212,0.12)]">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#061416] text-[#99F6E4] border border-[rgba(94,234,212,0.2)] hover:border-[#5EEAD4] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 3. Engineering Approaches & Practices Panel */}
        <Card className="p-6 sm:p-8 space-y-5 border-[rgba(94,234,212,0.2)] bg-[#0B2022]/90">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5EEAD4]">
              PRACTICAL EXPERIENCE
            </span>
            <h3 className="text-lg font-bold text-[#F0FDFA]">
              Engineering Practices & System Workflow Areas
            </h3>
            <p className="text-xs text-[#B6C9C9]">
              Applied software engineering methodologies supported across portfolio projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-[rgba(94,234,212,0.12)]">
            {engineeringPracticesData.map((practice) => (
              <span
                key={practice}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#102A2C] text-[#F0FDFA] border border-[#2DD4BF]/30 hover:border-[#5EEAD4] transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-[#5EEAD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {practice}
              </span>
            ))}
          </div>
        </Card>

      </Container>
    </section>
  );
}
