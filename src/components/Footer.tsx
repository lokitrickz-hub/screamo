"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Youtube, Facebook, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer ref={ref} id="kontakt" className="relative border-t border-[var(--color-glass-border)]">
      {/* CTA band */}
      <div className="bg-[var(--color-lime)] py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-[var(--font-heading)] font-black text-3xl md:text-5xl lg:text-6xl
                     text-[#050505] leading-[0.95] mb-4"
          >
            GOTOWY NA TRENING?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-[var(--font-body)] text-[#050505]/70 text-sm md:text-base max-w-lg mx-auto mb-8"
          >
            Dołącz do ScreamoTrickz. Bez względu na wiek i poziom — każdy może zacząć swoją przygodę z trickingiem.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            href="tel:+48514201443"
            className="inline-flex items-center gap-2 bg-[#050505] text-[var(--color-lime)]
                     font-[var(--font-accent)] font-semibold text-sm tracking-wider uppercase
                     px-8 py-3.5 rounded-sm hover:bg-[#1a1a1a] transition-colors"
          >
            Zadzwoń — 514 201 443
          </motion.a>
        </div>
      </div>

      {/* Footer info */}
      <div className="bg-[#050505] py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.png" alt="ScreamoTrickz" className="w-8 h-8 object-contain" />
              <span className="font-[var(--font-heading)] font-bold text-sm tracking-wider">
                SCREAMOTRICKZ
              </span>
            </div>
            <p className="font-[var(--font-body)] text-xs text-[var(--color-gray-500)] leading-relaxed max-w-xs">
              Uczniowski Klub Sportowy &quot;Screamo Trickz&quot;. Tricking, akrobatyka i gimnastyka sportowa na Sądecczyźnie od 2011 roku.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[var(--font-accent)] text-xs tracking-[0.15em] uppercase text-[var(--color-gray-400)] mb-4">
              Kontakt
            </h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 text-[var(--color-gray-400)] hover:text-[var(--color-lime)] transition-colors text-sm">
                <MapPin size={14} />
                <span className="font-[var(--font-body)]">Jazowsko 326, 33-389 Jazowsko</span>
              </a>
              <a href="tel:+48514201443" className="flex items-center gap-3 text-[var(--color-gray-400)] hover:text-[var(--color-lime)] transition-colors text-sm">
                <Phone size={14} />
                <span className="font-[var(--font-body)]">514 201 443</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-[var(--font-accent)] text-xs tracking-[0.15em] uppercase text-[var(--color-gray-400)] mb-4">
              Social Media
            </h4>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/screamotrickz.official/" },
                { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@ScreamoTrickz" },
                { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/ScreamoTrickz" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10
                           flex items-center justify-center
                           hover:bg-[var(--color-lime)] hover:border-[var(--color-lime)]
                           hover:text-[#050505] text-[var(--color-gray-500)]
                           transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-[var(--color-glass-border)]
                      flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="font-[var(--font-body)] text-[11px] text-[var(--color-gray-600)]">
            &copy; {new Date().getFullYear()} UKS ScreamoTrickz. Wszelkie prawa zastrzeżone.
          </span>
          <span className="font-[var(--font-body)] text-[11px] text-[var(--color-gray-600)]">
            Jazowsko, woj. małopolskie
          </span>
        </div>
      </div>
    </footer>
  );
}
