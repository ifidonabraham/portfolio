"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { PROFILE_IMAGE } from "@/lib/site"

export function ProfileTilt() {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotX = (y - centerY) / 10
    const rotY = -(x - centerX) / 10

    setRotateX(rotX)
    setRotateY(rotY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-xl dark:border-zinc-800"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="h-full w-full"
      >
        <Image
          src={PROFILE_IMAGE}
          alt="Ifidon Abraham Ayomide"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </motion.div>
  )
}
