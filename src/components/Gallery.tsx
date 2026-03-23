"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Play, Image as ImageIcon, Camera } from "lucide-react";
import { GALLERY_ITEMS, type GalleryItem } from "@/lib/data";

function LightboxModal({
  item,
  onClose,
}: {
  item: GalleryItem;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] bg-[rgba(16,23,42,0.95)] backdrop-blur-xl
               flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 md:top-6 md:right-6 p-2
                 text-[var(--color-gray-400)] hover:text-[var(--color-yellow)]
                 transition-colors z-10"
        onClick={onClose}
        aria-label="Zamknij"
      >
        <X size={28} />
      </button>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="max-w-5xl w-full max-h-[85vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          <div
            className="w-full h-[70vh] bg-cover bg-center rounded-2xl bg-[var(--color-navy-light)]
                     border-4 border-[var(--color-purple)]"
            style={{ backgroundImage: `url(${item.src})` }}
          />
        ) : (
          <div className="w-full aspect-video">
            <iframe
              src={`${item.src}?autoplay=1`}
              className="w-full h-full rounded-2xl border-4 border-[var(--color-purple)]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={item.alt}
            />
          </div>
        )}
        <p className="mt-3 text-center font-[var(--font-accent)] text-sm text-[var(--color-gray-300)] font-medium">
          {item.alt}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const closeLightbox = useCallback(() => setLightboxItem(null), []);

  const getSpanClasses = (span?: string) => {
    switch (span) {
      case "wide":
        return "md:col-span-2";
      case "tall":
        return "md:row-span-2";
      case "large":
        return "md:col-span-2 md:row-span-2";
      default:
        return "";
    }
  };

  return (
    <section id="gallery" className="relative py-16 md:py-32 px-4 md:px-6 bg-[var(--color-navy)]">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--color-purple)] via-[var(--color-yellow)] to-[var(--color-purple)]" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="mb-10 md:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-[var(--font-accent)] text-xs font-bold tracking-[0.2em] uppercase
                     text-[var(--color-navy)] bg-[var(--color-yellow)] px-3 py-1 rounded-full mb-4"
          >
            <Camera size={12} />
            Galeria
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-[var(--font-heading)] text-3xl md:text-6xl lg:text-7xl
                     text-white leading-[1]"
          >
            MEDIA<br />
            <span className="text-[var(--color-yellow)]"
                  style={{ textShadow: "0 0 30px rgba(251,191,36,0.3)" }}>
              WALL
            </span>
          </motion.h2>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[240px]">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group
                       bg-[var(--color-navy-light)] border-2 border-[var(--color-purple)]/20
                       hover:border-[var(--color-yellow)] transition-colors duration-300
                       ${getSpanClasses(item.span)}`}
              onClick={() => setLightboxItem(item)}
            >
              {/* Thumbnail */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700
                         group-hover:scale-110"
                style={{ backgroundImage: `url(${item.thumbnail})` }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[rgba(16,23,42,0.5)] opacity-0 group-hover:opacity-100
                           transition-opacity duration-300 flex items-center justify-center">
                {item.type === "video" ? (
                  <div className="w-14 h-14 rounded-full bg-[var(--color-yellow)] flex items-center justify-center
                               shadow-[0_0_30px_rgba(251,191,36,0.4)]">
                    <Play size={22} className="text-[var(--color-navy)] ml-0.5" fill="var(--color-navy)" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[var(--color-purple)]/40 backdrop-blur-sm flex items-center justify-center
                               border-2 border-[var(--color-purple)]">
                    <ImageIcon size={16} className="text-white" />
                  </div>
                )}
              </div>

              {/* Video badge */}
              {item.type === "video" && (
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5
                             bg-[var(--color-navy)]/80 backdrop-blur-sm px-2 py-1 rounded-full
                             border border-[var(--color-yellow)]/30">
                  <Play size={10} className="text-[var(--color-yellow)]" fill="var(--color-yellow)" />
                  <span className="font-[var(--font-accent)] text-[9px] tracking-wider text-[var(--color-yellow)] uppercase font-bold">
                    Video
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <LightboxModal item={lightboxItem} onClose={closeLightbox} />
        )}
      </AnimatePresence>
    </section>
  );
}
