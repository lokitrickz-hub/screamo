"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const titleLetters = "SCREAMOTRICKZ".split("");

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,5,5,0.6)] via-[rgba(5,5,5,0.3)] to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,5,5,0.5)] via-transparent to-[rgba(5,5,5,0.5)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Subtitle above */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-4"
        >
          <span className="font-[var(--font-accent)] text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase
                         text-[var(--color-gray-400)]">
            Uczniowski Klub Sportowy
          </span>
        </motion.div>

        {/* Main title — letter-by-letter reveal */}
        <h1 className="font-[var(--font-heading)] font-black text-[clamp(2rem,8vw,8rem)]
                      leading-[0.9] tracking-tight mb-4 md:mb-6 overflow-hidden whitespace-nowrap">
          {titleLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                delay: 0.5 + i * 0.04,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
              style={{
                color: i >= 7 ? "var(--color-lime)" : "white",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-[var(--font-accent)] text-xs md:text-base tracking-[0.1em] md:tracking-[0.2em] uppercase
                   text-[var(--color-gray-300)] mb-8 md:mb-10"
        >
          Tricking{" "}
          <span className="text-[var(--color-lime)] mx-1 md:mx-2">|</span> Akrobatyka{" "}
          <span className="text-[var(--color-lime)] mx-1 md:mx-2">|</span> Sądecczyzna
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#masters"
            className="inline-flex items-center justify-center gap-2
                     bg-[var(--color-lime)] text-[#050505] font-[var(--font-accent)]
                     font-semibold text-sm tracking-wider uppercase
                     px-6 md:px-8 py-3 md:py-3.5 rounded-sm
                     hover:bg-[var(--color-lime-dark)] hover:scale-105
                     transition-all duration-300"
          >
            Poznaj nas
          </a>
          <a
            href="/historia"
            className="inline-flex items-center justify-center gap-2
                     border border-white/20 text-white font-[var(--font-accent)]
                     font-medium text-sm tracking-wider uppercase
                     px-6 md:px-8 py-3 md:py-3.5 rounded-sm
                     hover:border-[var(--color-lime)] hover:text-[var(--color-lime)]
                     transition-all duration-300"
          >
            Nasza historia
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#masters"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                 text-[var(--color-gray-500)] hover:text-[var(--color-lime)] transition-colors cursor-pointer"
      >
        <span className="font-[var(--font-accent)] text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>

      {/* Corner accents */}
      <div className="absolute top-20 left-6 w-12 h-12 border-l border-t border-[var(--color-lime)]/20 hidden md:block" />
      <div className="absolute bottom-20 right-6 w-12 h-12 border-r border-b border-[var(--color-lime)]/20 hidden md:block" />
    </section>
  );
}
