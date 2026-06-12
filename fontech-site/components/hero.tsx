"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";

const floatingOrbs = [
  { size: 400, left: "5%", top: "10%", delay: 0, duration: 8 },
  { size: 300, left: "70%", top: "20%", delay: 1, duration: 10 },
  { size: 250, left: "40%", top: "60%", delay: 2, duration: 7 },
  { size: 350, left: "80%", top: "60%", delay: 0.5, duration: 9 },
  { size: 200, left: "15%", top: "70%", delay: 1.5, duration: 11 },
];

const statsRow = [
  { value: "12+", label: "Industries" },
  { value: "50+", label: "Technologies" },
  { value: "24/7", label: "Support" },
  { value: "99%", label: "Satisfaction" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background image */}
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format&fit=crop"
          alt="hero background"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </motion.div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating gold orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.left,
            top: orb.top,
            background: `radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)`,
          }}
          animate={{ y: [-20, 20, -20], scale: [1, 1.05, 1] }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
        />
      ))}

      {/* Spinning ring decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          className="w-[600px] h-[600px] rounded-full border border-[rgba(212,175,55,0.08)] animate-spin-slow"
          style={{ boxShadow: "0 0 80px rgba(212,175,55,0.05)" }}
        />
        <motion.div
          className="absolute inset-8 rounded-full border border-[rgba(212,175,55,0.06)] animate-counter-spin"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.05)] mb-8"
        >
          <Sparkles size={14} className="text-[#D4AF37]" />
          <span className="text-xs tracking-[0.4em] text-[#D4AF37] uppercase font-medium">
            Innovative Digital Solutions
          </span>
          <Sparkles size={14} className="text-[#D4AF37]" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[clamp(3.5rem,12vw,9rem)] font-black leading-none tracking-tight mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="gold-text">FON</span>
          <br />
          <span className="text-white">TECH</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light"
        >
          We craft <span className="text-[#D4AF37] font-semibold">premium digital experiences</span> for every industry —
          from startups to enterprises. Web, mobile, AI, branding, and beyond.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="group px-9 py-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#C9A84C] text-black font-bold rounded-full text-base tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.4)]"
          >
            View Our Services
          </a>
          <a
            href="#contact"
            className="px-9 py-4 border-2 border-[rgba(212,175,55,0.5)] text-[#D4AF37] font-bold rounded-full text-base tracking-wide hover:bg-[rgba(212,175,55,0.08)] hover:border-[#D4AF37] transition-all duration-300"
          >
            Start Your Project
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {statsRow.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black gold-text">{s.value}</div>
              <div className="text-xs text-zinc-400 tracking-widest uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#D4AF37] opacity-70 hover:opacity-100 transition-opacity"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="animate-scroll-pulse">
          <ArrowDown size={18} />
        </div>
      </motion.a>
    </section>
  );
}
