import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "purple" | "lilac" | "outline" | "subtle";
  className?: string;
}

export function Badge({
  children,
  variant = "purple",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    purple: "bg-[#102A2C] text-[#5EEAD4] border border-[#2DD4BF]/35",
    lilac: "bg-[#2DD4BF]/15 text-[#99F6E4] border border-[#5EEAD4]/30",
    outline: "bg-transparent text-[#B6C9C9] border border-[#102A2C]",
    subtle: "bg-[#0B2022] text-[#F0FDFA] border border-[rgba(94,234,212,0.16)]",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
