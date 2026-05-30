"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "StormBridge AI",
    subtitle: "Operational Weather Intelligence Platform",
    description:
      "Built a full-stack platform for fast weather risk checks, AI-generated safety guidance, community hazard reports, responder coordination, and offline-ready alert cards. A multi-agent chain analyzes locations, escalates high-priority signals, and keeps the latest plan available when connectivity drops.",
    tech: ["Next.js", "TypeScript", "Supabase", "NVIDIA AI", "Tailwind CSS", "Open-Meteo"],
    liveUrl: "https://stormbrigde.vercel.app/",
    githubUrl: "https://github.com/ifidonabraham/stormbridge",
    slug: "stormbridge",
    category: "AI",
    learnings:
      "Designed an end-to-end agent pipeline with structured JSON outputs and deterministic fallbacks so the product stays reliable when providers fail. Learned how to connect live weather data, field reports, responder workflows, and offline storage into one operational dashboard.",
  },
  {
    title: "SystemGuardian",
    subtitle: "Multi-Agent Windows Resource Protection",
    description:
      "Built a .NET desktop system that monitors CPU, RAM, GPU, and disk usage in real time, forecasts load 30 seconds ahead, and applies graduated actions (throttle, suspend, graceful close, force kill) only after a multi-step safety gate. Includes process-tree awareness, foreground-app protection, SQLite audit logging, and nightly model retraining from user feedback.",
    tech: ["C#", ".NET 8", "ML.NET", "WPF", "SQLite", "Multi-Agent"],
    liveUrl: "",
    githubUrl: "https://github.com/ifidonabraham/SystemGuardian",
    slug: "system-guardian",
    category: "AI",
    learnings:
      "Learned how to coordinate specialized agents (monitoring, forecasting, ranking, execution, whitelist guard, logging, UI, feedback) under a master orchestrator with tiered thresholds. Balancing aggressive resource recovery with user safety required careful whitelist rules and foreground-process protection.",
  },
  {
    title: "Real Estate Finder",
    subtitle: "Full-Stack Real Estate Platform",
    description: "Built a modern web application that allows users to browse property listings, message agents, and manage real estate listings. Developed responsive and user-friendly interface with clean design and smooth navigation.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    liveUrl: "https://realestatewebsite-omega.vercel.app",
    githubUrl: "https://github.com/ifidonabraham/realestatewebsite",
    slug: "real-estate-finder",
    category: "Full-Stack",
    learnings: "Building a real estate website involves handling property data like listings, prices, locations, and images in an organized way. It also requires user authentication and role management to separate agents from clients with different permissions. Another challenge is building search, filtering, and map features while ensuring good performance and fast loading.",
  },
  {
    title: "AI-Powered Web Applications: Dokito",
    subtitle: "AI Health Support Platform",
    description: "Built Dokito to help users keep health records, access emergency support, ask AI-powered health questions, and find nearby care facilities.",
    tech: ["LangChain.js", "Vercel AI SDK", "Openrouter", "Anthropic APIs", "Next.js"],
    liveUrl: "https://dokito.vercel.app/",
    githubUrl: "https://github.com/ifidonabraham/dokito",
    slug: "ai-powered-web-applications",
    category: "AI",
    learnings: "Applied prompt engineering and orchestration patterns to build more reliable AI features. Learned how to balance model quality, latency, and cost while keeping experiences useful for real users.",
  },
  {
    title: "Personal Portfolio & Technical Writing",
    subtitle: "Personal Brand and Developer Content",
    description: "Designed and maintained a professional portfolio while publishing technical AI and software engineering content on Substack.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Substack"],
    liveUrl: "https://ifidonabraham.substack.com",
    githubUrl: "",
    slug: "portfolio-and-technical-writing",
    category: "Content",
    learnings: "Improved storytelling for technical audiences and strengthened consistency in public communication. Writing regularly helped clarify product thinking and system design decisions.",
  },
]

function ProjectCard({ project, idx }: { project: any; idx: number }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotX = (y - centerY) / 30
    const rotY = -(x - centerX) / 30

    setRotateX(rotX)
    setRotateY(rotY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="group glass overflow-hidden rounded-2xl shadow-sm transition-all hover:shadow-2xl"
    >
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
        <div className="absolute inset-0 z-10 bg-black/5 opacity-0 transition-opacity group-hover:opacity-100" />

        {/* Grid overlay */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(124, 58, 237, 0.05) 25%, rgba(124, 58, 237, 0.05) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, 0.05) 75%, rgba(124, 58, 237, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(124, 58, 237, 0.05) 25%, rgba(124, 58, 237, 0.05) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, 0.05) 75%, rgba(124, 58, 237, 0.05) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating orbs */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-violet-400/20 to-blue-400/20 blur-xl"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              y: [0, 20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <Image
          src={`/projects/${project.slug}/desktop.png`}
          alt={`${project.title} desktop preview`}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(event) => {
            const target = event.currentTarget
            target.style.display = "none"
            const placeholder = target.parentElement?.querySelector("[data-placeholder]")
            if (placeholder instanceof HTMLElement) placeholder.style.display = "flex"
          }}
        />
        <div
          data-placeholder
          className="h-full w-full items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 hidden"
        >
          <span className="font-medium text-zinc-500">{project.title} Preview</span>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="type-project-title">{project.title}</h3>
            <p className="type-body mt-1 text-sm">{project.subtitle}</p>
          </div>
          <div className="flex gap-4">
            {project.githubUrl ? (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-1 text-zinc-500 hover:bg-zinc-200/60 hover:text-black dark:hover:bg-zinc-800 dark:hover:text-white transition-all"
                aria-label={`${project.title} GitHub`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            ) : null}
            {project.liveUrl ? (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-1 text-zinc-500 hover:bg-zinc-200/60 hover:text-black dark:hover:bg-zinc-800 dark:hover:text-white transition-all"
                aria-label={`${project.title} Live demo`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="h-5 w-5" />
              </motion.a>
            ) : null}
          </div>
        </div>

        <span className="type-mono mb-3 inline-flex rounded-full bg-gradient-to-r from-violet-500/10 to-blue-500/10 px-3 py-1 text-violet-600 dark:text-violet-400">
          {project.category}
        </span>
        <p className="type-body mb-6">
          {project.description}
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <motion.span
              key={t}
              className="type-mono rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800"
              whileHover={{ scale: 1.05 }}
            >
              {t}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="rounded-xl bg-gradient-to-br from-violet-500/5 to-blue-500/5 p-6 border border-violet-200/20 dark:border-violet-800/20"
          whileHover={{ borderColor: "rgba(124, 58, 237, 0.4)" }}
        >
          <h4 className="type-mono mb-2">
            What I learned
          </h4>
          <p className="type-body text-sm">
            {project.learnings}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [filter, setFilter] = React.useState("All")
  const filters = ["All", ...new Set(projects.map((project) => project.category))]
  const visibleProjects = projects.filter((project) => filter === "All" || project.category === filter)

  return (
    <section id="projects" className="section-padding bg-zinc-50/70 dark:bg-zinc-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex items-center gap-2"
        >
          <div className="h-1 w-12 bg-black dark:bg-white" />
          <h2 className="type-section">Featured Projects</h2>
        </motion.div>

        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((item) => (
            <motion.button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`type-mono rounded-full px-4 py-2 transition ${
                item === filter
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "glass hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60"
              }`}
            >
              {item}
            </motion.button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {visibleProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
