"use client";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowUpRight } from "lucide-react";

const links = {
  Services: ["Web Development", "Mobile Apps", "E-Commerce", "AI Chatbots", "UI/UX Design", "Branding"],
  Industries: ["Restaurants", "Real Estate", "Healthcare", "Hospitality", "Finance", "Education"],
  Company: ["About Us", "Our Process", "Contact", "Privacy Policy"],
};

export function Footer() {
  return (
    <footer className="bg-black border-t border-[rgba(212,175,55,0.1)]">
      {/* CTA banner */}
      <div className="bg-gradient-to-r from-[#0a0a0a] via-[#111] to-[#0a0a0a] border-b border-[rgba(212,175,55,0.1)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-3xl font-black gold-text" style={{ fontFamily: "'Playfair Display', serif" }}>
              Your Digital Success Starts Here.
            </h3>
            <p className="text-zinc-400 mt-1">Contact us today to get started.</p>
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="tel:07045723013"
              className="flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.35)] text-lg"
            >
              <Phone size={20} />
              0704 572 3013
            </a>
            <a
              href="mailto:hello@fontech.com"
              className="flex items-center gap-2 px-6 py-4 border-2 border-[rgba(212,175,55,0.5)] text-[#D4AF37] font-bold rounded-full hover:bg-[rgba(212,175,55,0.08)] transition-all"
            >
              <Mail size={18} />
              Email Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-black tracking-widest gold-text">FON TECH</span>
              <p className="text-[10px] tracking-[0.4em] text-zinc-500 uppercase mt-1">Innovative Digital Solutions</p>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              We build premium digital experiences for businesses across every industry. From startups to enterprises — we make it happen.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-xs text-zinc-500">Available for new projects</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] mb-5 font-semibold">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-zinc-500 text-sm hover:text-white transition-colors flex items-center gap-1 group">
                      {item}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[rgba(212,175,55,0.08)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} FON TECH. All rights reserved.
          </p>
          <p className="text-zinc-600 text-sm flex items-center gap-1">
            Built with precision by{" "}
            <span className="text-[#D4AF37] font-semibold">Ifidon Abraham</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
