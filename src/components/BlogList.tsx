"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Calendar, Play, Tag } from "lucide-react";
import { NEWS_ITEMS } from "@/lib/data";
import Link from "next/link";

export default function BlogList() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("pl-PL", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Sort by date descending
  const sortedNews = [...NEWS_ITEMS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-32 px-6 bg-[var(--color-navy)] min-h-screen">
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
            className="inline-flex items-center gap-2 font-[var(--font-accent)] text-xs font-semibold
                     tracking-wider uppercase text-[var(--color-gray-400)]
                     hover:text-[var(--color-yellow)] transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Powrót na stronę główną
          </Link>
        </motion.div>

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
            className="font-[var(--font-heading)] text-4xl md:text-6xl lg:text-7xl
                     text-white leading-[1] mb-4"
          >
            AKTUALNOŚCI{" "}
            <span
              className="text-[var(--color-yellow)]"
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

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {sortedNews.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
              {...(item.youtube
                ? { onClick: () => window.open(item.youtube, "_blank") }
                : {})}
            >
              <div
                className="relative overflow-hidden rounded-2xl bg-[var(--color-navy-light)]
                         border-2 border-[var(--color-purple)]/20
                         hover:border-[var(--color-purple)] transition-all duration-300
                         hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-[var(--color-navy-lighter)]
                             group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-light)] via-transparent to-transparent" />

                  {/* Play icon */}
                  {item.youtube && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-14 h-14 rounded-full bg-[var(--color-yellow)] flex items-center justify-center
                                  group-hover:scale-110 transition-transform duration-300
                                  shadow-[0_0_25px_rgba(251,191,36,0.4)]"
                      >
                        <Play
                          size={22}
                          className="text-[var(--color-navy)] ml-1"
                          fill="var(--color-navy)"
                        />
                      </div>
                    </div>
                  )}

                  {/* Tag badge */}
                  <span
                    className="absolute top-4 left-4 inline-flex items-center gap-1.5
                             font-[var(--font-accent)] text-[10px] tracking-[0.15em] uppercase
                             bg-[var(--color-yellow)] text-[var(--color-navy)]
                             px-2.5 py-1 rounded-full font-bold"
                  >
                    <Tag size={10} />
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3 text-[var(--color-purple-light)]">
                    <Calendar size={12} />
                    <span className="font-[var(--font-accent)] text-[11px] tracking-wider font-medium">
                      {formatDate(item.date)}
                    </span>
                  </div>

                  <h2
                    className="font-[var(--font-heading)] text-lg md:text-xl text-white
                             group-hover:text-[var(--color-yellow)] transition-colors duration-300 mb-3"
                  >
                    {item.title}
                  </h2>

                  <p className="font-[var(--font-body)] text-sm text-[var(--color-gray-400)] leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
