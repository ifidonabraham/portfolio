"use client"

import * as React from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/70 backdrop-blur-md border-b border-zinc-200 py-3 dark:bg-zinc-950/70 dark:border-zinc-800"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Ifidon<span className="text-zinc-500">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-zinc-600 hover:text-black transition-colors dark:text-zinc-400 dark:hover:text-white"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          {/* Mobile menu could be added here with shadcn Sheet */}
        </div>
      </div>
    </motion.header>
  )
}
