"use client";
import { motion } from "framer-motion";

const marqueeItems = [
  "Web Applications",
  "Mobile Apps",
  "E-Commerce",
  "AI Chatbots",
  "UI/UX Design",
  "API Development",
  "Branding",
  "SEO",
  "Cloud Integration",
  "Database Management",
  "Security Audits",
  "Real-time Systems",
];

export function StatsMarquee() {
  return (
    <div className="bg-[#D4AF37] py-4 overflow-hidden relative">
      <motion.div
        className="flex whitespace-nowrap gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="text-black font-bold text-sm tracking-widest uppercase flex items-center gap-8">
            {item}
            <span className="text-black/40">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
