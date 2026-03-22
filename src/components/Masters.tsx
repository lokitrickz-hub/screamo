"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Youtube, Facebook } from "lucide-react";
import { TRAINERS, type Trainer } from "@/lib/data";

function TrainerCard({ trainer, index }: { trainer: Trainer; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card */}
      <div className="relative overflow-hidden rounded-sm aspect-[3/4]
                    bg-[var(--color-gray-800)] border border-[var(--color-glass-border)]">
        {/* Static photo */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-[var(--color-gray-700)] transition-opacity duration-700 ${
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

        {/* Trick label — appears on hover */}
        <motion.div
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4 bg-[var(--color-lime)] text-[#050505]
                   font-[var(--font-accent)] font-semibold text-xs tracking-wider
                   px-3 py-1.5 rounded-sm"
        >
          {trainer.trick}
        </motion.div>

        {/* Role badge */}
        <div className="absolute top-4 left-4">
          <span className="font-[var(--font-accent)] text-[10px] tracking-[0.15em] uppercase
                        text-[var(--color-lime)] bg-[rgba(217,255,0,0.08)] backdrop-blur-sm
                        px-3 py-1 border border-[rgba(217,255,0,0.15)] rounded-sm">
            {trainer.role}
          </span>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-[var(--font-heading)] font-bold text-xl md:text-2xl text-white mb-1">
            {trainer.name}
          </h3>
          <p className="font-[var(--font-body)] text-xs text-[var(--color-gray-400)] leading-relaxed mb-3
                      line-clamp-2 group-hover:line-clamp-none transition-all">
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
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10
                           flex items-center justify-center
                           hover:bg-[var(--color-lime)] hover:border-[var(--color-lime)]
                           hover:text-[#050505] text-[var(--color-gray-400)]
                           transition-all duration-300"
                  aria-label={platform}
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Masters() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="masters" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase
                     text-[var(--color-lime)] mb-3 block"
          >
            Kadra
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-[var(--font-heading)] font-black text-4xl md:text-6xl lg:text-7xl
                     text-white leading-[0.95]"
          >
            THE<br />
            <span className="text-[var(--color-lime)]">MASTERS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-[var(--font-body)] text-[var(--color-gray-400)] text-sm md:text-base
                     mt-4 max-w-md leading-relaxed"
          >
            Poznaj naszą kadrę trenerską. Najedź na kartę, żeby zobaczyć ich flagowy trick w akcji.
          </motion.p>
        </div>

        {/* Trainer cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TRAINERS.map((trainer, i) => (
            <TrainerCard key={trainer.name} trainer={trainer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
