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
    learnings: "Building a real estate website involves handling property data like listings, prices, locations, and images in an organized way. It also requires user authentication and role management to separate agents from clients with different permissions. Another challenge is building search, filtering, and map features while ensuring good performance and fast loading."
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-12"
        >
          <div className="h-1 w-12 bg-black dark:bg-white" />
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 z-10 bg-black/5 opacity-0 transition-opacity group-hover:opacity-100" />
                {/* Placeholder for project image using a gradient */}
                <div className="h-full w-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
                   <span className="text-zinc-400 font-medium">{project.title} Preview</span>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-black dark:hover:text-white"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-black dark:hover:text-white"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

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
