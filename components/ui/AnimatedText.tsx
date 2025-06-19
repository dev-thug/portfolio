"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
  duration = 1.0,
  y = 30,
  as: Component = "div",
}: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Component className={className}>{children}</Component>
    </motion.div>
  );
}
