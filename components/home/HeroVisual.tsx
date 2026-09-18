import React from "react";
import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background Gradient Glow */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-[#2DD4BF]/20 via-[#5EEAD4]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-tr from-[#0A1F21]/40 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Outer Card Glass Frame */}
      <div className="relative rounded-2xl border border-[rgba(94,234,212,0.16)] bg-[#0B2022]/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Decorative Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: "radial-gradient(rgba(94,234,212,0.4) 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }}
        />

        {/* Header Bar of Card */}
        <div className="flex items-center justify-between pb-4 border-b border-[rgba(94,234,212,0.12)]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]/70 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#f59e0b]/70 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#10b981]/70 inline-block" />
          </div>
          <span className="text-xs font-mono text-[#5EEAD4]/80 tracking-wide">
            nimra.architecture.ts
          </span>
        </div>

        {/* Code & Visual Snippet */}
        <div className="pt-5 pb-4 font-mono text-xs text-[#B6C9C9] space-y-2.5 leading-relaxed">
          <div className="flex items-center gap-2 text-[#5EEAD4]">
            <span className="text-[#2DD4BF]">import</span>
            <span>{"{ ContentDNA, AIAnalyzer }"}</span>
            <span className="text-[#2DD4BF]">from</span>
            <span className="text-[#99F6E4]">&quot;@/systems&quot;</span>;
          </div>
          
          <div className="text-[#7F9899] py-1">
            <span className="text-[#2DD4BF]">{"// Featured Platforms & Research Pipeline"}</span>
          </div>

          <div className="bg-[#061416]/90 rounded-lg p-3 border border-[rgba(94,234,212,0.16)] space-y-1.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#F0FDFA] font-semibold">Nimii Labs</span>
              <span className="text-[#5EEAD4] bg-[#102A2C] px-2 py-0.5 rounded text-[10px] border border-[#2DD4BF]/30">Active Dev</span>
            </div>
            <p className="text-[11px] text-[#B6C9C9] font-sans">
              Content DNA • Viral Score • Remix • Pattern Break
            </p>
          </div>

          <div className="bg-[#061416]/90 rounded-lg p-3 border border-[rgba(94,234,212,0.16)] space-y-1.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#F0FDFA] font-semibold">Dhaal</span>
              <span className="text-[#99F6E4] bg-[#2DD4BF]/20 px-2 py-0.5 rounded text-[10px] border border-[#5EEAD4]/30">Security AI</span>
            </div>
            <p className="text-[11px] text-[#B6C9C9] font-sans">
              Forward Inbox • Verdict Classification • Roman Urdu Guidance
            </p>
          </div>
        </div>

        {/* Professional Headshot */}
        <div className="mt-4 pt-4 border-t border-[rgba(94,234,212,0.12)]">
          <div className="relative w-full overflow-hidden rounded-xl border border-[rgba(94,234,212,0.2)] shadow-[0_0_20px_rgba(45,212,191,0.1)]">
            <Image
  src="/images/nimi.png"
  alt="Nimra Rasheed — AI Engineer and Full-Stack AI Product Developer"
  width={941}
  height={1141}
  className="w-full object-cover object-center"
  priority
/>
          </div>
        </div>
      </div>
    </div>
  );
}
