"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const onlinePlatforms = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nimra-rasheed-772b68435/",
    description: "Professional profile and engineering background.",
    icon: (
      <svg className="w-5 h-5 fill-current text-[#5EEAD4]" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/NimraNimii",
    description: "Projects, experiments, and source code.",
    icon: (
      <svg className="w-5 h-5 fill-current text-[#5EEAD4]" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: "Fiverr",
    url: "https://www.fiverr.com/sellers/nimrawani",
    description: "Freelance services and professional work.",
    icon: (
      <svg className="w-5 h-5 fill-current text-[#5EEAD4]" viewBox="0 0 24 24">
        <path d="M23 16a2 2 0 01-2 2h-3v-8h3a2 2 0 012 2v4zm-7-6h-2v8h2v-8zm-4 0H9v4h3v4H9v-8zm-5 0H5v8h2v-8zm-4 0H1v8h2v-8z" />
      </svg>
    ),
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~01034073ac6f5015ff",
    description: "Freelance profile and client work.",
    icon: (
      <svg className="w-5 h-5 fill-current text-[#5EEAD4]" viewBox="0 0 24 24">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-4.437 0-5.83 3.315-6.425 5.378-.992-1.464-1.745-3.238-2.172-4.996h-3.411v6.942c0 1.583-.759 2.583-2.023 2.583-1.264 0-2.022-.999-2.022-2.583v-6.942h-3.411v6.942c0 3.257 2.083 5.433 5.433 5.433 3.35 0 5.433-2.176 5.433-5.433v-1.892c.501.996 1.157 2.062 1.954 3.036-.921 1.776-2.155 3.371-3.649 4.316l2.128 2.128c1.884-1.472 3.424-3.568 4.542-5.908 1.442 1.341 3.149 2.103 4.965 2.103 4.438 0 7.842-3.404 7.842-7.842s-3.404-7.842-7.842-7.842z"/>
      </svg>
    ),
  },
  {
    name: "Dhaal Instagram",
    url: "https://www.instagram.com/dhaal_app/",
    description: "Dhaal product updates and content.",
    icon: (
      <svg className="w-5 h-5 fill-current text-[#5EEAD4]" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
];

const productsData = [
  {
    name: "Nimii Labs",
    subtitle: "AI Script Generation & Validation Platform",
    description: "AI-powered content generation platform built with Next.js, TypeScript, and a generative AI pipeline featuring Content DNA and Viral Score metrics.",
    website: "https://nimii-labs-ai.vercel.app/",
    github: "https://github.com/NimraNimii/nimii-labs-ai",
  },
  {
    name: "Dhaal",
    subtitle: "AI Verification / Suspicious Message Analysis Tool",
    description: "AI-powered suspicious-message analysis tool operating on a forward-anything inbox concept for text, URL links, and screenshots.",
    website: "https://dhaal-khaki.vercel.app/",
    github: "https://github.com/NimraNimii/dhaal",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage(result.message || "Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setStatus("error");
        setStatusMessage(result.error || "Failed to send your message. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setStatusMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#061416] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#2DD4BF]/15 via-transparent to-transparent blur-[160px] pointer-events-none" />

      <Container className="space-y-20 relative z-10">
        {/* Section Header */}
        <SectionHeading
          eyebrow="LET'S CONNECT"
          title="Let's Build Something Meaningful"
          description="Open to software engineering, AI/ML, research, and product development opportunities."
        />

        {/* 1. Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Get in Touch Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#F0FDFA]">Get in Touch</h3>
              <p className="text-xs text-[#B6C9C9]">
                Direct contact channels for project inquiries and engineering collaboration.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Card */}
              <Card className="p-5 space-y-3 border-[rgba(94,234,212,0.2)] bg-[#0B2022]/95 hover:border-[#5EEAD4]/50 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#061416] text-[#5EEAD4] border border-[rgba(94,234,212,0.2)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-semibold text-[#5EEAD4] tracking-wider block">Email</span>
                    <a href="mailto:nimiiwritess@gmail.com" className="text-sm font-bold text-[#F0FDFA] hover:text-[#5EEAD4] transition-colors">
                      nimiiwritess@gmail.com
                    </a>
                  </div>
                </div>

                <a href="mailto:nimiiwritess@gmail.com" className="block w-full">
                  <Button variant="secondary" size="sm" className="w-full gap-2 text-xs">
                    <svg className="w-3.5 h-3.5 text-[#5EEAD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Me
                  </Button>
                </a>
              </Card>

              {/* WhatsApp Card */}
              <Card className="p-5 space-y-3 border-[rgba(94,234,212,0.2)] bg-[#0B2022]/95 hover:border-[#5EEAD4]/50 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#061416] text-[#5EEAD4] border border-[rgba(94,234,212,0.2)]">
                    <svg className="w-5 h-5 fill-current text-[#5EEAD4]" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.16 4.239 4.316-1.132z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-semibold text-[#5EEAD4] tracking-wider block">WhatsApp</span>
                    <span className="text-sm font-bold text-[#F0FDFA]">
                      Available for direct conversation
                    </span>
                  </div>
                </div>

                <a
                  href="https://wa.me/923035314499"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="secondary" size="sm" className="w-full gap-2 text-xs">
                    <svg className="w-3.5 h-3.5 text-[#5EEAD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Chat on WhatsApp
                  </Button>
                </a>
              </Card>

              {/* Location Card */}
              <Card className="p-5 border-[rgba(94,234,212,0.2)] bg-[#0B2022]/95">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#061416] text-[#5EEAD4] border border-[rgba(94,234,212,0.2)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-semibold text-[#5EEAD4] tracking-wider block">Location</span>
                    <span className="text-sm font-semibold text-[#F0FDFA]">
                      Dunyapur, Bahawalpur, Pakistan
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 space-y-6 border-[rgba(94,234,212,0.25)] bg-[#0B2022]/95">
              <div className="space-y-1 pb-2 border-b border-[rgba(94,234,212,0.12)]">
                <h3 className="text-xl font-bold text-[#F0FDFA]">Send a Message</h3>
                <p className="text-xs text-[#B6C9C9]">
                  Send a direct message regarding software engineering roles, AI projects, or research.
                </p>
              </div>

              {statusMessage && (
                <div
                  className={`p-4 rounded-xl text-xs leading-relaxed border ${
                    status === "success"
                      ? "bg-[#2DD4BF]/15 text-[#99F6E4] border-[#2DD4BF]/40"
                      : "bg-red-950/40 text-red-300 border-red-800/40"
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-[#F0FDFA]">
                    Your Name <span className="text-[#5EEAD4]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#061416] text-[#F0FDFA] placeholder-[#7F9899] text-xs border focus:outline-none transition-colors ${
                      errors.name ? "border-red-500 focus:border-red-500" : "border-[rgba(94,234,212,0.2)] focus:border-[#5EEAD4]"
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-400">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-[#F0FDFA]">
                    Your Email Address <span className="text-[#5EEAD4]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#061416] text-[#F0FDFA] placeholder-[#7F9899] text-xs border focus:outline-none transition-colors ${
                      errors.email ? "border-red-500 focus:border-red-500" : "border-[rgba(94,234,212,0.2)] focus:border-[#5EEAD4]"
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-[#F0FDFA]">
                    Subject <span className="text-[#5EEAD4]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Engineering Opportunity"
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#061416] text-[#F0FDFA] placeholder-[#7F9899] text-xs border focus:outline-none transition-colors ${
                      errors.subject ? "border-red-500 focus:border-red-500" : "border-[rgba(94,234,212,0.2)] focus:border-[#5EEAD4]"
                    }`}
                  />
                  {errors.subject && <p className="text-[11px] text-red-400">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-[#F0FDFA]">
                    Message <span className="text-[#5EEAD4]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here (min. 10 characters)..."
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#061416] text-[#F0FDFA] placeholder-[#7F9899] text-xs border focus:outline-none transition-colors resize-none ${
                      errors.message ? "border-red-500 focus:border-red-500" : "border-[rgba(94,234,212,0.2)] focus:border-[#5EEAD4]"
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-400">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  variant="primary"
                  size="lg"
                  className="w-full gap-2 shadow-lg shadow-[#2DD4BF]/20 mt-2"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin text-[#061416]" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

        </div>

        {/* 2. Platform Grid: Find Me Online */}
        <div className="space-y-8 pt-10 border-t border-[rgba(94,234,212,0.12)]">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5EEAD4]">
              ONLINE PROFILES & NETWORKS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F0FDFA]">Find Me Online</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {onlinePlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group focus:outline-none"
              >
                <Card className="p-5 h-full space-y-3 border-[rgba(94,234,212,0.16)] hover:border-[#5EEAD4]/60 transition-all flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-[#061416] border border-[rgba(94,234,212,0.15)] group-hover:border-[#5EEAD4]/50 transition-colors">
                        {platform.icon}
                      </div>
                      <svg className="w-4 h-4 text-[#7F9899] group-hover:text-[#5EEAD4] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>

                    <h4 className="text-sm font-bold text-[#F0FDFA] group-hover:text-[#5EEAD4] transition-colors">
                      {platform.name}
                    </h4>
                    <p className="text-xs text-[#B6C9C9] leading-relaxed">
                      {platform.description}
                    </p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>

        {/* 3. My Products Section */}
        <div className="space-y-8 pt-10 border-t border-[rgba(94,234,212,0.12)]">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5EEAD4]">
              FEATURED APPLICATIONS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F0FDFA]">My Products</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productsData.map((prod) => (
              <Card key={prod.name} className="p-6 space-y-5 border-[rgba(94,234,212,0.2)] hover:border-[#5EEAD4]/60 transition-all">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="purple">{prod.name}</Badge>
                    <span className="text-[11px] font-mono text-[#5EEAD4]">Live Platform</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#F0FDFA]">{prod.subtitle}</h4>
                  <p className="text-xs text-[#B6C9C9] leading-relaxed">{prod.description}</p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[rgba(94,234,212,0.12)]">
                  <a href={prod.website} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="sm" className="gap-2 text-xs">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Visit Website
                    </Button>
                  </a>

                  <a href={prod.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm" className="gap-2 text-xs">
                      <svg className="w-3.5 h-3.5 text-[#5EEAD4]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      View GitHub Repository
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 4. Resume Area: Want the full picture? */}
        <Card className="p-8 sm:p-10 space-y-6 border-[rgba(94,234,212,0.25)] bg-[#0B2022]/95 text-center flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-b from-[#2DD4BF]/15 via-transparent to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-3 max-w-xl">
            <Badge variant="purple" className="px-3.5 py-1 text-[11px]">
              Full Profile Overview
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F0FDFA]">
              Want the full picture?
            </h3>
            <p className="text-xs sm:text-sm text-[#B6C9C9] leading-relaxed">
              View my experience, technical skills, projects, and AI/ML work in a comprehensive resume document.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a
              href="/resume/Nimra_Rasheed_Resume.pdf"
              download="Nimra_Rasheed_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg" className="gap-2 shadow-lg shadow-[#2DD4BF]/20">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </Button>
            </a>

            <Link href="/resume">
              <Button variant="secondary" size="lg" className="gap-2">
                View Web Resume
              </Button>
            </Link>
          </div>
        </Card>

      </Container>
    </section>
  );
}
