"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Youtube, Facebook, Sparkles, ArrowLeft } from "lucide-react";
import { TRAINERS, type Trainer } from "@/lib/data";
import Link from "next/link";

function TrainerCard({ trainer, index }: { trainer: Trainer; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const socialIcons = {
    instagram: Instagram,
    youtube: Youtube,
    facebook: Facebook,
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
        !isEven ? "md:direction-rtl" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Photo / Video side */}
      <motion.div
        animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 15, mass: 0.8 }}
        className={isEven ? "" : "md:order-2"}
      >
        <div
          className={`relative overflow-hidden rounded-2xl aspect-[4/5]
                    bg-[var(--color-navy-light)]
                    border-4 border-[var(--color-purple)]
                    transition-shadow duration-500
                    ${isHovered ? "glow-pulse shadow-[0_0_40px_rgba(124,58,237,0.4)]" : "shadow-lg"}`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center bg-[var(--color-navy-lighter)] transition-opacity duration-700 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
            style={{ backgroundImage: `url(${trainer.photo})` }}
          />

          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            src={trainer.video}
            muted
            loop
            playsInline
            preload="none"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/60 via-transparent to-transparent" />

          {/* Trick label */}
          <motion.div
            initial={false}
            animate={
              isHovered
                ? { opacity: 1, scale: 1, rotate: -2 }
                : { opacity: 0, scale: 0.5, rotate: 10 }
            }
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            className="absolute top-4 right-4 bg-[var(--color-yellow)] text-[var(--color-navy)]
                     font-[var(--font-heading)] text-xs px-3 py-1.5 rounded-lg
                     shadow-[0_0_15px_rgba(251,191,36,0.4)]"
          >
            {trainer.trick}
          </motion.div>

          {/* Sparkle */}
          <motion.div
            initial={false}
            animate={isHovered ? { opacity: 1, rotate: 15 } : { opacity: 0, rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-12 right-16"
          >
            <Sparkles size={18} className="text-[var(--color-yellow)]" fill="currentColor" />
          </motion.div>
        </div>
      </motion.div>

      {/* Info side */}
      <div className={isEven ? "" : "md:order-1"}>
        <span
          className="inline-block font-[var(--font-accent)] text-[10px] tracking-[0.15em] uppercase font-bold
                    text-[var(--color-yellow)] bg-[var(--color-navy-light)] backdrop-blur-sm
                    px-3 py-1.5 border-2 border-[var(--color-yellow)]/30 rounded-lg mb-4"
        >
          {trainer.role}
        </span>

        <h3
          className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-white mb-4"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
        >
          {trainer.name}
        </h3>

        <p className="font-[var(--font-body)] text-[var(--color-gray-300)] text-sm md:text-base leading-relaxed mb-6">
          {trainer.bio}
        </p>

        {/* Social icons */}
        <div className="flex gap-3">
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
    </motion.div>
  );
}

export default function Masters() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-32 px-6 bg-[var(--color-navy)]">
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
        <div ref={headerRef} className="mb-16 md:mb-24 text-center">
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
            Trenerzy z pasją, doświadczeniem i sercem do sportu. Najedź na zdjęcie, żeby zobaczyć ich flagowy trick!
          </motion.p>
        </div>

        {/* Full trainer profiles */}
        <div className="space-y-16 md:space-y-24">
          {TRAINERS.map((trainer, i) => (
            <TrainerCard key={trainer.name} trainer={trainer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
