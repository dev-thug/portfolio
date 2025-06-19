"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import IconContainer from "../ui/IconContainer";
import SkillTag from "../ui/SkillTag";

interface ExpertiseCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  skills: string[];
  color: string;
  index: number;
}

export default function ExpertiseCard({
  icon,
  title,
  subtitle,
  skills,
  color,
  index,
}: ExpertiseCardProps) {
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
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative"
    >
      <div className="h-full p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-apple rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-apple hover:shadow-apple-lg transition-all duration-500 flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-3">
          <IconContainer icon={icon} gradient={color} size="md" />
          <div className="flex flex-col gap-1">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h4>
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill) => (
            <SkillTag key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
