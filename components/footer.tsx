"use client"

import * as React from "react"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-200 py-12 dark:border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <p className="text-sm text-zinc-500">
              © {currentYear} Ifidon Abraham Ayomide. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/ifidonabraham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-black dark:hover:text-white"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/iifidonabraham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-black dark:hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/don_atyaserve"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-black dark:hover:text-white"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
