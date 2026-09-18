import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projectsData } from "@/data/projects";

export function ProjectsSection() {
  const featuredProjects = projectsData.filter((p) => p.isFeatured);
  const additionalProjects = projectsData.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="py-24 bg-[#061416] relative overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-l from-[#2DD4BF]/10 to-transparent blur-[140px] pointer-events-none" />

      <Container className="space-y-16 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Projects That Turn Ideas Into Working Systems"
          description="A curated selection of AI, machine learning, software engineering, and research projects."
        />

        {/* Featured Projects Highlight Stack */}
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5EEAD4]" />
            <h3 className="text-lg font-semibold text-[#F0FDFA] tracking-wide">
              Featured Platforms & Intelligence Tools
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isFeaturedLayout={true} />
            ))}
          </div>
        </div>

        {/* Specialized Engineering & Research Projects Grid */}
        <div className="space-y-8 pt-6 border-t border-[rgba(94,234,212,0.12)]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF]" />
            <h3 className="text-lg font-semibold text-[#F0FDFA] tracking-wide">
              Machine Learning & Software Engineering Systems
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isFeaturedLayout={false} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
