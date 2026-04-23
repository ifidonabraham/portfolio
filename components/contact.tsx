"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, Phone, BookOpen } from "lucide-react"
import { toast } from "sonner"

const contactLinks = [
  { name: "Email", icon: Mail, href: "mailto:ifidonabraham249@gmail.com", value: "ifidonabraham249@gmail.com" },
  { name: "Phone", icon: Phone, href: "tel:+2347045723013", value: "+234 704 572 3013" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/abraham-ifidon-4279b2402", value: "abraham-ifidon-4279b2402" },
  { name: "X (Twitter)", icon: Twitter, href: "https://x.com/don_atyaservice", value: "@don_atyaservice" },
  { name: "GitHub", icon: Github, href: "https://github.com/ifidonabraham", value: "ifidonabraham" },
  { name: "Substack", icon: BookOpen, href: "https://ifidonabraham.substack.com", value: "ifidonabraham.substack.com" },
]

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitting, setSubmitting] = React.useState(false)

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all form fields.")
      return
    }

    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
    toast.success("Message sent. I will respond as soon as possible.")
  }

  return (
    <section id="contact" className="section-padding bg-zinc-50/70 dark:bg-zinc-900/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-12 justify-center text-center"
          >
            <div className="h-1 w-12 bg-black dark:bg-white" />
            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <h3 className="mb-5 text-xl font-semibold">Send a message</h3>
              <div className="space-y-4">
                <label className="block text-sm font-medium">
                  Name
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-900"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm font-medium">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-900"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block text-sm font-medium">
                  Message
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={onChange}
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-900"
                    placeholder="Tell me about your project..."
                  />
                </label>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </motion.form>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" && link.name !== "Phone" ? "_blank" : undefined}
                  rel={link.name !== "Email" && link.name !== "Phone" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -3 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="glass flex flex-col items-center justify-center rounded-2xl p-6 text-center shadow-sm hover:shadow-lg"
                >
                  <div className="mb-3 rounded-full bg-zinc-100 p-3 dark:bg-zinc-900">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1 font-bold">{link.name}</h3>
                  <p className="text-xs text-zinc-500">{link.value}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
