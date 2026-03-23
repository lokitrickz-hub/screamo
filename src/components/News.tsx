"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import { ArrowRight, Calendar, Play, MessageCircle } from "lucide-react";
import { NEWS_ITEMS } from "@/lib/data";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

export default function News() {
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

  return (
    <section id="news" className="relative py-16 md:py-32 overflow-hidden bg-[var(--color-navy)]">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--color-yellow)] via-[var(--color-purple)] to-[var(--color-yellow)]" />

      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16">
        {/* Section header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 font-[var(--font-accent)] text-xs font-bold tracking-[0.2em] uppercase
                       text-[var(--color-navy)] bg-[var(--color-yellow)] px-3 py-1 rounded-full mb-4"
            >
              <MessageCircle size={12} />
              Aktualnosci
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-[var(--font-heading)] text-3xl md:text-6xl lg:text-7xl
                       text-white leading-[1]"
            >
              SADECCZYZNA<br />
              <span className="text-[var(--color-yellow)]"
                    style={{ textShadow: "0 0 30px rgba(251,191,36,0.3)" }}>
                NEWS
              </span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            href="#"
            className="inline-flex items-center gap-2 font-[var(--font-accent)] text-xs font-semibold
                     tracking-wider uppercase text-[var(--color-purple-light)]
                     hover:text-[var(--color-yellow)] transition-colors group"
          >
            Wszystkie aktualnosci
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>

      {/* Swiper slider — speech bubble style cards */}
      <div className="pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
        <Swiper
          modules={[Pagination, FreeMode]}
          spaceBetween={20}
          slidesPerView={1.15}
          freeMode={{ enabled: true, sticky: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.3 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 3.5 },
          }}
          className="pb-14"
        >
          {NEWS_ITEMS.map((item, i) => (
            <SwiperSlide key={item.id}>
              {/* Speech bubble card — slides in from alternating sides */}
              <motion.article
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="group cursor-pointer"
                {...(item.youtube ? { onClick: () => window.open(item.youtube, "_blank") } : {})}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-4
                             bg-[var(--color-navy-light)] border-2 border-[var(--color-purple)]/30
                             group-hover:border-[var(--color-yellow)] transition-colors duration-300">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-[var(--color-navy-lighter)]
                             group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/60 to-transparent" />

                  {/* Play icon for YouTube items */}
                  {item.youtube && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[var(--color-yellow)] flex items-center justify-center
                                    group-hover:scale-110 transition-transform duration-300
                                    shadow-[0_0_25px_rgba(251,191,36,0.4)]">
                        <Play size={22} className="text-[var(--color-navy)] ml-1" fill="var(--color-navy)" />
                      </div>
                    </div>
                  )}

                  {/* Tag */}
                  <span className="absolute top-3 left-3 font-[var(--font-accent)] text-[10px]
                               tracking-[0.15em] uppercase bg-[var(--color-yellow)] text-[var(--color-navy)]
                               px-2.5 py-1 rounded-full font-bold">
                    {item.tag}
                  </span>
                </div>

                {/* Speech bubble info area */}
                <div className={`relative bg-[var(--color-navy-light)] rounded-2xl p-4
                              border-2 border-[var(--color-purple)]/20
                              group-hover:border-[var(--color-purple)]/50
                              transition-colors duration-300
                              speech-bubble ${i % 2 !== 0 ? "speech-bubble-right" : ""}`}>
                  {/* Date */}
                  <div className="flex items-center gap-2 mb-2 text-[var(--color-purple-light)]">
                    <Calendar size={12} />
                    <span className="font-[var(--font-accent)] text-[11px] tracking-wider font-medium">
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-heading)] text-base text-white
                               group-hover:text-[var(--color-yellow)] transition-colors duration-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-[var(--font-body)] text-sm text-[var(--color-gray-400)] leading-relaxed line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
