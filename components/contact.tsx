"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, Phone, BookOpen } from "lucide-react"

const contactLinks = [
  { name: "Email", icon: Mail, href: "mailto:ifidonabraham249@gmail.com", value: "ifidonabraham249@gmail.com" },
  { name: "Phone", icon: Phone, href: "tel:+2347045723013", value: "+234 704 572 3013" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/iifidonabraham", value: "iifidonabraham" },
  { name: "X (Twitter)", icon: Twitter, href: "https://x.com/don_atyaserve", value: "@don_atyaserve" },
  { name: "GitHub", icon: Github, href: "https://github.com/ifidonabraham", value: "ifidonabraham" },
  { name: "Substack", icon: BookOpen, href: "https://ifidonabraham.substack.com", value: "ifidonabraham.substack.com" },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-12 justify-center text-center"
          >
            <div className="h-1 w-12 bg-black dark:bg-white" />
            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contactLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" && link.name !== "Phone" ? "_blank" : undefined}
                rel={link.name !== "Email" && link.name !== "Phone" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="mb-4 rounded-full bg-zinc-100 p-4 dark:bg-zinc-900">
                  <link.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-bold">{link.name}</h3>
                <p className="text-sm text-zinc-500">{link.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
