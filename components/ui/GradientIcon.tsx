"use client";

import { ReactNode } from "react";

interface GradientIconProps {
  icon: ReactNode;
  gradient?: string;
  size?: "sm" | "md" | "lg" | "xl";
  shape?: "circle" | "rounded" | "square";
  className?: string;
  hover?: boolean;
}

const sizeClasses = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-20 h-20",
};

const shapeClasses = {
  circle: "rounded-full",
  rounded: "rounded-2xl",
  square: "rounded-lg",
};

export default function GradientIcon({
  icon,
  gradient = "from-blue-500 to-purple-500",
  size = "md",
  shape = "rounded",
  className = "",
  hover = true,
}: GradientIconProps) {
  const hoverClass = hover
    ? "group-hover:scale-110 hover:scale-110 transition-transform duration-300"
    : "";

  return (
    <div
      className={`
        inline-flex items-center justify-center
        ${sizeClasses[size]}
        ${shapeClasses[shape]}
        bg-gradient-to-r ${gradient}
        text-white
        shadow-lg
        ${hoverClass}
        ${className}
      `}
    >
      {icon}
    </div>
  );
}
