"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* ── HERO: Frosted Split Youth Editorial ── */}
      <section className="relative min-h-screen overflow-hidden bg-cream">
        {/* Full-bleed background video */}
        <video
          src="/hero_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.35] grayscale-[0.25]"
        />

        {/* ── CREAM BACKGROUND — soft fade instead of hard cut ── */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: "linear-gradient(90deg, var(--color-cream) 0%, var(--color-cream) 30%, rgba(245,240,232,0.75) 44%, rgba(245,240,232,0.35) 60%, rgba(245,240,232,0.12) 80%, transparent 100%)",
          }}
        />

        {/* Grain */}
        <div
          className="absolute inset-0 z-[3] pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* ── Oversized Hero Text (Background, right side only) ── */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 z-[4] pointer-events-none select-none hidden md:block">
           <p className="text-[12vw] leading-[0.82] font-[EloquiaDisplay] text-foreground/[0.08] tracking-tight text-right pr-8" aria-hidden="true">
             MORNING<br />CLUB<br />SALENTO
           </p>
        </div>

        {/* Content layer */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-16">

            {/* ── Panel container (relative anchor for sticker + badges) ── */}
            <div className="relative w-full md:w-[62%] lg:w-[56%] xl:w-[52%] overflow-visible">

              {/* ── FRESH START sticker — top-left corner of panel, overlapping edge ── */}
              <div
                className="reveal delay-100 absolute -top-8 -left-4 sm:-top-10 sm:-left-5 md:-top-12 md:-left-6 z-20"
                style={{ transform: "rotate(-12deg)", filter: "drop-shadow(2px 3px 4px rgba(0,0,0,0.2))" }}
              >
                <Image
                  src="/fresh-start.png"
                  alt="Fresh Start"
                  width={280}
                  height={100}
                  className="w-[120px] sm:w-[140px] md:w-[160px] h-auto"
                  priority
                />
              </div>

              {/* ── Spotlight glow behind card ── */}
              <div
                className="absolute -inset-12 rounded-[3rem] pointer-events-none z-[-1]"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(245,240,232,0.7) 0%, transparent 70%)",
                }}
              />

              {/* ── Frosted Acrylic Panel ── */}
              <div
                className="relative rounded-xl"
                style={{
                  background: "rgba(245,240,232,0.95)",
                  backdropFilter: "blur(48px) saturate(1.1)",
                  WebkitBackdropFilter: "blur(48px) saturate(1.1)",
                  border: "1px solid rgba(0,0,0,0.10)",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.14), 0 16px 48px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06)",
                }}
              >
                {/* Panel grain — satin materiality */}
                <div
                  className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-[0.07]"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    mixBlendMode: "multiply",
                  }}
                />

                <div className="relative px-7 sm:px-9 md:px-10 lg:px-12 pt-12 sm:pt-14 md:pt-16 pb-10 sm:pb-12 md:pb-14">

                  {/* ── H2 — Primary card headline ── */}
                  <p className="reveal delay-300 text-xl sm:text-2xl md:text-[1.75rem] text-foreground font-[SatoshiMedium] leading-snug font-bold">
                    La domenica mattina cambia tono.
                  </p>

                  {/* Metadata */}
                  <p className="reveal delay-300 mt-3 text-[0.72rem] tracking-[0.18em] uppercase text-slate font-[SatoshiMedium]">
                    ESPRESSO · VINYL · PEOPLE
                  </p>

                  {/* ── Date + Location + CTA Group ── */}
                  <div className="reveal delay-400 mt-8 sm:mt-10 bg-cream/60 backdrop-blur-sm rounded-xl p-6 border border-warm-gray/30" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                      
                      {/* Date & Time — left column, clear scan path */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl sm:text-4xl font-[EloquiaDisplay] font-bold text-red" style={{ fontVariantNumeric: "tabular-nums" }}>01</span>
                            <span className="text-lg sm:text-xl font-[EloquiaDisplay] uppercase tracking-[0.18em] text-foreground font-bold">MARZO</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-xl sm:text-2xl font-[EloquiaDisplay] font-bold text-foreground" style={{ fontVariantNumeric: "tabular-nums" }}>10:00</span>
                            <span className="text-[0.72rem] uppercase tracking-[0.18em] text-slate font-[SatoshiMedium]">MARTINUCCI, LECCE</span>
                        </div>
                      </div>

                      {/* Arrow cue + CTA — primary action */}
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <svg className="w-6 h-6 text-red/50 hidden sm:block animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <a
                          href="#iscriviti"
                          className="inline-flex items-center justify-center bg-red hover:bg-red-dark text-cream px-8 py-3.5 text-sm tracking-[0.16em] uppercase font-[EloquiaDisplay] rounded-xl transition-all duration-200 active:scale-[0.97] min-h-[48px] whitespace-nowrap w-full sm:w-auto text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
                          style={{ boxShadow: "0 4px 14px rgba(182, 58, 43, 0.35)" }}
                        >
                          Entra in lista
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── BELOW HERO: manifesto ── */}
      <section className="bg-cream py-14 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Brand */}
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-red leading-[0.85] tracking-tight font-[EloquiaDisplay] uppercase">
            Morning Club
          </h2>
          <p className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.85] tracking-tight mt-1 sm:mt-2 font-[EloquiaDisplay]">
            Salento.
          </p>

          {/* Manifesto — different angle from hero */}
          <p className="mt-8 sm:mt-10 text-xl sm:text-2xl md:text-3xl font-[SatoshiMedium] text-foreground leading-snug max-w-2xl">
            Non solo un evento. <span className="marker-swipe">Un appuntamento.</span>
          </p>

          {/* Metadata */}
          <p className="mt-4 sm:mt-5 text-[0.72rem] tracking-[0.18em] uppercase text-slate font-[SatoshiMedium]">
            CAFFÈ, SELEZIONE MUSICALE, PERSONE GIUSTE. OGNI DOMENICA ALLE 10, NESSUN RUMORE INUTILE.
          </p>

          {/* Badge + Location */}
          <div className="mt-8 sm:mt-10 flex items-center gap-4 flex-wrap">
            <span className="stamp-badge">Coffee &amp; Disco</span>
            <span className="text-[0.72rem] tracking-[0.18em] uppercase font-[SatoshiMedium] text-slate">
              MARTINUCCI, LECCE
            </span>
          </div>

          {/* Ritual line — mobile only */}
          <p className="mt-6 text-[0.72rem] tracking-[0.18em] uppercase text-slate font-[SatoshiMedium] sm:hidden">
            OGNI DOMENICA ALLE 10 · INGRESSO SU INVITO
          </p>

          {/* CTA — secondary outline */}
          <div className="mt-8 sm:mt-10">
            <a
              href="#iscriviti"
              className="inline-flex items-center gap-3 border-2 border-red text-red hover:bg-red hover:text-cream px-8 py-3.5 text-sm tracking-[0.16em] uppercase font-[EloquiaDisplay] rounded-xl transition-all duration-200 active:scale-[0.97] min-h-[48px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10">
          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            {[
              { label: "10:00", sub: "Ogni domenica" },
              { label: "Lecce", sub: "Location a rotazione" },
              { label: "Lista", sub: "Ingresso su invito" },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-foreground/12 bg-cream rounded-xl px-3 py-5 sm:px-5 sm:py-6 text-center"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              >
                <span className="block text-xl sm:text-3xl md:text-4xl font-[EloquiaDisplay] text-foreground leading-none">
                  {item.label}
                </span>
                <span className="block text-[0.72rem] text-slate font-[SatoshiMedium] mt-2 tracking-[0.18em] uppercase">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 text-[0.72rem] tracking-[0.18em] uppercase text-slate font-[SatoshiMedium]">
            Prossimo appuntamento → Martinucci, Lecce — Dom 01.03 — 10:00
          </p>
        </div>
      </section>
    </>
  );
}
