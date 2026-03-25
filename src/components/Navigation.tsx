"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(16,23,42,0.92)] backdrop-blur-xl border-b border-[#DFFF00]/15"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-18 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <img
              src="/images/logo.png"
              alt="ScreamoTrickz"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-lg hidden sm:block tracking-[0.02em]" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
              <span className="text-white">SCREAMO</span>
              <span className="text-[#DFFF00]">TRICKZ</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-[0.15em] uppercase
                         transition-colors duration-300 relative group ${
                           isActive(link.href)
                             ? "text-[#DFFF00]"
                             : "text-[var(--color-gray-300)] hover:text-[#DFFF00]"
                         }`}
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#DFFF00]
                            transition-all duration-300 ${
                              isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                />
              </Link>
            ))}

            {/* Phone */}
            <a
              href="tel:+48514201443"
              className="inline-flex items-center gap-1.5 font-[var(--font-body)] text-xs font-semibold
                       text-[var(--color-gray-300)] hover:text-[#DFFF00] transition-colors"
              aria-label="Zadzwoń"
            >
              <Phone size={12} />
              514 201 443
            </a>

            <Link
              href="/kontakt"
              className="text-xs tracking-wider uppercase
                       px-5 py-2 bg-[#DFFF00] text-[var(--color-navy)]
                       hover:bg-[#c4e000] hover:scale-105
                       shadow-[0_0_15px_rgba(223,255,0,0.2)]
                       hover:shadow-[0_0_25px_rgba(223,255,0,0.4)]
                       transition-all duration-300 rounded-full"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
            >
              Zapisz się
            </Link>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:+48514201443"
              className="p-2 text-[#DFFF00] hover:text-white transition-colors"
              aria-label="Zadzwoń"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 text-[#DFFF00] hover:text-white transition-colors"
              aria-label="Otwórz menu"
            >
              <Menu size={24} />
            </button>
          </div>
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
            className="fixed inset-0 z-[100] bg-[rgba(16,23,42,0.97)] backdrop-blur-2xl
                     flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-6 p-2 text-[var(--color-gray-400)]
                       hover:text-[#DFFF00] transition-colors"
              aria-label="Zamknij menu"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col items-center gap-7">
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
                    className={`text-2xl uppercase transition-colors ${
                      isActive(link.href)
                        ? "text-[#DFFF00]"
                        : "text-white hover:text-[#DFFF00]"
                    }`}
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Phone in mobile menu */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08, duration: 0.4 }}
              >
                <a
                  href="tel:+48514201443"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 font-[var(--font-body)] text-lg font-medium
                           text-[var(--color-gray-300)] hover:text-[#DFFF00] transition-colors"
                >
                  <Phone size={18} />
                  514 201 443
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (NAV_LINKS.length + 1) * 0.08, duration: 0.4 }}
              >
                <Link
                  href="/kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm tracking-wider uppercase
                           px-8 py-3 bg-[#DFFF00] text-[var(--color-navy)]
                           hover:bg-[#c4e000]
                           shadow-[0_0_20px_rgba(223,255,0,0.25)]
                           transition-all duration-300 rounded-full"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  Zapisz się
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
