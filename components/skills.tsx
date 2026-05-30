"use client"

import * as React from "react"
import { useState } from "react"
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
    color: "from-blue-500 to-blue-600",
    glowColor: "rgba(59, 130, 246, 0.2)",
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
    color: "from-green-500 to-green-600",
    glowColor: "rgba(34, 197, 94, 0.2)",
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
    color: "from-amber-500 to-amber-600",
    glowColor: "rgba(217, 119, 6, 0.2)",
    skills: [
      { name: "PostgreSQL", icon: Database, level: 82 },
      { name: "Prisma", icon: Cylinder, level: 80 },
      { name: "Supabase", icon: Plug, level: 78 },
      { name: "MongoDB", icon: Database, level: 74 },
    ],
  },
  {
    name: "DevOps & Tools",
    color: "from-violet-500 to-violet-600",
    glowColor: "rgba(139, 92, 246, 0.2)",
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
    color: "from-pink-500 to-pink-600",
    glowColor: "rgba(236, 72, 153, 0.2)",
    skills: [
      { name: "Vercel AI SDK", icon: Sparkles, level: 82 },
      { name: "LangChain.js", icon: Link2, level: 84 },
      { name: "OpenAI/Anthropic", icon: Brain, level: 88 },
      { name: "Prompt Engineering", icon: Zap, level: 90 },
    ],
  },
]

function SkillCard({ skill, categoryColor, glowColor }: { skill: any; categoryColor: string; glowColor: string }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotX = (y - centerY) / 20
    const rotY = -(x - centerX) / 20

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
      whileHover={{ y: -5 }}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="group relative glass rounded-lg p-3 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at top right, ${glowColor}, transparent)`,
        }}
      />

      {/* Shimmer effect */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["−100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <skill.icon className="h-5 w-5 text-zinc-600 dark:text-zinc-300" />
          <span className="font-body text-sm font-medium">{skill.name}</span>
        </div>
        <div className="mt-2 h-1.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-700">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`h-1.5 rounded-full bg-gradient-to-r ${categoryColor}`}
          />
        </div>
      </div>
    </motion.div>
  )
}

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
          <h2 className="type-section">Tech Stack</h2>
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
              <h3 className="type-mono">{category.name}</h3>
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    categoryColor={category.color}
                    glowColor={category.glowColor}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
