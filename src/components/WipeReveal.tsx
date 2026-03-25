"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

export default function WipeReveal({
  children,
  color = "#DFFF00",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  color?: string;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Wipe glow overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${color}33 30%, ${color}55 50%, ${color}33 70%, transparent 100%)`,
          transform: revealed ? "translateX(101%)" : "translateX(-101%)",
          transition: revealed
            ? `transform 0.7s cubic-bezier(0.25, 1, 0.5, 1) ${delay}s`
            : "none",
        }}
      />
      {/* Content */}
      <div
        style={{
          opacity: revealed ? 1 : 0,
          transition: `opacity 0.01s ${delay + 0.25}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
