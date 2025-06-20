"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

interface CallToActionCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function CallToActionCard({
  title,
  description,
  buttonText,
  buttonHref,
}: CallToActionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div
        className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl border border-blue-100 dark:border-blue-800"
        style={{
          padding: "48px",
        }}
      >
        <h3
          className="font-bold text-gray-900 dark:text-white"
          style={{
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
            marginBottom: "24px",
          }}
        >
          {title}
        </h3>

        <p
          className="text-gray-600 dark:text-gray-300 mx-auto leading-relaxed"
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
            marginBottom: "32px",
          }}
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <motion.a
          href={buttonHref}
          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold shadow-apple-lg transition-all duration-500"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "16px 48px",
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
            gap: "8px",
          }}
        >
          <Mail className="w-5 h-5" />
          {buttonText}
        </motion.a>
      </div>
    </motion.div>
  );
}
