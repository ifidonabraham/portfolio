"use client";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

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
              href="https://wa.me/2347045723013" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.35)] text-lg"
            >
              <WhatsAppIcon size={20} />
              0704 572 3013
            </a>
            <a
              href="mailto:ifidonabraham249@gmail.com"
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
            <div className="mt-6 flex items-center gap-4">
              <a href="https://github.com/ifidonabraham" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-zinc-500 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
                <Github size={15} />
              </a>
              <a href="https://www.linkedin.com/in/abraham-ifidon-4279b2402" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-zinc-500 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
                <Linkedin size={15} />
              </a>
              <a href="https://x.com/don_atyaservice" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-zinc-500 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
                <Twitter size={15} />
              </a>
              <a href="mailto:ifidonabraham249@gmail.com" className="w-9 h-9 rounded-full border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-zinc-500 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
                <Mail size={15} />
              </a>
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
