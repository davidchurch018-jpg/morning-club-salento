"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* ── HERO: Frosted Split Youth Editorial ── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Full-bleed background photo */}
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />

        {/* Subtle gradient — depth without killing photo */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: [
              "linear-gradient(90deg, rgba(0,0,0,0.05) 0%, transparent 35%)",
              "linear-gradient(180deg, rgba(0,0,0,0.06) 0%, transparent 14%, transparent 86%, rgba(0,0,0,0.05) 100%)",
            ].join(", "),
          }}
        />

        {/* Grain */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-24 md:py-16">

            {/* ── Frosted Panel ── */}
            <div className="relative w-full md:w-[56%] lg:w-[50%] xl:w-[46%]">
              <div
                className="relative bg-cream/[0.78] backdrop-blur-2xl rounded-2xl md:rounded-3xl border border-white/40 overflow-hidden"
                style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.03)" }}
              >
                {/* Panel grain — materiality */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.025]"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  }}
                />

                <div className="relative px-7 sm:px-9 md:px-10 lg:px-12 py-10 sm:py-12 md:py-14 lg:py-16">
                  {/* Headline + inline badge */}
                  <h1 className="reveal delay-100">
                    <span className="block text-[2.3rem] sm:text-[3.1rem] md:text-[3.5rem] lg:text-[4.2rem] leading-[0.88] tracking-[-0.02em] text-foreground font-[EloquiaDisplay] uppercase">
                      Morning Club
                    </span>
                    <span className="flex items-end gap-2.5 sm:gap-3 mt-0.5 sm:mt-1 flex-wrap">
                      <span className="text-[2.3rem] sm:text-[3.1rem] md:text-[3.5rem] lg:text-[4.2rem] leading-[0.88] tracking-[-0.02em] text-foreground font-[EloquiaDisplay] uppercase">
                        Salento
                      </span>
                      <span
                        className="inline-block bg-red text-cream text-[0.48rem] sm:text-[0.54rem] md:text-[0.58rem] tracking-[0.14em] uppercase font-[EloquiaDisplay] px-2 py-[3px] rounded-sm -rotate-2 mb-1.5 sm:mb-2 md:mb-3 whitespace-nowrap"
                        style={{ boxShadow: "2px 2px 0 rgba(0,0,0,0.08)" }}
                      >
                        Coffee &amp; Disco
                      </span>
                    </span>
                  </h1>

                  {/* Manifesto */}
                  <p className="reveal delay-200 mt-5 sm:mt-6 text-[0.92rem] sm:text-base md:text-lg text-foreground/60 font-[SatoshiMedium] leading-relaxed">
                    La domenica mattina cambia tono.
                  </p>

                  {/* Micro-caption */}
                  <p className="reveal delay-200 mt-1.5 text-[0.56rem] sm:text-[0.62rem] tracking-[0.22em] uppercase text-red font-[EloquiaDisplay]">
                    Espresso · Vinyl · People
                  </p>

                  {/* Date + Location */}
                  <div className="reveal delay-300 mt-7 sm:mt-9">
                    <p className="text-[0.85rem] sm:text-sm md:text-[0.95rem] font-[EloquiaDisplay] text-foreground leading-snug">
                      Domenica 1 Marzo — 10:00
                    </p>
                    <p className="text-[0.68rem] sm:text-xs text-blue-gray font-[SatoshiMedium] mt-1">
                      Martinucci, Lecce
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="reveal delay-400 mt-7 sm:mt-8">
                    <a
                      href="#iscriviti"
                      className="inline-flex items-center bg-red hover:bg-red-dark text-cream px-7 py-3.5 sm:px-8 sm:py-4 text-[0.72rem] sm:text-[0.78rem] tracking-[0.18em] uppercase font-[EloquiaDisplay] rounded-lg transition-all duration-200 active:scale-[0.97] min-h-[48px]"
                      style={{ boxShadow: "3px 3px 0 rgba(0,0,0,0.08)" }}
                    >
                      Entra in lista
                    </a>
                  </div>
                </div>
              </div>

              {/* ── Floating date modules — panel edge ── */}
              <div className="reveal delay-500 absolute -bottom-5 right-4 sm:right-6 md:-right-4 lg:-right-6 flex items-center gap-2.5">
                {/* 01/MAR badge */}
                <div
                  className="bg-red text-cream rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 text-center"
                  style={{ boxShadow: "3px 3px 0 rgba(0,0,0,0.1)" }}
                >
                  <span className="block text-lg sm:text-xl font-[EloquiaDisplay] leading-none">01</span>
                  <span className="block text-[0.48rem] sm:text-[0.52rem] tracking-[0.15em] uppercase font-[EloquiaDisplay] mt-0.5">MAR</span>
                </div>
                {/* 10:00 pill */}
                <div
                  className="bg-foreground/90 backdrop-blur-lg text-cream rounded-full px-3.5 py-2 sm:px-4 sm:py-2.5"
                  style={{ boxShadow: "3px 3px 0 rgba(0,0,0,0.08)" }}
                >
                  <span className="text-xs sm:text-sm font-[EloquiaDisplay] tracking-[0.05em]" style={{ fontVariantNumeric: "tabular-nums" }}>
                    10:00
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BELOW HERO: manifesto ── */}
      <section className="bg-cream py-14 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16">
          {/* Brand */}
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-red leading-[0.85] tracking-tight font-[EloquiaDisplay] uppercase">
            Morning Club
          </h2>
          <p className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.85] tracking-tight mt-1 sm:mt-2 font-[EloquiaDisplay]">
            Salento.
          </p>

          {/* Manifesto — different angle from hero */}
          <p className="mt-8 sm:mt-10 text-xl sm:text-2xl md:text-3xl font-[SatoshiMedium] text-foreground/80 leading-snug max-w-2xl">
            Non solo un evento. <span className="marker-swipe">Un appuntamento.</span>
          </p>

          {/* Micro-caption */}
          <p className="mt-4 sm:mt-5 text-[0.7rem] sm:text-[0.75rem] tracking-[0.2em] uppercase text-blue-gray font-[EloquiaDisplay]">
            Caffè, selezione musicale, persone giuste. Ogni domenica alle 10, nessun rumore inutile.
          </p>

          {/* Badge + Location */}
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

          {/* CTA — secondary outline */}
          <div className="mt-8 sm:mt-10">
            <a
              href="#iscriviti"
              className="inline-flex items-center gap-3 border-2 border-red text-red hover:bg-red hover:text-cream px-8 py-4 text-sm sm:text-base tracking-[0.2em] uppercase font-[EloquiaDisplay] transition-all duration-200 active:translate-y-[1px] active:scale-[0.98]"
              style={{ boxShadow: "3px 3px 0 rgba(0,0,0,0.10)" }}
            >
              Resta nel giro
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── RITUAL: 3 chips — desktop only ── */}
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
