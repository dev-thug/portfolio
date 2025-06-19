"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ScrollIndicatorProps {
  targetId: string;
  delay?: number;
}

export default function ScrollIndicator({
  targetId,
  delay = 1.2,
}: ScrollIndicatorProps) {
  const scrollToTarget = () => {
    const targetSection = document.getElementById(targetId);
    targetSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0, delay }}
      className="flex justify-center"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center space-y-2 cursor-pointer group"
        onClick={scrollToTarget}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-400 to-transparent dark:via-gray-600" />
        <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300" />
      </motion.div>
    </motion.div>
  );
}
