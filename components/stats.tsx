"use client"

import { motion } from "framer-motion"

const stats = [
  {
    label: "Projects Built",
    value: 12,
    suffix: "+",
    href: "https://github.com/ifidonabraham?tab=repositories",
    external: true,
  },
  {
    label: "Years Learning",
    value: 3,
    suffix: "+",
    href: null,
    external: false,
  },
  {
    label: "Tech Articles",
    value: 10,
    suffix: "+",
    href: "https://ifidonabraham.substack.com/archive",
    external: true,
  },
  {
    label: "AI Experiments",
    value: 25,
    suffix: "+",
    href: null,
    external: false,
  },
]

function StatCard({
  item,
  index,
}: {
  item: (typeof stats)[number]
  index: number
}) {
  const inner = (
    <>
      <p className="type-stat-value">
        {item.value}
        {item.suffix}
      </p>
      <p className="type-mono mt-3">{item.label}</p>
    </>
  )

  const className = `glass block rounded-2xl p-6 text-center transition ${
    item.href
      ? "cursor-pointer hover:-translate-y-1 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-zinc-400"
      : ""
  }`

  if (item.href) {
    return (
      <motion.a
        href={item.href}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
        className={className}
        aria-label={`${item.label}: open ${item.label === "Projects Built" ? "GitHub repositories" : "Substack articles"}`}
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={className}
    >
      {inner}
    </motion.div>
  )
}

export function Stats() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <StatCard key={item.label} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
