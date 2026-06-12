"use client";
import { motion } from "framer-motion";
import { Code2, Smartphone, ShoppingCart, Globe, Zap, Bot, Shield, Paintbrush, Video, Database, Search, MessageSquare } from "lucide-react";

const categories = [
  {
    title: "Core Development",
    accent: "#D4AF37",
    items: [
      { icon: Code2, label: "Custom Web Applications" },
      { icon: Smartphone, label: "Mobile Apps — iOS & Android" },
      { icon: ShoppingCart, label: "E-Commerce Platforms" },
      { icon: Globe, label: "Portfolio & Business Websites" },
      { icon: Globe, label: "Responsive, Reliable Websites" },
    ],
  },
  {
    title: "Integrations & Advanced",
    accent: "#FFD700",
    items: [
      { icon: MessageSquare, label: "SMS, Email, Social, Cloud, Payments" },
      { icon: Bot, label: "AI Chatbots & API Development" },
      { icon: Search, label: "SEO & Multilingual Support" },
      { icon: Zap, label: "Real-time Notifications & DB Mgmt" },
      { icon: Shield, label: "Security — Audits, Pen-Testing, Encryption" },
    ],
  },
  {
    title: "Digital Content",
    accent: "#C9A84C",
    items: [
      { icon: Video, label: "AI-Generated Video & Graphic Design" },
      { icon: Paintbrush, label: "Full Branding — Logos & Flyers" },
      { icon: Globe, label: "Social & Marketing Materials" },
    ],
  },
  {
    title: "Expertise",
    accent: "#B8860B",
    items: [
      { icon: Code2, label: "Software, Web & Mobile Development" },
      { icon: Database, label: "Database Administration & Security" },
      { icon: Bot, label: "UI/UX & AI Specialisation" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section id="services" className="section-padding bg-black relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(212,175,55,0.03)] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.5em] text-[#D4AF37] uppercase mb-4">What We Offer</p>
          <h2
            className="text-5xl md:text-7xl font-black mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our <span className="gold-text">Services</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            End-to-end digital solutions — from idea to launch to growth. Everything your business needs to thrive online.
          </p>
          <div className="mt-8 w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="glass-card rounded-2xl p-8 group hover:border-[rgba(212,175,55,0.4)] transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at 20% 20%, ${cat.accent}10 0%, transparent 60%)` }}
              />

              {/* Accent line */}
              <div
                className="w-10 h-0.5 mb-5 rounded-full"
                style={{ background: `linear-gradient(to right, ${cat.accent}, transparent)` }}
              />

              <h3
                className="text-xl font-bold mb-5 uppercase tracking-widest"
                style={{ color: cat.accent }}
              >
                {cat.title}
              </h3>

              <ul className="space-y-3">
                {cat.items.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-zinc-300 group/item">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-110"
                      style={{ background: `${cat.accent}18` }}
                    >
                      <Icon size={13} style={{ color: cat.accent }} />
                    </div>
                    <span className="text-sm font-medium leading-snug">{label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Expert consultation callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center p-10 rounded-2xl border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.03)]"
        >
          <p className="text-2xl font-bold text-white mb-2">+ Expert Consultation Included</p>
          <p className="text-zinc-400">Every project comes with dedicated consultation to ensure we deliver exactly what your business needs.</p>
        </motion.div>
      </div>
    </section>
  );
}
