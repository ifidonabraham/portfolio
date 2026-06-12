"use client";
import { motion } from "framer-motion";
import { MessageCircle, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  { num: "01", icon: MessageCircle, title: "Discovery", desc: "We dive deep into your business, goals, and vision. Free consultation to map out the perfect digital strategy." },
  { num: "02", icon: PenTool, title: "Design", desc: "Our designers craft premium UI/UX mockups tailored to your brand — refined until you love every detail." },
  { num: "03", icon: Code2, title: "Build", desc: "Our engineers build your product using modern technologies — fast, secure, and scalable from day one." },
  { num: "04", icon: Rocket, title: "Launch & Grow", desc: "We deploy, monitor, and support your platform with 24/7 availability — so you can focus on your business." },
];

export function Process() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)", transform: "translate(-30%, 30%)" }}
      />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.5em] text-[#D4AF37] uppercase mb-4">How It Works</p>
          <h2
            className="text-5xl md:text-7xl font-black mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our <span className="gold-text">Process</span>
          </h2>
          <div className="mt-4 w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon circle */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center bg-[#0a0a0a] group-hover:border-[#D4AF37] transition-colors duration-400 relative z-10">
                  <step.icon size={28} className="text-[#D4AF37]" />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#D4AF37] flex items-center justify-center">
                  <span className="text-black text-[10px] font-black">{step.num}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
