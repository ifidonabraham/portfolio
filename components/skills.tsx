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
  Brain,
  FileCode2,
  FileJson,
  BookOpen,
  Presentation,
  Table2
} from "lucide-react"

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "Next.js 15", icon: LayoutTemplate, level: 90 },
      { name: "React 19", icon: Atom, level: 88 },
      { name: "TypeScript", icon: Braces, level: 85 },
      { name: "Tailwind CSS", icon: Wind, level: 92 },
      { name: "shadcn/ui", icon: Layers, level: 82 },
      { name: "Framer Motion", icon: Move, level: 80 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: Server, level: 86 },
      { name: "Server Actions", icon: Zap, level: 84 },
      { name: "Express.js", icon: Gauge, level: 82 },
      { name: "NestJS", icon: Hexagon, level: 72 },
      { name: "Python", icon: FileCode2, level: 76 },
      { name: "SQL", icon: FileJson, level: 80 },
    ],
  },
  {
    name: "Database & ORM",
    skills: [
      { name: "PostgreSQL", icon: Database, level: 82 },
      { name: "Prisma", icon: Cylinder, level: 80 },
      { name: "Supabase", icon: Plug, level: 78 },
      { name: "MongoDB", icon: Database, level: 74 },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Vercel", icon: Triangle, level: 88 },
      { name: "Docker", icon: Container, level: 75 },
      { name: "GitHub Actions", icon: Workflow, level: 78 },
      { name: "Notion", icon: BookOpen, level: 90 },
      { name: "PowerPoint", icon: Presentation, level: 92 },
      { name: "Excel", icon: Table2, level: 85 },
    ],
  },
  {
    name: "AI & Integrations",
    skills: [
      { name: "Vercel AI SDK", icon: Sparkles, level: 82 },
      { name: "LangChain.js", icon: Link2, level: 84 },
      { name: "OpenAI/Anthropic", icon: Brain, level: 88 },
      { name: "Prompt Engineering", icon: Zap, level: 90 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="section-padding">
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="glass rounded-lg p-3"
                  >
                    <div className="flex items-center gap-3">
                      <skill.icon className="h-5 w-5 text-zinc-600 dark:text-zinc-300" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-700">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="h-1.5 rounded-full bg-zinc-800 dark:bg-zinc-200"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
