"use client";

import { useState } from "react";
import { Phone, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.455h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.174-1.235-6.16-3.48-8.406" />
    </svg>
  );
}

export function FloatingCta() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "51958413806";
  const defaultMsg = encodeURIComponent(
    "Hola GMS Integra, me gustaría solicitar una cotización para un proyecto."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Panel desplegable directo y sencillo */}
      {isOpen && (
        <div className="w-72 sm:w-80 rounded-2xl bg-card border border-border shadow-2xl p-4 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between border-b pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Cotización Rápida
              </h4>
            </div>
            <Button
              variant="ghost"
              size="icon-xs"
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Cerrar"
            >
              <X className="size-4" />
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            {/* Opción 1: WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs group"
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-white/20 shrink-0">
                <WhatsAppIcon className="size-5" />
              </span>
              <div className="flex flex-col text-left">
                <span>WhatsApp Directo</span>
                <span className="text-[10px] text-white/80 normal-case font-normal">Respuesta inmediata</span>
              </div>
            </a>

            {/* Opción 2: Llamar */}
            <a
              href="tel:+51958413806"
              className="flex items-center gap-3 p-3 rounded-xl bg-secondary hover:bg-muted text-foreground font-semibold text-xs uppercase tracking-wider border border-border transition-all group"
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                <Phone className="size-4" />
              </span>
              <div className="flex flex-col text-left">
                <span>Llamar al Asesor</span>
                <span className="text-[10px] text-muted-foreground normal-case font-normal">958 413 806</span>
              </div>
            </a>

            {/* Opción 3: Formulario */}
            <button
              onClick={() => {
                setIsOpen(false);
                const el = document.getElementById("contacto");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-muted text-foreground font-semibold text-xs uppercase tracking-wider border border-border/80 transition-all text-left group cursor-pointer"
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                <FileText className="size-4" />
              </span>
              <div className="flex flex-col text-left">
                <span>Formulario Web</span>
                <span className="text-[10px] text-muted-foreground normal-case font-normal">Enviar detalles por escrito</span>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Botón flotante burbuja con logo oficial de WhatsApp */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "group relative flex items-center gap-2.5 rounded-full px-4 py-3 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none cursor-pointer",
          isOpen
            ? "bg-secondary text-foreground border border-border"
            : "bg-emerald-600 text-white hover:bg-emerald-700"
        )}
        aria-label="Cotizar por WhatsApp"
      >
        {!isOpen ? (
          <>
            <WhatsAppIcon className="size-6 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Cotizar
            </span>
          </>
        ) : (
          <X className="size-6 text-foreground" />
        )}
      </button>
    </div>
  );
}
