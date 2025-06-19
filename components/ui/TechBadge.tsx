"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TechBadgeProps {
  icon: ReactNode;
  label: string;
  color: string;
  index: number;
}

export default function TechBadge({
  icon,
  label,
  color,
  index,
}: TechBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.8 + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex items-center px-6 py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-apple rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-apple hover:shadow-apple-lg transition-all duration-500 group"
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-full bg-gradient-to-r ${color} text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <span className="font-medium text-gray-900 dark:text-white">
          {label}
        </span>
      </div>
    </motion.div>
  );
}
