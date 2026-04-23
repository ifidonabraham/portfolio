"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
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
    title: "AI-Powered Web Applications",
    subtitle: "Practical AI Features & Agentic Systems",
    description: "Developing intelligent web applications that integrate modern AI capabilities for practical use cases and better user workflows.",
    tech: ["LangChain.js", "Vercel AI SDK", "OpenAI APIs", "Anthropic APIs", "Next.js"],
    liveUrl: "",
    githubUrl: "",
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
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
        </motion.div>

        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                item === filter
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "glass hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4, rotateX: 1, rotateY: -1 }}
              className="group glass overflow-hidden rounded-2xl shadow-sm transition-all hover:shadow-xl"
            >
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
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{project.subtitle}</p>
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

                <span className="mb-3 inline-flex rounded-full bg-zinc-200 px-3 py-1 text-xs font-semibold dark:bg-zinc-800">
                  {project.category}
                </span>
                <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium dark:bg-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="rounded-xl bg-zinc-50 p-6 dark:bg-zinc-900/50">
                   <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-zinc-500">
                     What I learned
                   </h4>
                   <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                     {project.learnings}
                   </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
