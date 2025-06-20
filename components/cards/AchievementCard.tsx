"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import IconContainer from "../ui/IconContainer";

interface AchievementCardProps {
  icon: ReactNode;
  number: string;
  title: string;
  description: string;
  index: number;
  gradient?: string;
}

export default function AchievementCard({
  icon,
  number,
  title,
  description,
  index,
  gradient = "from-blue-500 to-purple-600",
}: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-apple rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-apple hover:shadow-apple-lg transition-all duration-500 flex flex-col items-center"
        style={{
          padding: "32px",
          gap: "16px",
        }}
      >
        <IconContainer icon={icon} gradient={gradient} />
        <div
          className="flex flex-col items-center text-center"
          style={{
            gap: "8px",
          }}
        >
          <div
            className={`font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
            style={{
              fontSize: "2.5rem",
              lineHeight: "1",
            }}
          >
            {number}
          </div>
          <h4
            className="font-bold text-gray-900 dark:text-white"
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.75rem",
            }}
          >
            {title}
          </h4>
        </div>
        <p
          className="text-gray-600 dark:text-gray-300 text-center"
          style={{
            fontSize: "1rem",
            lineHeight: "1.5rem",
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
