import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morning Club Salento — Coffee & Disco",
  description:
    "Coffee & Disco ogni domenica mattina a Lecce. Iscriviti per non perderti i prossimi eventi del Morning Club Salento.",
  openGraph: {
    title: "Morning Club Salento — Coffee & Disco",
    description: "Coffee & Disco ogni domenica mattina a Lecce.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f2ed",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="preload" href="/fonts/EloquiaDisplay.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/SatoshiMedium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
