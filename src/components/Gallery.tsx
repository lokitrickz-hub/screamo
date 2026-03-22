"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Play, Image as ImageIcon } from "lucide-react";
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
      className="fixed inset-0 z-[200] bg-[rgba(5,5,5,0.95)] backdrop-blur-xl
               flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 md:top-6 md:right-6 p-2
                 text-[var(--color-gray-400)] hover:text-[var(--color-lime)]
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
        transition={{ duration: 0.3 }}
        className="max-w-5xl w-full max-h-[85vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          <div
            className="w-full h-[70vh] bg-cover bg-center rounded-sm bg-[var(--color-gray-800)]"
            style={{ backgroundImage: `url(${item.src})` }}
          />
        ) : (
          <div className="w-full aspect-video">
            <iframe
              src={`${item.src}?autoplay=1`}
              className="w-full h-full rounded-sm"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={item.alt}
            />
          </div>
        )}
        <p className="mt-3 text-center font-[var(--font-accent)] text-sm text-[var(--color-gray-400)]">
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
    <section id="gallery" className="relative py-16 md:py-32 px-4 md:px-6">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-lime)]/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="mb-10 md:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase
                     text-[var(--color-lime)] mb-3 block"
          >
            Galeria
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-[var(--font-heading)] font-black text-3xl md:text-6xl lg:text-7xl
                     text-white leading-[0.95]"
          >
            MEDIA<br />
            <span className="text-[var(--color-lime)]">WALL</span>
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
              className={`relative overflow-hidden rounded-sm cursor-pointer group
                       bg-[var(--color-gray-800)] ${getSpanClasses(item.span)}`}
              onClick={() => setLightboxItem(item)}
            >
              {/* Thumbnail */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700
                         group-hover:scale-110"
                style={{ backgroundImage: `url(${item.thumbnail})` }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[rgba(5,5,5,0.5)] opacity-0 group-hover:opacity-100
                           transition-opacity duration-300 flex items-center justify-center">
                {item.type === "video" ? (
                  <div className="w-14 h-14 rounded-full bg-[var(--color-lime)] flex items-center justify-center
                               shadow-[0_0_30px_rgba(217,255,0,0.3)]">
                    <Play size={22} className="text-[#050505] ml-0.5" fill="#050505" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center
                               border border-white/20">
                    <ImageIcon size={16} className="text-white" />
                  </div>
                )}
              </div>

              {/* Video badge */}
              {item.type === "video" && (
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5
                             bg-[rgba(5,5,5,0.7)] backdrop-blur-sm px-2 py-1 rounded-sm">
                  <Play size={10} className="text-[var(--color-lime)]" fill="var(--color-lime)" />
                  <span className="font-[var(--font-accent)] text-[9px] tracking-wider text-[var(--color-gray-300)] uppercase">
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
