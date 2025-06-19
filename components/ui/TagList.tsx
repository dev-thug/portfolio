"use client";

import { motion } from "framer-motion";

interface TagListProps {
  tags: string[];
  variant?: "default" | "outline" | "filled";
  size?: "sm" | "md" | "lg";
  className?: string;
  animated?: boolean;
  delay?: number;
}

const variantClasses = {
  default:
    "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700",
  outline:
    "border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500",
  filled: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
};

const sizeClasses = {
  sm: "px-2 py-1 text-xs",
  md: "px-3 py-1 text-xs",
  lg: "px-4 py-2 text-sm",
};

export default function TagList({
  tags,
  variant = "default",
  size = "md",
  className = "",
  animated = true,
  delay = 0,
}: TagListProps) {
  const baseClasses = `${sizeClasses[size]} ${variantClasses[variant]} font-medium rounded-full transition-colors duration-300 shadow-sm`;

  if (!animated) {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {tags.map((tag, index) => (
          <span key={index} className={baseClasses}>
            {tag}
          </span>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
      className={`flex flex-wrap gap-2 ${className}`}
    >
      {tags.map((tag, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          className={baseClasses}
        >
          {tag}
        </motion.span>
      ))}
    </motion.div>
  );
}
