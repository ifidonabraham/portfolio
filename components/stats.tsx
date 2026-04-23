"use client"

import { motion } from "framer-motion"

const stats = [
  { label: "Projects Built", value: 12, suffix: "+" },
  { label: "Years Learning", value: 3, suffix: "+" },
  { label: "Tech Articles", value: 10, suffix: "+" },
  { label: "AI Experiments", value: 25, suffix: "+" },
]

export function Stats() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <p className="text-4xl font-bold">
                {item.value}
                {item.suffix}
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
