import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className = "",
  hoverEffect = true,
}: CardProps) {
  return (
    <div
      className={`rounded-xl border border-[rgba(94,234,212,0.16)] bg-[#0B2022]/90 backdrop-blur-md p-6 transition-all duration-300 ${
        hoverEffect
          ? "hover:border-[rgba(94,234,212,0.35)] hover:bg-[#102A2C] hover:shadow-[0_0_25px_rgba(45,212,191,0.15)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
