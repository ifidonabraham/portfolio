"use client";
import { motion } from "framer-motion";
import { DollarSign, Layers, Lock, Zap, HeadphonesIcon, Globe } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Affordable Plans",
    desc: "Flexible development and maintenance pricing for businesses of every size — no hidden costs.",
  },
  {
    icon: Layers,
    title: "Fully Custom Design",
    desc: "Every project is built from scratch to match your brand identity and business goals perfectly.",
  },
  {
    icon: Lock,
    title: "Reliable & Secure",
    desc: "Enterprise-grade security with audits, pen-testing, and encryption built into every project.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "We move quickly without cutting corners — efficient sprints from concept to launch.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    desc: "Our team is always available. Issues get resolved fast, day or night.",
  },
  {
    icon: Globe,
    title: "Fully Responsive",
    desc: "Pixel-perfect on every screen — desktop, tablet, and mobile.",
  },
];

export function Benefits() {
  return (
    <section id="about" className="section-padding bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.5em] text-[#D4AF37] uppercase mb-4">Why Choose Us</p>
            <h2
              className="text-5xl md:text-6xl font-black leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Key <span className="gold-text">Benefits</span>
              <br />
              <span className="text-zinc-400 text-3xl font-normal">of working with FON TECH</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              We combine cutting-edge technology with deep industry knowledge to deliver solutions that don't just look great — they perform, convert, and grow with your business.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              Your Digital Success Starts Here
            </a>
          </motion.div>

          {/* Right: benefit cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-xl p-5 group hover:border-[rgba(212,175,55,0.4)] transition-all duration-400"
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(212,175,55,0.1)] flex items-center justify-center mb-4 group-hover:bg-[rgba(212,175,55,0.2)] transition-colors">
                  <b.icon size={18} className="text-[#D4AF37]" />
                </div>
                <h4 className="font-bold text-white mb-2 text-sm">{b.title}</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
