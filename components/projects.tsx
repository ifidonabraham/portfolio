"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedWords } from "@/components/animated-words"

const projects = [
  {
    title: "FonTech",
    subtitle: "Digital Solutions Agency",
    description:
      "Built a full-service digital agency platform offering web and mobile development, e-commerce, AI chatbots, UI/UX design, SEO, and security audits across 12+ industries — from startups to enterprises. Operates as the software production arm of Fonia Labs.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://fontech-site.vercel.app",
    githubUrl: "https://github.com/ifidonabraham/fontech-site",
    slug: "fontech",
    category: "Full-Stack",
    learnings:
      "Learned how to design and position a multi-service agency brand that communicates value across different industries. Building a credible agency site required balancing strong copywriting, clear service architecture, and performance-first development.",
  },
  {
    title: "Fonia Labs",
    subtitle: "Global Innovation Group & Startup Factory",
    description:
      "Designed and built the central hub for Fonia Labs — a global innovation group that builds companies, platforms, and products solving real-world problems. The site presents the full ecosystem of ventures from ideation through growth across health, real estate, logistics, and intelligence.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://fonialabs.vercel.app",
    githubUrl: "https://github.com/ifidonabraham/fonia-labs",
    slug: "fonia-labs",
    category: "Full-Stack",
    learnings:
      "Learned how to architect a multi-brand ecosystem presentation that communicates a startup factory model clearly. Structuring multiple ventures under one coherent narrative required strong information hierarchy and thoughtful UX decisions.",
  },
  {
    title: "OmegaEstate",
    subtitle: "Full-Stack Real Estate Platform",
    description:
      "Built a modern real estate web application allowing users to browse property listings, message agents, and manage listings end to end. Designed for clarity and speed with responsive UI and smooth navigation across all device sizes.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    liveUrl: "https://omegaestate.homes",
    githubUrl: "https://github.com/ifidonabraham/realestatewebsite",
    slug: "real-estate-finder",
    category: "Full-Stack",
    learnings:
      "Handling property data at scale — listings, prices, locations, and images — requires structured data modeling and role-based auth to separate agents from clients. Search, filtering, and performance optimization were the core engineering challenges.",
  },
  {
    title: "SMaid",
    subtitle: "Campus Supermarket Queue & Delivery Platform",
    description:
      "Built a digital queue management system for UNILAG campus supermarkets. Students browse products online, transfer payment with a unique reference ID, and collect orders via QR code — eliminating wait times and transforming the campus shopping experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "QR Integration"],
    liveUrl: "https://smaid.vercel.app",
    githubUrl: "https://github.com/ifidonabraham/SMaid",
    slug: "smaid",
    category: "Full-Stack",
    learnings:
      "Designing for campus logistics required thinking carefully about the full user journey across three distinct roles: shopper, rider, and store staff. QR-based order collection and mobile-first payment flows were key technical challenges solved.",
  },
  {
    title: "ContractFeed",
    subtitle: "Real-Time Government Procurement Intelligence",
    description:
      "Built a real-time procurement intelligence platform that aggregates government contract awards from 25+ countries including the US, EU, UK, and Australia. Tracks $2T+ in contract value monthly with smart filtering, watchlists, and email alerts updated every 60 seconds.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Data Aggregation", "Real-Time APIs"],
    liveUrl: "https://contractfeed.vercel.app",
    githubUrl: "https://github.com/ifidonabraham/contractfeed",
    slug: "contractfeed",
    category: "Full-Stack",
    learnings:
      "Aggregating live government data from 25+ countries required building robust pipeline logic with fallbacks and normalisation across different formats. Designing watchlists and real-time alert systems taught me how to build intelligence products that surface signal over noise.",
  },
  {
    title: "Seek",
    subtitle: "Opportunity Discovery Platform",
    description:
      "Built Seek to help users discover, track, and act on useful opportunities across multiple domains. The platform surfaces relevant opportunities and gives users tools to organise and follow through on what matters to them.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://seek-beryl.vercel.app",
    githubUrl: "https://github.com/ifidonabraham/seek",
    slug: "seek",
    category: "Full-Stack",
    learnings:
      "Building an opportunity discovery product required thinking deeply about how people consume and act on information. The challenge was designing a system that reduces friction between spotting an opportunity and taking the first step.",
  },
  {
    title: "UnilagFoodSpots",
    subtitle: "Campus Food Discovery App",
    description:
      "Built a food discovery platform for University of Lagos students — making it easy to find food spots, canteens, and vendor options around campus quickly without guessing or asking around.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://unilagfoodspots.vercel.app",
    githubUrl: "https://github.com/ifidonabraham/unilagfoodspots",
    slug: "unilag-food-spots",
    category: "Full-Stack",
    learnings:
      "Solving a hyper-local problem at campus scale taught me how to keep a product focused and useful without overengineering. Building for a community I belong to meant I could validate fast and iterate based on real student feedback.",
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
    title: "Dokito",
    subtitle: "AI Health Support Platform",
    description:
      "Built Dokito to help users keep health records, access emergency support, ask AI-powered health questions, and find nearby care facilities.",
    tech: ["LangChain.js", "Vercel AI SDK", "Openrouter", "Anthropic APIs", "Next.js"],
    liveUrl: "https://dokito.vercel.app/",
    githubUrl: "https://github.com/ifidonabraham/dokito",
    slug: "ai-powered-web-applications",
    category: "AI",
    learnings:
      "Applied prompt engineering and orchestration patterns to build more reliable AI features. Learned how to balance model quality, latency, and cost while keeping experiences useful for real users.",
  },
  {
    title: "ComplyIQ",
    subtitle: "Compliance & Risk Intelligence Platform",
    description:
      "Built ComplyIQ to help businesses understand compliance requirements, manage risk, and meet digital responsibility standards. The platform simplifies regulatory intelligence for organisations navigating complex compliance landscapes.",
    tech: ["Python", "AI/ML", "Next.js", "TypeScript"],
    liveUrl: "",
    githubUrl: "https://github.com/ifidonabraham/complyiq",
    slug: "complyiq",
    category: "AI",
    learnings:
      "Compliance is a domain where accuracy and clarity are non-negotiable. Building ComplyIQ required structuring complex regulatory data into digestible intelligence, and learning how AI can surface relevant rules without overwhelming the end user.",
  },
  {
    title: "Deadline Dungeon",
    subtitle: "Game-Inspired Productivity Experience",
    description:
      "Built Deadline Dungeon — a game-inspired productivity tool that turns deadlines and focus sessions into a dungeon-crawling experience. Makes task completion feel rewarding by layering game mechanics over real deadline management.",
    tech: ["JavaScript", "HTML/CSS", "Game Design"],
    liveUrl: "",
    githubUrl: "https://github.com/ifidonabraham/deadline-dungeon",
    slug: "deadline-dungeon",
    category: "Full-Stack",
    learnings:
      "Combining game design principles with productivity mechanics taught me how engagement loops work and why they're effective. The biggest challenge was keeping the game layer fun without it distracting from the actual deadline management purpose.",
  },
  {
    title: "Personal Portfolio & Technical Writing",
    subtitle: "Personal Brand and Developer Content",
    description:
      "Designed and maintained a professional portfolio while publishing technical AI and software engineering content on Substack.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Substack"],
    liveUrl: "https://ifidonabraham.substack.com",
    githubUrl: "",
    slug: "portfolio-and-technical-writing",
    category: "Content",
    learnings:
      "Improved storytelling for technical audiences and strengthened consistency in public communication. Writing regularly helped clarify product thinking and system design decisions.",
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
