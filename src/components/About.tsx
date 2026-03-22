"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Target, Users } from "lucide-react";

const STATS = [
  { value: "31", label: "Medali MP", icon: Flame },
  { value: "14+", label: "Lat doświadczenia", icon: Target },
  { value: "100+", label: "Zawodników", icon: Users },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-16 md:py-32 px-6 bg-[#050505] overflow-hidden"
    >
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="font-[var(--font-accent)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-lime)]">
            O nas
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-[var(--font-heading)] font-black text-2xl md:text-5xl lg:text-[3.5rem]
                   text-white leading-[1.05] max-w-3xl mb-6 md:mb-8"
        >
          Definiujemy grawitację
          <br />
          <span className="text-[var(--color-lime)]">na własnych zasadach.</span>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-[var(--font-body)] text-[var(--color-gray-400)] text-sm md:text-lg
                   leading-relaxed max-w-2xl mb-10 md:mb-16"
        >
          UKS ScreamoTrickz to nie tylko klub sportowy — to pierwsza w regionie
          i jedna z czołowych w Polsce akademii trickingu. Łączymy dynamikę
          sztuk walki, estetykę gimnastyki i ekspresję breakdance&apos;u. Naszą
          misją jest zarażanie pasją do ruchu, budowanie pewności siebie
          poprzez opanowanie własnego ciała i integracja lokalnej społeczności
          sportowej na całej Sądecczyźnie.
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="relative p-5 md:p-8 rounded-lg
                       bg-white/[0.03] border border-white/[0.06]
                       hover:border-[var(--color-lime)]/30 transition-colors duration-500"
            >
              <stat.icon
                size={20}
                className="text-[var(--color-lime)] mb-4"
              />
              <div className="font-[var(--font-heading)] font-black text-3xl md:text-5xl text-white mb-1">
                {stat.value}
              </div>
              <div className="font-[var(--font-accent)] text-xs tracking-[0.15em] uppercase text-[var(--color-gray-500)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
