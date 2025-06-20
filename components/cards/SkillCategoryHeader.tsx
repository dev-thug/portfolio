"use client";

import { motion, MotionValue } from "framer-motion";
import { ReactNode } from "react";

interface SkillCategoryHeaderProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  gradient: string;
  y: MotionValue<string>;
}

export default function SkillCategoryHeader({
  title,
  subtitle,
  icon,
  gradient,
  y,
}: SkillCategoryHeaderProps) {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        marginBottom: "40px",
      }}
    >
      <motion.div style={{ y }} className="text-center">
        <div
          className="flex flex-col items-center"
          style={{
            gap: "16px",
          }}
        >
          <div
            className={`inline-flex items-center justify-center rounded-3xl bg-gradient-to-r ${gradient} text-white shadow-apple-lg`}
            style={{
              width: "80px",
              height: "80px",
            }}
          >
            {icon}
          </div>
          <div
            className="flex flex-col"
            style={{
              gap: "8px",
            }}
          >
            <h3
              className="font-bold text-gray-900 dark:text-white"
              style={{
                fontSize: "2.25rem",
                lineHeight: "2.5rem",
              }}
            >
              {title}
            </h3>
            <p
              className="text-gray-600 dark:text-gray-300 font-light"
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
              }}
            >
              {subtitle}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
