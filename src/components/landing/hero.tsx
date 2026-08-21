"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { WhatsAppIcon } from "./social-icons";

import imgMampara from "@/assets/mampara_monumental_terraza.jpg";
import imgBano from "@/assets/bano_spa_vidrio_templado.jpg";
import imgFachada from "@/assets/fachada_muro_cortina.jpg";
import imgVentana from "@/assets/cerramiento_terraza.jpg";
import { Button } from "@/components/ui/button";

const SLIDE_DURATION_MS = 12000;

const SLIDES = [
  {
    id: "mamparas",
    title: "Mamparas Panorámicas Serie 80",
    subtitle:
      "Vanos monumentales piso a techo con cristal templado de 8mm a 10mm, perfiles pesados de aluminio y rodaje de alta resistencia.",
    spec: "1 Año de Garantía Escrita · Huancayo",
    image: imgMampara,
    waMessage:
      "Hola GMS Integra, solicito cotización para Mamparas Monumentales Serie 80 en Huancayo.",
  },
  {
    id: "banos",
    title: "Línea Spazio en Acero Quirúrgico",
    subtitle:
      "Divisiones y puertas de ducha con herrajes y perfiles en acero inoxidable 304 de seguridad, sellado hermético contra filtraciones.",
    spec: "Acero Inox 304 · Cristal Templado 8mm",
    image: imgBano,
    waMessage:
      "Hola GMS Integra, solicito cotización para Mamparas de Baño Línea Spazio en Huancayo.",
  },
  {
    id: "fachadas",
    title: "Muros Cortina & Fachadas Integrales",
    subtitle:
      "Ingeniería estructural en vidrio laminado y templado con silicona estructural para edificios comerciales y residenciales.",
    spec: "Cristal Laminado 4+4 / 5+5 · Control Solar",
    image: imgFachada,
    waMessage:
      "Hola GMS Integra, solicito cotización para Muros Cortina en Huancayo.",
  },
  {
    id: "ventanas",
    title: "Ventanas Herméticas Serie 20 / 25 / 38",
    subtitle:
      "Corte milimétrico por matriz con felpa perimetral y empaque EPDM para tolerancia cero al frío, viento y ruido exterior.",
    spec: "Aislamiento Acústico y Térmico EPDM",
    image: imgVentana,
    waMessage:
      "Hola GMS Integra, solicito cotización para Ventanas Herméticas en Huancayo.",
  },
];

export function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = SLIDES[activeIdx];

  const nextSlide = useCallback(() => {
    setActiveIdx((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIdx((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }, []);

  // Temporizador de 12 segundos para cambio de página automático
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION_MS);

    return () => clearInterval(timer);
  }, [nextSlide, activeIdx]);

  return (
    <section
      id="inicio"
      className="relative bg-background text-foreground border-b border-border overflow-hidden"
    >
      {/* Estilo para la animación lineal suave de 12 segundos */}
      <style>{`
        @keyframes gmsSlideProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-gms-progress {
          animation: gmsSlideProgress ${SLIDE_DURATION_MS}ms linear forwards;
        }
      `}</style>

      {/* Escenario Slider Principal */}
      <div className="relative min-h-[560px] lg:min-h-[640px] w-full flex items-center justify-between">
        <div className="absolute inset-0 size-full z-0">
          <Image
            src={current.image}
            alt={`${current.title} - GMS Integra`}
            priority
            className="size-full object-cover object-center transition-all duration-700 brightness-[0.88]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-black/15" />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] font-black uppercase tracking-tight text-white leading-[1.02] font-sans drop-shadow-[2px_3px_6px_rgba(0,0,0,0.4)]">
              {current.title}
            </h1>
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-100 font-normal leading-relaxed max-w-2xl drop-shadow-[1px_2px_4px_rgba(0,0,0,0.4)]">
              {current.subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                size="lg"
                className="h-14 px-10 text-sm font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground rounded shadow-cta gap-2.5 transition-all cursor-pointer active:translate-y-1"
                asChild
              >
                <a
                  href={`https://wa.me/51958413806?text=${encodeURIComponent(current.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="size-5" />
                  <span>Cotizar esta Línea</span>
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex absolute right-8 bottom-28 z-30 items-center gap-2">
          <button
            onClick={prevSlide}
            aria-label="Slide anterior"
            className="size-11 rounded border border-white/30 bg-background/60 hover:bg-primary text-foreground hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Slide siguiente"
            className="size-11 rounded border border-white/30 bg-background/60 hover:bg-primary text-foreground hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      {/* Línea de Progreso */}
      <div className="relative z-30 w-full h-[3px] bg-border/40 overflow-hidden">
        <div
          key={activeIdx}
          className="h-full bg-primary animate-gms-progress"
        />
      </div>

      {/* Galería Inferior de Miniaturas */}
      <div className="relative z-30 bg-background/95 px-4 sm:px-6 lg:px-8 py-3">
        <div className="mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-4 gap-3">
          {SLIDES.map((slide, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={slide.id}
                onClick={() => setActiveIdx(idx)}
                className={`relative overflow-hidden p-2.5 rounded border text-left transition-all flex items-center gap-3 cursor-pointer ${
                  isActive
                    ? "border-primary bg-accent shadow-xs"
                    : "border-border bg-secondary/50 hover:bg-secondary hover:border-border"
                }`}
              >
                <div className="relative size-11 rounded overflow-hidden bg-muted shrink-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    className="size-full object-cover"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-primary/10 border-2 border-primary rounded" />
                  )}
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-primary font-bold block">
                    {`0${idx + 1} //`}
                  </span>
                  <span className="text-xs font-bold text-foreground uppercase truncate block">
                    {slide.title.split(" ")[0]} {slide.title.split(" ")[1] || ""}
                  </span>
                </div>

                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary/20 overflow-hidden">
                    <div
                      key={activeIdx}
                      className="h-full bg-primary animate-gms-progress"
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}




























