"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ProjectMetricCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  gradient: string;
  index: number;
}

export default function ProjectMetricCard({
  icon,
  value,
  label,
  gradient,
  index,
}: ProjectMetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div
        className="flex flex-col items-center"
        style={{
          gap: "12px",
        }}
      >
        <div
          className={`inline-flex items-center justify-center bg-gradient-to-r ${gradient} text-white rounded-2xl`}
          style={{
            width: "48px",
            height: "48px",
          }}
        >
          {icon}
        </div>
        <div
          className="font-bold text-gray-900 dark:text-white"
          style={{
            fontSize: "1.5rem",
            lineHeight: "2rem",
          }}
        >
          {value}
        </div>
        <div
          className="text-gray-600 dark:text-gray-300"
          style={{
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
          }}
        >
          {label}
        </div>
      </div>
    </motion.div>
  );
}
