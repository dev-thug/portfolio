"use client";

import { ReactNode } from "react";
import Badge from "./Badge";

interface TechBadgeProps {
  icon: ReactNode;
  label: string;
  color: string;
  index: number;
  size?: "sm" | "md" | "lg";
  delay?: number;
}

export default function TechBadge({
  icon,
  label,
  color,
  index,
  size = "lg",
  delay = 0.8,
}: TechBadgeProps) {
  return (
    <Badge
      icon={icon}
      variant="tech"
      size={size}
      gradient={color}
      index={index}
      delay={delay}
      animated={true}
    >
      {label}
    </Badge>
  );
}
