"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Youtube,
  Facebook,
  Send,
} from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/data";

export default function Contact() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-32 px-4 sm:px-6 bg-[var(--color-navy)] min-h-screen">
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
            Kontakt
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-[var(--font-heading)] text-4xl md:text-6xl lg:text-7xl
                     text-white leading-[1] mb-4"
          >
            DOŁĄCZ DO{" "}
            <span
              className="text-[var(--color-yellow)]"
              style={{ textShadow: "0 0 30px rgba(251,191,36,0.3)" }}
            >
              NAS
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-[var(--font-body)] text-[var(--color-gray-300)] text-sm md:text-base
                     max-w-lg leading-relaxed"
          >
            Masz pytania? Chcesz zapisać dziecko na trening? Napisz do nas lub zadzwoń — odpowiemy jak najszybciej!
          </motion.p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              className="bg-[var(--color-navy-light)] rounded-2xl border-2 border-[var(--color-purple)]/20 p-6 md:p-8
                       space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="block font-[var(--font-accent)] text-xs font-semibold tracking-wider uppercase
                               text-[var(--color-gray-300)] mb-2">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  placeholder="Jan Kowalski"
                  className="w-full bg-[var(--color-navy)] border-2 border-[var(--color-purple)]/20
                           rounded-xl px-4 py-3 text-sm text-white font-[var(--font-body)]
                           placeholder:text-[var(--color-gray-500)]
                           focus:border-[var(--color-yellow)] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-[var(--font-accent)] text-xs font-semibold tracking-wider uppercase
                               text-[var(--color-gray-300)] mb-2">
                  Telefon lub e-mail
                </label>
                <input
                  type="text"
                  placeholder="+48 500 000 000"
                  className="w-full bg-[var(--color-navy)] border-2 border-[var(--color-purple)]/20
                           rounded-xl px-4 py-3 text-sm text-white font-[var(--font-body)]
                           placeholder:text-[var(--color-gray-500)]
                           focus:border-[var(--color-yellow)] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-[var(--font-accent)] text-xs font-semibold tracking-wider uppercase
                               text-[var(--color-gray-300)] mb-2">
                  Wiadomość
                </label>
                <textarea
                  rows={4}
                  placeholder="Chcę zapisać dziecko na trening..."
                  className="w-full bg-[var(--color-navy)] border-2 border-[var(--color-purple)]/20
                           rounded-xl px-4 py-3 text-sm text-white font-[var(--font-body)]
                           placeholder:text-[var(--color-gray-500)]
                           focus:border-[var(--color-yellow)] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2
                         bg-[var(--color-yellow)] text-[var(--color-navy)]
                         font-[var(--font-heading)] text-sm
                         px-6 py-3.5 rounded-full
                         hover:bg-[var(--color-yellow-dark)] hover:scale-[1.02]
                         active:scale-[0.98]
                         shadow-[0_0_25px_rgba(251,191,36,0.2)]
                         hover:shadow-[0_0_35px_rgba(251,191,36,0.4)]
                         transition-all duration-300"
              >
                <Send size={16} />
                WYŚLIJ WIADOMOŚĆ
              </button>
            </form>
          </motion.div>

          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Info cards */}
            {[
              {
                icon: Phone,
                title: "Zadzwoń",
                value: "514 201 443",
                href: "tel:+48514201443",
                subtitle: "Andrzej Stec — Główny Trener",
              },
              {
                icon: MapPin,
                title: "Gdzie trenujemy",
                locations: [
                  { name: "Dunajcowa 60A — główna baza", address: "ul. Dunajcowa 60A, 33-300 Nowy Sącz", href: "https://maps.google.com/?q=Dunajcowa+60A+Nowy+Sącz" },
                  { name: "JumpMania", address: "ul. Zielona 27, 33-300 Nowy Sącz", href: "https://maps.google.com/?q=Zielona+27+Nowy+Sącz" },
                  { name: "Elektryk (ZSE-M)", address: "ul. Limanowskiego 4, 33-330 Nowy Sącz", href: "https://maps.google.com/?q=Limanowskiego+4+Nowy+Sącz" },
                ],
              },
              {
                icon: Clock,
                title: "Godziny treningów",
                value: "Pon — Pt: 16:00 — 20:00",
                subtitle: "Sob: 10:00 — 14:00",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[var(--color-navy-light)] rounded-2xl border-2 border-[var(--color-purple)]/20
                         p-5 hover:border-[var(--color-purple)]/50 transition-colors duration-300"
              >
                {"locations" in item && item.locations ? (
                  /* Locations block — all in one card */
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-full bg-[var(--color-purple)]/20 border-2 border-[var(--color-purple)]/30
                                 flex items-center justify-center flex-shrink-0"
                      >
                        <item.icon size={18} className="text-[var(--color-yellow)]" />
                      </div>
                      <h3 className="font-[var(--font-heading)] text-sm text-[var(--color-yellow)]">
                        {item.title}
                      </h3>
                    </div>
                    <div className="space-y-3 pl-0 sm:pl-[52px]">
                      {(item.locations as { name: string; address: string; href: string }[]).map((loc) => (
                        <a
                          key={loc.name}
                          href={loc.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:text-[var(--color-yellow)] transition-colors group/loc"
                        >
                          <span className="font-[var(--font-body)] text-white text-sm font-medium group-hover/loc:text-[var(--color-yellow)] block">
                            {loc.name}
                          </span>
                          <span className="font-[var(--font-body)] text-xs text-[var(--color-gray-400)]">
                            {loc.address}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Standard info card */
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full bg-[var(--color-purple)]/20 border-2 border-[var(--color-purple)]/30
                               flex items-center justify-center flex-shrink-0"
                    >
                      <item.icon size={18} className="text-[var(--color-yellow)]" />
                    </div>
                    <div>
                      <h3 className="font-[var(--font-heading)] text-sm text-[var(--color-yellow)] mb-1">
                        {item.title}
                      </h3>
                      {"href" in item && item.href ? (
                        <a
                          href={item.href as string}
                          target={(item.href as string).startsWith("http") ? "_blank" : undefined}
                          rel={(item.href as string).startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-[var(--font-body)] text-white text-base font-medium
                                   hover:text-[var(--color-yellow)] transition-colors block"
                        >
                          {"value" in item ? (item.value as string) : ""}
                        </a>
                      ) : (
                        <span className="font-[var(--font-body)] text-white text-base font-medium block">
                          {"value" in item ? (item.value as string) : ""}
                        </span>
                      )}
                      {"subtitle" in item && (
                        <span className="font-[var(--font-body)] text-xs text-[var(--color-gray-400)] mt-0.5 block">
                          {item.subtitle as string}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Social links */}
            <div
              className="bg-[var(--color-navy-light)] rounded-2xl border-2 border-[var(--color-purple)]/20
                       p-5"
            >
              <h3 className="font-[var(--font-heading)] text-sm text-[var(--color-yellow)] mb-4">
                SOCIAL MEDIA
              </h3>
              <div className="flex gap-3">
                {[
                  { Icon: Instagram, ...SOCIAL_LINKS.instagram, label: "Instagram" },
                  { Icon: Youtube, ...SOCIAL_LINKS.youtube, label: "YouTube" },
                  { Icon: Facebook, ...SOCIAL_LINKS.facebook, label: "Facebook" },
                ].map(({ Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-[var(--color-purple)]/20 border-2 border-[var(--color-purple)]/40
                             flex items-center justify-center
                             hover:bg-[var(--color-yellow)] hover:border-[var(--color-yellow)]
                             hover:text-[var(--color-navy)] text-[var(--color-gray-300)]
                             transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
