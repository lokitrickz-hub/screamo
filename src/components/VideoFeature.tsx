"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Tv } from "lucide-react";

export default function VideoFeature() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-32 px-6 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-lime)]/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <Tv size={16} className="text-[var(--color-lime)]" />
          <span className="font-[var(--font-accent)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-lime)]">
            Widziane w TV
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-[var(--font-heading)] font-black text-xl md:text-4xl lg:text-5xl
                   text-white leading-[1.1] max-w-3xl mb-4"
        >
          Półfinał <span className="text-[var(--color-lime)]">Mam Talent!</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-[var(--font-body)] text-[var(--color-gray-400)] text-sm md:text-lg
                   leading-relaxed max-w-2xl mb-8 md:mb-10"
        >
          Nasz spektakularny występ w półfinale 12. edycji programu Mam Talent! — moment,
          w którym ScreamoTrickz stał się marką rozpoznawalną w całej Polsce.
        </motion.p>

        {/* Video embed */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full rounded-xl overflow-hidden
                   border border-white/[0.08] shadow-2xl shadow-black/50"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-lime)]/10 via-transparent to-[var(--color-lime)]/10 rounded-xl blur-xl opacity-50" />

          <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/ywHOHj4tLII?rel=0&modestbranding=1"
              title="ScreamoTrickz — Półfinał Mam Talent!"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Stats bar under video */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center gap-6 md:gap-10 mt-8"
        >
          <div className="flex items-center gap-2">
            <Play size={14} className="text-[var(--color-lime)]" />
            <span className="font-[var(--font-accent)] text-xs tracking-wider uppercase text-white/50">
              12. edycja · Półfinał
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-[var(--font-accent)] text-xs tracking-wider uppercase text-white/50">
              TVN · 2019
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
