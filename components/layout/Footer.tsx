import React from "react";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(94,234,212,0.12)] bg-[#061416] py-8 text-xs text-[#7F9899]">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#F0FDFA]">Nimra Rasheed</span>
          <span>&bull;</span>
          <span>Software Engineer &amp; Machine Learning Engineer</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Nimra Rasheed. All rights reserved.</p>
      </Container>
    </footer>
  );
}
