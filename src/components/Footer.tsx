export default function Footer() {
  return (
    <footer className="py-8 border-t border-warm-gray/30 bg-cream">
      <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.65rem] tracking-[0.12em] uppercase text-blue-gray font-[EloquiaDisplay]">
        <span>
          © {new Date().getFullYear()} Morning Club Salento
        </span>
        <span>
          Coffee &amp; Disco · Lecce
        </span>
      </div>
    </footer>
  );
}
