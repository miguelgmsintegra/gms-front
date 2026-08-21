"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  WhatsAppIcon,
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  PhoneIcon,
  CalculatorIcon,
  CloseIcon,
} from "./social-icons";

/* ─── Datos de acciones ──────────────────────────────────────────── */
const WA_NUMBER = "51958413806";
const WA_MSG = encodeURIComponent(
  "Hola GMS Integra, quisiera solicitar una cotización para mi proyecto de aluminio y vidrio."
);

const ACTIONS = [
  {
    key: "wa",
    label: "WhatsApp",
    hint: "Respuesta en < 15 min",
    href: `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`,
    external: true,
    scroll: null,
    icon: <WhatsAppIcon className="size-5" />,
    bg: "bg-emerald-600 hover:bg-emerald-700",
    shadow: "shadow-[0_4px_0px_#15803d]",
    ring: "ring-emerald-500",
  },
  {
    key: "fb",
    label: "Facebook",
    hint: "@GMSIntegra",
    href: "https://www.facebook.com/profile.php?id=100089261427668",
    external: true,
    scroll: null,
    icon: <FacebookIcon className="size-5" />,
    bg: "bg-[#1877F2] hover:bg-[#166FE5]",
    shadow: "shadow-[0_4px_0px_#1251A8]",
    ring: "ring-blue-500",
  },
  {
    key: "ig",
    label: "Instagram",
    hint: "@gms_integra",
    href: "https://www.instagram.com/gms_integra",
    external: true,
    scroll: null,
    icon: <InstagramIcon className="size-5" />,
    bg: "bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FD1D1D] hover:brightness-110",
    shadow: "shadow-[0_4px_0px_#9B27AF]",
    ring: "ring-pink-500",
  },
  {
    key: "tt",
    label: "TikTok",
    hint: "@GMS_INTEGRA",
    href: "https://www.tiktok.com/@GMS_INTEGRA",
    external: true,
    scroll: null,
    icon: <TikTokIcon className="size-5" />,
    bg: "bg-slate-900 hover:bg-slate-800",
    shadow: "shadow-[0_4px_0px_#000]",
    ring: "ring-slate-600",
  },
  {
    key: "calc",
    label: "Cotizador",
    hint: "Calcular m² en línea",
    href: null,
    external: false,
    scroll: "cotizador",
    icon: <CalculatorIcon className="size-5" />,
    bg: "bg-[#004AAD] hover:bg-[#003282]",
    shadow: "shadow-[0_4px_0px_#003282]",
    ring: "ring-blue-600",
  },
  {
    key: "tel",
    label: "Llamar",
    hint: "(51) 958 413 806",
    href: "tel:+51958413806",
    external: false,
    scroll: null,
    icon: <PhoneIcon className="size-5" />,
    bg: "bg-slate-700 hover:bg-slate-600",
    shadow: "shadow-[0_4px_0px_#374151]",
    ring: "ring-slate-500",
  },
] as const;

/* ─── Componente ─────────────────────────────────────────────────── */
export function FloatingCta() {
  const [isOpen, setIsOpen] = useState(false);

  function handleAction(action: (typeof ACTIONS)[number]) {
    if (action.scroll) {
      setIsOpen(false);
      requestAnimationFrame(() => {
        document.getElementById(action.scroll!)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5"
      role="region"
      aria-label="Contacto rápido"
    >
      {/* ── Burbujas de acción (se revelan con stagger) ── */}
      <div
        className={cn(
          "flex flex-col items-end gap-2 transition-all duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!isOpen}
      >
        {ACTIONS.map((action, i) => {
          const delay = isOpen ? `${i * 55}ms` : "0ms";

          const inner = (
            <>
              {/* Ícono */}
              <span
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded text-white transition-all",
                  action.bg,
                  action.shadow,
                  "active:translate-y-1 active:shadow-none"
                )}
              >
                {action.icon}
              </span>

              {/* Etiqueta con tooltip */}
              <span className="flex flex-col text-right leading-none">
                <span className="text-[11px] font-black uppercase tracking-wider text-white drop-shadow">
                  {action.label}
                </span>
                <span className="text-[9px] font-normal text-white/80 mt-0.5 normal-case">
                  {action.hint}
                </span>
              </span>
            </>
          );

          const baseClass = cn(
            "flex items-center gap-2.5 px-3 py-2 rounded",
            "bg-[#1A2B45]/90 backdrop-blur-sm border border-white/10",
            "shadow-raised ring-1 ring-transparent hover:ring-1",
            action.ring,
            "transition-all duration-200 cursor-pointer",
            isOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-4 opacity-0"
          );

          // Enlace externo o interno
          if (action.href) {
            return (
              <a
                key={action.key}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className={baseClass}
                style={{ transitionDelay: delay }}
                onClick={() => setIsOpen(false)}
              >
                {inner}
              </a>
            );
          }

          return (
            <button
              key={action.key}
              type="button"
              className={baseClass}
              style={{ transitionDelay: delay }}
              onClick={() => handleAction(action)}
            >
              {inner}
            </button>
          );
        })}
      </div>

      {/* ── Burbuja principal — WhatsApp / cerrar ── */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "relative flex size-14 items-center justify-center rounded",
          "transition-all duration-300 cursor-pointer",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          isOpen
            ? "bg-[#1A2B45] border border-white/20 shadow-raised text-white focus-visible:ring-white"
            : "bg-emerald-600 hover:bg-emerald-700 text-white focus-visible:ring-emerald-400",
          !isOpen && "shadow-[0_6px_0px_#15803d] active:translate-y-1.5 active:shadow-none"
        )}
        aria-label={isOpen ? "Cerrar contacto" : "Abrir opciones de contacto"}
        aria-expanded={isOpen}
      >
        {/* Pulso verde cuando está cerrado */}
        {!isOpen && (
          <span className="absolute inset-0 rounded animate-ping bg-emerald-500 opacity-25 pointer-events-none" />
        )}

        <span
          className={cn(
            "transition-transform duration-300",
            isOpen ? "rotate-0" : "rotate-0"
          )}
        >
          {isOpen ? (
            <CloseIcon className="size-6" />
          ) : (
            <WhatsAppIcon className="size-7" />
          )}
        </span>
      </button>
    </div>
  );
}
