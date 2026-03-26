"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { TRAINERS, type Trainer } from "@/lib/data";
import Link from "next/link";
import WipeReveal from "./WipeReveal";

function TrainerPreviewCard({ trainer, index }: { trainer: Trainer; index: number }) {
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

  return (
    <WipeReveal delay={0.1 + index * 0.15}>
      <div
        className="group relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Spring Scale wrapper */}
        <motion.div
          animate={isHovered ? { scale: 1.04 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15, mass: 0.8 }}
        >
          <div
            className={`relative overflow-hidden rounded-2xl aspect-[3/4]
                      bg-[var(--color-navy-light)]
                      border-4 border-[var(--color-purple)]
                      transition-shadow duration-500
                      ${isHovered ? "glow-pulse shadow-[0_0_40px_rgba(124,58,237,0.4)]" : "shadow-lg"}`}
          >
            {/* Photo */}
            <div
              className={`absolute inset-0 bg-cover bg-center bg-[var(--color-navy-lighter)] transition-opacity duration-700 ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
              style={{ backgroundImage: `url(${trainer.photo})` }}
            />

            {/* Hover video */}
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

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-transparent to-transparent" />

            {/* Trick label — comic pop */}
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

            {/* Role badge */}
            <div className="absolute top-4 left-4">
              <span
                className="font-[var(--font-accent)] text-[10px] tracking-[0.1em] uppercase font-bold
                          text-[var(--color-yellow)] bg-[var(--color-navy)]/80 backdrop-blur-sm
                          px-3 py-1.5 border-2 border-[var(--color-yellow)]/30 rounded-lg"
              >
                {trainer.role}
              </span>
            </div>

            {/* Sparkle */}
            <motion.div
              initial={false}
              animate={isHovered ? { opacity: 1, rotate: 15 } : { opacity: 0, rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-12 right-16"
            >
              <Sparkles size={18} className="text-[var(--color-yellow)]" fill="currentColor" />
            </motion.div>

            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3
                className="font-[var(--font-heading)] text-xl md:text-2xl text-white mb-1"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
              >
                {trainer.name}
              </h3>
              <p className="font-[var(--font-body)] text-xs text-[var(--color-gray-300)] leading-relaxed line-clamp-2">
                {trainer.bio}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </WipeReveal>
  );
}

export default function MastersPreview() {
  return (
    <section className="relative py-16 md:py-32 px-6 bg-[var(--color-navy)]">
      {/* Decorative stripe */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--color-purple)] via-[var(--color-yellow)] to-[var(--color-purple)]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <WipeReveal delay={0} className="mb-10 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span
              className="inline-block font-[var(--font-accent)] text-xs font-bold tracking-[0.2em] uppercase
                       text-[var(--color-navy)] bg-[var(--color-yellow)] px-3 py-1 rounded-full mb-4"
            >
              Kadra
            </span>
            <h2
              className="font-[var(--font-heading)] text-3xl md:text-6xl lg:text-7xl
                       text-white leading-[1]"
            >
              THE{" "}
              <span
                className="text-[var(--color-yellow)]"
                style={{ textShadow: "0 0 40px rgba(251,191,36,0.3)" }}
              >
                MASTERS
              </span>
            </h2>
            <p
              className="font-[var(--font-body)] text-[var(--color-gray-300)] text-sm md:text-base
                       mt-4 max-w-md leading-relaxed"
            >
              Najedź na kartę, żeby zobaczyć flagowy trick w akcji.
            </p>
          </div>

          {/* CTA to full kadra page */}
          <Link
            href="/kadra"
            className="inline-flex items-center gap-2 font-[var(--font-accent)] text-sm font-bold
                     tracking-wider uppercase text-[var(--color-navy)] bg-[var(--color-yellow)]
                     px-6 py-3 rounded-full
                     hover:bg-[var(--color-yellow-dark)] hover:scale-105
                     transition-all duration-300 group"
          >
            Poznaj całą kadrę
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </WipeReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TRAINERS.map((trainer, i) => (
            <TrainerPreviewCard key={trainer.name} trainer={trainer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
