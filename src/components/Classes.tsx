"use client";

import { Sparkles, Flame, Zap, Trophy, Phone } from "lucide-react";
import Link from "next/link";
import WipeReveal from "./WipeReveal";

const AGE_GROUPS = [
  {
    name: "Maluchy (5-7 lat)",
    icon: Sparkles,
    color: "var(--color-yellow)",
    wipeColor: "#DFFF00",
    border: "border-[var(--color-yellow)]/40 hover:border-[var(--color-yellow)]",
    shadow: "hover:shadow-[0_0_30px_rgba(223,255,0,0.15)]",
    description:
      "Ćwiczenia ogólnokształcące, koordynacyjne i wzmacniające z elementami gimnastyki. Budujemy fundamenty ruchu od najmłodszych lat.",
    skills: ["Koordynacja", "Gimnastyka", "Wzmacnianie", "Gry ruchowe"],
  },
  {
    name: "Grupa Podstawowa",
    icon: Flame,
    color: "var(--color-purple-light)",
    wipeColor: "#9F67FF",
    border: "border-[var(--color-purple)]/40 hover:border-[var(--color-purple)]",
    shadow: "hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]",
    description:
      "Gimnastyka z ukierunkowaniem na elementy akrobatyczne, ćwiczenia wzmacniające oraz kształtowanie sylwetek akrobatycznych.",
    skills: ["Gimnastyka", "Akrobatyka", "Wzmacnianie", "Sylwetka akrobatyczna"],
  },
  {
    name: "Średniozaawansowani",
    icon: Zap,
    color: "var(--color-yellow)",
    wipeColor: "#DFFF00",
    border: "border-[var(--color-yellow)]/40 hover:border-[var(--color-yellow)]",
    shadow: "hover:shadow-[0_0_30px_rgba(223,255,0,0.15)]",
    description:
      "Podstawowe elementy akrobatyczne i trickingowe: rundak, flik-flak, salto w tył i przód, podstawowe kopnięcia i combosy. Nauka łączenia i pozycji wyjściowych do elementów akrobatycznych.",
    skills: ["Rundak", "Flik-flak", "Salta", "Kopnięcia", "Combosy"],
  },
  {
    name: "Zaawansowani / Zawodnicy",
    icon: Trophy,
    color: "var(--color-purple-light)",
    wipeColor: "#9F67FF",
    border: "border-[var(--color-purple)]/40 hover:border-[var(--color-purple)]",
    shadow: "hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]",
    description:
      "Nauka kombinacji akrobatycznych i zaawansowanych elementów trickingowych. Na tej grupie uczymy śrub w tył i przód oraz podwójnych salt.",
    skills: ["Kombinacje akrobatyczne", "Śruby", "Podwójne salta", "Tricking zaawansowany"],
  },
];

const CASCADE_DELAY = [0, 0.15, 0.3, 0.45];

export default function Classes() {
  return (
    <section className="relative pt-28 md:pt-36 pb-24 md:pb-32 px-4 sm:px-6 min-h-screen bg-[var(--color-navy)]">
      {/* Comic dots background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-purple) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <WipeReveal delay={0} className="mb-16 md:mb-20">
          <span
            className="inline-block font-[var(--font-accent)] text-xs font-bold tracking-[0.2em] uppercase
                     text-[var(--color-navy)] bg-[var(--color-yellow)] px-3 py-1 rounded-full mb-4"
          >
            Oferta
          </span>
          <h1
            className="font-[var(--font-heading)] text-4xl md:text-6xl lg:text-7xl
                     text-white leading-[1] mb-4"
          >
            NASZE{" "}
            <span
              className="text-[var(--color-yellow)]"
              style={{ textShadow: "0 0 30px rgba(223,255,0,0.3)" }}
            >
              ZAJĘCIA
            </span>
          </h1>
          <p
            className="font-[var(--font-body)] text-[var(--color-gray-300)] text-sm md:text-base
                     max-w-xl leading-relaxed"
          >
            Treningi trickingu i akrobatyki dla dzieci od 5 lat w Nowym Sączu i okolicach.
            Każda grupa ma program dopasowany do wieku i poziomu zaawansowania.
          </p>

          {/* Age badge */}
          <div
            className="mt-5 inline-flex items-center gap-2 bg-[var(--color-purple)]/15 border border-[var(--color-purple)]/30
                     rounded-full px-4 py-2"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-yellow)]" />
            <span className="font-[var(--font-accent)] text-xs font-semibold text-[var(--color-gray-300)] tracking-wider uppercase">
              Zajęcia dla dzieci od 5. roku życia &bull; Pierwsza lekcja próbna gratis!
            </span>
          </div>
        </WipeReveal>

        {/* Age Groups — cascade wipe reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-28">
          {AGE_GROUPS.map((group, i) => (
            <WipeReveal
              key={group.name}
              delay={CASCADE_DELAY[i]}
              className={`rounded-2xl bg-[var(--color-navy-light)]
                        border-2 ${group.border} ${group.shadow} transition-all duration-500`}
            >
              <div className="p-4 sm:p-6 md:p-8">
                {/* Icon + Name */}
                <div className="flex items-center gap-3 mb-1">
                  <group.icon size={22} style={{ color: group.color }} />
                  <h3 className="font-[var(--font-heading)] text-xl md:text-2xl text-white">
                    {group.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-[var(--font-body)] text-sm text-[var(--color-gray-300)] leading-relaxed mb-5">
                  {group.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-[var(--font-accent)] text-[10px] font-semibold tracking-wider uppercase
                               px-3 py-1 rounded-full bg-[var(--color-navy)] border border-[var(--color-purple)]/30
                               text-[var(--color-gray-400)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </WipeReveal>
          ))}
        </div>

        {/* CTA → Plan zajęć */}
        <WipeReveal delay={0.5} className="mb-16">
          <div
            className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[var(--color-purple)]/20 to-[var(--color-navy-light)]
                      border-2 border-[var(--color-purple)]/30 text-center"
          >
            <h2 className="font-[var(--font-heading)] text-xl md:text-3xl text-white mb-3">
              SPRAWDŹ <span className="text-[var(--color-yellow)]">KIEDY TRENUJEMY</span>
            </h2>
            <p className="font-[var(--font-body)] text-sm md:text-base text-[var(--color-gray-300)] leading-relaxed max-w-lg mx-auto mb-8">
              Zobacz pełny grafik zajęć z godzinami, lokalizacjami i trenerami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/plan-zajec"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-yellow)] text-[var(--color-navy)]
                         font-[var(--font-heading)] text-sm tracking-wider
                         px-8 py-3.5 rounded-full hover:bg-[var(--color-yellow-dark)] hover:scale-105
                         shadow-[0_0_25px_rgba(223,255,0,0.3)]
                         hover:shadow-[0_0_35px_rgba(223,255,0,0.5)]
                         transition-all duration-300"
              >
                Plan zajęć
              </Link>
              <a
                href="tel:+48514201443"
                className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-purple)]/40 text-white
                         font-[var(--font-heading)] text-sm tracking-wider
                         px-8 py-3.5 rounded-full hover:border-[var(--color-yellow)] hover:text-[var(--color-yellow)]
                         transition-all duration-300"
              >
                <Phone size={16} />
                Zadzwoń — 514 201 443
              </a>
            </div>
          </div>
        </WipeReveal>
      </div>
    </section>
  );
}
