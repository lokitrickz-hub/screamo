"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Sparkles, Flame, Zap, Trophy, MapPin, Clock, Phone } from "lucide-react";
import Link from "next/link";

const AGE_GROUPS = [
  {
    name: "Maluchy",
    ages: "5 — 7 lat",
    icon: Sparkles,
    color: "var(--color-yellow)",
    border: "border-[var(--color-yellow)]/40 hover:border-[var(--color-yellow)]",
    shadow: "hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]",
    description:
      "Wprowadzenie do akrobatyki przez zabawę. Nauka koordynacji, podstawowych przewrotów i salt w bezpiecznych warunkach. Budujemy pewność siebie i miłość do ruchu od najmłodszych lat.",
    skills: ["Przewroty", "Koordynacja", "Gry ruchowe", "Rozciąganie"],
  },
  {
    name: "Juniorzy",
    ages: "8 — 12 lat",
    icon: Flame,
    color: "var(--color-purple-light)",
    border: "border-[var(--color-purple)]/40 hover:border-[var(--color-purple)]",
    shadow: "hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]",
    description:
      "Systematyczna nauka trickingu i akrobatyki. Rozwijamy technikę salta, flik-flaków, kopnięć i obrotów. Przygotowanie do pierwszych zawodów i występów.",
    skills: ["Salta", "Flik-flaki", "Kopnięcia", "Podstawy trickingu"],
  },
  {
    name: "Zaawansowani",
    ages: "13+ lat",
    icon: Zap,
    color: "var(--color-yellow)",
    border: "border-[var(--color-yellow)]/40 hover:border-[var(--color-yellow)]",
    shadow: "hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]",
    description:
      "Trening dla zawodników z doświadczeniem. Zaawansowane combo, ewolucje w powietrzu i przygotowanie do Mistrzostw Polski. Tutaj rodzą się mistrzowie.",
    skills: ["Combo tricków", "Ewolucje", "Przygotowanie startowe", "Choreografia"],
  },
  {
    name: "Kadra Zawodnicza",
    ages: "Wyłącznie po kwalifikacji",
    icon: Trophy,
    color: "var(--color-purple-light)",
    border: "border-[var(--color-purple)]/40 hover:border-[var(--color-purple)]",
    shadow: "hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]",
    description:
      "Elitarna grupa reprezentująca klub na zawodach krajowych i międzynarodowych. Intensywne treningi, indywidualny plan rozwoju i wsparcie na najwyższym poziomie.",
    skills: ["Plan indywidualny", "Starty krajowe", "Starty międzynarodowe", "Pokazy"],
  },
];

const LOCATIONS = [
  {
    name: "JumpMania — Nowy Sącz",
    address: "Park Trampolin JumpMania, Nowy Sącz",
    note: "Główna baza treningowa klubu",
  },
  {
    name: "Ochotnica Dolna",
    address: "Gmina Ochotnica Dolna",
    note: "Zajęcia akrobatyczne dla młodzieży z okolic",
  },
];

export default function Classes() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const groupsRef = useRef<HTMLDivElement>(null);
  const groupsInView = useInView(groupsRef, { once: true, margin: "-80px" });
  const locRef = useRef<HTMLDivElement>(null);
  const locInView = useInView(locRef, { once: true, margin: "-80px" });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <section className="relative pt-28 md:pt-36 pb-24 md:pb-32 px-6 min-h-screen bg-[var(--color-navy)]">
      {/* Comic dots background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-purple) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
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
        <div ref={headerRef} className="mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block font-[var(--font-accent)] text-xs font-bold tracking-[0.2em] uppercase
                     text-[var(--color-navy)] bg-[var(--color-yellow)] px-3 py-1 rounded-full mb-4"
          >
            Oferta
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-[var(--font-heading)] text-4xl md:text-6xl lg:text-7xl
                     text-white leading-[1] mb-4"
          >
            NASZE{" "}
            <span
              className="text-[var(--color-yellow)]"
              style={{ textShadow: "0 0 30px rgba(251,191,36,0.3)" }}
            >
              ZAJĘCIA
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-[var(--font-body)] text-[var(--color-gray-300)] text-sm md:text-base
                     max-w-xl leading-relaxed"
          >
            Treningi trickingu i akrobatyki dla dzieci od 5 lat w Nowym Sączu i okolicach.
            Każda grupa ma program dopasowany do wieku i poziomu zaawansowania.
          </motion.p>
        </div>

        {/* Age Groups */}
        <div ref={groupsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-28">
          {AGE_GROUPS.map((group, i) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 40 }}
              animate={groupsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative p-6 md:p-8 rounded-2xl bg-[var(--color-navy-light)]
                        border-2 ${group.border} ${group.shadow} transition-all duration-500`}
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3 mb-1">
                <group.icon size={22} style={{ color: group.color }} />
                <h3 className="font-[var(--font-heading)] text-xl md:text-2xl text-white">
                  {group.name}
                </h3>
              </div>

              {/* Age badge */}
              <span
                className="inline-block font-[var(--font-accent)] text-[11px] font-bold tracking-wider uppercase mb-4"
                style={{ color: group.color }}
              >
                {group.ages}
              </span>

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
            </motion.div>
          ))}
        </div>

        {/* Locations */}
        <div ref={locRef} className="mb-20 md:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={locInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-[var(--font-heading)] text-2xl md:text-4xl text-white mb-8"
          >
            GDZIE <span className="text-[var(--color-yellow)]">TRENUJEMY</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOCATIONS.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 30 }}
                animate={locInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-[var(--color-navy-light)] border-2 border-[var(--color-purple)]/20"
              >
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-[var(--color-yellow)] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-[var(--font-heading)] text-base text-white mb-1">
                      {loc.name}
                    </h3>
                    <p className="font-[var(--font-body)] text-sm text-[var(--color-gray-400)] mb-1">
                      {loc.address}
                    </p>
                    <p className="font-[var(--font-accent)] text-[11px] text-[var(--color-purple-light)] tracking-wider uppercase font-semibold">
                      {loc.note}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Schedule & Pricing placeholder */}
        <div ref={ctaRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[var(--color-purple)]/20 to-[var(--color-navy-light)]
                      border-2 border-[var(--color-purple)]/30 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock size={20} className="text-[var(--color-yellow)]" />
              <h2 className="font-[var(--font-heading)] text-xl md:text-3xl text-white">
                GRAFIK & CENNIK
              </h2>
            </div>
            <p className="font-[var(--font-body)] text-sm md:text-base text-[var(--color-gray-300)] leading-relaxed max-w-lg mx-auto mb-8">
              Szczegółowy grafik zajęć i cennik zostaną opublikowane wkrótce.
              Skontaktuj się z nami, aby poznać dostępne terminy i zapisać dziecko na trening!
            </p>
            <a
              href="tel:+48514201443"
              className="inline-flex items-center gap-2 bg-[var(--color-yellow)] text-[var(--color-navy)]
                       font-[var(--font-heading)] text-sm tracking-wider
                       px-8 py-3.5 rounded-full hover:bg-[var(--color-yellow-dark)] hover:scale-105
                       shadow-[0_0_25px_rgba(251,191,36,0.3)]
                       hover:shadow-[0_0_35px_rgba(251,191,36,0.5)]
                       transition-all duration-300"
            >
              <Phone size={16} />
              Zadzwoń — 514 201 443
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
