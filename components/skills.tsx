"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  Atom, 
  Braces, 
  LayoutTemplate, 
  Wind, 
  Layers, 
  Move, 
  Server, 
  Zap, 
  Gauge, 
  Hexagon, 
  Database, 
  Cylinder, 
  Plug, 
  Triangle, 
  Container, 
  Workflow, 
  Sparkles, 
  Link2, 
  Brain 
} from "lucide-react"

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "Next.js 15", icon: LayoutTemplate },
      { name: "React 19", icon: Atom },
      { name: "TypeScript", icon: Braces },
      { name: "Tailwind CSS", icon: Wind },
      { name: "shadcn/ui", icon: Layers },
      { name: "Framer Motion", icon: Move },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Server Actions", icon: Zap },
      { name: "Express.js", icon: Gauge },
      { name: "NestJS", icon: Hexagon },
    ],
  },
  {
    name: "Database & ORM",
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "Prisma", icon: Cylinder },
      { name: "Supabase", icon: Plug },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Vercel", icon: Triangle },
      { name: "Docker", icon: Container },
      { name: "GitHub Actions", icon: Workflow },
    ],
  },
  {
    name: "AI & Integrations",
    skills: [
      { name: "Vercel AI SDK", icon: Sparkles },
      { name: "LangChain.js", icon: Link2 },
      { name: "OpenAI/Anthropic", icon: Brain },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-12 justify-center"
        >
          <div className="h-1 w-12 bg-black dark:bg-white" />
          <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
        </motion.div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-lg border border-zinc-100 bg-white p-3 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
                  >
                    <skill.icon className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
