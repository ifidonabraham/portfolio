"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedWords } from "@/components/animated-words"

const projects = [
  {
    title: "Real Estate Finder",
    subtitle: "Full-Stack Real Estate Platform",
    description: "Built a modern web application that allows users to browse property listings, message agents, and manage real estate listings. Developed responsive and user-friendly interface with clean design and smooth navigation.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    liveUrl: "https://omegaestate.homes",
    githubUrl: "https://github.com/ifidonabraham/realestatewebsite",
    slug: "real-estate-finder",
    category: "Full-Stack",
    learnings: "Building a real estate website involves handling property data like listings, prices, locations, and images in an organized way. It also requires user authentication and role management to separate agents from clients with different permissions. Another challenge is building search, filtering, and map features while ensuring good performance and fast loading.",
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

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const [spotlight, setSpotlight] = React.useState({ x: 0, y: 0, visible: false })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true })
  }

  const handleMouseLeave = () => setSpotlight((prev) => ({ ...prev, visible: false }))

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -4, rotateX: 1, rotateY: -1 }}
      className="group glass relative overflow-hidden rounded-2xl shadow-sm transition-all hover:shadow-xl"
    >
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: spotlight.visible ? 1 : 0,
          background: `radial-gradient(280px circle at ${spotlight.x}px ${spotlight.y}px, rgba(255,255,255,0.07), transparent 70%)`,
        }}
      />

      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/5 opacity-0 transition-opacity group-hover:opacity-100" />
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
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-1 text-zinc-500 hover:bg-zinc-200/60 hover:text-black dark:hover:bg-zinc-800 dark:hover:text-white"
                aria-label={`${project.title} GitHub`}
              >
                <Github className="h-5 w-5" />
              </a>
            ) : null}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-1 text-zinc-500 hover:bg-zinc-200/60 hover:text-black dark:hover:bg-zinc-800 dark:hover:text-white"
                aria-label={`${project.title} Live demo`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            ) : null}
          </div>
        </div>

        <span className="type-mono mb-3 inline-flex rounded-full bg-zinc-200 px-3 py-1 dark:bg-zinc-800">
          {project.category}
        </span>
        <p className="type-body mb-6">{project.description}</p>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="type-mono rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
              {t}
            </span>
          ))}
        </div>

        <div className="rounded-xl bg-zinc-50 p-6 dark:bg-zinc-900/50">
          <h4 className="type-mono mb-2">What I learned</h4>
          <p className="type-body text-sm">{project.learnings}</p>
        </div>
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
        <div className="mb-8 flex items-center gap-3">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-1 w-12 bg-black dark:bg-white origin-left"
          />
          <h2 className="type-section">
            <AnimatedWords text="Featured Projects" />
          </h2>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                "type-mono rounded-full px-4 py-2 transition",
                item === filter
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "glass hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60"
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {visibleProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
