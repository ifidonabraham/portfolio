"use client"

import * as React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle2, Briefcase, BookOpen, Presentation } from "lucide-react"

const experiences = [
  {
    title: "Software Developer (Independent)",
    company: "Self-Taught Full-Stack Developer",
    period: "2023 - Present",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
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
    icon: BookOpen,
    color: "from-violet-500 to-purple-500",
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
    icon: Presentation,
    color: "from-pink-500 to-rose-500",
    achievements: [
      "Skilled presenter with the ability to explain complex technical topics clearly.",
      "Proficient with Microsoft PowerPoint, Excel, and Notion for communication and project organization.",
    ],
  },
]

export function Experience() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto" ref={containerRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-12"
          >
            <div className="h-1 w-12 bg-black dark:bg-white" />
            <h2 className="type-section">Experience & Education</h2>
          </motion.div>

          <div className="relative space-y-8">
            {/* Animated gradient timeline line */}
            <motion.div
              className="absolute left-[27px] top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 via-blue-500 to-cyan-500"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ originY: 0 }}
            />

            {experiences.map((exp, idx) => {
              const Icon = exp.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="glass relative rounded-2xl p-6 pl-24"
                >
                  {/* Glowing node badge */}
                  <motion.div
                    className={`absolute left-0 top-6 p-2 rounded-full bg-gradient-to-br ${exp.color} text-white shadow-lg`}
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.15 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  {/* Glow effect around icon */}
                  <motion.div
                    className={`absolute left-0 top-6 p-2 rounded-full bg-gradient-to-br ${exp.color}`}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                  />

                  <div className="mb-4">
                    <h3 className="type-project-title text-xl">{exp.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="type-body text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {exp.company}
                      </span>
                      <motion.span
                        className={`type-mono text-xs px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {exp.period}
                      </motion.span>
                    </div>
                  </div>

                  <motion.ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="type-body flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 + i * 0.05 }}
                      >
                        <CheckCircle2 className={`h-4 w-4 mt-1 flex-shrink-0 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent dark:text-white`} />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
