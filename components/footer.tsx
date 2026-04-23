"use client"

import * as React from "react"
import { Github, Linkedin, Twitter, BookOpen, Mail } from "lucide-react"
import { toast } from "sonner"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = React.useState("")

  return (
    <footer className="border-t border-zinc-200 py-14 dark:border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold">Ifidon Abraham Ayomide</p>
            <p className="mt-2 text-sm text-zinc-500">
              Software Developer and AI enthusiast building modern digital products.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Quick Links</p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              <a href="#about" className="hover:underline">About</a>
              <a href="#projects" className="hover:underline">Projects</a>
              <a href="#articles" className="hover:underline">Articles</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>
            <div className="mt-4 flex gap-4">
              <a href="https://github.com/ifidonabraham" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-black dark:hover:text-white" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/abraham-ifidon-4279b2402" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-black dark:hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://x.com/don_atyaservice" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-black dark:hover:text-white" aria-label="X (Twitter)">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://ifidonabraham.substack.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-black dark:hover:text-white" aria-label="Substack">
                <BookOpen className="h-5 w-5" />
              </a>
            </div>
          </div>

          <form
            className="glass rounded-2xl p-4"
            onSubmit={(event) => {
              event.preventDefault()
              if (!email) return
              toast.success("Thanks for subscribing.")
              setEmail("")
            }}
          >
            <p className="text-sm font-semibold">Newsletter</p>
            <p className="mt-1 text-xs text-zinc-500">Get occasional updates on new builds and articles.</p>
            <div className="mt-3 flex gap-2">
              <label className="sr-only" htmlFor="newsletter-email">Email</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
              />
              <button type="submit" className="rounded-lg bg-zinc-900 px-3 py-2 text-white dark:bg-zinc-100 dark:text-zinc-900">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800">
          <p>
            © {currentYear} Ifidon Abraham Ayomide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
