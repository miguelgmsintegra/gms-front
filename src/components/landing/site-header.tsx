"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  Phone,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

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
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "./social-icons";

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Líneas", href: "#servicios" },
  { label: "Obras", href: "#obras" },
  { label: "Proceso", href: "#proceso" },
  { label: "Materiales", href: "#materiales" },
  { label: "Preguntas", href: "#faq" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      
      {/* Barra de Navegación Principal — fondo blanco sólido */}
      <div
        className={cn(
          "w-full border-b transition-all duration-300",
          scrolled
            ? "border-border bg-white shadow-sm py-2.5"
            : "border-border/60 bg-white/98 shadow-xs py-3.5"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo Corporativo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 transition-transform hover:scale-102 shrink-0"
            aria-label="GMS Integra - Inicio"
          >
            <Image
              src={logo}
              alt="GMS Integra - Ventanas & Mamparas en Huancayo"
              priority
              className="size-10 sm:size-11 object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="text-lg sm:text-xl font-black tracking-tight text-primary leading-none uppercase">
                GMS <span className="text-[#004aad]">INTEGRA</span>
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mt-1">
                Ventanas & Mamparas · Huancayo
              </span>
            </div>
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-slate-700 hover:text-primary font-bold uppercase tracking-wider text-xs rounded px-3.5 py-2 transition-colors"
              >
                {item.label}
                <span className="bg-primary absolute bottom-1 left-3.5 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-[calc(100%-28px)]" />
              </a>
            ))}
          </nav>

          {/* Acciones de Contacto & Redes Desktop */}
          <div className="flex items-center gap-3">
            
            {/* Redes Sociales Verificadas con Colores Oficiales */}
            <div className="hidden xl:flex items-center gap-1.5 border-r border-border pr-3">
              <a
                href="https://www.facebook.com/profile.php?id=100089261427668"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] bg-blue-50/80 hover:bg-[#1877F2] hover:text-white size-8 rounded flex items-center justify-center transition-all"
                aria-label="Facebook GMS Integra"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href="https://www.instagram.com/gms_integra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E1306C] bg-pink-50/80 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#FD1D1D] hover:text-white size-8 rounded flex items-center justify-center transition-all"
                aria-label="Instagram GMS Integra"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href="https://www.tiktok.com/@GMS_INTEGRA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 bg-slate-100 hover:bg-black hover:text-white size-8 rounded flex items-center justify-center transition-all"
                aria-label="TikTok GMS Integra"
              >
                <TikTokIcon className="size-4" />
              </a>
            </div>

            {/* Acceso a ERP */}
            <Link
              href="/login"
              className="hidden md:inline-flex items-center gap-1 font-bold text-xs text-slate-700 hover:text-primary border border-border hover:border-primary/40 px-3 py-2 rounded transition-colors"
            >
              <span>Acceso ERP</span>
              <ExternalLink className="size-3 text-slate-400" />
            </Link>

            {/* Botón Principal WhatsApp */}
            <Button
              variant="brand"
              size="sm"
              className="hidden sm:inline-flex h-10 px-5 text-xs font-black uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white rounded shadow-[0_4px_0px_#15803d] active:translate-y-1 active:shadow-none gap-2 transition-all"
              asChild
            >
              <a
                href="https://wa.me/51958413806?text=Hola%20GMS%20Integra,%20quisiera%20solicitar%20información%20para%20un%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-4" />
                <span>(51) 958 413 806</span>
                <ArrowRight className="size-3.5" />
              </a>
            </Button>

            {/* Menú Móvil */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-slate-800 hover:bg-slate-100 rounded-xl size-10"
                  aria-label="Abrir menú"
                >
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-80 bg-white text-foreground border-l border-border flex flex-col justify-between p-6">
                <div>
                  {/* Encabezado Menú Móvil */}
                  <SheetHeader className="border-b border-border pb-4 text-left">
                    <SheetTitle className="flex items-center gap-3">
                      <Image src={logo} alt="GMS Integra" className="size-10 object-contain" />
                      <div className="flex flex-col">
                        <span className="text-lg font-black text-primary leading-none uppercase">
                          GMS <span className="text-primary">INTEGRA</span>
                        </span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                          Ventanas & Mamparas · Huancayo
                        </span>
                      </div>
                    </SheetTitle>
                  </SheetHeader>

                  {/* Enlaces de Navegación */}
                  <nav className="flex flex-col gap-1 py-5">
                    {NAV.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <a
                          href={item.href}
                          className="text-slate-800 hover:text-primary hover:bg-primary-light rounded px-4 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors"
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    ))}
                  </nav>
                </div>

                {/* Acciones y Contacto Móvil */}
                <div className="flex flex-col gap-3 border-t border-border pt-4">
                  <Button
                    variant="brand"
                    size="lg"
                    className="w-full h-12 text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white rounded shadow-[0_4px_0px_#15803d] active:translate-y-1 active:shadow-none gap-2"
                    asChild
                  >
                    <a
                      href="https://wa.me/51958413806?text=Hola%20GMS%20Integra,%20deseo%20cotizar%20un%20proyecto."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="size-5" />
                      <span>WhatsApp: 958 413 806</span>
                    </a>
                  </Button>

                  <a
                    href="tel:+51958413806"
                    className="flex items-center justify-center gap-2 text-xs font-bold text-slate-700 hover:text-primary py-2 bg-slate-100 rounded transition-colors"
                  >
                    <Phone className="size-4 text-emerald-600" />
                    <span>Llamar al (51) 958 413 806</span>
                  </a>

                  {/* Redes y Acceso ERP */}
                  <div className="flex items-center justify-between text-slate-500 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <a
                        href="https://www.facebook.com/profile.php?id=100089261427668"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-8 rounded flex items-center justify-center text-[#1877F2] bg-blue-50 hover:bg-[#1877F2] hover:text-white transition-all"
                        aria-label="Facebook"
                      >
                        <FacebookIcon className="size-4" />
                      </a>
                      <a
                        href="https://www.instagram.com/gms_integra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-8 rounded flex items-center justify-center text-[#E1306C] bg-pink-50 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#FD1D1D] hover:text-white transition-all"
                        aria-label="Instagram"
                      >
                        <InstagramIcon className="size-4" />
                      </a>
                      <a
                        href="https://www.tiktok.com/@GMS_INTEGRA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-8 rounded flex items-center justify-center text-slate-900 bg-slate-100 hover:bg-black hover:text-white transition-all"
                        aria-label="TikTok"
                      >
                        <TikTokIcon className="size-4" />
                      </a>
                    </div>

                    <Link
                      href="/login"
                      className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                    >
                      <span>Acceso ERP</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>

              </SheetContent>
            </Sheet>

          </div>

        </div>
      </div>

    </header>
  );
}


