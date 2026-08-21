"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, ArrowRight, Palette, Sliders } from "lucide-react";
import { Button } from "@/components/ui/button";

import imgVentanaAluminio from "@/assets/ventana_aluminio.jpg";
import imgHeroWindow from "@/assets/hero-window.jpg";

const finishes = [
  { id: "negro", name: "Negro Mate Anodizado", hex: "#18181b", tag: "Tendencia Moderna" },
  { id: "champagne", name: "Champagne Europeo", hex: "#b59f7b", tag: "Elegancia Residencial" },
  { id: "madera", name: "Foliado Madera Roble", hex: "#854d0e", tag: "Calidez Rústica" },
  { id: "blanco", name: "Blanco Electrostático", hex: "#f8fafc", tag: "Luminosidad Pura" },
  { id: "natural", name: "Aluminio Natural Mate", hex: "#94a3b8", tag: "Industrial Clásico" },
];

export function TransformationShowcase() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeFinish, setActiveFinish] = useState(finishes[0]);

  return (
    <section id="transformacion" className="relative overflow-hidden border-b bg-white py-16 sm:py-24">
      {/* Fondo técnico */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Monumental */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-950 font-sans leading-[1.06]">
            Transformación de Fachadas & Espacios
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl">
            Compara la diferencia visual y de confort entre carpintería tradicional y sistemas herméticos de vidrio templado GMS Integra.
          </p>
        </div>

        {/* Módulo Interactivo: Comparador Antes vs Después + Selector de Acabados */}
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          
          {/* Columna Izquierda: Visor Deslizante Antes vs Después (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative h-[360px] sm:h-[450px] w-full overflow-hidden rounded-3xl border border-slate-200/90 shadow-2xl select-none bg-slate-950">
              
              {/* Imagen DESPUÉS (Fondo completo) */}
              <Image
                src={imgHeroWindow}
                alt="Instalación GMS Integra: Mampara Hermética Panorámica Serie 80"
                className="absolute inset-0 h-full w-full object-cover"
                priority
              />
              <div className="absolute top-4 right-4 rounded-xl bg-emerald-600/95 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-lg z-10">
                Instalación GMS Integra
              </div>

              {/* Imagen ANTES (Clip interactivo) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <Image
                  src={imgVentanaAluminio}
                  alt="Ventana antigua tradicional sin hermeticidad"
                  className="absolute inset-0 h-full w-full object-cover filter contrast-75 brightness-90 grayscale-[0.4]"
                  priority
                />
                <div className="absolute top-4 left-4 rounded-xl bg-slate-900/95 border border-slate-700 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-200 shadow-lg z-10">
                  Carpintería Convencional
                </div>
              </div>

              {/* Barra Deslizadora & Manija */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.8)] cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-10 rounded-full bg-white border-2 border-primary shadow-2xl flex items-center justify-center text-primary font-bold text-xs">
                  <Sliders className="size-4 rotate-90" />
                </div>
              </div>

              {/* Input range invisible sobrepuesto para control táctil y ratón */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Deslizar para comparar antes y después"
              />

              {/* Pie de foto integrado */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                <span className="rounded-lg bg-slate-950/85 border border-slate-700 px-3 py-1 text-[11px] font-mono text-slate-300">
                  ← Arrastra el cursor para comparar
                </span>
                <span className="rounded-lg bg-slate-950/85 border border-slate-700 px-3 py-1 text-[11px] font-mono font-bold text-[#00c9ff]">
                  Atenuación: -38 dB
                </span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Selector de Acabados & Presupuesto (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col gap-5">
              <div className="flex items-center gap-2 text-slate-900 font-bold uppercase text-sm tracking-wide">
                <Palette className="size-4.5 text-primary" />
                <span>Selector de Acabados de Perfil</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                Personaliza el color y textura de los perfiles de aluminio para que armonicen con la fachada o el diseño interior de tu obra:
              </p>

              {/* Lista de Colores de Perfiles */}
              <div className="flex flex-col gap-2.5">
                {finishes.map((f) => {
                  const isSelected = activeFinish.id === f.id;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setActiveFinish(f)}
                      className={`flex items-center justify-between p-3 rounded-2xl border transition-all duration-200 text-left cursor-pointer ${
                        isSelected
                          ? "bg-white border-primary shadow-md scale-102"
                          : "bg-white/60 hover:bg-white border-slate-200 text-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="size-6 rounded-full border border-slate-300 shadow-inner shrink-0"
                          style={{ backgroundColor: f.hex }}
                        />
                        <span className="text-xs sm:text-sm font-bold text-slate-900">
                          {f.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-primary uppercase">
                        {f.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA Directo a WhatsApp con el acabado seleccionado */}
            <Button
              variant="brand"
              size="lg"
              className="w-full h-13 text-xs sm:text-sm font-black uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-lg gap-2.5"
              asChild
            >
              <a
                href={`https://wa.me/51958413806?text=${encodeURIComponent(`Hola GMS Integra, deseo cotizar una remodelación de ventanas / mamparas con acabado ${activeFinish.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-5" />
                <span>Cotizar con Acabado {activeFinish.name}</span>
                <ArrowRight className="size-4" />
              </a>
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}
