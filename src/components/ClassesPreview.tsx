"use client";

import { Sparkles, Flame, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import WipeReveal from "./WipeReveal";

const GROUPS = [
  {
    name: "Maluchy (5-7 lat)",
    icon: Sparkles,
    color: "var(--color-yellow)",
    border: "border-[var(--color-yellow)]/40",
    desc: "Ćwiczenia ogólnokształcące, koordynacyjne i wzmacniające z elementami gimnastyki.",
  },
  {
    name: "Grupa Podstawowa",
    icon: Flame,
    color: "var(--color-purple-light)",
    border: "border-[var(--color-purple)]/40",
    desc: "Gimnastyka z ukierunkowaniem na elementy akrobatyczne i kształtowanie sylwetek akrobatycznych.",
  },
  {
    name: "Średniozaawansowani",
    icon: Zap,
    color: "var(--color-yellow)",
    border: "border-[var(--color-yellow)]/40",
    desc: "Rundak, flik-flak, salta, podstawowe kopnięcia i combosy. Nauka łączenia elementów.",
  },
];

export default function ClassesPreview() {
  return (
    <section className="relative py-16 md:py-28 px-6 bg-[var(--color-navy)]">
      {/* Comic dots background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-purple) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <WipeReveal delay={0}>
          <div className="mb-4">
            <span className="inline-block font-[var(--font-accent)] text-[11px] tracking-[0.2em] uppercase
                           text-[var(--color-navy)] bg-[var(--color-yellow)] px-3 py-1 rounded-full font-bold">
              Oferta
            </span>
          </div>

          <h2
            className="font-[var(--font-heading)] text-2xl md:text-5xl
                     text-white leading-[1.1] max-w-3xl mb-4"
          >
            Treningi dla{" "}
            <span className="text-[var(--color-yellow)]" style={{ textShadow: "0 0 30px rgba(251,191,36,0.3)" }}>
              każdego wieku
            </span>
          </h2>

          <p
            className="font-[var(--font-body)] text-[var(--color-gray-300)] text-sm md:text-base
                     leading-relaxed max-w-xl mb-10 md:mb-14"
          >
            Od 5 lat w górę — mamy grupę dopasowaną do Twojego dziecka. Nowy Sącz i okolice.
          </p>
        </WipeReveal>

        {/* Group cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-10">
          {GROUPS.map((group, i) => (
            <WipeReveal
              key={group.name}
              delay={0.1 + i * 0.12}
            >
              <div
                className={`relative p-5 md:p-7 rounded-2xl bg-[var(--color-navy-light)]
                          border-2 ${group.border} transition-all duration-500
                          hover:shadow-[0_0_25px_rgba(124,58,237,0.15)]`}
              >
                <group.icon size={22} className="mb-3" style={{ color: group.color }} />

                <h3 className="font-[var(--font-heading)] text-lg text-white mb-0.5">
                  {group.name}
                </h3>
                <p className="font-[var(--font-body)] text-sm text-[var(--color-gray-400)] leading-relaxed">
                  {group.desc}
                </p>
              </div>
            </WipeReveal>
          ))}
        </div>

        {/* CTA */}
        <WipeReveal delay={0.5}>
          <Link
            href="/zajecia"
            className="inline-flex items-center gap-2 font-[var(--font-accent)] text-sm font-bold
                     tracking-wider uppercase text-[var(--color-yellow)] hover:text-white
                     transition-colors group"
          >
            Zobacz wszystkie zajęcia
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </WipeReveal>
      </div>
    </section>
  );
}
