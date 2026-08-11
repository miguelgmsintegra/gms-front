"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import logo from "@/assets/gms-logo.webp";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

// Iconos personalizados de alta calidad para redes sociales
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Series", href: "#series" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

function Logo({ className, scrolled }: { className?: string; scrolled: boolean }) {
  return (
    <a 
      href="#inicio" 
      className="flex items-center transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(0,74,173,0.2)]" 
      aria-label="GMS Integra — inicio"
    >
      <Image 
        src={logo} 
        alt="GMS Integra - Ventanas y Mamparas de Aluminio en Huancayo" 
        priority 
        className={cn(
          "transition-all duration-500 object-contain", // Logo original sin filtros de color
          scrolled ? "size-9" : "size-11",
          className
        )} 
      />
    </a>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-4 z-50 w-full px-4 md:px-6">
      {/* 
        Header Flotante "Vidrio Blanco y Aluminio":
        Fondo blanco translúcido (clear glass), marco de aluminio anodizado limpio,
        textos de navegación y logo en sus colores originales azul/cian de marca.
      */}
      <header 
        className={cn(
          "mx-auto w-full max-w-6xl rounded-2xl border transition-all duration-500 backdrop-blur-md",
          scrolled 
            ? "border-primary/20 bg-white/85 shadow-[0_8px_32px_rgba(0,74,173,0.12)] h-14" 
            : "border-border/80 bg-white/70 shadow-[0_8px_30px_rgba(0,74,173,0.06)] h-16"
        )}
      >
        <div className="flex h-full w-full items-center justify-between gap-4 px-6">
          <Logo scrolled={scrolled} />

          {/* Navegación Desktop con palabras en color azul de la marca y hover cian */}
          <nav className="hidden items-center gap-1.5 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-primary hover:text-brand font-semibold rounded-lg px-4 py-2 text-sm tracking-wide transition-colors"
              >
                {item.label}
                <span className="bg-brand absolute bottom-0.5 left-4 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-[calc(100%-32px)]" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            {/* Redes Sociales en Escritorio en color azul y hover con degradado */}
            <div className="hidden items-center gap-2 md:flex">
              <a
                href="https://www.facebook.com/profile.php?id=100089261427668"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-white hover:bg-primary flex size-8.5 items-center justify-center rounded-full border border-border bg-white transition-all duration-300 hover:scale-105 hover:shadow-sm"
                title="Facebook GMS Integra"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href="https://www.instagram.com/gms_integra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-white hover:bg-primary flex size-8.5 items-center justify-center rounded-full border border-border bg-white transition-all duration-300 hover:scale-105 hover:shadow-sm"
                title="Instagram gms_integra"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href="https://www.tiktok.com/@GMS_INTEGRA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-white hover:bg-primary flex size-8.5 items-center justify-center rounded-full border border-border bg-white transition-all duration-300 hover:scale-105 hover:shadow-sm"
                title="TikTok GMS_INTEGRA"
              >
                <TiktokIcon className="size-4" />
              </a>
            </div>

            {/* Menú móvil */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-primary hover:bg-primary/5 transition-colors rounded-xl" aria-label="Abrir menú">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-white text-foreground border-l border-border">
                <SheetHeader className="border-b border-border pb-4">
                  <SheetTitle>
                    <Logo className="size-9.5" scrolled={true} />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1.5 px-2 py-4">
                  {NAV.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <a
                        href={item.href}
                        className="text-primary hover:text-brand hover:bg-primary/5 rounded-lg px-3.5 py-3 text-sm font-semibold tracking-wide transition-colors"
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}

                  {/* Redes Sociales en Menú Móvil */}
                  <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 px-2">
                    <p className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase text-center mb-1">
                      Síguenos en redes
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <a
                        href="https://www.facebook.com/profile.php?id=100089261427668"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-white hover:bg-gradient-brand flex size-11 items-center justify-center rounded-full border border-border bg-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(0,74,173,0.2)]"
                        aria-label="Facebook GMS Integra"
                      >
                        <FacebookIcon className="size-5.5" />
                      </a>
                      <a
                        href="https://www.instagram.com/gms_integra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-white hover:bg-gradient-brand flex size-11 items-center justify-center rounded-full border border-border bg-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(0,74,173,0.2)]"
                        aria-label="Instagram gms_integra"
                      >
                        <InstagramIcon className="size-5.5" />
                      </a>
                      <a
                        href="https://www.tiktok.com/@GMS_INTEGRA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-white hover:bg-gradient-brand flex size-11 items-center justify-center rounded-full border border-border bg-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(0,74,173,0.2)]"
                        aria-label="TikTok GMS_INTEGRA"
                      >
                        <TiktokIcon className="size-5.5" />
                      </a>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
