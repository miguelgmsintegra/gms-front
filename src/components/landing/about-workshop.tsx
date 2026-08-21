"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "./social-icons";

import imgMampara from "@/assets/mampara_monumental_terraza.jpg";
import imgBano from "@/assets/bano_spa_vidrio_templado.jpg";
import imgFachada from "@/assets/fachada_muro_cortina.jpg";
import imgDivisiones from "@/assets/divisiones_oficina.jpg";
import imgCerramiento from "@/assets/cerramiento_terraza.jpg";
import imgVentana from "@/assets/ventana_aluminio.jpg";

const OBRAS = [
  {
    id: "mamparas",
    label: "Serie 80",
    title: "Mamparas Monumentales",
    desc: "Vanos panorámicos piso a techo con rodamiento pesado",
    image: imgMampara,
    wa: "Hola GMS Integra, solicito cotización para Mamparas Monumentales Serie 80.",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: "banos",
    label: "Spazio",
    title: "Mamparas de Baño",
    desc: "Puertas de ducha con herrajes inoxidables y sellado hermético",
    image: imgBano,
    wa: "Hola GMS Integra, solicito cotización para Mamparas de Baño Spazio.",
    span: "col-span-1",
  },
  {
    id: "divisiones",
    label: "Oficinas",
    title: "Divisiones de Vidrio",
    desc: "Mamparas divisorias para oficinas y locales comerciales",
    image: imgDivisiones,
    wa: "Hola GMS Integra, solicito cotización para Divisiones de Vidrio para oficina.",
    span: "col-span-1",
  },
  {
    id: "cerramiento",
    label: "Terrazas",
    title: "Cerramientos & Techos",
    desc: "Techos y cerramientos herméticos para terrazas y patios",
    image: imgCerramiento,
    wa: "Hola GMS Integra, solicito cotización para Cerramientos de Terraza.",
    span: "col-span-1",
  },
  {
    id: "fachadas",
    label: "Estructural",
    title: "Muros Cortina",
    desc: "Fachadas integrales de vidrio para proyectos comerciales",
    image: imgFachada,
    wa: "Hola GMS Integra, solicito cotización para Muros Cortina.",
    span: "col-span-1",
  },
  {
    id: "ventanas",
    label: "Serie 38 / 25",
    title: "Ventanas Herméticas",
    desc: "Aislamiento acústico y térmico con felpa y empaque EPDM",
    image: imgVentana,
    wa: "Hola GMS Integra, solicito cotización para Ventanas Herméticas Serie 38.",
    span: "col-span-1",
  },
];

export function AboutWorkshop() {
  return (
    <section id="obras" className="relative border-b border-border overflow-hidden">

      {/* ── Mosaico de Obras a Pantalla Completa ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] md:auto-rows-[280px]">

        {OBRAS.map((obra) => (
          <div
            key={obra.id}
            className={`group relative overflow-hidden cursor-pointer ${obra.span}`}
          >
            {/* Fotografía de Obra Real */}
            <Image
              src={obra.image}
              alt={`${obra.title} - GMS Integra Huancayo`}
              className="absolute inset-0 size-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
            />

            {/* Degradado base solo en tercio inferior */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

            {/* Hover: oscurecimiento */}
            <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/45 transition-all duration-500" />

            {/* Badge Etiqueta Superior */}
            <div className="absolute top-4 left-4 z-10">
              <span className="rounded border border-white/30 bg-black/60 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-white shadow-xs">
                {obra.label}
              </span>
            </div>

            {/* Contenido en la base */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6">
              <div className="h-0.5 w-8 bg-primary rounded mb-3 group-hover:w-16 transition-all duration-500" />

              <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white leading-tight font-sans drop-shadow-md">
                {obra.title}
              </h3>
              <p className="text-xs text-white/80 mt-1 font-normal line-clamp-1">
                {obra.desc}
              </p>

              {/* Botón WhatsApp visible en hover */}
              <div className="mt-3.5 overflow-hidden max-h-0 group-hover:max-h-16 transition-all duration-500">
                <a
                  href={`https://wa.me/51958413806?text=${encodeURIComponent(obra.wa)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white bg-white/20 hover:bg-white/30 border border-white/40 rounded px-4 py-2 transition-colors"
                >
                  <WhatsAppIcon className="size-3.5" />
                  <span>Cotizar</span>
                  <ArrowRight className="size-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Franja inferior de conversión ── */}
      <div className="bg-[#1A2B45] px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-700">
        <p className="text-xs sm:text-sm text-slate-300 font-medium text-center sm:text-left">
          ¿Tienes un diseño o plano especial para tu proyecto? Fabricamos soluciones a medida.
        </p>

        <Button
          size="sm"
          className="h-10 px-6 text-xs font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-white rounded shadow-cta gap-2 cursor-pointer shrink-0 active:translate-y-1"
          asChild
        >
          <a
            href="https://wa.me/51958413806?text=Hola%20GMS%20Integra,%20deseo%20consultar%20por%20un%20proyecto%20personalizado."
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="size-4" />
            <span>Consultar Proyecto</span>
          </a>
        </Button>
      </div>

    </section>
  );
}


