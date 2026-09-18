import React from "react";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function ResumePage() {
  return (
    <SiteShell>
      <main className="py-24 sm:py-32 bg-[#061416] min-h-screen relative">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-gradient-to-b from-[#2DD4BF]/15 via-[#0A1F21]/5 to-transparent blur-[140px] pointer-events-none" />

        <Container className="space-y-10 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#5EEAD4] hover:text-[#99F6E4] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>

            <a
              href="/resume/Nimra_Rasheed_Resume.pdf"
              download="Nimra_Rasheed_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="sm" className="gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF Resume
              </Button>
            </a>
          </div>

          {/* Resume Web Document View */}
          <Card className="p-8 sm:p-12 space-y-8 border-[rgba(94,234,212,0.25)] bg-[#0B2022]/95 shadow-xl">
            {/* Document Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-[rgba(94,234,212,0.15)]">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="purple">Web Resume</Badge>
                  <Badge variant="lilac">MSc Computer Science</Badge>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F0FDFA]">
                  Nimra Rasheed
                </h1>
                <p className="text-base font-semibold text-[#5EEAD4]">
                  AI Engineer — Full-Stack AI Product Development
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-[#B6C9C9] font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-[#5EEAD4]">Email:</span>
                  <a href="mailto:nimiiwritess@gmail.com" className="hover:underline">
                    nimiiwritess@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#5EEAD4]">Location:</span>
                  <span>Dunyapur, Bahawalpur, Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#5EEAD4]">GitHub:</span>
                  <a href="https://github.com/NimraNimii" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    github.com/NimraNimii
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Overview */}
            <div className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#5EEAD4]">
                Professional Summary
              </h2>
              <p className="text-sm text-[#B6C9C9] leading-relaxed">
                Software Engineering graduate student and Independent Product Developer specializing in AI platforms, machine learning systems, and full-stack software development. Creator of Nimii Labs and Dhaal, with research interests in privacy-preserving federated learning and algorithmic software requirement prioritization.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3 pt-4 border-t border-[rgba(94,234,212,0.12)]">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#5EEAD4]">
                Core Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <span className="font-semibold text-[#F0FDFA]">Languages & Web:</span>
                  <p className="text-[#B6C9C9]">Python, TypeScript, JavaScript, Next.js, React, Node.js, Tailwind CSS, HTML5/CSS3</p>
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-[#F0FDFA]">AI & Machine Learning:</span>
                  <p className="text-[#B6C9C9]">Generative AI Pipelines, PyTorch, TensorFlow, Federated Learning, Reinforcement Learning, Computer Vision, NLP</p>
                </div>
              </div>
            </div>

            {/* Key Products & Experience */}
            <div className="space-y-4 pt-4 border-t border-[rgba(94,234,212,0.12)]">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#5EEAD4]">
                Featured Products & Projects
              </h2>

              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-sm font-bold text-[#F0FDFA]">
                    <span>Nimii Labs — AI Content Generation Platform</span>
                    <span className="text-xs font-mono text-[#5EEAD4]">Active Development</span>
                  </div>
                  <p className="text-xs text-[#B6C9C9]">
                    Full-stack AI platform built with Next.js, TypeScript, and a generative AI pipeline. Features Content DNA analysis, Viral Score evaluation, Remix workflows, and Pattern Break content strategies.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-center text-sm font-bold text-[#F0FDFA]">
                    <span>Dhaal — AI Suspicious-Message Analyzer</span>
                    <span className="text-xs font-mono text-[#5EEAD4]">Active System</span>
                  </div>
                  <p className="text-xs text-[#B6C9C9]">
                    Security AI analyzer using a forward-anything inbox concept to process suspicious text, links, and screenshots, offering evidence-based explanations, Roman Urdu guidance, and verdict categorization.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3 pt-4 border-t border-[rgba(94,234,212,0.12)]">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#5EEAD4]">
                Education
              </h2>
              <div className="text-xs space-y-1">
                <p className="font-bold text-[#F0FDFA]">MSc Computer Science / Software Engineering Graduate Studies</p>
                <p className="text-[#B6C9C9]">Specializing in Software Engineering & Machine Learning Systems.</p>
              </div>
            </div>

            {/* Footer PDF Notice */}
            <div className="pt-6 border-t border-[rgba(94,234,212,0.15)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-[#7F9899]">
                PDF Resume location: <code className="text-[#5EEAD4]">/public/resume/Nimra_Rasheed_Resume.pdf</code>
              </p>

              <a
                href="/resume/Nimra_Rasheed_Resume.pdf"
                download="Nimra_Rasheed_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="sm" className="gap-2">
                  Download PDF File
                </Button>
              </a>
            </div>
          </Card>
        </Container>
      </main>
    </SiteShell>
  );
}
