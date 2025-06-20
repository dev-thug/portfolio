"use client";

import { ReactNode } from "react";
import IconContainer from "../ui/IconContainer";
import BaseCard from "../ui/BaseCard";

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  index: number;
}

export default function ValueCard({
  icon,
  title,
  subtitle,
  description,
  gradient,
  index,
}: ValueCardProps) {
  return (
    <BaseCard
      index={index}
      delay={0.2}
      padding="32px"
      gap="16px"
      gradient={gradient}
    >
      <IconContainer icon={icon} gradient={gradient} />
      <div
        className="flex flex-col"
        style={{
          gap: "8px",
        }}
      >
        <h4
          className="font-bold text-gray-900 dark:text-white"
          style={{
            fontSize: "1.5rem",
            lineHeight: "2rem",
          }}
        >
          {title}
        </h4>
        <p
          className="font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase"
          style={{
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
          }}
        >
          {subtitle}
        </p>
      </div>
      <p
        className="text-gray-600 dark:text-gray-300 leading-relaxed"
        style={{
          fontSize: "1rem",
          lineHeight: "1.625",
        }}
      >
        {description}
      </p>
    </BaseCard>
  );
}
