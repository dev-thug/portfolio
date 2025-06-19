"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MetricCardProps {
  icon?: ReactNode;
  value: string;
  label: string;
  description?: string;
  gradient?: string;
  index?: number;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: {
    icon: "w-10 h-10",
    iconContainer: "w-12 h-12",
    value: "text-2xl",
    label: "text-sm",
  },
  md: {
    icon: "w-6 h-6",
    iconContainer: "w-16 h-16",
    value: "text-3xl",
    label: "text-base",
  },
  lg: {
    icon: "w-8 h-8",
    iconContainer: "w-20 h-20",
    value: "text-5xl md:text-6xl",
    label: "text-xl",
  },
};

export default function MetricCard({
  icon,
  value,
  label,
  description,
  gradient = "from-blue-500 to-purple-500",
  index = 0,
  size = "md",
}: MetricCardProps) {
  const classes = sizeClasses[size];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
      className="group text-center"
    >
      <div className="flex flex-col items-center gap-3">
        {icon && (
          <div
            className={`inline-flex items-center justify-center ${classes.iconContainer} rounded-2xl bg-gradient-to-r ${gradient} text-white group-hover:scale-110 transition-transform duration-300`}
          >
            <div className={classes.icon}>{icon}</div>
          </div>
        )}
        <div
          className={`${classes.value} font-bold ${
            gradient.includes("gradient")
              ? "text-gray-900 dark:text-white"
              : `bg-gradient-to-r ${gradient} bg-clip-text text-transparent`
          }`}
        >
          {value}
        </div>
        <div
          className={`${classes.label} font-medium text-gray-900 dark:text-white`}
        >
          {label}
        </div>
        {description && (
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </div>
        )}
      </div>
    </motion.div>
  );
}
