"use client"

import * as React from "react"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Software Developer (Independent)",
    company: "Freelance",
    period: "2023 - Present",
    achievements: [
      "Developing full-stack applications using Next.js, TypeScript, and various AI integrations.",
      "Building practical solutions for small businesses to help them grow online.",
      "Exploring and implementing agentic AI systems and LLM-based tools.",
    ],
  },
  {
    title: "B.Sc. Undergraduate (200 Level)",
    company: "University of Lagos (UNILAG)",
    period: "2023 - Present",
    achievements: [
      "Focusing on core computer science principles and software engineering.",
      "Active participant in tech communities and presenting technical ideas to peers.",
      "Consistently learning emerging technologies and AI research.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-12"
          >
            <div className="h-1 w-12 bg-black dark:bg-white" />
            <h2 className="text-3xl font-bold tracking-tight">Experience & Education</h2>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-[2px] before:bg-zinc-100 dark:before:bg-zinc-800"
              >
                <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-black dark:bg-white" />
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-500">
                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                      {exp.company}
                    </span>
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-zinc-600 dark:text-zinc-400 leading-relaxed"
                    >
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
