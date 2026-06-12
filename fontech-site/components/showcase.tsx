"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const beautyImages = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format&fit=crop",
    label: "Luxury Living",
    category: "Real Estate",
  },
  {
    src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80&auto=format&fit=crop",
    label: "Five-Star Comfort",
    category: "Hospitality",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&auto=format&fit=crop",
    label: "Fine Dining",
    category: "Restaurant",
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80&auto=format&fit=crop",
    label: "Modern Workspaces",
    category: "Startups",
  },
  {
    src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80&auto=format&fit=crop",
    label: "Premium Retail",
    category: "E-Commerce",
  },
  {
    src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80&auto=format&fit=crop",
    label: "Modern Healthcare",
    category: "Medical",
  },
];

const videoHighlights = [
  {
    thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
    title: "Web & App Development",
    desc: "Custom platforms built for performance",
  },
  {
    thumb: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop",
    title: "Real Estate Platforms",
    desc: "Immersive property showcasing",
  },
  {
    thumb: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format&fit=crop",
    title: "Restaurant & Food Tech",
    desc: "Reservation & ordering systems",
  },
];

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section id="showcase" className="bg-black overflow-hidden">
      {/* Section header */}
      <div className="section-padding pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-7xl mx-auto mb-16"
        >
          <p className="text-xs tracking-[0.5em] text-[#D4AF37] uppercase mb-4">Beauty in Every Pixel</p>
          <h2
            className="text-5xl md:text-7xl font-black mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The World We <span className="gold-text">Build For</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            We collect the most beautiful things people experience in the real world — and bring them to life online.
          </p>
          <div className="mt-8 w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </motion.div>
      </div>

      {/* Scrolling image rows */}
      <div ref={ref} className="overflow-hidden py-4 space-y-4">
        {/* Row 1 - slides left on scroll */}
        <motion.div style={{ x: x1 }} className="flex gap-4 pl-4 w-max">
          {[...beautyImages, ...beautyImages].map((img, i) => (
            <div key={i} className="relative w-[320px] h-[240px] rounded-2xl overflow-hidden shrink-0 group img-overlay">
              <Image src={img.src} alt={img.label} fill className="object-cover" sizes="320px" />
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-[10px] tracking-widest text-[#D4AF37] uppercase">{img.category}</p>
                <p className="text-white font-semibold text-sm mt-0.5">{img.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Row 2 - slides right on scroll */}
        <motion.div style={{ x: x2 }} className="flex gap-4 pr-4 justify-end w-max ml-auto">
          {[...beautyImages.slice(3), ...beautyImages.slice(3), ...beautyImages].map((img, i) => (
            <div key={i} className="relative w-[280px] h-[200px] rounded-2xl overflow-hidden shrink-0 group img-overlay">
              <Image src={img.src} alt={img.label} fill className="object-cover" sizes="280px" />
              <div className="absolute inset-0 z-10 flex items-end p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-medium text-sm">{img.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Video highlights */}
      <div className="section-padding pt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h3 className="text-3xl md:text-4xl font-black">
              What We <span className="gold-text">Build</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoHighlights.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
                style={{ height: 320 }}
              >
                <Image src={v.thumb} alt={v.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width:768px)100vw,33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-[rgba(212,175,55,0.7)] flex items-center justify-center bg-black/30 backdrop-blur-sm group-hover:scale-110 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                    <Play size={18} className="text-[#D4AF37] ml-1" fill="currentColor" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white font-bold text-lg">{v.title}</h4>
                  <p className="text-zinc-300 text-sm mt-1">{v.desc}</p>
                  <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-[#D4AF37] to-transparent group-hover:w-full transition-all duration-500 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
