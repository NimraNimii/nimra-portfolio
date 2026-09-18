import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {eyebrow && (
        <span className="text-xs uppercase tracking-widest font-semibold text-[#5EEAD4] block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F0FDFA]">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-[#B6C9C9] max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
