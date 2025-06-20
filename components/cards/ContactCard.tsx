"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import BaseCard from "../ui/BaseCard";
import { GradientIcon } from "../ui";

interface ContactCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  gradient: string;
  description: string;
  index: number;
}

export default function ContactCard({
  icon,
  label,
  value,
  href,
  gradient,
  description,
  index,
}: ContactCardProps) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="block h-full"
    >
      <BaseCard
        index={index}
        delay={0.1}
        padding="24px"
        gap="16px"
        className="h-full"
      >
        <div
          className="flex flex-col"
          style={{
            gap: "16px",
          }}
        >
          <GradientIcon icon={icon} gradient={gradient} size="lg" />
          <div
            className="flex flex-col"
            style={{
              gap: "4px",
            }}
          >
            <h4
              className="font-bold text-gray-900 dark:text-white"
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
              }}
            >
              {label}
            </h4>
            <p
              className="text-gray-500 dark:text-gray-400"
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
              }}
            >
              {description}
            </p>
          </div>
          <p
            className="font-medium text-gray-700 dark:text-gray-300 break-all"
            style={{
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
            }}
          >
            {value}
          </p>
        </div>
      </BaseCard>
    </motion.a>
  );
}
