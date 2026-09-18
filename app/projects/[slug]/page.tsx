import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { projectsData } from "@/data/projects";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <SiteShell>
      <main className="py-24 sm:py-32 bg-[#061416] relative min-h-screen">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-gradient-to-b from-[#2DD4BF]/15 via-[#0A1F21]/5 to-transparent blur-[140px] pointer-events-none" />

        <Container className="space-y-12 relative z-10">
          {/* Top Breadcrumb / Back Link */}
          <div>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#5EEAD4] hover:text-[#99F6E4] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </Link>
          </div>

          {/* Header Block */}
          <div className="space-y-4 border-b border-[rgba(94,234,212,0.15)] pb-8">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="purple">{project.category}</Badge>
              {project.status && <Badge variant="lilac">{project.status}</Badge>}
              {project.isFeatured && <Badge variant="subtle">Featured System</Badge>}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F0FDFA] tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg text-[#5EEAD4] font-medium">{project.subtitle}</p>
            
            <p className="text-base text-[#B6C9C9] leading-relaxed max-w-3xl pt-2">
              {project.summary}
            </p>
          </div>

          {/* Dhaal Specific Verdict & Inbox Architecture Section */}
          {project.dhaalDetails && (
            <Card className="p-6 sm:p-8 space-y-6 border-[rgba(94,234,212,0.25)]">
              <div className="space-y-2">
                <Badge variant="lilac">Security Architecture & Inbox Concept</Badge>
                <h2 className="text-xl sm:text-2xl font-bold text-[#F0FDFA]">
                  Forward-Anything Inbox & Verdict Classification
                </h2>
                <p className="text-sm text-[#B6C9C9] leading-relaxed">
                  Dhaal operates on a forward-anything inbox concept designed to analyze suspicious text messages, URL links, and image screenshots, generating evidence-based explanations with Roman Urdu guidance.
                </p>
              </div>

              {/* Input Types */}
              <div className="space-y-3 pt-4 border-t border-[rgba(94,234,212,0.12)]">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#7F9899]">
                  Supported Input Formats:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.dhaalDetails.supportedInputTypes.map((input) => (
                    <div key={input} className="p-3 rounded-lg bg-[#061416] border border-[rgba(94,234,212,0.15)] text-xs text-[#F0FDFA] font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#5EEAD4]" />
                      {input}
                    </div>
                  ))}
                </div>
              </div>

              {/* Verdict Classification Outputs */}
              <div className="space-y-3 pt-4 border-t border-[rgba(94,234,212,0.12)]">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#7F9899]">
                  Categorical Verdict Outputs:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/40 space-y-1">
                    <span className="font-mono text-xs font-bold text-red-400">red_flag</span>
                    <p className="text-xs text-red-200/80">Identifies clear suspicious indicators requiring immediate caution.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/40 space-y-1">
                    <span className="font-mono text-xs font-bold text-amber-400">looks_okay_but_confirm</span>
                    <p className="text-xs text-amber-200/80">Indicates low risk detected but recommends independent verification.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0A1F21] border border-[rgba(94,234,212,0.2)] space-y-1">
                    <span className="font-mono text-xs font-bold text-[#B6C9C9]">not_enough_info</span>
                    <p className="text-xs text-[#7F9899]">Issued when inputs lack sufficient context or evidence for determination.</p>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Features & Capabilities */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#F0FDFA]">Key Features & Capabilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.features.map((feature) => (
  <Card key={feature} className="p-5 space-y-2">
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-[#5EEAD4]" />
      <h3 className="text-sm font-semibold text-[#F0FDFA]">
        {feature}
      </h3>
    </div>

    <p className="text-xs text-[#B6C9C9] leading-relaxed">
      {project.featureDescriptions?.[feature] ??
        `Core capability of the ${project.title} system.`}
    </p>
  </Card>
))}
              </div>
            </div>
          )}

          {/* Technical Architecture Notes */}
          {project.architectureNotes && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#F0FDFA]">Architecture Overview</h2>
              <Card className="p-6 space-y-3">
                <ul className="space-y-2 text-sm text-[#B6C9C9] list-disc list-inside">
                  {project.architectureNotes.map((note, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {note}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#F0FDFA]">Technologies & Frameworks</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="purple" className="px-3 py-1.5 text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-8 border-t border-[rgba(94,234,212,0.15)] flex justify-between items-center">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#5EEAD4] hover:text-[#99F6E4]"
            >
              ← Back to All Projects
            </Link>
          </div>
        </Container>
      </main>
    </SiteShell>
  );
}
