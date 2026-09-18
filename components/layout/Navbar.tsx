"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { name: "Home", href: "#top" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#061416]/85 backdrop-blur-md border-b border-[rgba(94,234,212,0.16)] shadow-[0_4px_20px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#top"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#5EEAD4]/50 rounded-lg p-1"
          aria-label="Nimra Rasheed Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2DD4BF] to-[#0A1F21] p-[1px] shadow-[0_0_15px_rgba(45,212,191,0.3)] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#061416] rounded-[11px] flex items-center justify-center font-bold text-base text-[#5EEAD4]">
              N
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-[#F0FDFA] group-hover:text-[#5EEAD4] transition-colors">
              Nimra Rasheed
            </span>
            <span className="text-[10px] text-[#B6C9C9] tracking-widest uppercase hidden sm:inline-block">
              Software & ML Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0B2022]/60 border border-[rgba(94,234,212,0.12)] rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-[#B6C9C9] hover:text-[#F0FDFA] hover:bg-[#102A2C] rounded-full transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#5EEAD4]/40"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Action (Download Resume) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/resume"
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-[#0B2022] text-[#F0FDFA] border border-[rgba(94,234,212,0.25)] hover:border-[#5EEAD4]/60 hover:bg-[#102A2C] transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5EEAD4]/50"
          >
            <svg
              className="w-3.5 h-3.5 text-[#5EEAD4]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#B6C9C9] hover:text-[#F0FDFA] hover:bg-[#0B2022] border border-transparent hover:border-[rgba(94,234,212,0.2)] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5EEAD4]/50"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#061416]/95 border-b border-[rgba(94,234,212,0.2)] backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 transition-all">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-[#B6C9C9] hover:text-[#F0FDFA] hover:bg-[#0B2022] rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2 border-t border-[rgba(94,234,212,0.12)]">
            <a
              href="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg bg-[#0B2022] text-[#F0FDFA] border border-[rgba(94,234,212,0.3)] hover:bg-[#102A2C]"
            >
              <svg
                className="w-4 h-4 text-[#5EEAD4]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
