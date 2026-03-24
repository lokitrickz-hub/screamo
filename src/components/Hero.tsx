"use client";

import { motion } from "framer-motion";
import { ChevronDown, Zap } from "lucide-react";

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
          <source src="/videos/promo-scr.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlays — navy themed */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(16,23,42,0.7)] via-[rgba(16,23,42,0.3)] to-[#10172A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(16,23,42,0.5)] via-transparent to-[rgba(16,23,42,0.5)]" />
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
          <span className="inline-flex items-center gap-2 font-[var(--font-accent)] text-[10px] md:text-sm
                         tracking-[0.2em] md:tracking-[0.3em] uppercase text-[var(--color-yellow)] font-semibold">
            <Zap size={14} className="text-[var(--color-yellow)]" fill="currentColor" />
            Uczniowski Klub Sportowy
            <Zap size={14} className="text-[var(--color-yellow)]" fill="currentColor" />
          </span>
        </motion.div>

        {/* Main title — letter-by-letter reveal */}
        <h1 className="font-[var(--font-heading)] text-[clamp(1.5rem,5vw,4.5rem)]
                      leading-[1] tracking-[0.02em] mb-4 md:mb-6 overflow-hidden whitespace-nowrap">
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
                color: i >= 7 ? "var(--color-yellow)" : "white",
                textShadow: i >= 7 ? "0 0 30px rgba(251, 191, 36, 0.4)" : "0 2px 10px rgba(0,0,0,0.3)",
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
                   text-[var(--color-gray-300)] mb-8 md:mb-10 font-medium"
        >
          Tricking{" "}
          <span className="text-[var(--color-purple-light)] mx-1 md:mx-2 font-bold">|</span> Akrobatyka{" "}
          <span className="text-[var(--color-purple-light)] mx-1 md:mx-2 font-bold">|</span> Gimnastyka
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/zajecia"
            className="inline-flex items-center justify-center gap-2
                     bg-[var(--color-yellow)] text-[var(--color-navy)] font-[var(--font-accent)]
                     font-bold text-sm tracking-wider uppercase
                     px-6 md:px-8 py-3 md:py-3.5 rounded-full
                     hover:bg-[var(--color-yellow-dark)] hover:scale-105
                     shadow-[0_0_25px_rgba(251,191,36,0.3)]
                     hover:shadow-[0_0_35px_rgba(251,191,36,0.5)]
                     transition-all duration-300"
          >
            Zapisz dziecko
          </a>
          <a
            href="/historia"
            className="inline-flex items-center justify-center gap-2
                     border-2 border-[var(--color-purple)] text-white font-[var(--font-accent)]
                     font-semibold text-sm tracking-wider uppercase
                     px-6 md:px-8 py-3 md:py-3.5 rounded-full
                     hover:bg-[var(--color-purple)] hover:border-[var(--color-purple)]
                     transition-all duration-300"
          >
            Poznaj nas
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#classes"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                 text-[var(--color-purple-light)] hover:text-[var(--color-yellow)] transition-colors cursor-pointer"
      >
        <span className="font-[var(--font-accent)] text-[10px] tracking-[0.2em] uppercase font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>

      {/* Corner accents — purple themed */}
      <div className="absolute top-20 left-6 w-12 h-12 border-l-2 border-t-2 border-[var(--color-purple)]/40 hidden md:block" />
      <div className="absolute bottom-20 right-6 w-12 h-12 border-r-2 border-b-2 border-[var(--color-yellow)]/40 hidden md:block" />
    </section>
  );
}
