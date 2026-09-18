import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { experienceData } from "@/data/experience";

const experienceThemes = [
  "Software Engineering",
  "AI / Machine Learning",
  "Full-Stack Development",
  "Research & Experimentation",
  "Product Development",
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-[#061416] relative overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-[#2DD4BF]/10 via-transparent to-transparent blur-[140px] pointer-events-none" />

      <Container className="space-y-16 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="EXPERIENCE"
          title="Engineering Experience"
          description="A concise overview of my practical experience across software engineering, AI/ML development, research, and product building."
        />

        {/* Descriptive Experience Themes Bar */}
        <Card className="p-6 border-[rgba(94,234,212,0.2)] bg-[#0B2022]/90 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5EEAD4]">
              PRACTICAL DOMAINS
            </span>
            <span className="text-xs text-[#B6C9C9]">Focus areas across project building and research</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[rgba(94,234,212,0.12)]">
            {experienceThemes.map((theme) => (
              <span
                key={theme}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#061416] text-[#F0FDFA] border border-[rgba(94,234,212,0.2)]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4]" />
                {theme}
              </span>
            ))}
          </div>
        </Card>

        {/* Vertical Timeline / Experience Cards Stack */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-[rgba(94,234,212,0.15)]">
          {experienceData.map((item) => (
            <div key={item.id} className="relative pl-10 sm:pl-16 group">
              {/* Timeline Connector Dot */}
              <div className="absolute left-2.5 sm:left-6 top-6 w-3.5 h-3.5 rounded-full bg-[#061416] border-2 border-[#5EEAD4] shadow-[0_0_10px_#5EEAD4] group-hover:scale-125 transition-transform" />

              <Card
                className={`p-6 sm:p-8 space-y-5 transition-all ${
                  item.isPlaceholder
                    ? "border-dashed border-[rgba(94,234,212,0.25)] bg-[#0B2022]/60"
                    : "border-[rgba(94,234,212,0.2)] hover:border-[#5EEAD4]/60 bg-[#0B2022]/95"
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-[#F0FDFA] group-hover:text-[#5EEAD4] transition-colors">
                        {item.role}
                      </h3>
                      {item.isPlaceholder && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#102A2C] text-[#5EEAD4] border border-[#2DD4BF]/30">
                          Placeholder Entry
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-[#5EEAD4]">
                      {item.organization} {item.location ? `&bull; ${item.location}` : ""}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.category && <Badge variant="purple" className="text-[10px]">{item.category}</Badge>}
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#061416] text-[#99F6E4] border border-[rgba(94,234,212,0.2)]">
                      {item.timeframe}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#B6C9C9] leading-relaxed">
                  {item.description}
                </p>

                {/* Bulleted Contributions */}
                {item.bullets && item.bullets.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-[rgba(94,234,212,0.12)]">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7F9899]">
                      Key Contributions & Impact:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#B6C9C9]">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies Used */}
                {item.techUsed && item.techUsed.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[rgba(94,234,212,0.12)]">
                    {item.techUsed.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-[10px] px-2.5 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
