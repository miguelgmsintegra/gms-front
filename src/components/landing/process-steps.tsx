"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";

/* ─── Iconos Técnicos de Ingeniería ─────────────────────────────── */
function LaserIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2" x2="12" y2="5" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
      <line x1="2" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="2" />
      <line x1="19" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function CadIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" strokeDasharray="2 2" />
      <line x1="9" y1="3" x2="9" y2="21" strokeDasharray="2 2" />
      <path d="M9 15l4-4 4 4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function MatrixIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function ShieldIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

const STEPS = [
  {
    num: "01",
    phase: "Fase 01 · In-Situ",
    title: "Medición con Láser",
    desc: "Verificación de vanos, plomos y descuadres en tu obra sin costo en Huancayo.",
    icon: LaserIcon,
    deliverable: "Cotas milimétricas exactas",
  },
  {
    num: "02",
    phase: "Fase 02 · Ingeniería",
    title: "Despiece & Cotización",
    desc: "Cálculo en software CAD con serie exacta (S-20/25/38/80) y presupuesto transparente.",
    icon: CadIcon,
    deliverable: "Plano de corte sin extras",
  },
  {
    num: "03",
    phase: "Fase 03 · Taller",
    title: "Corte con Matriz",
    desc: "Troquelado de desagües pluviales, matriz de precisión y control de escuadras.",
    icon: MatrixIcon,
    deliverable: "Control de calidad riguroso",
  },
  {
    num: "04",
    phase: "Fase 04 · Montaje",
    title: "Instalación Estanca",
    desc: "Fijación con anclajes estructurales, sellado contra viento andino y acta de garantía.",
    icon: ShieldIcon,
    deliverable: "Garantía escrita formal",
  },
];

export function ProcessSteps() {
  return (
    <section id="proceso" className="relative bg-background text-foreground border-b border-border py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Editorial Industrial */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-border">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-foreground font-sans">
              Fabricación en 4 Pasos
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md font-normal leading-relaxed">
            Flujo de trabajo estandarizado desde el levantamiento de medidas en obra hasta la entrega final garantizada.
          </p>
        </div>

        {/* ── Grilla Horizontal Continua ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="flex flex-col justify-between p-5 rounded bg-card border border-border shadow-card hover:border-primary/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex size-9 items-center justify-center rounded bg-steel text-white group-hover:bg-primary transition-colors shadow-xs">
                      <Icon className="size-4.5" />
                    </div>
                    <span className="text-2xl font-mono font-black text-muted-foreground/30 group-hover:text-primary transition-colors">
                      {s.num}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase text-primary tracking-wider block">
                    {s.phase}
                  </span>

                  <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-foreground font-sans mt-0.5 mb-1.5">
                    {s.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <CheckCircle2 className="size-3 text-emerald-600 shrink-0" />
                    <span className="truncate">{s.deliverable}</span>
                  </span>

                  {idx < STEPS.length - 1 && (
                    <span className="hidden lg:inline text-muted-foreground/40 group-hover:text-primary transition-colors pl-2">
                      <ArrowRight className="size-3.5" />
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
