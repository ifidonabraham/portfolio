"use client"

import { motion } from "framer-motion"

export function OpportunityBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-sm font-medium text-white"
    >
      <div className="relative flex items-center gap-2">
        <motion.div
          className="w-2 h-2 rounded-full bg-emerald-400"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-emerald-400"
          animate={{ scale: [1, 2], opacity: [1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      <span>Open to opportunities</span>
    </motion.div>
  )
}
