"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TRAINERS } from "@/lib/data";

export default function KadraPreview() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-28 px-6 bg-[var(--color-navy)]">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-purple)]/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-block font-[var(--font-accent)] text-[11px] tracking-[0.2em] uppercase
                         text-[var(--color-navy)] bg-[var(--color-yellow)] px-3 py-1 rounded-full font-bold">
            Kadra
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-[var(--font-heading)] text-2xl md:text-5xl
                   text-white leading-[1.1] max-w-3xl mb-4"
        >
          Poznaj naszych{" "}
          <span className="text-[var(--color-yellow)]" style={{ textShadow: "0 0 30px rgba(251,191,36,0.3)" }}>
            trenerów
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-[var(--font-body)] text-[var(--color-gray-300)] text-sm md:text-base
                   leading-relaxed max-w-xl mb-10 md:mb-14"
        >
          Doświadczeni zawodnicy i pedagodzy, którzy wiedzą jak wydobyć potencjał z każdego dziecka.
        </motion.p>

        {/* Trainer cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-10">
          {TRAINERS.map((trainer, i) => (
            <motion.div
              key={trainer.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="relative rounded-2xl bg-[var(--color-navy-light)]
                        border-2 border-[var(--color-purple)]/30 overflow-hidden
                        hover:border-[var(--color-purple)] transition-all duration-500
                        hover:shadow-[0_0_25px_rgba(124,58,237,0.15)]"
            >
              {/* Photo */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-[var(--color-navy-lighter)]"
                  style={{ backgroundImage: `url(${trainer.photo})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-light)] via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-5 -mt-12 relative z-10">
                <h3 className="font-[var(--font-heading)] text-lg text-white mb-0.5">
                  {trainer.name}
                </h3>
                <span className="font-[var(--font-accent)] text-[10px] font-bold tracking-wider uppercase text-[var(--color-yellow)]">
                  {trainer.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/kadra"
            className="inline-flex items-center gap-2 font-[var(--font-accent)] text-sm font-bold
                     tracking-wider uppercase text-[var(--color-yellow)] hover:text-white
                     transition-colors group"
          >
            Poznaj całą kadrę
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
