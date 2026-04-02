"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Hero() {
  const manifestoRef = useScrollReveal();
  const chipsRef = useScrollReveal();

  return (
    <>
      {/* ── HERO: Barocco Salentino Ripulito ── */}
      <section className="relative min-h-screen overflow-hidden bg-cream">
        {/* Full-bleed background video */}
        <video
          src="/hero_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.50] sm:opacity-[0.40] grayscale-[0.20]"
        />

        {/* ── CREAM BACKGROUND — soft fade ── */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, var(--color-cream) 0%, rgba(245,240,232,0.82) 25%, rgba(245,240,232,0.45) 55%, rgba(245,240,232,0.30) 80%, rgba(245,240,232,0.60) 100%)",
          }}
        />
        {/* Desktop: left-to-right fade for the split layout */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none hidden md:block"
          style={{
            background: "linear-gradient(90deg, var(--color-cream) 0%, var(--color-cream) 28%, rgba(245,240,232,0.78) 42%, rgba(245,240,232,0.30) 58%, rgba(245,240,232,0.08) 78%, transparent 100%)",
          }}
        />

        {/* Baroque rosone — subtle cultural pattern overlay */}
        <div className="absolute inset-0 z-[2] pointer-events-none rosone-pattern opacity-40" />

        {/* Grain — pietra leccese */}
        <div className="absolute inset-0 z-[3] pointer-events-none pietra-leccese" />

        {/* ── Oversized Hero Text — visible on ALL screens ── */}
        <div className="absolute top-20 left-4 right-4 z-[4] pointer-events-none select-none md:top-1/2 md:-translate-y-1/2 md:left-auto md:right-0">
           <p className="text-[15vw] sm:text-[12vw] md:text-[9vw] leading-[0.85] font-[EloquiaDisplay] text-foreground/[0.09] sm:text-foreground/[0.07] md:text-foreground/[0.06] tracking-tight md:text-right md:pr-8" aria-hidden="true">
             MORNING<br />CLUB<br />SALENTO
           </p>
        </div>

        {/* Content layer */}
        <div className="relative z-10 min-h-screen flex items-end pb-8 sm:pb-12 md:items-center md:pb-0">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-20 md:py-16">

            {/* ── Panel container ── */}
            <div className="relative w-full sm:w-[85%] md:w-[62%] lg:w-[56%] xl:w-[52%] overflow-visible">

              {/* ── FRESH START sticker — top-left ── */}
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

              {/* ══════════════════════════════════════════════
                  CARD — Premium Invite / Ticket Leccese
                  ══════════════════════════════════════════════ */}
              <div
                className="relative rounded-xl overflow-hidden"
                style={{
                  background: "rgba(245,240,232,0.92)",
                  backdropFilter: "blur(48px) saturate(1.1)",
                  WebkitBackdropFilter: "blur(48px) saturate(1.1)",
                  border: "1px solid rgba(0,0,0,0.10)",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.14), 0 16px 48px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06)",
                }}
              >
                {/* Card pietra leccese surface */}
                <div className="absolute inset-0 rounded-[inherit] pointer-events-none pietra-leccese" />

                {/* ── UPPER SECTION: headline + social proof ── */}
                <div className="relative px-5 sm:px-9 md:px-10 lg:px-12 pt-8 sm:pt-12 md:pt-14 pb-5 sm:pb-8">

                  {/* Serie / Edition — micro-label */}
                  <p className="reveal delay-200 text-[0.7rem] tracking-[0.2em] uppercase text-slate font-[SatoshiMedium] mb-5">
                    N° 001 · Serie inaugurale
                  </p>

                  {/* ── Primary headline — desire-driven ── */}
                  <h1 className="reveal delay-300 text-[1.65rem] sm:text-3xl md:text-[2rem] text-foreground font-[EloquiaDisplay] leading-[1.1] font-bold">
                    La tua domenica<br />
                    <span className="text-red">inizia qui.</span>
                  </h1>

                  {/* Social proof subline — desire layer */}
                  <p className="reveal delay-300 mt-4 text-sm sm:text-[0.95rem] text-slate font-[SatoshiMedium] leading-relaxed max-w-sm">
                    Caffè di selezione, vinili, e le persone giuste.<br />
                    <span className="font-[EloquiaText] italic text-foreground/70">La domenica mattina di chi sceglie bene.</span>
                  </p>

                  {/* Ritual tags */}
                  <div className="reveal delay-400 mt-6 flex items-center gap-2 flex-wrap">
                    {["Espresso", "Vinyl", "People"].map((tag) => (
                      <span key={tag} className="ritual-tag cursor-default text-[0.62rem] tracking-[0.18em] uppercase text-red/70 font-[SatoshiMedium] border border-red/20 rounded-full px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* DJ Line Up — editorial poster style */}
                  <div className="reveal delay-500 mt-7">
                    <p className="text-[0.58rem] tracking-[0.25em] uppercase text-red/60 font-[SatoshiMedium] mb-1.5">Selectors</p>
                    <div className="dj-lineup flex items-baseline gap-x-2 gap-y-0 flex-wrap leading-none">
                      {["Alex De Rio", "Zoso", "Giuseppe Scarlino"].map((dj, i) => (
                        <span key={dj} className="dj-name inline-flex items-baseline gap-2">
                          <span className="text-base sm:text-lg font-[EloquiaDisplay] font-bold uppercase tracking-[0.04em] text-foreground/90">{dj}</span>
                          {i < 2 && <span className="text-red/40 text-xs font-[EloquiaDisplay] select-none" aria-hidden="true">×</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── PERFORATION LINE — structural ticket divider ── */}
                <div className="ticket-perf mx-5 sm:mx-9 md:mx-10 lg:mx-12" />

                {/* ── LOWER SECTION: date + venue + CTA — the "stub" ── */}
                <div className="relative px-5 sm:px-9 md:px-10 lg:px-12 pt-5 sm:pt-7 pb-6 sm:pb-10 md:pb-12">

                  {/* Date + Venue + CTA row */}
                  <div className="reveal delay-500 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-4">

                    {/* Left: Date block */}
                    <div className="flex items-baseline gap-3 shrink-0">
                      <span className="text-5xl sm:text-6xl font-[EloquiaDisplay] font-bold text-red leading-none" style={{ fontVariantNumeric: "tabular-nums" }}>12</span>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-lg sm:text-xl font-[EloquiaDisplay] uppercase tracking-[0.14em] text-foreground font-bold leading-none">APRILE</span>
                        <span className="text-xl sm:text-2xl font-[EloquiaDisplay] font-bold text-foreground leading-none" style={{ fontVariantNumeric: "tabular-nums" }}>10–15</span>
                        <span className="text-[0.68rem] tracking-[0.18em] uppercase text-slate font-[SatoshiMedium] mt-0.5">DOMENICA</span>
                      </div>
                    </div>

                    {/* Center: Venue */}
                    <div className="flex flex-col items-start sm:items-start">
                      <p className="text-[0.68rem] tracking-[0.18em] uppercase text-slate font-[SatoshiMedium]">
                        ospitato da
                      </p>
                      <p className="text-xl sm:text-2xl font-[EloquiaDisplay] font-bold text-foreground leading-tight">
                        Martinucci
                      </p>
                      <p className="text-[0.72rem] tracking-[0.12em] font-[SatoshiMedium] text-slate mt-0.5">
                        Lecce, Puglia
                      </p>
                    </div>

                    {/* Right: CTA — inline in row */}
                    <div className="sm:ml-auto shrink-0 w-full sm:w-auto">
                      <a
                        href="#iscriviti"
                        className="inline-flex items-center justify-center bg-red hover:bg-red-dark text-cream px-6 py-3 text-sm tracking-[0.16em] uppercase font-[EloquiaDisplay] rounded-xl transition-all duration-200 active:scale-[0.97] min-h-[48px] w-full sm:w-auto text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red whitespace-nowrap"
                        style={{ boxShadow: "0 4px 14px rgba(182, 58, 43, 0.35)" }}
                      >
                        Entra in lista
                      </a>
                    </div>
                  </div>

                  {/* Micro-exclusivity line */}
                  <p className="reveal delay-600 mt-5 text-[0.68rem] tracking-[0.16em] uppercase text-slate font-[SatoshiMedium] text-center">
                    Ingresso su invito · Posti limitati · Sunday social ritual
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── BELOW HERO: manifesto ── */}
      <section className="bg-cream py-14 sm:py-16 md:py-20">
        <div ref={manifestoRef} className="scroll-reveal max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Brand */}
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-red leading-[0.85] tracking-tight font-[EloquiaDisplay] uppercase">
            Morning Club
          </h2>
          <p className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.85] tracking-tight mt-1 sm:mt-2 font-[EloquiaDisplay]">
            Salento.
          </p>

          {/* Manifesto — desire-driven angle */}
          <p className="mt-8 sm:mt-10 text-xl sm:text-2xl md:text-3xl font-[SatoshiMedium] text-foreground leading-snug max-w-2xl">
            Non è un evento. <span className="marker-swipe">È dove vuoi essere la domenica mattina.</span>
          </p>

          {/* Metadata */}
          <p className="mt-4 sm:mt-5 text-[0.62rem] sm:text-[0.72rem] tracking-[0.14em] sm:tracking-[0.18em] uppercase text-slate font-[SatoshiMedium] leading-relaxed">
            CAFFÈ DI SELEZIONE · VINILI · PERSONE GIUSTE<br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>DOMENICA 12 APRILE · 10:00–15:00 · NESSUN RUMORE INUTILE
          </p>

          {/* Badge + Location */}
          <div className="mt-8 sm:mt-10 flex items-center gap-4 flex-wrap">
            <span className="stamp-badge">Coffee &amp; Disco</span>
            <span className="text-[0.72rem] tracking-[0.18em] uppercase font-[SatoshiMedium] text-slate">
              MARTINUCCI · LECCE · PUGLIA
            </span>
          </div>

          {/* Ritual line — mobile only */}
          <p className="mt-6 text-[0.72rem] tracking-[0.18em] uppercase text-slate font-[SatoshiMedium] sm:hidden">
            DOM 12 APRILE · 10:00–15:00 · INGRESSO SU INVITO
          </p>

          {/* CTA — secondary outline */}
          <div className="mt-8 sm:mt-10">
            <a
              href="#iscriviti"
              className="inline-flex items-center gap-3 border-2 border-red text-red hover:bg-red hover:text-cream px-8 py-3.5 text-sm tracking-[0.16em] uppercase font-[EloquiaDisplay] rounded-xl transition-all duration-200 active:scale-[0.97] min-h-[48px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
            >
              Resta nel giro
              <span className="arrow-bounce">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── RITUAL: 3 chips ── */}
      <section className="bg-cream border-t border-warm-gray/30">
        <div ref={chipsRef} className="scroll-reveal max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10">
          <div className="grid grid-cols-3 gap-2 sm:gap-6">
            {[
              { label: "10–15", sub: "Dom 12 Aprile" },
              { label: "Lecce", sub: "Location a rotazione" },
              { label: "Lista", sub: "Ingresso su invito" },
            ].map((item) => (
              <div
                key={item.label}
                className="chip-card border border-foreground/12 bg-cream rounded-xl px-2 py-4 sm:px-5 sm:py-6 text-center pietra-leccese"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              >
                <span className="block text-lg sm:text-3xl md:text-4xl font-[EloquiaDisplay] text-foreground leading-none">
                  {item.label}
                </span>
                <span className="block text-[0.6rem] sm:text-[0.72rem] text-slate font-[SatoshiMedium] mt-1.5 sm:mt-2 tracking-[0.14em] sm:tracking-[0.18em] uppercase">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 text-[0.6rem] sm:text-[0.72rem] tracking-[0.14em] sm:tracking-[0.18em] uppercase text-slate font-[SatoshiMedium]">
            Prossimo appuntamento → Martinucci, Lecce — Dom 12.04 — 10:00–15:00
          </p>
        </div>
      </section>
    </>
  );
}
