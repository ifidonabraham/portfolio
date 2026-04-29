"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, BookOpen } from "lucide-react"
import Image from "next/image"

const articles = [
  {
    title: "Prompt Engineering for Reliable AI Apps",
    href: "https://ifidonabraham.substack.com/p/prompt-engineering-for-reliable-ai",
    excerpt: "Practical prompt patterns for production-grade LLM features.",
    image: "/articles/prompt-engineering/cover.png",
    date: "Apr 26, 2026",
  },
  {
    title: "Building Agentic Workflows with Modern Tooling",
    href: "https://ifidonabraham.substack.com",
    excerpt: "How to design autonomous flows while preserving control and observability.",
    date: "On Substack",
  },
  {
    title: "From Idea to Product: AI-First Full-Stack Delivery",
    href: "https://ifidonabraham.substack.com",
    excerpt: "A blueprint for shipping fast without losing quality.",
    date: "On Substack",
  },
]

export function Articles() {
  return (
    <section id="articles" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Articles</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Writing on AI, engineering, and product execution.</p>
          </div>
          <a
            href="https://ifidonabraham.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            <BookOpen className="h-4 w-4" />
            Visit Substack
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article, idx) => (
            <motion.a
              key={article.title}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass group overflow-hidden rounded-2xl"
            >
              {article.image ? (
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={`${article.title} cover`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ) : (
                <div className="h-1.5 w-full bg-gradient-to-r from-zinc-300 via-zinc-200 to-zinc-300 dark:from-zinc-700 dark:via-zinc-800 dark:to-zinc-700" />
              )}

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  {article.date}
                </p>
                <h3 className="mt-2 text-lg font-semibold group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {article.excerpt}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
