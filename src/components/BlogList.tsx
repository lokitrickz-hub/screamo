"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Play, Tag, ChevronDown, X } from "lucide-react";
import { NEWS_ITEMS } from "@/lib/data";
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
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const sortedNews = [...NEWS_ITEMS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featured = sortedNews[0];
  const rest = sortedNews.slice(1);

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-32 px-6 bg-[var(--color-navy)] min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <WipeReveal delay={0} className="mb-12 md:mb-16">
          <span
            className="inline-block font-[var(--font-accent)] text-xs font-bold tracking-[0.2em] uppercase
                     text-[var(--color-navy)] bg-[var(--color-yellow)] px-3 py-1 rounded-full mb-4"
          >
            Blog
          </span>
          <h1
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
          </h1>
          <p
            className="font-[var(--font-body)] text-[var(--color-gray-300)] text-sm md:text-base
                     max-w-lg leading-relaxed"
          >
            Co słychać w ScreamoTrickz? Relacje z zawodów, nowe nabory i najważniejsze wydarzenia.
          </p>
        </WipeReveal>

        {/* Featured article — hero card */}
        {featured && (
          <WipeReveal
            delay={0}
            className="rounded-2xl mb-8 md:mb-12"
          >
          <article
            className="group cursor-pointer"
            onClick={() => {
              if (featured.youtube) {
                window.open(featured.youtube, "_blank");
              } else {
                toggleExpand(featured.id);
              }
            }}
          >
            <div
              className={`relative overflow-hidden rounded-2xl bg-[var(--color-navy-light)]
                       border-2 transition-all duration-500
                       ${expandedId === featured.id
                         ? "border-[var(--color-yellow)] shadow-[0_0_40px_rgba(251,191,36,0.15)]"
                         : "border-[var(--color-purple)]/20 hover:border-[var(--color-yellow)] hover:shadow-[0_0_40px_rgba(251,191,36,0.1)]"
                       }`}
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

                  <p className="font-[var(--font-body)] text-sm md:text-base text-[var(--color-gray-300)] leading-relaxed mb-4">
                    {featured.excerpt}
                  </p>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {expandedId === featured.id && featured.content && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="font-[var(--font-body)] text-sm md:text-base text-[var(--color-gray-300)] leading-relaxed
                                   border-t border-[var(--color-purple)]/20 pt-4 mb-2">
                          {featured.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <span className="inline-flex items-center gap-2 font-[var(--font-accent)] text-xs font-bold
                               tracking-wider uppercase text-[var(--color-yellow)]
                               group-hover:gap-3 transition-all">
                    {expandedId === featured.id ? "Zwiń" : "Czytaj więcej"}
                    <motion.span
                      animate={{ rotate: expandedId === featured.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={14} />
                    </motion.span>
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
              delay={i * 0.1}
              className="rounded-2xl"
            >
            <article
              className="group cursor-pointer"
              onClick={() => {
                if (item.youtube) {
                  window.open(item.youtube, "_blank");
                } else {
                  toggleExpand(item.id);
                }
              }}
            >
              <div
                className={`relative overflow-hidden rounded-2xl bg-[var(--color-navy-light)]
                         border-2 transition-all duration-300
                         ${expandedId === item.id
                           ? "border-[var(--color-yellow)] shadow-[0_0_25px_rgba(251,191,36,0.12)]"
                           : "border-[var(--color-purple)]/20 hover:border-[var(--color-purple)] hover:shadow-[0_0_25px_rgba(124,58,237,0.12)]"
                         }`}
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

                    <p className={`font-[var(--font-body)] text-sm text-[var(--color-gray-400)] leading-relaxed
                               ${expandedId === item.id ? "" : "line-clamp-2"}`}>
                      {item.excerpt}
                    </p>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {expandedId === item.id && item.content && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="font-[var(--font-body)] text-sm text-[var(--color-gray-300)] leading-relaxed
                                     border-t border-[var(--color-purple)]/20 pt-3 mt-3">
                            {item.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Expand indicator */}
                  <div className="hidden md:flex items-center pr-6">
                    <motion.div
                      animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-colors duration-300 ${
                          expandedId === item.id
                            ? "text-[var(--color-yellow)]"
                            : "text-[var(--color-gray-600)] group-hover:text-[var(--color-yellow)]"
                        }`}
                      />
                    </motion.div>
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
