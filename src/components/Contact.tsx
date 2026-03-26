"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Youtube,
  Facebook,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";
import WipeReveal from "./WipeReveal";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.message) return;

    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", contact: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-32 px-4 sm:px-6 bg-[var(--color-navy)] min-h-screen">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <WipeReveal delay={0} className="mb-12 md:mb-16">
          <span
            className="inline-block font-[var(--font-accent)] text-xs font-bold tracking-[0.2em] uppercase
                     text-[var(--color-navy)] bg-[var(--color-yellow)] px-3 py-1 rounded-full mb-4"
          >
            Kontakt
          </span>
          <h1
            className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-6xl lg:text-7xl
                     text-white leading-[1.1] mb-4"
          >
            DOŁĄCZ DO{" "}
            <span
              className="text-[var(--color-yellow)]"
              style={{ textShadow: "0 0 30px rgba(251,191,36,0.3)" }}
            >
              NAS
            </span>
          </h1>
          <p
            className="font-[var(--font-body)] text-[var(--color-gray-300)] text-sm md:text-base
                     max-w-lg leading-relaxed"
          >
            Masz pytania? Chcesz zapisać dziecko na trening? Napisz do nas lub zadzwoń — odpowiemy jak najszybciej!
          </p>
        </WipeReveal>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact form */}
          <WipeReveal delay={0.1}>
            {formState === "success" ? (
              <div className="bg-[var(--color-navy-light)] rounded-2xl border-2 border-green-500/30 p-8 text-center">
                <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
                <h3 className="font-[var(--font-heading)] text-xl text-white mb-2">
                  WIADOMOŚĆ WYSŁANA!
                </h3>
                <p className="font-[var(--font-body)] text-sm text-[var(--color-gray-300)] mb-6">
                  Dziękujemy za wiadomość. Odezwiemy się najszybciej jak to możliwe!
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="font-[var(--font-accent)] text-xs font-bold tracking-wider uppercase
                           text-[var(--color-yellow)] hover:text-white transition-colors"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form
                className="bg-[var(--color-navy-light)] rounded-2xl border-2 border-[var(--color-purple)]/20 p-5 sm:p-6 md:p-8
                         space-y-5"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block font-[var(--font-accent)] text-xs font-semibold tracking-wider uppercase
                                 text-[var(--color-gray-300)] mb-2"
                  >
                    Imię i nazwisko *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Jan Kowalski"
                    aria-label="Imię i nazwisko"
                    className="w-full bg-[var(--color-navy)] border-2 border-[var(--color-purple)]/20
                             rounded-xl px-4 py-3 text-sm text-white font-[var(--font-body)]
                             placeholder:text-[var(--color-gray-500)]
                             focus:border-[var(--color-yellow)] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact"
                    className="block font-[var(--font-accent)] text-xs font-semibold tracking-wider uppercase
                                 text-[var(--color-gray-300)] mb-2"
                  >
                    Telefon lub e-mail *
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData((p) => ({ ...p, contact: e.target.value }))}
                    placeholder="+48 500 000 000"
                    aria-label="Numer telefonu lub adres e-mail"
                    className="w-full bg-[var(--color-navy)] border-2 border-[var(--color-purple)]/20
                             rounded-xl px-4 py-3 text-sm text-white font-[var(--font-body)]
                             placeholder:text-[var(--color-gray-500)]
                             focus:border-[var(--color-yellow)] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-[var(--font-accent)] text-xs font-semibold tracking-wider uppercase
                                 text-[var(--color-gray-300)] mb-2"
                  >
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Chcę zapisać dziecko na trening..."
                    aria-label="Treść wiadomości"
                    className="w-full bg-[var(--color-navy)] border-2 border-[var(--color-purple)]/20
                             rounded-xl px-4 py-3 text-sm text-white font-[var(--font-body)]
                             placeholder:text-[var(--color-gray-500)]
                             focus:border-[var(--color-yellow)] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {formState === "error" && (
                  <div className="flex items-center gap-2 text-red-400 font-[var(--font-body)] text-sm">
                    <AlertCircle size={16} />
                    Wystąpił błąd. Spróbuj ponownie lub zadzwoń pod 514 201 443.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2
                           bg-[var(--color-yellow)] text-[var(--color-navy)]
                           font-[var(--font-heading)] text-sm
                           px-6 py-3.5 rounded-full
                           hover:bg-[var(--color-yellow-dark)] hover:scale-[1.02]
                           active:scale-[0.98]
                           shadow-[0_0_25px_rgba(251,191,36,0.2)]
                           hover:shadow-[0_0_35px_rgba(251,191,36,0.4)]
                           transition-all duration-300
                           disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      WYSYŁANIE...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      WYŚLIJ WIADOMOŚĆ
                    </>
                  )}
                </button>
              </form>
            )}
          </WipeReveal>

          {/* Info side */}
          <WipeReveal delay={0.2} className="space-y-6">
            {/* Phone card */}
            <div className="bg-[var(--color-navy-light)] rounded-2xl border-2 border-[var(--color-purple)]/20
                         p-5 hover:border-[var(--color-purple)]/50 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-purple)]/20 border-2 border-[var(--color-purple)]/30
                             flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[var(--color-yellow)]" />
                </div>
                <div>
                  <h3 className="font-[var(--font-heading)] text-sm text-[var(--color-yellow)] mb-1">Zadzwoń</h3>
                  <a href="tel:+48514201443" className="font-[var(--font-body)] text-white text-base font-medium
                           hover:text-[var(--color-yellow)] transition-colors block">
                    514 201 443
                  </a>
                  <span className="font-[var(--font-body)] text-xs text-[var(--color-gray-400)] mt-0.5 block">
                    Andrzej Stec — Główny Trener
                  </span>
                </div>
              </div>
            </div>

            {/* Locations card */}
            <div className="bg-[var(--color-navy-light)] rounded-2xl border-2 border-[var(--color-purple)]/20
                         p-5 hover:border-[var(--color-purple)]/50 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-purple)]/20 border-2 border-[var(--color-purple)]/30
                             flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[var(--color-yellow)]" />
                </div>
                <h3 className="font-[var(--font-heading)] text-sm text-[var(--color-yellow)]">Gdzie trenujemy</h3>
              </div>
              <div className="space-y-3 pl-0 sm:pl-[52px]">
                {[
                  { name: "Dunajcowa 60A", address: "ul. Dunajcowa 60A, 33-300 Nowy Sącz", href: "https://maps.google.com/?q=Dunajcowa+60A+Nowy+S%C4%85cz" },
                  { name: "JumpMania", address: "ul. Zielona 27, 33-300 Nowy Sącz", href: "https://maps.google.com/?q=Zielona+27+Nowy+S%C4%85cz" },
                  { name: "Elektryk (ZSE-M)", address: "ul. Limanowskiego 4, 33-330 Nowy Sącz", href: "https://maps.google.com/?q=Limanowskiego+4+Nowy+S%C4%85cz" },
                ].map((loc) => (
                  <a key={loc.name} href={loc.href} target="_blank" rel="noopener noreferrer"
                     className="block hover:text-[var(--color-yellow)] transition-colors group/loc">
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

            {/* Hours card */}
            <div className="bg-[var(--color-navy-light)] rounded-2xl border-2 border-[var(--color-purple)]/20
                         p-5 hover:border-[var(--color-purple)]/50 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-purple)]/20 border-2 border-[var(--color-purple)]/30
                             flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-[var(--color-yellow)]" />
                </div>
                <div>
                  <h3 className="font-[var(--font-heading)] text-sm text-[var(--color-yellow)] mb-1">Godziny treningów</h3>
                  <span className="font-[var(--font-body)] text-white text-base font-medium block">Pon — Pt: 16:00 — 20:00</span>
                  <span className="font-[var(--font-body)] text-xs text-[var(--color-gray-400)] mt-0.5 block">Sob: 10:00 — 14:00</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-[var(--color-navy-light)] rounded-2xl border-2 border-[var(--color-purple)]/20 p-5">
              <h3 className="font-[var(--font-heading)] text-sm text-[var(--color-yellow)] mb-4">SOCIAL MEDIA</h3>
              <div className="flex gap-3">
                {[
                  { Icon: Instagram, ...SOCIAL_LINKS.instagram, label: "Instagram" },
                  { Icon: Youtube, ...SOCIAL_LINKS.youtube, label: "YouTube" },
                  { Icon: Facebook, ...SOCIAL_LINKS.facebook, label: "Facebook" },
                ].map(({ Icon, url, label }) => (
                  <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                     className="w-11 h-11 rounded-full bg-[var(--color-purple)]/20 border-2 border-[var(--color-purple)]/40
                              flex items-center justify-center hover:bg-[var(--color-yellow)] hover:border-[var(--color-yellow)]
                              hover:text-[var(--color-navy)] text-[var(--color-gray-300)] transition-all duration-300"
                     aria-label={label}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </WipeReveal>
        </div>
      </div>
    </section>
  );
}
