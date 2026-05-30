"use client"

import { motion } from "framer-motion"

export function HeroRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Outer ring - counter-rotating */}
      <motion.div
        className="absolute"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "conic-gradient(from 0deg, #7c3aed, #3b82f6, #06b6d4, #7c3aed)",
          opacity: 0.3,
        }}
      />

      {/* Inner ring - rotating opposite direction */}
      <motion.div
        className="absolute"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "conic-gradient(from 180deg, #06b6d4, #3b82f6, #7c3aed, #06b6d4)",
          opacity: 0.2,
        }}
      />

      {/* Pulse rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: `${140 + i * 50}px`,
            height: `${140 + i * 50}px`,
            borderColor: `rgba(124, 58, 237, ${0.3 - i * 0.08})`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
