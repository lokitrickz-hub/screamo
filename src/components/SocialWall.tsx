"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Youtube, Facebook, ArrowUpRight, Heart, Play, Users } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";
import WipeReveal from "./WipeReveal";

const PLATFORMS = [
  {
    key: "instagram" as const,
    icon: Instagram,
    label: "Instagram",
    description: "Kulisy treningów, relacje z zawodów i codzienne życie klubu. Zajrzyj za kulisy ScreamoTrickz!",
    color: "from-[#833AB4] via-[#E1306C] to-[#F77737]",
    hoverBorder: "hover:border-[#E1306C]",
    stat: "Posty & Reels",
    statIcon: Heart,
  },
  {
    key: "youtube" as const,
    icon: Youtube,
    label: "YouTube",
    description: "Pełne występy, tutoriale tricków i materiały z Mam Talent! Subskrybuj nasz kanał!",
    color: "from-[#FF0000] to-[#CC0000]",
    hoverBorder: "hover:border-[#FF0000]",
    stat: "Filmy & Vlogi",
    statIcon: Play,
  },
  {
    key: "facebook" as const,
    icon: Facebook,
    label: "Facebook",
    description: "Aktualności, zapisy na treningi i kontakt z klubem. Dołącz do naszej społeczności!",
    color: "from-[#1877F2] to-[#0C5DC7]",
    hoverBorder: "hover:border-[#1877F2]",
    stat: "Społeczność",
    statIcon: Users,
  },
];

export default function SocialWall() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="relative py-16 md:py-32 px-4 sm:px-6 bg-[var(--color-navy)]">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--color-purple)] via-[var(--color-yellow)] to-[var(--color-purple)]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-10 md:mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block font-[var(--font-accent)] text-xs font-bold tracking-[0.2em] uppercase
                     text-[var(--color-navy)] bg-[var(--color-yellow)] px-3 py-1 rounded-full mb-4"
          >
            Obserwuj nas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-[var(--font-heading)] text-3xl md:text-5xl lg:text-6xl
                     text-white leading-[1.1] mb-4"
          >
            BĄDŹ NA{" "}
            <span
              className="text-[var(--color-yellow)]"
              style={{ textShadow: "0 0 30px rgba(251,191,36,0.3)" }}
            >
              BIEŻĄCO
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-[var(--font-body)] text-[var(--color-gray-300)] text-sm md:text-base
                     max-w-lg mx-auto leading-relaxed"
          >
            Śledź nasze social media — tam dzieje się najwięcej!
          </motion.p>
        </div>

        {/* Social platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PLATFORMS.map((platform, i) => {
            const link = SOCIAL_LINKS[platform.key];
            return (
              <WipeReveal
                key={platform.key}
                delay={i * 0.2}
                className={`rounded-2xl bg-[var(--color-navy-light)] border-2 border-[var(--color-purple)]/30
                         ${platform.hoverBorder} transition-all duration-300
                         hover:scale-[1.03] hover:-translate-y-1`}
              >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {/* Gradient header */}
                <div className={`h-28 bg-gradient-to-br ${platform.color} relative overflow-hidden`}>
                  {/* Halftone pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "12px 12px",
                    }}
                  />
                  {/* Big icon */}
                  <platform.icon
                    size={60}
                    className="absolute -right-3 -bottom-3 text-white/20 sm:w-20 sm:h-20"
                  />
                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center
                               group-hover:bg-white/30 transition-colors">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <platform.icon size={20} className="text-white" />
                    <h3 className="font-[var(--font-heading)] text-lg text-white">
                      {platform.label}
                    </h3>
                  </div>

                  <p className="font-[var(--font-body)] text-sm text-[var(--color-gray-400)] leading-relaxed mb-4">
                    {platform.description}
                  </p>

                  {/* Handle */}
                  <div className="flex items-center justify-between">
                    <span className="font-[var(--font-accent)] text-xs font-semibold text-[var(--color-purple-light)]">
                      {link.handle}
                    </span>
                    <div className="flex items-center gap-1.5 text-[var(--color-gray-400)]">
                      <platform.statIcon size={12} />
                      <span className="font-[var(--font-accent)] text-[10px] font-medium tracking-wider uppercase">
                        {platform.stat}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              </WipeReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
