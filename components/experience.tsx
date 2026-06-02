"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { AnimatedWords } from "@/components/animated-words"

const experiences = [
  {
    title: "Software Developer (Independent)",
    company: "Self-Taught Full-Stack Developer",
    period: "2023 - Present",
    achievements: [
      "Independently learned modern web development, Python, and AI integration through consistent project building.",
      "Progressed from YouTube tutorials to deploying production-ready applications using current industry tools.",
      "Building practical solutions for small businesses and AI-driven products.",
    ],
  },
  {
    title: "B.Sc. Computer Science (In Progress)",
    company: "University of Lagos (UNILAG)",
    period: "Expected Graduation: 2028",
    achievements: [
      "Current level: 200 Level.",
      "Focusing on core computer science principles and software engineering.",
      "Active participant in tech communities and presenting technical ideas to peers.",
      "Consistently learning emerging technologies and applied AI research.",
    ],
  },
  {
    title: "Technical Presenter",
    company: "Community & Academic Events",
    period: "2024 - Present",
    achievements: [
      "Skilled presenter with the ability to explain complex technical topics clearly.",
      "Proficient with Microsoft PowerPoint, Excel, and Notion for communication and project organization.",
    ],
  },
]

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const listItem = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
}

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-1 w-12 bg-black dark:bg-white origin-left"
            />
            <h2 className="type-section">
              <AnimatedWords text="Experience & Education" />
            </h2>
          </div>

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass relative rounded-2xl p-6 pl-8 before:absolute before:left-4 before:top-8 before:h-[calc(100%-2rem)] before:w-[2px] before:bg-zinc-200 dark:before:bg-zinc-700"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.2, type: "spring", stiffness: 300 }}
                  className="absolute left-[11px] top-8 h-3 w-3 rounded-full bg-black dark:bg-white"
                />
                <div className="mb-4">
                  <h3 className="type-project-title text-xl">{exp.title}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="type-body text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {exp.company}
                    </span>
                    <span className="type-mono">{exp.period}</span>
                  </div>
                </div>
                <motion.ul
                  variants={listContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {exp.achievements.map((achievement, i) => (
                    <motion.li key={i} variants={listItem} className="type-body">
                      • {achievement}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
