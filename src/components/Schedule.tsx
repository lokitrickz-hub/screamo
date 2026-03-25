"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Phone, User } from "lucide-react";

const VP = { once: true, margin: "-80px" as const };

const LOCATIONS = [
  {
    name: "Dunajcowa 60A — Nowy Sącz",
    address: "ul. Dunajcowa 60A, 33-300 Nowy Sącz",
    note: "Treningi popołudniowe",
  },
  {
    name: "JumpMania — Nowy Sącz",
    address: "ul. Zielona 27, 33-300 Nowy Sącz",
    note: "Tumbling i treningi wieczorne",
  },
  {
    name: "Elektryk — Nowy Sącz",
    address: "Zespół Szkół Elektryczno-Mechanicznych, ul. Bolesława Limanowskiego 4, 33-330 Nowy Sącz",
    note: "Zajęcia sobotnich grup — Mariusz Piskorz",
  },
];

export default function Schedule() {
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
        <div className="mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.5 }}
            className="inline-block font-[var(--font-accent)] text-xs font-bold tracking-[0.2em] uppercase
                     text-[var(--color-navy)] bg-[var(--color-yellow)] px-3 py-1 rounded-full mb-4"
          >
            Grafik
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-[var(--font-heading)] text-4xl md:text-6xl lg:text-7xl
                     text-white leading-[1] mb-4"
          >
            PLAN{" "}
            <span
              className="text-[var(--color-yellow)]"
              style={{ textShadow: "0 0 30px rgba(251,191,36,0.3)" }}
            >
              ZAJĘĆ
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-[var(--font-body)] text-[var(--color-gray-300)] text-sm md:text-base
                     max-w-xl leading-relaxed"
          >
            Aktualny grafik treningów trickingu i akrobatyki w Nowym Sączu.
            Sprawdź godziny, lokalizacje i trenerów.
          </motion.p>
        </div>

        {/* Schedule grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-20 md:mb-28">
          {/* Poniedziałek */}
          <ScheduleDay
            day="Poniedziałek"
            location="Jump Mania"
            trainer="Andrzej"
            accent="yellow"
            delay={0.15}
            sessions={[
              { time: "16:15", name: "Grupa początkująca 7-13 lat" },
              { time: "17:30", name: "Grupa zaawansowana" },
              { time: "18:45", name: "Zawodnicy" },
            ]}
          />

          {/* Wtorek */}
          <ScheduleDay
            day="Wtorek"
            trainer="Andrzej i Wiktoria"
            accent="purple"
            delay={0.2}
            sessions={[
              { time: "16:15", name: "Maluchy 5-7 lat", location: "Dunajcowa 60A", trainer: "Andrzej i Wiktoria" },
              { time: "17:10", name: "Akrobatyka/Tricking 8-13 lat", location: "Dunajcowa 60A", trainer: "Andrzej i Wiktoria" },
              { time: "18:30", name: "Tumbling — skoki na ścieżce", location: "Jump Mania", trainer: "Andrzej" },
              { time: "19:30", name: "Grupa dla dorosłych", location: "Jump Mania", trainer: "Andrzej" },
            ]}
          />

          {/* Środa */}
          <ScheduleDay
            day="Środa"
            location="Jump Mania"
            trainer="Andrzej"
            accent="yellow"
            delay={0.25}
            sessions={[
              { time: "16:15", name: "Grupa początkująca 7-13 lat" },
              { time: "17:30", name: "Grupa zaawansowana" },
              { time: "18:45", name: "Zawodnicy" },
            ]}
          />

          {/* Czwartek */}
          <ScheduleDay
            day="Czwartek"
            accent="purple"
            delay={0.3}
            sessions={[
              { time: "Umów się", name: "Treningi personalne" },
            ]}
          />

          {/* Piątek */}
          <ScheduleDay
            day="Piątek"
            location="Dunajcowa 60A"
            trainer="Andrzej i Wiktoria"
            accent="yellow"
            delay={0.35}
            sessions={[
              { time: "16:30", name: "Tricking zawodnicy", trainer: "Andrzej" },
              { time: "18:00", name: "Akrobatyka grupa 7-10 lat", trainer: "Andrzej i Wiktoria" },
              { time: "19:00", name: "Akrobatyka/Tricking — zawody", trainer: "Andrzej i Wiktoria" },
            ]}
          />

          {/* Sobota */}
          <ScheduleDay
            day="Sobota"
            location="Elektryk"
            trainer="Mariusz"
            accent="purple"
            delay={0.4}
            sessions={[
              { time: "09:00", name: "Grupa początkująca — nowy nabór" },
              { time: "10:00", name: "Grupa średniozaawansowana" },
              { time: "11:00", name: "Maluchy 5-7 lat" },
            ]}
          />
        </div>

        {/* Locations */}
        <div className="mb-20 md:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.5 }}
            className="font-[var(--font-heading)] text-2xl md:text-4xl text-white mb-8"
          >
            GDZIE <span className="text-[var(--color-yellow)]">TRENUJEMY</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOCATIONS.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-[var(--color-navy-light)] border-2 border-[var(--color-purple)]/20"
              >
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-[var(--color-yellow)] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-[var(--font-heading)] text-base text-white mb-1">
                      {loc.name}
                    </h3>
                    <p className="font-[var(--font-body)] text-sm text-[var(--color-gray-400)] mb-1 break-words">
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

        {/* CTA */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[var(--color-purple)]/20 to-[var(--color-navy-light)]
                      border-2 border-[var(--color-purple)]/30 text-center"
          >
            <h2 className="font-[var(--font-heading)] text-xl md:text-3xl text-white mb-3">
              CHCESZ <span className="text-[var(--color-yellow)]">DOŁĄCZYĆ?</span>
            </h2>
            <p className="font-[var(--font-body)] text-sm md:text-base text-[var(--color-gray-300)] leading-relaxed max-w-lg mx-auto mb-8">
              Zadzwoń i zapisz dziecko na trening. Pierwsze zajęcia możesz odbyć próbnie!
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

/* ─── Schedule Day Card ─── */

interface Session {
  time: string;
  name: string;
  location?: string;
  trainer?: string;
}

function ScheduleDay({
  day,
  location,
  trainer,
  accent,
  sessions,
  delay,
}: {
  day: string;
  location?: string;
  trainer?: string;
  accent: "yellow" | "purple";
  sessions: Session[];
  delay: number;
}) {
  const borderColor = accent === "yellow"
    ? "border-[var(--color-yellow)]/30"
    : "border-[var(--color-purple)]/30";
  const accentColor = accent === "yellow"
    ? "var(--color-yellow)"
    : "var(--color-purple-light)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VP}
      transition={{ delay, duration: 0.5 }}
      className={`rounded-2xl bg-[var(--color-navy-light)] border-2 ${borderColor} overflow-hidden`}
    >
      {/* Day header */}
      <div className="px-5 py-3 border-b border-[var(--color-purple)]/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar size={14} style={{ color: accentColor }} />
          <h3 className="font-[var(--font-heading)] text-base text-white">{day}</h3>
        </div>
      </div>

      {/* Meta — location & trainer (if same for all sessions) */}
      {(location || trainer) && (
        <div className="px-5 pt-3 flex flex-wrap gap-x-4 gap-y-1">
          {location && (
            <span className="flex items-center gap-1.5 font-[var(--font-accent)] text-[10px] tracking-wider uppercase text-[var(--color-gray-500)]">
              <MapPin size={10} /> {location}
            </span>
          )}
          {trainer && (
            <span className="flex items-center gap-1.5 font-[var(--font-accent)] text-[10px] tracking-wider uppercase text-[var(--color-gray-500)]">
              <User size={10} /> {trainer}
            </span>
          )}
        </div>
      )}

      {/* Sessions */}
      <div className="p-5 space-y-3">
        {sessions.map((s, i) => (
          <div key={i} className="flex gap-3">
            <span
              className="font-[var(--font-heading)] text-sm min-w-[50px]"
              style={{ color: accentColor }}
            >
              {s.time}
            </span>
            <div className="min-w-0">
              <span className="font-[var(--font-body)] text-sm text-white block">{s.name}</span>
              {/* Per-session overrides */}
              {(s.location || s.trainer) && (
                <div className="flex flex-wrap gap-x-3 mt-0.5">
                  {s.location && (
                    <span className="flex items-center gap-1 font-[var(--font-accent)] text-[9px] tracking-wider uppercase text-[var(--color-gray-500)]">
                      <MapPin size={8} /> {s.location}
                    </span>
                  )}
                  {s.trainer && (
                    <span className="flex items-center gap-1 font-[var(--font-accent)] text-[9px] tracking-wider uppercase text-[var(--color-gray-500)]">
                      <User size={8} /> {s.trainer}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
