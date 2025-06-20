"use client";

import { ReactNode } from "react";
import BaseCard from "../ui/BaseCard";
import { GradientIcon } from "../ui";

interface FocusCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  index: number;
}

export default function FocusCard({
  icon,
  title,
  subtitle,
  description,
  color,
  index,
}: FocusCardProps) {
  return (
    <BaseCard
      index={index}
      delay={0.2}
      padding="32px"
      gap="24px"
      gradient={color}
      className="h-full"
    >
      <div
        className="flex flex-col"
        style={{
          gap: "24px",
        }}
      >
        <GradientIcon icon={icon} gradient={color} size="xl" />
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
      </div>
    </BaseCard>
  );
}
