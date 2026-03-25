"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { TIMELINE } from "@/lib/data";

function TimelineItem({
  event,
  index,
}: {
  event: (typeof TIMELINE)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-6 md:gap-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.95 }}
        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`flex-1 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}
      >
        <div
          className={`bg-[var(--color-navy-light)] backdrop-blur-sm border-2 border-[var(--color-purple)]/20
                    rounded-2xl p-4 sm:p-6 md:p-8 ${
                      event.highlight
                        ? "border-[var(--color-purple)]/40 shadow-[0_0_30px_rgba(124,58,237,0.1)]"
                        : ""
                    }`}
        >
          <span
            className={`font-[var(--font-heading)] text-sm ${
              event.highlight ? "text-[var(--color-yellow)]" : "text-[var(--color-gray-400)]"
            }`}
          >
            {event.label}
          </span>

          <h3 className="font-[var(--font-heading)] text-xl md:text-2xl text-white mt-2 mb-3">
            {event.title}
          </h3>

          <p className="font-[var(--font-body)] text-sm text-[var(--color-gray-300)] leading-relaxed">
            {event.description}
          </p>

          {event.image && (
            <div className="mt-4 rounded-xl overflow-hidden bg-[var(--color-navy-lighter)] border border-[var(--color-purple)]/20">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-auto block"
              />
            </div>
          )}
        </div>
      </motion.div>

      {/* Center dot — desktop */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0 w-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`w-4 h-4 rounded-full border-2 mt-8 ${
            event.highlight
              ? "bg-[var(--color-yellow)] border-[var(--color-yellow)] shadow-[0_0_12px_rgba(251,191,36,0.4)]"
              : "bg-[var(--color-navy-light)] border-[var(--color-gray-600)]"
          }`}
        />
      </div>

      {/* Mobile dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
        className={`md:hidden absolute left-0 top-8 w-3 h-3 rounded-full border-2 -translate-x-[7px] ${
          event.highlight
            ? "bg-[var(--color-yellow)] border-[var(--color-yellow)]"
            : "bg-[var(--color-navy-light)] border-[var(--color-gray-600)]"
        }`}
      />

      {/* Spacer — desktop */}
      <div className="hidden md:block flex-1" />
    </div>
  );
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative pt-28 md:pt-36 pb-24 md:pb-32 px-4 sm:px-6 min-h-screen bg-[var(--color-navy)]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="mb-20 md:mb-24 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block font-[var(--font-accent)] text-xs font-bold tracking-[0.2em] uppercase
                     text-[var(--color-navy)] bg-[var(--color-yellow)] px-3 py-1 rounded-full mb-4"
          >
            Od 2011 roku
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-[var(--font-heading)] text-4xl md:text-6xl lg:text-7xl
                     text-white leading-[1] mb-4"
          >
            NASZA{" "}
            <span className="text-[var(--color-yellow)]"
                  style={{ textShadow: "0 0 30px rgba(251,191,36,0.3)" }}>
              HISTORIA
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-[var(--font-body)] text-[var(--color-gray-300)] text-sm md:text-base
                     max-w-lg mx-auto leading-relaxed"
          >
            Poznaj drogę ScreamoTrickz — od pasji na sądeckich murkach po wielkie sceny i międzynarodowe sukcesy.
          </motion.p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative pl-4 sm:pl-6 md:pl-0">
          {/* Vertical line — desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="absolute inset-0 bg-[var(--color-navy-lighter)]" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[var(--color-yellow)] to-[var(--color-purple)]/40"
            />
          </div>

          {/* Vertical line — mobile */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-px">
            <div className="absolute inset-0 bg-[var(--color-navy-lighter)]" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[var(--color-yellow)] to-[var(--color-purple)]/40"
            />
          </div>

          {/* Events */}
          <div className="space-y-12 md:space-y-16">
            {TIMELINE.map((event, i) => (
              <TimelineItem key={event.label} event={event} index={i} />
            ))}
          </div>
        </div>

        {/* End marker + CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-[var(--color-navy-light)]
                       border-2 border-[var(--color-yellow)]/30 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[var(--color-yellow)] animate-pulse" />
            <span className="font-[var(--font-heading)] text-sm text-[var(--color-yellow)]">
              Historia trwa...
            </span>
          </div>
          <p className="font-[var(--font-body)] text-sm text-[var(--color-gray-400)] mb-5">
            Chcesz być częścią tej historii?
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-[var(--color-yellow)] text-[var(--color-navy)]
                     font-[var(--font-heading)] text-sm px-7 py-3 rounded-full
                     hover:bg-[var(--color-yellow-dark)] hover:scale-105
                     shadow-[0_0_25px_rgba(251,191,36,0.3)] transition-all duration-300"
          >
            Dołącz do nas!
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
