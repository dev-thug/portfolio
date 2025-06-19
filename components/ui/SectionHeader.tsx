"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: ReactNode;
  titleSize?: "sm" | "md" | "lg" | "xl";
  className?: string;
  delay?: number;
}

const titleSizes = {
  sm: "text-3xl md:text-4xl",
  md: "text-4xl md:text-5xl",
  lg: "text-5xl md:text-6xl",
  xl: "text-6xl md:text-7xl lg:text-8xl",
};

export default function SectionHeader({
  title,
  subtitle,
  description,
  titleSize = "md",
  className = "",
  delay = 0,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className={`text-center ${className}`}
    >
      <div className="flex flex-col gap-8">
        <motion.h2
          className={`${titleSizes[titleSize]} font-bold tracking-tight`}
          style={{ lineHeight: titleSize === "xl" ? "0.9" : "1.1" }}
        >
          {subtitle ? (
            <>
              <span className="block text-gray-900 dark:text-white">
                {title}
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                {subtitle}
              </span>
            </>
          ) : (
            <span className="text-gray-900 dark:text-white">{title}</span>
          )}
        </motion.h2>

        {description && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              delay: delay + 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-300 mx-auto leading-relaxed"
          >
            {description}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
