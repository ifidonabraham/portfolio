"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { GraduationCap, MapPin, User } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="h-1 w-12 bg-black dark:bg-white" />
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-6"
            >
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Ifidon Abraham is a passionate Software Developer and 200-level student at the University of Lagos (UNILAG). With a deep fascination for Artificial Intelligence and its growing impact across every industry, he is particularly drawn to the science behind AI and how it continues to expand human knowledge and capabilities.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                His journey into tech began with YouTube tutorials and has since evolved into a strong focus on AI-driven development. Currently, AI remains his biggest motivation. He enjoys building intelligent systems and is especially interested in creating practical solutions that leverage AI to solve real-world problems.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Ifidon aspires to work with forward-thinking companies and startups in the AI space, while also helping small businesses grow through well-designed, modern websites. Known among peers as an excellent presenter, he is comfortable communicating technical ideas clearly and confidently.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-zinc-100 dark:bg-zinc-800 dark:border-zinc-700">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Name</p>
                  <p className="text-sm text-zinc-500">Ifidon Abraham Ayomide</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-zinc-100 dark:bg-zinc-800 dark:border-zinc-700">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Education</p>
                  <p className="text-sm text-zinc-500">B.Sc. In Progress (200L), UNILAG</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-zinc-100 dark:bg-zinc-800 dark:border-zinc-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Location</p>
                  <p className="text-sm text-zinc-500">Lagos, Nigeria</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
