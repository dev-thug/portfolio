"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectHighlightsProps {
  highlights: string[];
  delay?: number;
}

export default function ProjectHighlights({
  highlights,
  delay = 0.7,
}: ProjectHighlightsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <div
        className="flex flex-col"
        style={{
          gap: "16px",
        }}
      >
        <h4
          className="font-semibold text-gray-900 dark:text-white"
          style={{
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
          }}
        >
          주요 성과
        </h4>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-start"
              style={{
                gap: "12px",
              }}
            >
              <ArrowRight
                className="text-blue-600 dark:text-blue-400 flex-shrink-0"
                style={{
                  width: "20px",
                  height: "20px",
                  marginTop: "2px",
                }}
              />
              <span
                className="text-gray-600 dark:text-gray-300"
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                }}
              >
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
