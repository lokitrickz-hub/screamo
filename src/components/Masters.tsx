"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Instagram, Youtube, Facebook, Sparkles, ArrowLeft, X } from "lucide-react";
import { TRAINERS, type Trainer } from "@/lib/data";
import Link from "next/link";

function TrainerTile({
  trainer,
  isActive,
  isSmall,
  onSelect,
  onClose,
}: {
  trainer: Trainer;
  isActive: boolean;
  isSmall: boolean;
  onSelect: () => void;
  onClose: () => void;
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

  return (
    <div
      onClick={() => { if (!isActive) onSelect(); }}
      onMouseEnter={handlePlay}
      onMouseLeave={handleStop}
      className={`relative overflow-hidden rounded-2xl border-4 border-[var(--color-purple)]
                cursor-pointer transition-shadow duration-500 h-full w-full
                ${isActive
                  ? "glow-pulse shadow-[0_0_40px_rgba(124,58,237,0.4)]"
                  : "hover:shadow-[0_0_30px_rgba(124,58,237,0.25)]"
                }`}
    >
      {/* Photo */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-[var(--color-navy-lighter)] transition-opacity duration-700
                  ${videoPlaying ? "opacity-0" : "opacity-100"}`}
        style={{ backgroundImage: `url(${trainer.photo})` }}
      />

      {/* Video */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
                  ${videoPlaying ? "opacity-100" : "opacity-0"}`}
        src={trainer.video}
        muted
        loop
        playsInline
        preload="none"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/30 to-transparent" />

      {/* Trick label on hover */}
      <motion.div
        initial={false}
        animate={videoPlaying ? { opacity: 1, scale: 1, rotate: -2 } : { opacity: 0, scale: 0.5, rotate: 10 }}
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

      {/* Close button when active */}
      {isActive && (
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-4 left-4 z-30 w-8 h-8 rounded-full bg-[var(--color-navy)]/80 backdrop-blur
                   flex items-center justify-center text-[var(--color-gray-300)] hover:text-[var(--color-yellow)]
                   border border-[var(--color-purple)]/40 transition-colors"
        >
          <X size={14} />
        </button>
      )}

      {/* Info overlay */}
      <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-6">
        <span
          className={`inline-block self-start font-[var(--font-accent)] text-[9px] tracking-[0.15em] uppercase font-bold
                    text-[var(--color-yellow)] bg-[var(--color-navy)]/60 backdrop-blur-sm
                    px-2.5 py-1 border border-[var(--color-yellow)]/30 rounded-lg mb-2
                    transition-opacity duration-300
                    ${isSmall ? "opacity-0" : "opacity-100"}`}
        >
          {trainer.role}
        </span>

        <h3
          className={`font-[var(--font-heading)] text-white transition-all duration-500
                    ${isSmall ? "text-base md:text-lg" : "text-xl md:text-2xl lg:text-3xl"}
                    ${isSmall ? "mb-0" : "mb-1"}`}
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
        >
          {trainer.name}
        </h3>

        {/* Bio — only when active */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="font-[var(--font-body)] text-[var(--color-gray-300)] text-sm leading-relaxed mt-3 mb-4">
                {trainer.bio}
              </p>

              {/* Social icons */}
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
                      onClick={(e) => e.stopPropagation()}
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
  );
}

export default function Masters() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const andrzej = TRAINERS[0]; // always left
  const mariusz = TRAINERS[1]; // always top-right
  const wiktoria = TRAINERS[2]; // always bottom-right

  // Dynamic grid proportions based on who's active
  // Columns: [left, right]  Rows: [top, bottom]
  function getColTemplate() {
    if (!activeSlug || activeSlug === andrzej.slug) return "3fr 2fr";
    // Mariusz or Wiktoria active → right column grows, left shrinks
    return "1.5fr 3fr";
  }

  function getRowTemplate() {
    if (!activeSlug || activeSlug === andrzej.slug) return "1fr 1fr";
    if (activeSlug === mariusz.slug) return "3fr 1fr"; // Mariusz grows
    return "1fr 3fr"; // Wiktoria grows
  }

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-32 px-4 sm:px-6 bg-[var(--color-navy)]">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-[var(--font-accent)] text-xs font-semibold
                     tracking-wider uppercase text-[var(--color-gray-400)]
                     hover:text-[var(--color-yellow)] transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Powrót na stronę główną
          </Link>
        </motion.div>

        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block font-[var(--font-accent)] text-xs font-bold tracking-[0.2em] uppercase
                     text-[var(--color-navy)] bg-[var(--color-yellow)] px-3 py-1 rounded-full mb-4"
          >
            Poznaj nas
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
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
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-[var(--font-body)] text-[var(--color-gray-300)] text-sm md:text-base
                     max-w-lg mx-auto leading-relaxed"
          >

            <span className="hidden md:inline">Kliknij w trenera, żeby poznać go bliżej. Najedź na zdjęcie, żeby zobaczyć trick!</span>
            <span className="md:hidden">Dotknij zdjęcie trenera, żeby poznać go bliżej!</span>

          </motion.p>
        </div>

        {/* Bento grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Mobile: stack vertically */}
          <div className="flex flex-col md:hidden gap-4">
            {TRAINERS.map((trainer) => {
              const isActive = activeSlug === trainer.slug;
              const isSmall = activeSlug !== null && !isActive;
              return (
                <div
                  key={trainer.slug}
                  className="w-full rounded-2xl overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ height: isActive ? 420 : isSmall ? 160 : 280 }}
                >
                  <TrainerTile
                    trainer={trainer}
                    isActive={isActive}
                    isSmall={isSmall}
                    onSelect={() => setActiveSlug(trainer.slug)}
                    onClose={() => setActiveSlug(null)}
                  />
                </div>
              );
            })}
          </div>

          {/* Desktop: bento grid — Andrzej left (row-span-2), Mariusz + Wiktoria right (stacked) */}
          <div
            className="hidden md:grid gap-5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              gridTemplateColumns: getColTemplate(),
              gridTemplateRows: getRowTemplate(),
              height: "min(85vh, 900px)",
            }}
          >
            {/* Andrzej — left, spans both rows */}
            <div className="row-span-2 rounded-2xl overflow-hidden">
              <TrainerTile
                trainer={andrzej}
                isActive={activeSlug === andrzej.slug}
                isSmall={activeSlug !== null && activeSlug !== andrzej.slug}
                onSelect={() => setActiveSlug(andrzej.slug)}
                onClose={() => setActiveSlug(null)}
              />
            </div>

            {/* Mariusz — top-right */}
            <div className="rounded-2xl overflow-hidden">
              <TrainerTile
                trainer={mariusz}
                isActive={activeSlug === mariusz.slug}
                isSmall={activeSlug !== null && activeSlug !== mariusz.slug}
                onSelect={() => setActiveSlug(mariusz.slug)}
                onClose={() => setActiveSlug(null)}
              />
            </div>

            {/* Wiktoria — bottom-right */}
            <div className="rounded-2xl overflow-hidden">
              <TrainerTile
                trainer={wiktoria}
                isActive={activeSlug === wiktoria.slug}
                isSmall={activeSlug !== null && activeSlug !== wiktoria.slug}
                onSelect={() => setActiveSlug(wiktoria.slug)}
                onClose={() => setActiveSlug(null)}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
