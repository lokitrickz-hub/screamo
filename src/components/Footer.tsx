"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Youtube, Facebook, MapPin, Phone, Zap } from "lucide-react";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer ref={ref} id="kontakt" className="relative">
      {/* CTA band — yellow with comic energy */}
      <div className="bg-[var(--color-yellow)] py-12 md:py-20 px-6 relative overflow-hidden">
        {/* Comic dots pattern */}
        <div className="absolute inset-0 opacity-[0.08]"
             style={{
               backgroundImage: "radial-gradient(circle, var(--color-navy) 1.5px, transparent 1.5px)",
               backgroundSize: "16px 16px",
             }}
        />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Zap size={28} className="text-[var(--color-navy)]" fill="currentColor" />
              <h2 className="font-[var(--font-heading)] text-2xl md:text-5xl lg:text-6xl
                           text-[var(--color-navy)] leading-[1]">
                GOTOWY NA TRENING?
              </h2>
              <Zap size={28} className="text-[var(--color-navy)]" fill="currentColor" />
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-[var(--font-body)] text-[var(--color-navy)]/70 text-sm md:text-base max-w-lg mx-auto mb-8 font-medium"
          >
            Dołącz do ScreamoTrickz. Bez względu na wiek i poziom &mdash; każdy może zacząć swoją przygodę z trickingiem.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            href="tel:+48514201443"
            className="inline-flex items-center gap-2 bg-[var(--color-navy)] text-[var(--color-yellow)]
                     font-[var(--font-heading)] text-sm tracking-wider
                     px-8 py-3.5 rounded-full hover:bg-[var(--color-purple)]
                     hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]
                     transition-all duration-300"
          >
            Zadzwoń &mdash; 514 201 443
          </motion.a>
        </div>
      </div>

      {/* Footer info */}
      <div className="bg-[var(--color-navy)] py-12 px-6 border-t-4 border-[var(--color-purple)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.png" alt="ScreamoTrickz" className="w-8 h-8 object-contain" />
              <span className="font-[var(--font-heading)] text-sm text-[var(--color-yellow)]">
                SCREAMOTRICKZ
              </span>
            </div>
            <p className="font-[var(--font-body)] text-xs text-[var(--color-gray-400)] leading-relaxed max-w-xs">
              Uczniowski Klub Sportowy &quot;Screamo Trickz&quot;. Tricking, akrobatyka i gimnastyka sportowa na Sądecczyźnie od 2011 roku.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[var(--font-heading)] text-xs tracking-wider text-[var(--color-yellow)] mb-4">
              KONTAKT
            </h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 text-[var(--color-gray-300)] hover:text-[var(--color-yellow)] transition-colors text-sm">
                <MapPin size={14} className="text-[var(--color-purple-light)]" />
                <span className="font-[var(--font-body)]">Jazowsko 326, 33-389 Jazowsko</span>
              </a>
              <a href="tel:+48514201443" className="flex items-center gap-3 text-[var(--color-gray-300)] hover:text-[var(--color-yellow)] transition-colors text-sm">
                <Phone size={14} className="text-[var(--color-purple-light)]" />
                <span className="font-[var(--font-body)]">514 201 443</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-[var(--font-heading)] text-xs tracking-wider text-[var(--color-yellow)] mb-4">
              SOCIAL MEDIA
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
                  className="w-10 h-10 rounded-full bg-[var(--color-purple)]/20 border-2 border-[var(--color-purple)]/40
                           flex items-center justify-center
                           hover:bg-[var(--color-yellow)] hover:border-[var(--color-yellow)]
                           hover:text-[var(--color-navy)] text-[var(--color-gray-300)]
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
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-[var(--color-purple)]/20
                      flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="font-[var(--font-body)] text-[11px] text-[var(--color-gray-500)]">
            &copy; {new Date().getFullYear()} UKS ScreamoTrickz. Wszelkie prawa zastrzeżone.
          </span>
          <span className="font-[var(--font-body)] text-[11px] text-[var(--color-gray-500)]">
            Jazowsko, woj. małopolskie
          </span>
        </div>
      </div>
    </footer>
  );
}
