"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Image as ImageIcon } from "lucide-react";
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
        animate={
          isInView
            ? { opacity: 1, x: 0, scale: 1 }
            : {}
        }
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`flex-1 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}
      >
        <div
          className={`bg-[var(--color-glass)] backdrop-blur-sm border border-[var(--color-glass-border)]
                    rounded-sm p-6 md:p-8 ${
                      event.highlight
                        ? "border-[rgba(217,255,0,0.15)] shadow-[0_0_40px_rgba(217,255,0,0.03)]"
                        : ""
                    }`}
        >
          {/* Year */}
          <span
            className={`font-[var(--font-accent)] text-sm font-semibold tracking-wider
                      ${event.highlight ? "text-[var(--color-lime)]" : "text-[var(--color-gray-500)]"}`}
          >
            {event.year}
          </span>

          <h3 className="font-[var(--font-heading)] font-bold text-xl md:text-2xl text-white mt-2 mb-3">
            {event.title}
          </h3>

          <p className="font-[var(--font-body)] text-sm text-[var(--color-gray-400)] leading-relaxed">
            {event.description}
          </p>

          {/* Optional image */}
          {event.image && (
            <div className="mt-4 aspect-video rounded-sm overflow-hidden bg-[var(--color-gray-800)] relative">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
              />
            </div>
          )}
        </div>
      </motion.div>

      {/* Center dot — desktop only */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0 w-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`w-4 h-4 rounded-full border-2 mt-8 ${
            event.highlight
              ? "bg-[var(--color-lime)] border-[var(--color-lime)] shadow-[0_0_12px_rgba(217,255,0,0.4)]"
              : "bg-[var(--color-gray-800)] border-[var(--color-gray-600)]"
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
            ? "bg-[var(--color-lime)] border-[var(--color-lime)]"
            : "bg-[var(--color-gray-800)] border-[var(--color-gray-600)]"
        }`}
      />

      {/* Spacer for other side — desktop only */}
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
    <section className="relative pt-28 md:pt-36 pb-24 md:pb-32 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-[var(--font-accent)] text-xs
                     tracking-wider uppercase text-[var(--color-gray-400)]
                     hover:text-[var(--color-lime)] transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Powrót na stronę główną
          </Link>
        </motion.div>

        {/* Header */}
        <div ref={headerRef} className="mb-20 md:mb-24 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase
                     text-[var(--color-lime)] mb-3 block"
          >
            Od 2011 roku
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-[var(--font-heading)] font-black text-4xl md:text-6xl lg:text-7xl
                     text-white leading-[0.95] mb-4"
          >
            NASZA<br />
            <span className="text-[var(--color-lime)]">HISTORIA</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-[var(--font-body)] text-[var(--color-gray-400)] text-sm md:text-base
                     max-w-lg mx-auto leading-relaxed"
          >
            Poznaj drogę ScreamoTrickz — od pierwszych salta w parku po scenę ogólnopolską.
          </motion.p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative pl-6 md:pl-0">
          {/* Vertical line — desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="absolute inset-0 bg-[var(--color-gray-800)]" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[var(--color-lime)] to-[var(--color-lime)]/20"
            />
          </div>

          {/* Vertical line — mobile */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-px">
            <div className="absolute inset-0 bg-[var(--color-gray-800)]" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[var(--color-lime)] to-[var(--color-lime)]/20"
            />
          </div>

          {/* Events */}
          <div className="space-y-12 md:space-y-16">
            {TIMELINE.map((event, i) => (
              <TimelineItem key={event.year} event={event} index={i} />
            ))}
          </div>
        </div>

        {/* End marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-[var(--color-glass)] backdrop-blur-sm
                       border border-[rgba(217,255,0,0.15)] rounded-sm px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-[var(--color-lime)] animate-pulse" />
            <span className="font-[var(--font-accent)] text-sm text-[var(--color-lime)] font-medium">
              Historia trwa...
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
