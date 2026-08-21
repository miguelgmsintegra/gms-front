import Image from "next/image";
import { Phone, MapPin, ArrowRight, ShieldCheck, Clock } from "lucide-react";

import logo from "@/assets/gms-logo.webp";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "./social-icons";

export function SiteFooter() {
  return (
    <footer className="bg-[#1A2B45] text-slate-300 border-t border-slate-700">
      {/* Línea superior de acento de marca — sólida */}
      <div className="h-1 w-full bg-primary" />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">

          {/* Columna 1: Marca & Misión (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src={logo} alt="GMS Integra - Ventanas y Mamparas" className="size-11 object-contain" />
              <div className="flex flex-col">
                <span className="text-lg font-black text-white leading-none font-sans">
                  GMS <span className="text-[#00c9ff]">INTEGRA</span>
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">
                  Carpintería de Aluminio & Vidrio
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Especialistas en fabricación de mamparas de cristal templado, ventanas herméticas y cerramientos de alto rendimiento en Huancayo y el Valle del Mantaro.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100089261427668"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded bg-[#1877F2] text-white hover:bg-[#166FE5] shadow-[0_3px_0px_#1251A8] active:translate-y-0.5 active:shadow-none transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href="https://www.instagram.com/gms_integra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FD1D1D] text-white hover:brightness-110 shadow-[0_3px_0px_#9B27AF] active:translate-y-0.5 active:shadow-none transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href="https://www.tiktok.com/@GMS_INTEGRA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded bg-slate-900 border border-slate-700 text-white hover:bg-black shadow-[0_3px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all"
                aria-label="TikTok"
              >
                <TikTokIcon className="size-4" />
              </a>
              <a
                href="https://wa.me/51958413806?text=Hola%20GMS%20Integra,%20quisiera%20solicitar%20información."
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded bg-emerald-600 border border-emerald-500/50 text-white hover:bg-emerald-700 shadow-[0_3px_0px_#15803d] active:translate-y-0.5 active:shadow-none transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Columna 2: Soluciones (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-700 pb-2">
              Soluciones en Vidrio
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-400">
              <li><a href="#servicios" className="hover:text-white transition-colors">Mamparas de Baño</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Ventanas Corredizas & Batientes</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Cerramientos de Terrazas</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Divisiones de Oficina & Paneles</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Muros Cortina & Fachadas</a></li>
            </ul>
          </div>

          {/* Columna 3: Series de Aluminio (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-700 pb-2">
              Sistemas & Series
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-400">
              <li><a href="#series" className="hover:text-white transition-colors">Serie 20 Clásica</a></li>
              <li><a href="#series" className="hover:text-white transition-colors">Serie 25 Confort</a></li>
              <li><a href="#series" className="hover:text-white transition-colors">Serie 38 Acústica</a></li>
              <li><a href="#series" className="hover:text-white transition-colors">Serie 80 Europea DVH</a></li>
              <li><a href="#series" className="hover:text-white transition-colors">Serie 100 Monumental</a></li>
            </ul>
          </div>

          {/* Columna 4: Datos de Taller & Portal (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-700 pb-2">
              Sede & Atención
            </h4>
            <div className="flex flex-col gap-2 text-xs text-slate-400">
              <span className="flex items-start gap-2 text-slate-300">
                <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                <span>Jr. Huánuco Nro. 1389, Huancayo, Junín</span>
              </span>
              <span className="flex items-center gap-2 text-slate-300">
                <Phone className="size-4 text-emerald-400 shrink-0" />
                <span>(51) 958 413 806</span>
              </span>
              <span className="flex items-center gap-2 text-slate-300">
                <Clock className="size-4 text-slate-400 shrink-0" />
                <span>Lun–Sáb: 8:00 am – 6:30 pm</span>
              </span>
            </div>

            <div className="pt-3">
              <Button
                variant="outline"
                size="sm"
                className="w-full h-9 text-xs font-bold uppercase tracking-wider border-slate-600 bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 hover:border-slate-500 rounded justify-between"
                asChild
              >
                <a href="/login">
                  <span>Acceso Taller CAD</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </Button>
            </div>
          </div>

        </div>

        {/* Barra de Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} GMS Integra. Todos los derechos reservados. RUC: 10738604721.</p>
          <p className="flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-emerald-500" />
            <span>Garantía de Obra · Vidrio Templado & Aluminio Certificado</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
