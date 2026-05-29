"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Ifidon communicates technical ideas clearly and translates complex AI concepts into practical products.",
    author: "Peer Feedback",
    role: "Tech Community",
  },
  {
    quote:
      "Strong product mindset and great ownership. He keeps refining until the experience feels right.",
    author: "Project Collaborator",
    role: "Startup Builder",
  },
  {
    quote:
      "His blend of full-stack engineering and prompt engineering stands out in execution speed.",
    author: "Developer Colleague",
    role: "Software Engineer",
  },
]

export function Testimonials() {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-padding bg-zinc-50/70 dark:bg-zinc-900/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="type-section">Testimonials</h2>
          <p className="type-body mt-3">What people say about working with me.</p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="glass rounded-2xl p-8"
            >
              <Quote className="mx-auto mb-4 h-7 w-7 text-zinc-500" />
              <blockquote className="type-quote text-center">
                &ldquo;{testimonials[index].quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-center">
                <p className="font-display font-semibold tracking-tight">{testimonials[index].author}</p>
                <p className="type-mono mt-2">{testimonials[index].role}</p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
