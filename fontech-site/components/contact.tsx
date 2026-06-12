"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="section-padding bg-[#030303] relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 65%)" }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.5em] text-[#D4AF37] uppercase mb-4">Get In Touch</p>
          <h2
            className="text-5xl md:text-7xl font-black mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Start Your <span className="gold-text">Project</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Ready to build something incredible? Let's talk. Your digital success starts here.
          </p>
          <div className="mt-8 w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold gold-text mb-6">FON TECH</h3>
              <p className="text-zinc-400 leading-relaxed">
                We're a team of passionate developers, designers, and digital strategists — building the future of business online. One project at a time.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: Phone, label: "Call Us", value: "0704 572 3013", href: "tel:07045723013" },
                { icon: Mail, label: "Email Us", value: "hello@fontech.com", href: "mailto:hello@fontech.com" },
                { icon: MapPin, label: "Location", value: "Nigeria — Serving Globally", href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[rgba(212,175,55,0.1)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(212,175,55,0.2)] transition-colors">
                    <Icon size={16} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest text-zinc-500 uppercase">{label}</p>
                    <p className="text-white font-medium text-sm mt-0.5 group-hover:text-[#D4AF37] transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA phone */}
            <a
              href="tel:07045723013"
              className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold rounded-full w-full justify-center text-base hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.35)]"
            >
              <Phone size={18} />
              0704 572 3013
            </a>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="glass-card rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="text-5xl mb-4 gold-text font-black">✓</div>
                <h4 className="text-2xl font-bold text-white mb-3">Message Received!</h4>
                <p className="text-zinc-400">We'll get back to you within 24 hours. Your digital journey starts now.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-zinc-400 uppercase tracking-widest mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(212,175,55,0.2)] rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-zinc-400 uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(212,175,55,0.2)] rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-zinc-400 uppercase tracking-widest mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(212,175,55,0.2)] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    <option value="" className="bg-zinc-900">Select a service</option>
                    <option value="web" className="bg-zinc-900">Web Application</option>
                    <option value="mobile" className="bg-zinc-900">Mobile App</option>
                    <option value="ecommerce" className="bg-zinc-900">E-Commerce Platform</option>
                    <option value="branding" className="bg-zinc-900">Branding & Design</option>
                    <option value="ai" className="bg-zinc-900">AI Chatbot / Integration</option>
                    <option value="other" className="bg-zinc-900">Other / Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-zinc-400 uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(212,175,55,0.2)] rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#C9A84C] text-black font-bold rounded-xl text-base hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                >
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
