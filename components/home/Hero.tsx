import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#061416]">
      {/* Glow Orbs Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#2DD4BF]/15 via-[#5EEAD4]/10 to-transparent blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-8 text-center sm:text-left">
            
            {/* Eyebrow */}
            <div>
              <Badge variant="purple" className="px-3.5 py-1.5 text-[11px] font-semibold tracking-wider uppercase">
                SOFTWARE ENGINEER • MACHINE LEARNING ENGINEER
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F0FDFA] leading-[1.12]">
              Building{" "}
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#2DD4BF] to-[#99F6E4] bg-clip-text text-transparent">
                Intelligent Solutions
              </span>{" "}
              for Real-World Problems.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#B6C9C9] max-w-xl leading-relaxed font-normal">
              I&apos;m Nimra Rasheed, a Software Engineering graduate student focused on building real-world software products and exploring AI and machine learning.
            </p>

            {/* CTAs & Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 pt-2">
              <a href="#projects">
                <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2 shadow-lg shadow-[#2DD4BF]/20">
                  View My Work
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </a>

              <a href="/resume">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2">
                  <svg className="w-4 h-4 text-[#5EEAD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center sm:justify-start gap-5 pt-2">
              <span className="text-xs font-medium text-[#B6C9C9] uppercase tracking-wider">Connect:</span>
              <a
                href="https://github.com/NimraNimii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B6C9C9] hover:text-[#5EEAD4] transition-colors p-1"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/nimra-rasheed-772b68435/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B6C9C9] hover:text-[#5EEAD4] transition-colors p-1"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a
                href="#contact"
                className="text-[#B6C9C9] hover:text-[#5EEAD4] transition-colors p-1"
                aria-label="Email Contact"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 6.788l3.824 3.101 3.824-3.101 4.542 5.612h-16.732l4.542-5.612zm8.201-1.076l4.623-3.746v9.458l-4.623-5.712z"/>
                </svg>
              </a>
            </div>

            {/* Qualitative Highlights (No numerical stats) */}
            <div className="pt-6 border-t border-[rgba(94,234,212,0.12)] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#5EEAD4] tracking-wide uppercase">Specialization</span>
                <p className="text-sm font-medium text-[#F0FDFA]">AI & Machine Learning</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#5EEAD4] tracking-wide uppercase">Domain</span>
                <p className="text-sm font-medium text-[#F0FDFA]">Full-Stack Product Dev</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#5EEAD4] tracking-wide uppercase">Focus</span>
                <p className="text-sm font-medium text-[#F0FDFA]">Research & Engineering</p>
              </div>
            </div>

          </div>

          {/* Right Column - Hero Visual */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>

        </div>

        {/* Project Preview Hint Banner at bottom of hero */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-[rgba(94,234,212,0.12)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B6C9C9]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#5EEAD4] animate-pulse" />
            <span className="font-semibold text-[#F0FDFA] tracking-wide uppercase">Featured Projects Preview</span>
            <span className="text-[#7F9899] hidden sm:inline">|</span>
            <span className="text-[#B6C9C9] hidden sm:inline">Nimii Labs (AI Content Platform) &bull; Dhaal (Message Analyzer)</span>
          </div>

          <a
            href="#projects"
            className="flex items-center gap-1.5 text-[#5EEAD4] hover:text-[#99F6E4] font-medium transition-colors group"
          >
            Explore Portfolio
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
            </svg>
          </a>
        </div>

      </Container>
    </section>
  );
}
