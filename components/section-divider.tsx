"use client"

import { motion } from "framer-motion"

export function SectionDivider() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scaleX: 0.7 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      className="container mx-auto px-4"
    >
      <svg viewBox="0 0 1200 60" className="h-8 w-full text-zinc-300 dark:text-zinc-700">
        <motion.path
          d="M0 30 Q 150 0 300 30 T 600 30 T 900 30 T 1200 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
      </svg>
    </motion.div>
  )
}
