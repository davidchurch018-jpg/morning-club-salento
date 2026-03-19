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
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-full flex items-center justify-between"
        aria-label="Navigazione principale"
      >
        {/* Logo + Brand name — left */}
        <a href="#" className="flex items-center gap-3" aria-label="Morning Club Salento — torna su">
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
          <span className={`font-[EloquiaDisplay] font-bold uppercase text-red tracking-[0.08em] transition-all duration-300 leading-none ${
            scrolled ? "text-sm sm:text-base" : "text-base sm:text-lg"
          }`}>
            Morning Club Salento
          </span>
        </a>

        {/* CTA right — outline when hero visible, filled when scrolled */}
        <a
          href="#iscriviti"
          className={`relative text-[0.72rem] sm:text-sm tracking-[0.16em] uppercase font-[EloquiaDisplay] transition-all duration-300 active:scale-[0.97] min-h-[48px] flex items-center gap-2 px-8 py-3.5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red ${
            scrolled
              ? "bg-red text-cream hover:bg-red-dark"
              : "border-2 border-red text-red hover:bg-red hover:text-cream bg-transparent"
          }`}
          style={{ boxShadow: scrolled ? "0 4px 14px rgba(182, 58, 43, 0.35)" : "none" }}
        >
          Entra in lista
          <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </nav>
    </header>
  );
}
