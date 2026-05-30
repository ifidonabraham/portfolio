"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { SpaceModelBackground } from "@/components/space-model-loader"
import { HeroRings } from "@/components/hero-rings"
import { ParticleField } from "@/components/particle-field"
import { OpportunityBadge } from "@/components/opportunity-badge"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { ProfileTilt } from "@/components/profile-tilt"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#02040a] pt-20">
      <SpaceModelBackground />
      <ParticleField />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center relative"
          style={{ perspective: "1000px" }}
        >
          <HeroRings />
          <ProfileTilt />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="type-hero mb-4 gradient-text"
        >
          Ifidon Abraham Ayomide
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="type-hero-subtitle mb-6 text-zinc-300"
        >
          Software Developer & AI Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-8 flex justify-center"
        >
          <OpportunityBadge />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mb-8 max-w-2xl"
        >
          <span className="type-accent-line inline-block overflow-hidden whitespace-nowrap border-r-2 border-zinc-400 pr-2 align-bottom text-zinc-200 [animation:typing_3s_steps(55,end),blink_1s_step-end_infinite]">
            AI scientist and engineer: agents, stack, and shipped products.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#projects"
            className="group flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 font-body text-sm font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-zinc-200"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="/resume.pdf"
            download
            className="glass flex h-12 items-center justify-center gap-2 rounded-full px-8 font-body text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
          >
            Download Resume
            <Download className="h-4 w-4" />
          </a>
        </motion.div>

        <ScrollIndicator />
      </div>
    </section>
  )
}
