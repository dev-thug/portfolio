"use client";

import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

interface BaseCardProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
  index?: number;
  delay?: number;
  padding?: string | number;
  margin?: string | number;
  gap?: string | number;
  hoverEffect?: boolean;
  backdropBlur?: boolean;
  customStyle?: CSSProperties;
  onClick?: () => void;
}

export default function BaseCard({
  children,
  className = "",
  gradient,
  index = 0,
  delay = 0.1,
  padding = "32px",
  margin = "0",
  gap = "16px",
  hoverEffect = true,
  backdropBlur = true,
  customStyle = {},
  onClick,
}: BaseCardProps) {
  const baseStyle: CSSProperties = {
    padding: typeof padding === "number" ? `${padding}px` : padding,
    margin: typeof margin === "number" ? `${margin}px` : margin,
    gap: typeof gap === "number" ? `${gap}px` : gap,
    ...customStyle,
  };

  const cardClasses = `
    group relative h-full
    ${
      backdropBlur
        ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-apple"
        : "bg-white dark:bg-gray-900"
    }
    rounded-3xl border border-gray-200/50 dark:border-gray-700/50
    shadow-apple hover:shadow-apple-lg
    transition-all duration-500
    flex flex-col
    ${className}
  `.trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: index * delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
      className={cardClasses}
      whileHover={hoverEffect ? { y: -8, scale: 1.02 } : {}}
      style={baseStyle}
      onClick={onClick}
    >
      {children}

      {/* Gradient Overlay */}
      {gradient && (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
        />
      )}

      {/* Default Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-gray-800/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
