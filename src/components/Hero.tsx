"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* ── HERO: Frosted Split Youth Editorial ── */}
      <section className="relative min-h-screen overflow-hidden bg-cream">
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
              "linear-gradient(90deg, rgba(0,0,0,0.04) 0%, transparent 30%)",
              "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, transparent 12%, transparent 88%, rgba(0,0,0,0.04) 100%)",
            ].join(", "),
          }}
        />

        {/* Grain */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Content layer */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-16">

            {/* ── Panel container (relative anchor for sticker + badges) ── */}
            <div className="relative w-full md:w-[54%] lg:w-[48%] xl:w-[46%]">

              {/* ── FRESH START sticker — top-left, overlapping panel ── */}
              <div
                className="reveal delay-100 absolute -top-5 -left-2 sm:-top-6 sm:-left-3 z-20"
                style={{ transform: "rotate(-12deg)" }}
              >
                <div
                  className="relative bg-red text-cream px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-sm"
                  style={{ boxShadow: "2px 3px 0 rgba(0,0,0,0.12)" }}
                >
                  <span className="block text-[0.7rem] sm:text-[0.8rem] font-[EloquiaDisplay] tracking-[0.06em] uppercase leading-none">
                    Fresh Start
                  </span>
                  <span className="block text-[0.4rem] sm:text-[0.42rem] font-[SatoshiMedium] tracking-[0.1em] uppercase opacity-70 mt-0.5">
                    Est. 2025
                  </span>
                  {/* Decorative dot */}
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red rounded-full border-[2px] border-cream" />
                </div>
              </div>

              {/* ── Frosted Panel ── */}
              <div
                className="relative bg-cream/[0.80] backdrop-blur-2xl rounded-[1.1rem] sm:rounded-[1.25rem] md:rounded-[1.4rem] border border-foreground/[0.06]"
                style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.02)" }}
              >
                {/* Panel grain — materiality */}
                <div
                  className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-[0.02]"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  }}
                />

                <div className="relative px-7 sm:px-9 md:px-10 lg:px-12 pt-12 sm:pt-14 md:pt-16 pb-10 sm:pb-12 md:pb-14">

                  {/* ── Headline: 3 lines ── */}
                  <h1 className="reveal delay-200">
                    <span className="block text-[2.1rem] sm:text-[2.8rem] md:text-[3.3rem] lg:text-[3.9rem] leading-[0.92] tracking-[-0.015em] text-foreground font-[EloquiaDisplay] uppercase">
                      Morning
                    </span>
                    <span className="block text-[2.1rem] sm:text-[2.8rem] md:text-[3.3rem] lg:text-[3.9rem] leading-[0.92] tracking-[-0.015em] text-foreground font-[EloquiaDisplay] uppercase">
                      Club
                    </span>
                    <span className="block text-[2.1rem] sm:text-[2.8rem] md:text-[3.3rem] lg:text-[3.9rem] leading-[0.92] tracking-[-0.015em] text-foreground font-[EloquiaDisplay] uppercase">
                      Salento
                    </span>
                  </h1>

                  {/* ── Manifesto ── */}
                  <p className="reveal delay-300 mt-5 sm:mt-7 text-[0.95rem] sm:text-[1.05rem] md:text-lg text-foreground/55 font-[SatoshiMedium] leading-relaxed">
                    La domenica mattina cambia tono.
                  </p>

                  {/* Micro-caption */}
                  <p className="reveal delay-300 mt-1 text-[0.55rem] sm:text-[0.6rem] tracking-[0.2em] uppercase text-foreground/35 font-[SatoshiMedium]">
                    Espresso · Vinyl · People
                  </p>

                  {/* ── Date + Location ── */}
                  <div className="reveal delay-400 mt-7 sm:mt-9">
                    <p className="text-[0.88rem] sm:text-[0.95rem] md:text-base font-[EloquiaDisplay] text-foreground leading-snug">
                      Domenica 1 Marzo — 10:00
                    </p>
                    <p className="text-[0.7rem] sm:text-xs text-blue-gray font-[SatoshiMedium] mt-1">
                      Martinucci, Lecce
                    </p>
                  </div>

                  {/* ── CTA ── */}
                  <div className="reveal delay-500 mt-7 sm:mt-9">
                    <a
                      href="#iscriviti"
                      className="inline-flex items-center bg-red hover:bg-red-dark text-cream px-7 py-3.5 sm:px-8 sm:py-4 text-[0.7rem] sm:text-[0.76rem] tracking-[0.16em] uppercase font-[EloquiaDisplay] rounded-lg transition-all duration-200 active:scale-[0.97] min-h-[48px]"
                      style={{ boxShadow: "3px 3px 0 rgba(0,0,0,0.08)" }}
                    >
                      Entra in lista
                    </a>
                  </div>
                </div>
              </div>

              {/* ── Floating date badges — bottom-right, overlapping panel edge ── */}
              <div className="reveal delay-600 absolute -bottom-6 sm:-bottom-7 right-6 sm:right-8 md:-right-3 lg:-right-5 flex items-stretch gap-2">
                {/* 01 / MAR */}
                <div
                  className="bg-red text-cream rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 text-center flex flex-col items-center justify-center min-w-[3.2rem] sm:min-w-[3.6rem]"
                  style={{ boxShadow: "3px 4px 0 rgba(0,0,0,0.10)" }}
                >
                  <span className="block text-[1.3rem] sm:text-[1.5rem] font-[EloquiaDisplay] leading-none" style={{ fontVariantNumeric: "tabular-nums" }}>
                    01
                  </span>
                  <span className="block text-[0.5rem] sm:text-[0.55rem] tracking-[0.12em] uppercase font-[EloquiaDisplay] mt-0.5 opacity-90">
                    MAR
                  </span>
                </div>
                {/* 10:00 */}
                <div
                  className="bg-foreground/90 backdrop-blur-md text-cream rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-center"
                  style={{ boxShadow: "3px 4px 0 rgba(0,0,0,0.08)" }}
                >
                  <span className="text-[1rem] sm:text-[1.15rem] font-[EloquiaDisplay] tracking-[0.04em]" style={{ fontVariantNumeric: "tabular-nums" }}>
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
