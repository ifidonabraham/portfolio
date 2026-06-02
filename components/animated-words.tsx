"use client"

import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const wordVariant = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
}

export function AnimatedWords({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
    >
      {text.split(" ").map((word, i) => (
        <motion.span key={i} variants={wordVariant} className="inline-block mr-[0.28em] last:mr-0">
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
