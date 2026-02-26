"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md h-14"
          : "bg-transparent h-16"
      }`}
    >
      {/* Red accent line — subtle marker-stroke, scroll only */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[1.5px] transition-opacity duration-300`}
        style={{
          background: `linear-gradient(90deg, var(--color-red) 0%, var(--color-red) 60%, transparent 100%)`,
          opacity: scrolled ? 0.3 : 0,
        }}
      />

      <nav
        className="max-w-6xl mx-auto px-6 sm:px-12 md:px-16 h-full flex items-center justify-between"
        aria-label="Navigazione principale"
      >
        {/* Logo left */}
        <a href="#" className="flex items-center" aria-label="Morning Club Salento — torna su">
          <Image
            src="/logo-illustration.png"
            alt="Morning Club Salento"
            width={120}
            height={40}
            className={`object-contain w-auto transition-all duration-300 ${
              scrolled ? "h-10 sm:h-8" : "h-14 sm:h-10"
            }`}
            priority
          />
        </a>

        {/* CTA right — refined with state */}
        <a
          href="#iscriviti"
          className={`relative text-[0.7rem] sm:text-[0.72rem] tracking-[0.15em] uppercase font-[EloquiaDisplay] transition-all duration-300 active:translate-y-[1px] active:scale-[0.97] min-h-[44px] flex items-center gap-2 border-2 ${
            scrolled
              ? "border-red text-red hover:bg-red hover:text-cream focus-visible:bg-red focus-visible:text-cream px-5 py-2.5"
              : "bg-foreground/80 border-foreground/60 backdrop-blur-[3px] text-cream hover:bg-foreground hover:border-foreground focus-visible:bg-foreground focus-visible:border-foreground px-6 py-2.5"
          }`}
          style={{
            transform: "rotate(-1deg)",
            boxShadow: scrolled ? "3px 3px 0 rgba(0,0,0,0.08)" : "3px 3px 0 rgba(0,0,0,0.18)",
            ...(!scrolled ? { textShadow: "0 1px 4px rgba(0,0,0,0.3)" } : {}),
          }}
        >
          Iscriviti
          <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          {/* Stamp notch */}
          <span
            className={`pointer-events-none absolute -top-[5px] left-3 h-[1.5px] w-4 transition-colors duration-300 ${
              scrolled ? "bg-red/60" : "bg-cream/50"
            }`}
          />
        </a>
      </nav>
    </header>
  );
}
