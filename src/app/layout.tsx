import type { Metadata } from "next";
import { Jost, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GMS Integra — Ventanas y Mamparas de aluminio",
  description:
    "Diseño, fabricación e instalación de mamparas y ventanas de aluminio. Proyectos integrales.",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
