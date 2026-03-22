"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import { ArrowRight, Calendar, Play } from "lucide-react";
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
    <section id="news" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-lime)]/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16">
        {/* Section header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase
                       text-[var(--color-lime)] mb-3 block"
            >
              Aktualności
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-[var(--font-heading)] font-black text-4xl md:text-6xl lg:text-7xl
                       text-white leading-[0.95]"
            >
              SĄDECCZYZNA<br />
              <span className="text-[var(--color-lime)]">NEWS</span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            href="#"
            className="inline-flex items-center gap-2 font-[var(--font-accent)] text-xs
                     tracking-wider uppercase text-[var(--color-gray-400)]
                     hover:text-[var(--color-lime)] transition-colors group"
          >
            Wszystkie aktualności
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>

      {/* Swiper slider */}
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
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
                {...(item.youtube ? { onClick: () => window.open(item.youtube, "_blank") } : {})}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-sm aspect-[16/10] mb-4
                             bg-[var(--color-gray-800)]">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-[var(--color-gray-700)]
                             group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />

                  {/* Play icon for YouTube items */}
                  {item.youtube && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[var(--color-lime)] flex items-center justify-center
                                    group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/40">
                        <Play size={22} className="text-[#050505] ml-1" fill="#050505" />
                      </div>
                    </div>
                  )}

                  {/* Tag */}
                  <span className="absolute top-3 left-3 font-[var(--font-accent)] text-[10px]
                               tracking-[0.15em] uppercase bg-[var(--color-lime)] text-[#050505]
                               px-2.5 py-1 rounded-sm font-semibold">
                    {item.tag}
                  </span>
                </div>

                {/* Info */}
                <div className="flex items-center gap-2 mb-2 text-[var(--color-gray-500)]">
                  <Calendar size={12} />
                  <span className="font-[var(--font-accent)] text-[11px] tracking-wider">
                    {formatDate(item.date)}
                  </span>
                </div>
                <h3 className="font-[var(--font-heading)] font-bold text-lg text-white
                             group-hover:text-[var(--color-lime)] transition-colors duration-300 mb-2">
                  {item.title}
                </h3>
                <p className="font-[var(--font-body)] text-sm text-[var(--color-gray-400)] leading-relaxed line-clamp-2">
                  {item.excerpt}
                </p>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
