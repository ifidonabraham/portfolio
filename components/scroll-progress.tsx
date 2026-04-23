"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 dark:from-zinc-100 dark:via-zinc-400 dark:to-zinc-100"
      style={{ scaleX }}
    />
  )
}
