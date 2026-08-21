"use client";

import Image from "next/image";
import { VERIFIED_SUPPLIERS } from "./supplier-logos";
import { Factory, Store } from "lucide-react";

export function AnatomySection() {
  const tier1 = VERIFIED_SUPPLIERS.filter((s) => s.tier === "Fabricantes Principales");
  const tier2 = VERIFIED_SUPPLIERS.filter((s) => s.tier === "Distribuidores Regionales");

  return (
    <section id="materiales" className="relative bg-steel text-white border-b border-slate-700 py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Editorial */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-700">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white font-sans">
              Materiales & Proveedores Oficiales
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md font-normal leading-relaxed">
            Alianza directa con fabricantes líderes en Lima y distribuidores mayoristas en Huancayo (Junín).
          </p>
        </div>

        {/* ── NIVEL 1: Fabricantes & Extrusoras Principales (Lima) ── */}
        <div className="mb-10">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Factory className="size-4 text-primary shrink-0" />
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white font-sans">
                Fabricantes & Extrusoras Principales (Lima)
              </h3>
            </div>
            <span className="text-[10px] font-mono uppercase text-slate-400 hidden sm:inline">
              Aluminio Estructural · Sellantes · Herrajes Inox
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {tier1.map((s) => (
              <div
                key={s.id}
                className="flex flex-col sm:flex-row items-stretch rounded bg-slate-900 border border-slate-700 hover:border-slate-500 transition-all shadow-xs group overflow-hidden"
              >
                {/* 40% Contenedor de Logo en Gris Sólido Industrial con Logo Maximizado */}
                <div className="sm:w-[40%] bg-slate-800 p-3 sm:p-4 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-700/80 shrink-0 min-h-[90px] sm:min-h-[110px]">
                  <Image
                    src={s.logoSrc}
                    alt={`Logotipo oficial de ${s.name}`}
                    width={200}
                    height={60}
                    className="max-h-14 sm:max-h-16 w-auto object-contain transition-transform group-hover:scale-105"
                  />
                </div>

                {/* 60% Información Esencial */}
                <div className="sm:w-[60%] p-4 sm:p-5 flex flex-col justify-center text-left">
                  <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                    <span className="text-[9px] font-mono font-bold uppercase text-primary bg-primary-light px-2 py-0.5 rounded border border-primary/20">
                      {s.locationBadge}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 truncate">
                      {s.category}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-black uppercase text-white font-sans leading-tight">
                    {s.name}
                  </h4>

                  <p className="text-xs text-slate-300 font-normal leading-relaxed mt-1">
                    {s.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── NIVEL 2: Distribuidores Regionales (Huancayo & Valle del Mantaro) ── */}
        <div>
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Store className="size-4 text-emerald-400 shrink-0" />
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white font-sans">
                Distribuidores & Suministro Regional (Huancayo & Junín)
              </h3>
            </div>
            <span className="text-[10px] font-mono uppercase text-slate-400 hidden sm:inline">
              Abastecimiento Local · Entrega Continua
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {tier2.map((s) => (
              <div
                key={s.id}
                className="flex flex-col sm:flex-row items-stretch rounded bg-slate-900 border border-slate-700 hover:border-slate-500 transition-all shadow-xs group overflow-hidden"
              >
                {/* 40% Contenedor de Logo en Gris Sólido Industrial con Logo Maximizado */}
                <div className="sm:w-[40%] bg-slate-800 p-3 sm:p-4 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-700/80 shrink-0 min-h-[90px] sm:min-h-[110px]">
                  <Image
                    src={s.logoSrc}
                    alt={`Logotipo de ${s.name}`}
                    width={200}
                    height={60}
                    className="max-h-14 sm:max-h-16 w-auto object-contain transition-transform group-hover:scale-105"
                  />
                </div>

                {/* 60% Información Esencial */}
                <div className="sm:w-[60%] p-4 sm:p-5 flex flex-col justify-center text-left">
                  <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                    <span className="text-[9px] font-mono font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {s.locationBadge}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 truncate">
                      {s.category}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-black uppercase text-white font-sans leading-tight">
                    {s.name}
                  </h4>

                  <p className="text-xs text-slate-300 font-normal leading-relaxed mt-1">
                    {s.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
