"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import Link from "next/link";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(5,5,5,0.72)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-18 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/images/logo.png" alt="ScreamoTrickz" className="w-9 h-9 object-contain
                          group-hover:scale-110 transition-transform duration-300" />
            <span className="font-[var(--font-heading)] font-bold text-sm tracking-wider hidden sm:block">
              SCREAMOTRICKZ
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[var(--font-accent)] text-xs tracking-[0.15em] uppercase
                         text-[var(--color-gray-300)] hover:text-[var(--color-lime)]
                         transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-lime)]
                              group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="#kontakt"
              className="font-[var(--font-accent)] text-xs tracking-wider uppercase
                       px-5 py-2 border border-[var(--color-lime)] text-[var(--color-lime)]
                       hover:bg-[var(--color-lime)] hover:text-[#050505]
                       transition-all duration-300 rounded-sm"
            >
              Dołącz
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 text-[var(--color-gray-300)] hover:text-[var(--color-lime)]
                     transition-colors"
            aria-label="Otwórz menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[rgba(5,5,5,0.95)] backdrop-blur-2xl
                     flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-6 p-2 text-[var(--color-gray-400)]
                       hover:text-[var(--color-lime)] transition-colors"
              aria-label="Zamknij menu"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-[var(--font-heading)] text-3xl font-bold uppercase
                             text-white hover:text-[var(--color-lime)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08, duration: 0.4 }}
              >
                <Link
                  href="#kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="font-[var(--font-accent)] text-sm tracking-wider uppercase
                           px-8 py-3 border-2 border-[var(--color-lime)] text-[var(--color-lime)]
                           hover:bg-[var(--color-lime)] hover:text-[#050505]
                           transition-all duration-300"
                >
                  Dołącz do nas
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
