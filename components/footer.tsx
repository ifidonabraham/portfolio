"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, BookOpen, Mail } from "lucide-react"
import { toast } from "sonner"

const socialLinks = [
  { icon: Github, href: "https://github.com/ifidonabraham", label: "GitHub", color: "from-gray-700 to-gray-900" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abraham-ifidon-4279b2402", label: "LinkedIn", color: "from-blue-600 to-blue-800" },
  { icon: Twitter, href: "https://x.com/don_atyaservice", label: "X (Twitter)", color: "from-black to-gray-800" },
  { icon: BookOpen, href: "https://ifidonabraham.substack.com", label: "Substack", color: "from-orange-500 to-orange-700" },
] as const

function SocialIcon({ link, idx }: { link: typeof socialLinks[number]; idx: number }) {
  const Icon = link.icon
  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05 }}
      className="group relative"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`p-2 rounded-lg bg-gradient-to-br ${link.color} text-white transition-all`}
        whileHover={{ boxShadow: `0 0 20px rgba(59, 130, 246, 0.4)` }}
      >
        <Icon className="h-5 w-5" />
      </motion.div>

      {/* Glow effect on hover */}
      <motion.div
        className={`absolute inset-0 rounded-lg bg-gradient-to-br ${link.color}`}
        animate={{ opacity: 0 }}
        whileHover={{ opacity: 0.2 }}
        style={{ filter: "blur(8px)" }}
      />
    </motion.a>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = React.useState("")

  return (
    <footer className="relative border-t border-zinc-200 py-14 dark:border-zinc-800 overflow-hidden">
      {/* Gradient accent line at top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ originX: 0 }}
      />

      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-display text-lg font-semibold tracking-tight">Ifidon Abraham Ayomide</p>
            <p className="type-body mt-2 text-sm">
              Software Developer and AI enthusiast building modern digital products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="type-mono">Quick Links</p>
            <div className="type-body mt-3 flex flex-wrap gap-4 text-sm">
              {[
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Articles", href: "#articles" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="hover:text-black dark:hover:text-white transition-colors"
                  whileHover={{ x: 2 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              {socialLinks.map((link, idx) => (
                <SocialIcon key={link.label} link={link} idx={idx} />
              ))}
            </div>
          </motion.div>

          <motion.form
            className="glass rounded-2xl p-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(event) => {
              event.preventDefault()
              if (!email) return
              toast.success("Thanks for subscribing.")
              setEmail("")
            }}
          >
            <p className="type-mono">Newsletter</p>
            <p className="type-body mt-1 text-xs">Get occasional updates on new builds and articles.</p>
            <div className="mt-3 flex gap-2">
              <label className="sr-only" htmlFor="newsletter-email">Email</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
              />
              <motion.button
                type="submit"
                className="rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-3 py-2 text-white dark:from-violet-500 dark:to-blue-500 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.form>
        </div>

        <motion.div
          className="type-body mt-10 border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>
            © {currentYear} Ifidon Abraham Ayomide. Built with <span className="text-red-500">♥</span> in Lagos.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
