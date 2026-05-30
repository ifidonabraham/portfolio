"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { PROFILE_IMAGE } from "@/lib/site"
import { SpaceModelBackground } from "@/components/space-model-background"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#02040a] pt-20 dark:bg-[#02040a]">
      <SpaceModelBackground />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-xl dark:border-zinc-800">
            <Image
              src={PROFILE_IMAGE}
              alt="Ifidon Abraham Ayomide"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="type-hero mb-4 text-white"
        >
          Ifidon Abraham Ayomide
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="type-hero-subtitle mb-4 text-zinc-300"
        >
          Software Developer & AI Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mb-8 max-w-2xl"
        >
          <span className="type-accent-line inline-block overflow-hidden whitespace-nowrap border-r-2 border-zinc-400 pr-2 align-bottom text-zinc-200 [animation:typing_3s_steps(55,end),blink_1s_step-end_infinite]">
            AI scientist and engineer: agents, stack, and shipped products.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
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
      </div>
    </section>
  )
}
