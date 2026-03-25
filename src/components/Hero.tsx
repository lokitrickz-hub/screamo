"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const screamo = "SCREAMO".split("");
  const trickz = "TRICKZ".split("");

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
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(16,23,42,0.7)] via-[rgba(16,23,42,0.3)] to-[#10172A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(16,23,42,0.5)] via-transparent to-[rgba(16,23,42,0.5)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-5xl">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-3 md:mb-5"
        >
          <span
            className="inline-block text-[9px] sm:text-[11px] md:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-white/70"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
          >
            Uczniowski Klub Sportowy
          </span>
        </motion.div>

        {/* Main title — SCREAMO white, TRICKZ neon lime */}
        <h1
          className="leading-[0.95] tracking-[-0.02em] mb-3 md:mb-5 overflow-hidden whitespace-nowrap"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "clamp(1.65rem,5.8vw,7.5rem)" }}
        >
          {screamo.map((letter, i) => (
            <motion.span
              key={`s-${i}`}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                delay: 0.5 + i * 0.04,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block text-white"
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              {letter}
            </motion.span>
          ))}
          {trickz.map((letter, i) => (
            <motion.span
              key={`t-${i}`}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                delay: 0.5 + (7 + i) * 0.04,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block neon-lime"
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle — disciplines with lightning bolts */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-[10px] sm:text-sm md:text-base tracking-[0.15em] md:tracking-[0.25em] uppercase
                   text-white/50 mb-8 md:mb-10"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
        >
          Tricking{" "}
          <span className="text-[#DFFF00] mx-1 md:mx-2">&#9889;</span>{" "}
          Akrobatyka{" "}
          <span className="text-[#DFFF00] mx-1 md:mx-2">&#9889;</span>{" "}
          Gimnastyka
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
                     bg-[#DFFF00] text-[var(--color-navy)]
                     text-[11px] sm:text-sm tracking-wider uppercase
                     px-5 sm:px-6 md:px-8 py-3 md:py-3.5 rounded-full
                     hover:bg-[#c4e000] hover:scale-105
                     shadow-[0_0_25px_rgba(223,255,0,0.3)]
                     hover:shadow-[0_0_40px_rgba(223,255,0,0.5)]
                     transition-all duration-300"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
          >
            Zobacz zajęcia
          </a>
          <a
            href="tel:+48514201443"
            className="inline-flex items-center justify-center gap-2
                     border-2 border-[#DFFF00]/60 text-white
                     text-[11px] sm:text-sm tracking-wider uppercase
                     px-5 sm:px-6 md:px-8 py-3 md:py-3.5 rounded-full
                     hover:bg-[#DFFF00]/10 hover:border-[#DFFF00]
                     transition-all duration-300"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
          >
            Zadzwoń — 514 201 443
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
                 text-white/40 hover:text-[#DFFF00] transition-colors cursor-pointer"
      >
        <span className="font-[var(--font-heading)] text-[10px] tracking-[0.2em] uppercase font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>

      {/* Corner accents — lime themed */}
      <div className="absolute top-20 left-6 w-12 h-12 border-l-2 border-t-2 border-[#DFFF00]/30 hidden md:block" />
      <div className="absolute bottom-20 right-6 w-12 h-12 border-r-2 border-b-2 border-[#DFFF00]/30 hidden md:block" />
    </section>
  );
}
