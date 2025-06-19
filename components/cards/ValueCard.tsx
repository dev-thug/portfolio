"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import IconContainer from "../ui/IconContainer";

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  index: number;
}

export default function ValueCard({
  icon,
  title,
  subtitle,
  description,
  gradient,
  index,
}: ValueCardProps) {
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
      className="group relative"
    >
      <div className="h-full p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-apple rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-apple hover:shadow-apple-lg transition-all duration-500 flex flex-col gap-4">
        <IconContainer icon={icon} gradient={gradient} />
        <div className="flex flex-col gap-2">
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h4>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase">
            {subtitle}
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
