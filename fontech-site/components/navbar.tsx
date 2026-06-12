"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#showcase", label: "Our Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass border-b border-[rgba(212,175,55,0.15)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none group">
            <span className="text-xl font-black tracking-widest gold-text">FON TECH</span>
            <span className="text-[10px] tracking-[0.35em] text-zinc-400 uppercase font-medium group-hover:text-[#D4AF37] transition-colors">
              Innovative Digital Solutions
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-zinc-300 hover:text-[#D4AF37] transition-colors tracking-wide uppercase"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:07045723013"
              className="flex items-center gap-2 text-sm text-zinc-300 hover:text-[#D4AF37] transition-colors"
            >
              <Phone size={14} />
              0704 572 3013
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black text-sm font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#D4AF37] p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold text-white hover:text-[#D4AF37] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold rounded-full text-lg"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
