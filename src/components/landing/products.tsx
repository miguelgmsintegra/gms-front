"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./social-icons";

import { Button } from "@/components/ui/button";

import imgMampara from "@/assets/mampara_monumental_terraza.jpg";
import imgBano from "@/assets/bano_spa_vidrio_templado.jpg";
import imgFachada from "@/assets/fachada_muro_cortina.jpg";
import imgVentana from "@/assets/cerramiento_terraza.jpg";

const PRODUCTS = [
  {
    id: "mamparas",
    num: "01",
    title: "Mamparas Serie 80",
    category: "Gran Formato",
    spec: "Templado 8-10mm · DVH",
    desc: "Vanos monumentales piso a techo con rodamiento pesado de deslizamiento suave y hermeticidad.",
    image: imgMampara,
    waMessage:
      "Hola GMS Integra, solicito cotización para Mamparas Monumentales Serie 80 en Huancayo.",
  },
  {
    id: "banos",
    num: "02",
    title: "Línea Spazio Baños",
    category: "Acero Inox 304",
    spec: "Acero Quirúrgico · Templado 8mm",
    desc: "Divisiones de ducha de alta seguridad con herrajes inoxidables y sellado hermético anti-filtraciones.",
    image: imgBano,
    waMessage:
      "Hola GMS Integra, solicito cotización para Mamparas de Baño Línea Spazio en Huancayo.",
  },
  {
    id: "fachadas",
    num: "03",
    title: "Muros Cortina",
    category: "Estructural",
    spec: "Laminado 4+4 / 5+5 · Control Solar",
    desc: "Fachadas integrales de vidrio para proyectos comerciales y residenciales con silicona estructural.",
    image: imgFachada,
    waMessage:
      "Hola GMS Integra, solicito cotización para Muros Cortina en Huancayo.",
  },
  {
    id: "ventanas",
    num: "04",
    title: "Ventanas Herméticas",
    category: "Aislamiento EPDM",
    spec: "Series 20 · 25 · 38 Batiente",
    desc: "Corte milimétrico por matriz con felpa perimetral y empaques EPDM con tolerancia cero al frío y viento.",
    image: imgVentana,
    waMessage:
      "Hola GMS Integra, solicito cotización para Ventanas Herméticas en Huancayo.",
  },
];

export function Products() {
  const [hoveredId, setHoveredId] = useState<string | null>("mamparas");

  return (
    <section
      id="servicios"
      className="relative bg-background text-foreground border-b border-border overflow-hidden"
    >
      {/* 1. Cabecera Compacta */}
      <div className="pt-8 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground font-sans">
          Líneas de Fabricación
        </h2>
        <div className="mt-2.5 mx-auto h-1 w-16 bg-primary rounded-full" />
        <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Manufactura a medida con perfiles pesados, cristales templados y 1 año de garantía escrita en Huancayo.
        </p>
      </div>

      {/* 2. Escaparate de Paneles Visuales con Soporte Hover y Táctil (Click / Tap para Móviles y Tablets) */}
      <div className="w-full min-h-[560px] lg:h-[620px] flex flex-col lg:flex-row border-y border-border">
        {PRODUCTS.map((prod) => {
          const isHovered = hoveredId === prod.id;
          return (
            <div
              key={prod.id}
              role="button"
              tabIndex={0}
              aria-expanded={isHovered}
              onClick={() => setHoveredId(prod.id)}
              onMouseEnter={() => setHoveredId(prod.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setHoveredId(prod.id);
                }
              }}
              className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-out border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between p-6 sm:p-8 lg:p-10 select-none ${
                isHovered
                  ? "lg:flex-[2.4] min-h-[340px] lg:min-h-full"
                  : "lg:flex-1 min-h-[160px] lg:min-h-full"
              }`}
            >
              {/* Imagen de Fondo de Alta Definición */}
              <div className="absolute inset-0 size-full z-0 pointer-events-none">
                <Image
                  src={prod.image}
                  alt={`${prod.title} - GMS Integra`}
                  priority
                  className={`size-full object-cover object-center transition-transform duration-1000 ease-out ${
                    isHovered ? "scale-110 brightness-[0.88]" : "scale-100 brightness-[0.65]"
                  }`}
                />
                {/* Degradados de Contraste Suave */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isHovered
                      ? "bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-black/20"
                      : "bg-slate-950/60"
                  }`}
                />
              </div>

              {/* Parte Superior del Panel */}
              <div className="relative z-10 flex items-center justify-between pointer-events-none">
                <span className="text-xl sm:text-2xl font-mono font-black text-white/90">
                  {prod.num}
                </span>
                <span className="rounded border border-white/40 bg-slate-950/50 px-3 py-1 text-[11px] font-mono font-bold uppercase text-white shadow-xs">
                  {prod.category}
                </span>
              </div>

              {/* Parte Inferior del Panel (Contenido y Acción) */}
              <div className="relative z-10 text-left mt-auto">
                <h3 className="text-xl sm:text-2xl lg:text-4xl font-black uppercase tracking-tight text-white leading-tight font-sans drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
                  {prod.title}
                </h3>

                {/* Contenido expandido en hover / click */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isHovered
                      ? "max-h-64 opacity-100 mt-3 sm:mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed max-w-md drop-shadow-sm">
                    {prod.desc}
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <Button
                      size="sm"
                      className="h-11 sm:h-12 px-6 sm:px-7 text-xs font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground rounded shadow-cta gap-2 transition-all hover:brightness-110 active:translate-y-1 cursor-pointer"
                      asChild
                    >
                      <a
                        href={`https://wa.me/51958413806?text=${encodeURIComponent(prod.waMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <WhatsAppIcon className="size-4" />
                        <span>Cotizar Proyecto</span>
                        <ArrowRight className="size-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Indicador sutil para paneles contraídos */}
                {!isHovered && (
                  <p className="text-[11px] font-mono text-slate-300 mt-2 tracking-wider uppercase flex items-center gap-1">
                    <span>Toca para ver detalles</span>
                    <span>→</span>
                  </p>
                )}
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}




