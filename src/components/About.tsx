"use client";

import { Flame, Target, Users, Star } from "lucide-react";
import WipeReveal from "./WipeReveal";

const STATS = [
  { value: "31", label: "Medali MP", icon: Flame, color: "var(--color-yellow)" },
  { value: "14+", label: "Lat doswiadczenia", icon: Target, color: "var(--color-purple-light)" },
  { value: "100+", label: "Zawodnikow", icon: Users, color: "var(--color-yellow)" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-32 px-6 bg-[var(--color-navy)] overflow-hidden"
    >
      {/* Comic dots background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-purple) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Decorative star bursts */}
      <div className="absolute top-20 right-10 hidden md:block opacity-[0.08]">
        <Star size={120} className="text-[var(--color-yellow)]" fill="currentColor" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Label + Heading + Body */}
        <WipeReveal delay={0}>
          <div className="mb-6">
            <span className="inline-block font-[var(--font-accent)] text-[11px] tracking-[0.2em] uppercase
                           text-[var(--color-navy)] bg-[var(--color-yellow)] px-3 py-1 rounded-full font-bold">
              O nas
            </span>
          </div>

          <h2
            className="font-[var(--font-heading)] text-2xl md:text-5xl lg:text-[3.5rem]
                     text-white leading-[1.1] max-w-3xl mb-6 md:mb-8"
          >
            Definiujemy grawitacje{" "}
            <span className="text-[var(--color-yellow)]" style={{ textShadow: "0 0 30px rgba(251,191,36,0.3)" }}>
              na wlasnych zasadach.
            </span>
          </h2>

          <p
            className="font-[var(--font-body)] text-[var(--color-gray-300)] text-sm md:text-lg
                     leading-relaxed max-w-2xl mb-10 md:mb-16"
          >
            UKS ScreamoTrickz to nie tylko klub sportowy &mdash; to pierwsza w regionie
            i jedna z czolowych w Polsce akademii trickingu. Laczymy dynamike
            sztuk walki, estetyce gimnastyki i ekspresje breakdance&apos;u. Nasza
            misja jest zarazanie pasja do ruchu, budowanie pewnosci siebie
            poprzez opanowanie wlasnego ciala i integracja lokalnej spolecznosci
            sportowej na calej Sadecczyznie.
          </p>
        </WipeReveal>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {STATS.map((stat, i) => (
            <WipeReveal
              key={stat.label}
              delay={0.1 + i * 0.12}
            >
              <div
                className="relative p-5 md:p-8 rounded-2xl
                         bg-[var(--color-navy-light)] border-2 border-[var(--color-purple)]/30
                         hover:border-[var(--color-purple)] transition-all duration-500
                         hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]"
              >
                <stat.icon
                  size={24}
                  className="mb-4"
                  style={{ color: stat.color }}
                />
                <div className="font-[var(--font-heading)] text-3xl md:text-5xl text-white mb-1">
                  {stat.value}
                </div>
                <div className="font-[var(--font-accent)] text-xs font-semibold tracking-[0.15em] uppercase"
                     style={{ color: stat.color }}>
                  {stat.label}
                </div>
              </div>
            </WipeReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
