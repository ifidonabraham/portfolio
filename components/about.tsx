"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { GraduationCap, MapPin, User } from "lucide-react"

const infoBadges = [
  { icon: User, label: "Name", value: "Ifidon Abraham Ayomide", color: "from-blue-500 to-cyan-500" },
  { icon: GraduationCap, label: "Education", value: "B.Sc. Computer Science (Expected 2028), UNILAG", color: "from-violet-500 to-purple-500" },
  { icon: MapPin, label: "Location", value: "Lagos, Nigeria", color: "from-pink-500 to-rose-500" },
]

function InfoCard({ badge, idx }: { badge: any; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      whileHover={{ y: -4 }}
      className="group glass relative overflow-hidden rounded-2xl p-6"
    >
      {/* Floating blob decoration */}
      <motion.div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
        }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Shimmer overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <motion.div
            className={`p-3 rounded-xl bg-gradient-to-br ${badge.color} text-white shadow-lg`}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <badge.icon className="h-5 w-5" />
          </motion.div>
          <div>
            <p className="type-mono text-xs">{badge.label}</p>
            <p className="type-body mt-2 text-sm">{badge.value}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function About() {
  return (
    <section id="about" className="section-padding bg-zinc-50/60 dark:bg-zinc-900/30 relative overflow-hidden">
      {/* Floating blob decorations */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: `${300 + i * 100}px`,
            height: `${300 + i * 100}px`,
            left: `${-100 + i * 40}%`,
            top: `${i * 30}%`,
            background: i === 0
              ? "radial-gradient(circle, rgba(124, 58, 237, 0.1), transparent)"
              : i === 1
              ? "radial-gradient(circle, rgba(59, 130, 246, 0.08), transparent)"
              : "radial-gradient(circle, rgba(6, 182, 212, 0.08), transparent)",
            opacity: 0.5,
          }}
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-12"
          >
            <div className="h-1 w-12 bg-black dark:bg-white" />
            <h2 className="type-section">About Me</h2>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-6"
            >
              {[
                "Ifidon Abraham is a passionate Software Developer and 200-level student at the University of Lagos (UNILAG). With a deep fascination for Artificial Intelligence and its growing impact across every industry, he is particularly drawn to the science behind AI and how it continues to expand human knowledge and capabilities.",
                "His journey into tech began with YouTube tutorials and has since evolved into a strong focus on AI-driven development. Currently, AI remains his biggest motivation. He enjoys building intelligent systems and is especially interested in creating practical solutions that leverage AI to solve real-world problems.",
                "Ifidon aspires to work with forward-thinking companies and startups in the AI space, while also helping small businesses grow through well-designed, modern websites. Known among peers as an excellent presenter, he is comfortable communicating technical ideas clearly and confidently.",
              ].map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  className="type-body-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {infoBadges.map((badge, idx) => (
                <InfoCard key={badge.label} badge={badge} idx={idx} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
