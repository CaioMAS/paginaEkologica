import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ekológica Engenharia | Obras Industriais e Construção Civil",
  description: "A Ekológica é especializada em engenharia corporativa, obras industriais de grande porte, galpões, retrofits e soluções termoacústicas de alta performance. Capacidade técnica e operacional.",
  keywords: ["engenharia industrial", "obras industriais", "construção civil", "retrofit industrial", "drywall montes claros", "steel frame", "divisórias corporativas", "ekologica engenharia"],
  authors: [{ name: "Ekológica Engenharia" }],
  openGraph: {
    title: "Ekológica Engenharia | Obras Industriais e Construção Civil",
    description: "Soluções completas e engenharia de alto padrão para ambientes corporativos e industriais.",
    url: "https://www.ekologicadrywall.com.br",
    siteName: "Ekológica Engenharia",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1014",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-white text-slate-800 font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}

