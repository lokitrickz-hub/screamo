"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Youtube,
  Facebook,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { TRAINERS, type Trainer } from "@/lib/data";
import Link from "next/link";
import WipeReveal from "./WipeReveal";

/* ── Single trainer card ── */
function TrainerCard({
  trainer,
  isOpen,
  onToggle,
  index,
}: {
  trainer: Trainer;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const socialIcons = {
    instagram: Instagram,
    youtube: Youtube,
    facebook: Facebook,
  };

  function handlePlay() {
    setVideoPlaying(true);
    videoRef.current?.play().catch(() => {});
  }

  function handleStop() {
    setVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  // Alternate layout direction on desktop: even = photo left, odd = photo right
  const reversed = index % 2 !== 0;

  return (
    <WipeReveal
      delay={index * 0.2}
      className={`rounded-2xl border-2 transition-all duration-500
                    ${isOpen
                      ? "border-[var(--color-yellow)] shadow-[0_0_40px_rgba(251,191,36,0.2)]"
                      : "border-[var(--color-purple)] hover:border-[var(--color-yellow)]/60 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]"
                    }
                    bg-[var(--color-navy-light)]`}
      >
        {/* Card layout: photo + info side by side on desktop, stacked on mobile */}
        <div className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"}`}>

          {/* ── Photo / Video area ── */}
          <div
            className="relative w-full md:w-[60%] shrink-0 cursor-pointer overflow-hidden"
            onMouseEnter={handlePlay}
            onMouseLeave={handleStop}
            onClick={onToggle}
          >
            {/* Photo — always visible as base layer */}
            <img
              src={trainer.photo}
              alt={trainer.name}
              className="w-full h-auto block"
            />

            {/* Video — fades in on top of photo */}
            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
                        ${videoPlaying ? "opacity-100" : "opacity-0"}`}
              src={trainer.video}
              muted
              loop
              playsInline
              preload="auto"
            />

            {/* Subtle gradient for name readability on mobile */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent md:hidden" />

            {/* Trick badge on hover */}
            <motion.div
              initial={false}
              animate={
                videoPlaying
                  ? { opacity: 1, scale: 1, rotate: -2 }
                  : { opacity: 0, scale: 0.5, rotate: 10 }
              }
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              className="absolute top-4 right-4 bg-[var(--color-yellow)] text-[var(--color-navy)]
                       font-[var(--font-heading)] text-xs px-3 py-1.5 rounded-lg z-20
                       shadow-[0_0_15px_rgba(251,191,36,0.4)]"
            >
              {trainer.trick}
            </motion.div>

            <motion.div
              initial={false}
              animate={videoPlaying ? { opacity: 1, rotate: 15 } : { opacity: 0, rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-12 right-16 z-20"
            >
              <Sparkles size={18} className="text-[var(--color-yellow)]" fill="currentColor" />
            </motion.div>

            {/* Mobile: name overlay at bottom of photo */}
            <div className="absolute bottom-3 left-4 z-10 md:hidden">
              <p className="font-[var(--font-accent)] text-[9px] tracking-[0.15em] uppercase font-bold text-[var(--color-yellow)]">
                {trainer.role}
              </p>
              <h3 className="font-[var(--font-heading)] text-white text-xl" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>
                {trainer.name}
              </h3>
            </div>
          </div>

          {/* ── Info panel ── */}
          <div className="flex flex-col justify-center p-5 sm:p-6 md:p-8 lg:p-10 flex-1 min-w-0">
            {/* Role + Name — hidden on mobile (shown on photo) */}
            <div className="hidden md:block">
              <span
                className="inline-block font-[var(--font-accent)] text-[10px] tracking-[0.15em] uppercase font-bold
                         text-[var(--color-yellow)] bg-[var(--color-navy)]/60 backdrop-blur-sm
                         px-3 py-1 border border-[var(--color-yellow)]/30 rounded-lg mb-3"
              >
                {trainer.role}
              </span>
              <h3 className="font-[var(--font-heading)] text-white text-2xl lg:text-3xl mb-4">
                {trainer.name}
              </h3>
            </div>

            {/* Bio — always visible on desktop, toggle on mobile */}
            <div className="hidden md:block">
              <p className="font-[var(--font-body)] text-[var(--color-gray-300)] text-sm lg:text-base leading-relaxed mb-5">
                {trainer.bio}
              </p>

              {/* Socials */}
              <div className="flex gap-2.5">
                {Object.entries(trainer.socials).map(([platform, url]) => {
                  const Icon = socialIcons[platform as keyof typeof socialIcons];
                  if (!Icon || !url) return null;
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[var(--color-purple)]/20 border-2 border-[var(--color-purple)]/40
                               flex items-center justify-center
                               hover:bg-[var(--color-yellow)] hover:border-[var(--color-yellow)]
                               hover:text-[var(--color-navy)] text-[var(--color-gray-300)]
                               transition-all duration-300"
                      aria-label={platform}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile: expand/collapse button + animated bio */}
            <div className="md:hidden">
              <button
                onClick={onToggle}
                className={`flex items-center gap-2 w-full py-2 font-[var(--font-accent)] text-xs font-semibold tracking-wider uppercase transition-colors
                          ${isOpen ? "text-[var(--color-yellow)]" : "text-[var(--color-gray-400)]"}`}
              >
                {isOpen ? "Zwiń" : "Poznaj trenera"}
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-[var(--font-body)] text-[var(--color-gray-300)] text-sm leading-relaxed mt-2 mb-4">
                      {trainer.bio}
                    </p>

                    {/* Socials */}
                    <div className="flex gap-2.5 pb-1">
                      {Object.entries(trainer.socials).map(([platform, url]) => {
                        const Icon = socialIcons[platform as keyof typeof socialIcons];
                        if (!Icon || !url) return null;
                        return (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-[var(--color-purple)]/20 border-2 border-[var(--color-purple)]/40
                                     flex items-center justify-center
                                     hover:bg-[var(--color-yellow)] hover:border-[var(--color-yellow)]
                                     hover:text-[var(--color-navy)] text-[var(--color-gray-300)]
                                     transition-all duration-300"
                            aria-label={platform}
                          >
                            <Icon size={14} />
                          </a>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
    </WipeReveal>
  );
}

/* ── Main section ── */
export default function Masters() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  function handleToggle(slug: string) {
    setOpenSlug((prev) => (prev === slug ? null : slug));
  }

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-32 px-4 sm:px-6 bg-[var(--color-navy)]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <WipeReveal delay={0} className="mb-12 md:mb-16 text-center">
          <span
            className="inline-block font-[var(--font-accent)] text-xs font-bold tracking-[0.2em] uppercase
                     text-[var(--color-navy)] bg-[var(--color-yellow)] px-3 py-1 rounded-full mb-4"
          >
            Poznaj nas
          </span>
          <h1
            className="font-[var(--font-heading)] text-4xl md:text-6xl lg:text-7xl
                     text-white leading-[1] mb-4"
          >
            NASZA{" "}
            <span
              className="text-[var(--color-yellow)]"
              style={{ textShadow: "0 0 40px rgba(251,191,36,0.3)" }}
            >
              KADRA
            </span>
          </h1>
          <p
            className="font-[var(--font-body)] text-[var(--color-gray-300)] text-sm md:text-base
                     max-w-lg mx-auto leading-relaxed"
          >
            <span className="hidden md:inline">
              Najedź na zdjęcie, żeby zobaczyć trick!
            </span>
            <span className="md:hidden">
              Dotknij „Poznaj trenera", żeby dowiedzieć się więcej!
            </span>
          </p>
        </WipeReveal>

        {/* Trainer cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {TRAINERS.map((trainer, i) => (
            <TrainerCard
              key={trainer.slug}
              trainer={trainer}
              isOpen={openSlug === trainer.slug}
              onToggle={() => handleToggle(trainer.slug)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
