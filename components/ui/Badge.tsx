"use client";

import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

type BadgeVariant = "default" | "tech" | "skill" | "category";
type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  gradient?: string;
  index?: number;
  delay?: number;
  className?: string;
  customStyle?: CSSProperties;
  onClick?: () => void;
  animated?: boolean;
}

export default function Badge({
  children,
  icon,
  variant = "default",
  size = "md",
  gradient,
  index = 0,
  delay = 0.1,
  className = "",
  customStyle = {},
  onClick,
  animated = true,
}: BadgeProps) {
  const sizeStyles = {
    sm: {
      padding: "4px 12px",
      fontSize: "0.75rem",
      lineHeight: "1rem",
      gap: "6px",
      iconSize: "16px",
    },
    md: {
      padding: "8px 16px",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      gap: "8px",
      iconSize: "20px",
    },
    lg: {
      padding: "12px 24px",
      fontSize: "1rem",
      lineHeight: "1.5rem",
      gap: "12px",
      iconSize: "24px",
    },
  };

  const variantStyles = {
    default:
      "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700",
    tech: "bg-white/80 dark:bg-gray-900/80 backdrop-blur-apple border border-gray-200/50 dark:border-gray-700/50 shadow-apple hover:shadow-apple-lg",
    skill:
      "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700",
    category:
      "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800",
  };

  const currentSize = sizeStyles[size];
  const currentVariant = variantStyles[variant];

  const badgeStyle: CSSProperties = {
    padding: currentSize.padding,
    fontSize: currentSize.fontSize,
    lineHeight: currentSize.lineHeight,
    gap: icon ? currentSize.gap : "0",
    ...customStyle,
  };

  const badgeContent = (
    <div
      className={`inline-flex items-center rounded-full font-medium transition-all duration-500 cursor-pointer ${currentVariant} ${className}`}
      style={badgeStyle}
      onClick={onClick}
    >
      {icon && (
        <div
          className={`inline-flex items-center justify-center rounded-full text-white ${
            gradient ? `bg-gradient-to-r ${gradient}` : "bg-blue-500"
          } group-hover:scale-110 transition-transform duration-300`}
          style={{
            width: currentSize.iconSize,
            height: currentSize.iconSize,
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
      )}
      <span className="font-medium">{children}</span>
    </div>
  );

  if (!animated) {
    return <div className="group">{badgeContent}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: delay + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group"
      whileHover={{ scale: 1.05, y: -2 }}
    >
      {badgeContent}
    </motion.div>
  );
}
