import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5EEAD4]/50 disabled:opacity-50 disabled:pointer-events-none rounded-lg";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#2DD4BF] to-[#5EEAD4] text-[#061416] font-semibold hover:opacity-95 hover:shadow-[0_0_20px_rgba(45,212,191,0.35)] active:scale-[0.98]",
    secondary:
      "bg-[#0B2022] text-[#F0FDFA] border border-[rgba(94,234,212,0.25)] hover:border-[#5EEAD4]/60 hover:bg-[#102A2C]",
    ghost:
      "bg-transparent text-[#B6C9C9] hover:text-[#F0FDFA] hover:bg-[#0B2022]",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
