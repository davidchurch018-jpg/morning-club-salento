"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* ── HERO: full-bleed image + grid-aligned date overlay ── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={80}
        />

        {/* Selective gradient masks — protect text corners, preserve photo center */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: [
              "radial-gradient(ellipse 60% 50% at 0% 0%, rgba(0,0,0,0.50) 0%, transparent 70%)",
              "radial-gradient(ellipse 50% 45% at 100% 0%, rgba(0,0,0,0.40) 0%, transparent 65%)",
              "radial-gradient(ellipse 55% 50% at 0% 100%, rgba(0,0,0,0.40) 0%, transparent 65%)",
              "radial-gradient(ellipse 50% 50% at 100% 100%, rgba(0,0,0,0.45) 0%, transparent 65%)",
            ].join(", "),
          }}
        />
        {/* Soft vertical vignette */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.20) 0%, transparent 24%, transparent 72%, rgba(0,0,0,0.28) 100%)",
          }}
        />

        {/* Subtle grain overlay */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Grid-aligned date composition */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 md:px-16 h-screen flex flex-col justify-between pt-28 pb-20 sm:py-20">

          {/* Curatorial label — editorial identity */}
          <span className="label-curatorial reveal delay-500 absolute top-[7rem] sm:top-24 right-6 sm:right-12 md:right-16">
            Sunday Drop
          </span>

          {/* Top row: DOM left, 10:00 right */}
          <div className="flex items-start justify-between">
            <span
              className="reveal text-[3.4rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[8rem] leading-[0.8] tracking-[0.04em] text-cream font-[EloquiaDisplay]"
              style={{
                textShadow: "0 2px 16px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3)",
              }}
            >
              DOM
            </span>
            <div
              className="reveal delay-200 bg-foreground/90 backdrop-blur-[2px] border border-cream/15 px-4 py-1.5 sm:px-6 sm:py-2.5 md:px-8 md:py-3 sm:border-0"
              style={{ boxShadow: "3px 3px 0 rgba(0,0,0,0.15)" }}
            >
              <span
                className="text-[1.8rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-none tracking-[0.04em] text-cream font-[EloquiaDisplay]"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                10:00
              </span>
            </div>
          </div>

          {/* Bottom row: 01 left, MAR + 2026 stacked right */}
          <div className="flex items-end justify-between pb-16 sm:pb-0">
            <span
              className="reveal delay-100 text-[4.8rem] sm:text-[9rem] md:text-[11rem] lg:text-[13rem] leading-[0.75] tracking-[0.04em] text-cream font-[EloquiaDisplay]"
              style={{ fontVariantNumeric: "tabular-nums", textShadow: "0 2px 16px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3)" }}
            >
              01
            </span>
            <div className="flex flex-col items-end -ml-6 sm:ml-0">
              <div
                className="reveal delay-300 bg-red-dark/95 backdrop-blur-[2px] border border-cream/15 px-4 py-1.5 sm:px-6 sm:py-2.5 md:px-8 md:py-3 sm:border-0"
                style={{ boxShadow: "3px 3px 0 rgba(0,0,0,0.15)" }}
              >
                <span className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-none tracking-[0.04em] text-cream font-[EloquiaDisplay]">
                  MAR
                </span>
              </div>
              <span className="reveal delay-400 text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] tracking-[0.15em] uppercase text-cream/85 font-[EloquiaDisplay] mt-1.5 mr-0.5 sm:mr-1"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.35)" }}
              >
                / 2026
              </span>
            </div>
          </div>

          {/* Micro-caption — editorial context line */}
          <div className="absolute bottom-8 sm:bottom-8 left-6 sm:left-12 md:left-16 z-10 reveal-left delay-600">
            <p className="text-[0.6rem] sm:text-[0.65rem] tracking-[0.22em] uppercase text-cream/60 font-[EloquiaDisplay] mb-1.5">
              Espresso · Vinyl · People
            </p>
            <p className="text-[0.9rem] sm:text-[0.9rem] tracking-[0.16em] uppercase text-cream font-[SatoshiMedium]"
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.55), 0 0px 3px rgba(0,0,0,0.35)" }}
            >
              Caffè, vinili, gente giusta.
            </p>
          </div>
        </div>
      </section>

      {/* ── BELOW HERO: manifesto editoriale ── */}
      <section className="bg-cream py-14 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16">
          {/* Title */}
          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-red leading-[0.85] tracking-tight font-[EloquiaDisplay] uppercase">
            Morning Club
          </h1>
          <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.85] tracking-tight mt-1 sm:mt-2 font-[EloquiaDisplay]">
            Salento.
          </h2>

          {/* Manifesto — curatorial tone */}
          <p className="mt-8 sm:mt-10 text-xl sm:text-2xl md:text-3xl font-[SatoshiMedium] text-foreground/80 leading-snug max-w-2xl">
            La domenica mattina <span className="marker-swipe">cambia tono.</span>
          </p>

          {/* Micro-caption — editorial register */}
          <p className="mt-4 sm:mt-5 text-[0.7rem] sm:text-[0.75rem] tracking-[0.2em] uppercase text-blue-gray font-[EloquiaDisplay]">
            Espresso, selezione musicale, persone giuste. Nessun rumore inutile.
          </p>

          {/* Tagline + Location */}
          <div className="mt-8 sm:mt-10 flex items-center gap-4 flex-wrap">
            <span className="stamp-badge">Coffee &amp; Disco</span>
            <span className="text-[0.65rem] tracking-[0.2em] uppercase font-[SatoshiMedium] text-blue-gray">
              Martinucci, Lecce
            </span>
          </div>

          {/* Ritual line — mobile only */}
          <p className="mt-6 text-[0.65rem] tracking-[0.15em] uppercase text-blue-gray/70 font-[EloquiaDisplay] sm:hidden">
            Ogni domenica alle 10 · Ingresso su invito
          </p>

          {/* CTA — editorial outline */}
          <div className="mt-8 sm:mt-10">
            <a
              href="#iscriviti"
              className="inline-flex items-center gap-3 border-2 border-red text-red hover:bg-red hover:text-cream px-8 py-4 text-sm sm:text-base tracking-[0.2em] uppercase font-[EloquiaDisplay] transition-all duration-200 active:translate-y-[1px] active:scale-[0.98]"
              style={{ boxShadow: "3px 3px 0 rgba(0,0,0,0.10)" }}
            >
              Entra in lista
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── RITUAL: 3 chips + next event — hidden on mobile ── */}
      <section className="bg-cream border-t border-warm-gray/30 hidden sm:block">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 py-8 sm:py-10">
          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            {[
              { label: "10:00", sub: "Ogni domenica" },
              { label: "Lecce", sub: "Location a rotazione" },
              { label: "Lista", sub: "Ingresso su invito" },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-foreground/12 bg-cream px-3 py-5 sm:px-5 sm:py-6 text-center"
                style={{ boxShadow: "3px 3px 0 rgba(0,0,0,0.05)" }}
              >
                <span className="block text-xl sm:text-3xl md:text-4xl font-[EloquiaDisplay] text-foreground leading-none">
                  {item.label}
                </span>
                <span className="block text-[0.6rem] sm:text-[0.65rem] text-blue-gray font-[SatoshiMedium] mt-2 tracking-[0.18em] uppercase">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 text-[0.6rem] sm:text-[0.65rem] tracking-[0.15em] uppercase text-blue-gray font-[EloquiaDisplay]">
            Prossimo appuntamento → Martinucci, Lecce — Dom 01.03 — 10:00
          </p>
        </div>
      </section>
    </>
  );
}
