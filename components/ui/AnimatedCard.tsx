"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  index?: number;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  hover?: boolean;
  hoverScale?: number;
  hoverY?: number;
}

export default function AnimatedCard({
  children,
  className = "",
  index = 0,
  delay = 0,
  direction = "up",
  hover = true,
  hoverScale = 1.02,
  hoverY = -8,
}: AnimatedCardProps) {
  const getInitialAnimation = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -50 };
      case "right":
        return { opacity: 0, x: 50 };
      case "scale":
        return { opacity: 0, scale: 0.8 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  const getWhileInViewAnimation = () => {
    switch (direction) {
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "scale":
        return { opacity: 1, scale: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  const hoverAnimation = hover ? { y: hoverY, scale: hoverScale } : {};

  return (
    <motion.div
      initial={getInitialAnimation()}
      whileInView={getWhileInViewAnimation()}
      transition={{
        duration: 0.8,
        delay: delay + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
      whileHover={hoverAnimation}
      className={`group ${className}`}
    >
      {children}
    </motion.div>
  );
}
