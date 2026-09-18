import React from "react";
import Link from "next/link";
import { Project } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
  isFeaturedLayout?: boolean;
}

export function ProjectCard({ project, isFeaturedLayout = false }: ProjectCardProps) {
  if (isFeaturedLayout) {
    return (
      <Card className="relative overflow-hidden group border-[rgba(94,234,212,0.25)] hover:border-[#5EEAD4]/60 p-6 sm:p-8">
        {/* Background Subtle Gradient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#2DD4BF]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none group-hover:from-[#2DD4BF]/25 transition-all duration-500" />

        <div className="relative z-10 space-y-6">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Badge variant="purple">{project.category}</Badge>
              {project.status && (
                <Badge variant="lilac" className="text-[10px]">
                  {project.status}
                </Badge>
              )}
            </div>
            <span className="text-xs font-mono text-[#5EEAD4]">Featured System</span>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F0FDFA] group-hover:text-[#5EEAD4] transition-colors">
              <Link href={`/projects/${project.slug}`} className="focus:outline-none focus:underline">
                {project.title}
              </Link>
            </h3>
            <p className="text-sm font-medium text-[#5EEAD4]/90">{project.subtitle}</p>
          </div>

          {/* Summary */}
          <p className="text-sm text-[#B6C9C9] leading-relaxed max-w-2xl">
            {project.summary}
          </p>

          {/* Key Features Pill Tags */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-[rgba(94,234,212,0.12)]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7F9899]">
                Key Features & Capabilities:
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-[#061416]/80 text-[#99F6E4] border border-[rgba(94,234,212,0.2)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4]" />
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Dhaal Verdict Indicators if present */}
          {project.dhaalDetails && (
            <div className="space-y-2 pt-2 border-t border-[rgba(94,234,212,0.12)]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7F9899]">
                Verdict Outputs & Evidence Model:
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-red-950/60 text-red-300 border border-red-800/40">
                  red_flag
                </span>
                <span className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-amber-950/60 text-amber-300 border border-amber-800/40">
                  looks_okay_but_confirm
                </span>
                <span className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-[#0A1F21] text-[#B6C9C9] border border-[rgba(94,234,212,0.2)]">
                  not_enough_info
                </span>
              </div>
            </div>
          )}

          {/* Tech Stack & Action Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[rgba(94,234,212,0.12)]">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-[11px]">
                  {tech}
                </Badge>
              ))}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-[#102A2C] text-[#5EEAD4] border border-[#2DD4BF]/40 hover:border-[#5EEAD4] hover:bg-[#2DD4BF]/20 transition-all duration-200 self-start sm:self-auto group/link"
            >
              View Project
              <svg
                className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col justify-between h-full p-6 space-y-5 border-[rgba(94,234,212,0.16)] hover:border-[rgba(94,234,212,0.35)]">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="subtle" className="text-[10px]">
            {project.category}
          </Badge>
          {project.status && <span className="text-[11px] text-[#7F9899] font-mono">{project.status}</span>}
        </div>

        <div className="space-y-1">
          <h4 className="text-lg font-bold text-[#F0FDFA] hover:text-[#5EEAD4] transition-colors">
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h4>
          <p className="text-xs text-[#5EEAD4] font-medium">{project.subtitle}</p>
        </div>

        <p className="text-xs text-[#B6C9C9] leading-relaxed line-clamp-3">
          {project.summary}
        </p>
      </div>

      <div className="space-y-4 pt-4 border-t border-[rgba(94,234,212,0.1)]">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="text-[10px] px-2 py-0.5">
              {tech}
            </Badge>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5EEAD4] hover:text-[#99F6E4] transition-colors"
        >
          View Project
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </Card>
  );
}
