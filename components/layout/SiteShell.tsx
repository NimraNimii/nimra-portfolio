import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#061416] text-[#F0FDFA] selection:bg-[#2DD4BF]/30 selection:text-white">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
