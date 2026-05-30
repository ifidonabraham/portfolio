"use client"

import { motion } from "framer-motion"
import React from "react"

const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  type: ["dot", "ring", "cross"][i % 3],
  duration: 15 + Math.random() * 10,
  delay: Math.random() * 5,
  x: Math.random() * 200 - 100,
  y: Math.random() * 200 - 100,
}))

export function ParticleField() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 0.3,
          }}
          animate={{
            x: particle.x + (Math.random() - 0.5) * 100,
            y: particle.y + (Math.random() - 0.5) * 100,
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {particle.type === "dot" && (
            <div className="w-1 h-1 rounded-full bg-violet-400" />
          )}
          {particle.type === "ring" && (
            <div className="w-2 h-2 rounded-full border border-blue-400" />
          )}
          {particle.type === "cross" && (
            <div className="relative w-2 h-2">
              <div className="absolute inset-0 flex items-center justify-center text-cyan-400">
                ✕
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
