export default function Footer() {
  return (
    <footer className="py-10 sm:py-12 border-t border-warm-gray/30 bg-cream">
      <div className="max-w-6xl mx-auto px-5">
        {/* Brand line */}
        <p className="text-center text-lg sm:text-xl font-[EloquiaDisplay] text-foreground tracking-[0.06em] uppercase">
          Morning Club Salento
        </p>
        <p className="text-center text-[0.65rem] tracking-[0.18em] uppercase text-blue-gray font-[SatoshiMedium] mt-1.5">
          Coffee &amp; Disco · Lecce · Ogni domenica alle 10
        </p>

        {/* Divider */}
        <div className="section-divider max-w-[120px] mx-auto my-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-[0.6rem] tracking-[0.12em] uppercase text-blue-gray font-[SatoshiMedium]">
          <span>© {new Date().getFullYear()} Morning Club Salento</span>
          <span className="hidden sm:inline">·</span>
          <a href="#iscriviti" className="hover:text-red transition-colors">Entra in lista</a>
        </div>
      </div>
    </footer>
  );
}
