"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Play, Tag, ArrowUpRight } from "lucide-react";
import { NEWS_ITEMS } from "@/lib/data";
import Link from "next/link";
import WipeReveal from "./WipeReveal";

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default function BlogList() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  // Sort by date descending
  const sortedNews = [...NEWS_ITEMS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featured = sortedNews[0];
  const rest = sortedNews.slice(1);

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-32 px-6 bg-[var(--color-navy)] min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block font-[var(--font-accent)] text-xs font-bold tracking-[0.2em] uppercase
                     text-[var(--color-navy)] bg-[var(--color-yellow)] px-3 py-1 rounded-full mb-4"
          >
            Blog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-[var(--font-heading)] text-2xl sm:text-3xl md:text-5xl lg:text-6xl
                     text-white leading-[1.1] mb-4"
          >
            AKTUALNOŚCI{" "}
            <span
              className="text-[var(--color-yellow)] sm:whitespace-nowrap"
              style={{ textShadow: "0 0 30px rgba(251,191,36,0.3)" }}
            >
              &amp; WYDARZENIA
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-[var(--font-body)] text-[var(--color-gray-300)] text-sm md:text-base
                     max-w-lg leading-relaxed"
          >
            Co słychać w ScreamoTrickz? Relacje z zawodów, nowe nabory i najważniejsze wydarzenia.
          </motion.p>
        </div>

        {/* Featured article — hero card */}
        {featured && (
          <WipeReveal
            color="#DFFF00"
            delay={0}
            className="rounded-2xl mb-8 md:mb-12"
          >
          <article
            className="group cursor-pointer"
            {...(featured.youtube
              ? { onClick: () => window.open(featured.youtube, "_blank") }
              : {})}
          >
            <div
              className="relative overflow-hidden rounded-2xl bg-[var(--color-navy-light)]
                       border-2 border-[var(--color-purple)]/20
                       hover:border-[var(--color-yellow)] transition-all duration-500
                       hover:shadow-[0_0_40px_rgba(251,191,36,0.1)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-5">
                {/* Image — takes 3/5 */}
                <div className="relative md:col-span-3 aspect-[16/9] md:aspect-auto md:min-h-[400px] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-[var(--color-navy-lighter)]
                             group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${featured.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-navy-light)] hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-light)] to-transparent md:hidden" />

                  {featured.youtube && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[var(--color-yellow)] flex items-center justify-center
                                    group-hover:scale-110 transition-transform duration-300
                                    shadow-[0_0_30px_rgba(251,191,36,0.4)]">
                        <Play size={24} className="text-[var(--color-navy)] ml-1" fill="var(--color-navy)" />
                      </div>
                    </div>
                  )}

                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5
                               font-[var(--font-accent)] text-[10px] tracking-[0.15em] uppercase
                               bg-[var(--color-yellow)] text-[var(--color-navy)]
                               px-2.5 py-1 rounded-full font-bold">
                    <Tag size={10} />
                    {featured.tag}
                  </span>
                </div>

                {/* Content — takes 2/5 */}
                <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4 text-[var(--color-purple-light)]">
                    <Calendar size={12} />
                    <span className="font-[var(--font-accent)] text-[11px] tracking-wider font-medium">
                      {formatDate(featured.date)}
                    </span>
                  </div>

                  <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-white
                               group-hover:text-[var(--color-yellow)] transition-colors duration-300 mb-4">
                    {featured.title}
                  </h2>

                  <p className="font-[var(--font-body)] text-sm md:text-base text-[var(--color-gray-300)] leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 font-[var(--font-accent)] text-xs font-bold
                               tracking-wider uppercase text-[var(--color-yellow)]
                               group-hover:gap-3 transition-all">
                    Czytaj więcej
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </article>
          </WipeReveal>
        )}

        {/* Rest — horizontal cards */}
        <div className="space-y-4 md:space-y-5">
          {rest.map((item, i) => (
            <WipeReveal
              key={item.id}
              color={i % 2 === 0 ? "#DFFF00" : "#9F67FF"}
              delay={i * 0.1}
              className="rounded-2xl"
            >
            <article
              className="group cursor-pointer"
              {...(item.youtube
                ? { onClick: () => window.open(item.youtube, "_blank") }
                : {})}
            >
              <div
                className="relative overflow-hidden rounded-2xl bg-[var(--color-navy-light)]
                         border-2 border-[var(--color-purple)]/20
                         hover:border-[var(--color-purple)] transition-all duration-300
                         hover:shadow-[0_0_25px_rgba(124,58,237,0.12)]"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Thumbnail */}
                  <div className="relative sm:w-40 md:w-56 lg:w-64 flex-shrink-0 aspect-[16/9] sm:aspect-auto sm:min-h-[140px] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-[var(--color-navy-lighter)]
                               group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-light)] to-transparent sm:hidden" />

                    {item.youtube && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-[var(--color-yellow)]/90 flex items-center justify-center
                                      shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                          <Play size={16} className="text-[var(--color-navy)] ml-0.5" fill="var(--color-navy)" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 md:p-6 flex flex-col justify-center min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center gap-1 font-[var(--font-accent)] text-[9px] tracking-[0.15em] uppercase
                                     bg-[var(--color-purple)]/20 text-[var(--color-purple-light)]
                                     px-2 py-0.5 rounded-full font-bold border border-[var(--color-purple)]/30">
                        {item.tag}
                      </span>
                      <span className="flex items-center gap-1.5 text-[var(--color-gray-400)]">
                        <Calendar size={10} />
                        <span className="font-[var(--font-accent)] text-[10px] tracking-wider font-medium">
                          {formatDate(item.date)}
                        </span>
                      </span>
                    </div>

                    <h2 className="font-[var(--font-heading)] text-base md:text-lg text-white
                                 group-hover:text-[var(--color-yellow)] transition-colors duration-300 mb-1.5">
                      {item.title}
                    </h2>

                    <p className="font-[var(--font-body)] text-sm text-[var(--color-gray-400)] leading-relaxed
                               line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center pr-6">
                    <ArrowUpRight
                      size={18}
                      className="text-[var(--color-gray-600)] group-hover:text-[var(--color-yellow)]
                               group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                               transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </article>
            </WipeReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
