"use client";

import Image from "next/image";
import { SUPPLIERS } from "./supplier-logos";

export function BrandsTicker() {
  return (
    <section className="w-full border-y border-border bg-[#1A2B45] text-white py-6 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="size-2 bg-primary rounded-full" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-slate-300">
            Cadena de Suministro Certificada · Junín & Lima
          </span>
        </div>
        <span className="text-[10px] font-mono uppercase text-slate-400">
          Perfiles AA6063 · Cristales NTP 399.012 · Inox 304
        </span>
      </div>

      {/* Ticker Infinito Cinético con Logos Oficiales */}
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#1A2B45] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#1A2B45] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-5 items-center whitespace-nowrap py-1">
          {[...SUPPLIERS, ...SUPPLIERS, ...SUPPLIERS].map((s, index) => (
            <div
              key={`${s.id}-${index}`}
              className="flex items-center gap-3 px-4 py-2.5 rounded border border-slate-700/80 bg-slate-900/90 hover:bg-slate-800 text-slate-200 transition-all shadow-sm shrink-0"
            >
              <div className="h-7 w-24 flex items-center justify-center bg-slate-950/80 rounded px-1.5 overflow-hidden">
                <Image
                  src={s.logoSrc}
                  alt={s.name}
                  width={90}
                  height={24}
                  className="max-h-5 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono font-bold uppercase text-white leading-tight">
                  {s.name}
                </span>
                <span className="text-[9px] text-slate-400 font-mono leading-tight">
                  {s.locationBadge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
