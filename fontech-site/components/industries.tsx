"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    label: "Restaurants & Food",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop",
    span: "col-span-2 row-span-2",
  },
  {
    label: "Luxury Hotels",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80&auto=format&fit=crop",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Real Estate",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Healthcare",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Fashion & Retail",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80&auto=format&fit=crop",
    span: "col-span-2 row-span-1",
  },
  {
    label: "Finance & Banking",
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80&auto=format&fit=crop",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Education",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80&auto=format&fit=crop",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Technology & Startups",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop",
    span: "col-span-2 row-span-1",
  },
  {
    label: "Manufacturing",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Media & Entertainment",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80&auto=format&fit=crop",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Government",
    img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80&auto=format&fit=crop",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Non-Profit",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80&auto=format&fit=crop",
    span: "col-span-1 row-span-1",
  },
];

export function Industries() {
  return (
    <section id="industries" className="section-padding bg-[#030303] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.5em] text-[#D4AF37] uppercase mb-4">We Serve</p>
          <h2
            className="text-5xl md:text-7xl font-black mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Every <span className="gold-text">Industry</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            From restaurants to real estate, healthcare to hospitality — we build beautiful digital experiences for every sector.
          </p>
          <div className="mt-8 w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </motion.div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-3 md:gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`${ind.span} img-overlay rounded-2xl cursor-pointer group`}
            >
              <Image
                src={ind.img}
                alt={ind.label}
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Label overlay */}
              <div className="absolute inset-0 rounded-2xl z-10 flex flex-col justify-end p-5 bg-gradient-to-t from-black/85 via-black/20 to-transparent">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Industry
                    </p>
                    <h3 className="text-white font-bold text-base md:text-lg leading-tight">{ind.label}</h3>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[rgba(212,175,55,0.5)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37]">
                    <ArrowUpRight size={14} className="text-white" />
                  </div>
                </div>
                {/* Gold bottom line on hover */}
                <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-[#D4AF37] to-transparent group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional industries tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3 justify-center"
        >
          {["Enterprises", "E-Commerce", "Logistics", "Hospitality", "Agriculture", "Legal & Law", "Automotive", "Sports & Fitness", "Travel & Tourism", "Beauty & Wellness"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-[rgba(212,175,55,0.2)] text-zinc-300 text-xs tracking-wide hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all cursor-default"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
