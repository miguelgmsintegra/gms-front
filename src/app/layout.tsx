import type { Metadata } from "next";
import { Jost, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JsonLd } from "@/components/seo/json-ld";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gmsintegra.com"),
  title: {
    default: "GMS Integra — Ventanas y Mamparas de Aluminio en Huancayo y Valle del Mantaro",
    template: "%s | GMS Integra",
  },
  description:
    "Especialistas en diseño, fabricación e instalación de ventanas y mamparas de aluminio y vidrio templado. Fachadas integrales, puertas, barandas, techos de policarbonato y drywall en Huancayo, El Tambo, Chilca y todo el Valle del Mantaro.",
  keywords: [
    "Ventanas de aluminio Huancayo",
    "Mamparas de baño Huancayo",
    "Mamparas de vidrio templado Valle del Mantaro",
    "Carpintería de aluminio Huancayo",
    "Fachadas integrales Junín",
    "Muro cortina Huancayo",
    "Puertas de aluminio El Tambo",
    "Barandas de acero y cristal Chilca",
    "Techos de policarbonato Huancayo",
    "Sistema Drywall Huancayo",
    "Serie 20 Serie 25 Serie 38 Sistema Nova",
    "GMS Integra",
  ],
  authors: [{ name: "GMS Integra", url: "https://gmsintegra.com" }],
  creator: "GMS Integra",
  publisher: "GMS Integra",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://gmsintegra.com",
    siteName: "GMS Integra",
    title: "GMS Integra — Especialistas en Ventanas y Mamparas de Aluminio",
    description:
      "Diseño, fabricación e instalación a medida de ventanas y mamparas de vidrio templado, fachadas integrales y acabados arquitectónicos en Huancayo y el Valle del Mantaro.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GMS Integra - Ventanas y Mamparas de Aluminio en Huancayo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GMS Integra — Ventanas y Mamparas de Aluminio en Huancayo",
    description:
      "Especialistas en ventanas, mamparas, fachadas integrales, puertas y techos en todo el Valle del Mantaro.",
    images: ["/opengraph-image"],
  },
  other: {
    "geo.region": "PE-JUN",
    "geo.placename": "Huancayo, Valle del Mantaro, Junín, Perú",
    "geo.position": "-12.06513;-75.20486",
    ICBM: "-12.06513, -75.20486",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${jost.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col relative overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
          {/* Fondo de Auroras Boreales Fijo (Tonos azulados y cianes vibrantes) */}
          <div className="pointer-events-none fixed inset-0 overflow-hidden z-0 select-none bg-[#f7f9fc]">
            {/* Blob Azul Principal (Superior Izquierda) */}
            <div className="absolute top-[-15%] left-[-15%] w-[60rem] h-[60rem] rounded-full bg-[#004aad]/25 blur-[130px] animate-aurora-1" />
            
            {/* Blob Cian Vibrante (Superior Derecha) */}
            <div className="absolute top-[5%] right-[-15%] w-[65rem] h-[65rem] rounded-full bg-[#00c9ff]/24 blur-[140px] animate-aurora-2" />
            
            {/* Blob Violeta/Púrpura Mágico (Centro Izquierda) */}
            <div className="absolute top-[30%] left-[-20%] w-[55rem] h-[55rem] rounded-full bg-[#8a2be2]/16 blur-[120px] animate-aurora-3" />
            
            {/* Blob Azul Suave (Centro Derecha) */}
            <div className="absolute top-[50%] right-[-10%] w-[60rem] h-[60rem] rounded-full bg-[#3b82f6]/20 blur-[130px] animate-aurora-1" />
            
            {/* Blob Azul de Marca Principal (Inferior Izquierda) */}
            <div className="absolute bottom-[-20%] left-[-10%] w-[65rem] h-[65rem] rounded-full bg-[#004aad]/24 blur-[140px] animate-aurora-2" />

            {/* Blob Cian de Refuerzo (Inferior Derecha) */}
            <div className="absolute bottom-[-15%] right-[-15%] w-[55rem] h-[55rem] rounded-full bg-[#00c9ff]/20 blur-[120px] animate-aurora-3" />
          </div>

          <TooltipProvider>
            <div className="relative z-10 flex flex-col min-h-screen">
              {children}
            </div>
          </TooltipProvider>
          <Toaster />
          <JsonLd />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
