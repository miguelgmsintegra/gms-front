"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "./social-icons";

import imgTaller from "@/assets/techo_vidrio_terraza.jpg";

const FAQS = [
  {
    num: "01",
    q: "¿Qué diferencia hay entre la Serie 20, 25, 38 y Serie 80?",
    a: "La Serie 20 es corredizo estándar; Serie 25 con perfiles reforzados para vanos medianos; Serie 38 es batiente hermética con empaques EPDM; y la Serie 80 es la línea monumental para vanos piso a techo con rodamiento pesado.",
  },
  {
    num: "02",
    q: "¿Qué espesor de cristal usan en mamparas de baño y terrazas?",
    a: "Mamparas de baño Línea Spazio: cristal templado 8mm con herrajes en acero inoxidable 304. Para mamparas monumentales y terrazas: 8mm–10mm o Doble Vidrio Hermético (DVH) contra el frío andino.",
  },
  {
    num: "03",
    q: "¿Cuánto demora la fabricación en taller e instalación?",
    a: "Manufactura en Jr. Huánuco Nro. 1389: 5 a 8 días hábiles tras verificación de medidas. La instalación en obra se ejecuta en una sola jornada dejando vanos limpios, aplomados y sellados.",
  },
  {
    num: "04",
    q: "¿Qué cubre el 1 Año de Garantía Escrita Formal?",
    a: "Cubre defectos de manufactura en perfiles de aluminio, funcionamiento mecánico de rodamientos y carretillas, estanqueidad del sellado perimetral contra lluvias y durabilidad de herrajes en acero inoxidable 304.",
  },
  {
    num: "05",
    q: "¿Realizan medición técnica sin costo en Huancayo?",
    a: "Sí. Visita técnica in-situ sin costo en Huancayo, El Tambo, Chilca y zonas aledañas del Valle del Mantaro para rectificar vanos, plomos y cotas.",
  },
  {
    num: "06",
    q: "¿Cómo es la forma de pago y facturación?",
    a: "50% de anticipo al inicio de manufactura y 50% contra entrega e instalación conforme. Emitimos Factura electrónica, Boleta y Certificado de Garantía escrita formal.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative border-b border-border overflow-hidden">

      {/* Layout de dos paneles full-height inspirado en dimedes.com zoom_box */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">

        {/* ── Panel Izquierdo: Imagen de taller con overlay sutil (dimedes .photo + .desc) ── */}
        <div className="relative min-h-[360px] lg:min-h-full overflow-hidden">
          <Image
            src={imgTaller}
            alt="Taller de Manufactura GMS Integra Huancayo"
            priority
            className="absolute inset-0 size-full object-cover object-center brightness-90 scale-105"
          />
          {/* Overlay degradado solo en zonas de texto — imagen visible en el centro */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/85" />

          {/* Contenido del Panel Izquierdo encima del overlay */}
          <div className="relative z-10 h-full flex flex-col justify-between p-8 sm:p-10 lg:p-12">

            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-primary drop-shadow-sm">
                GMS Integra · Taller Huancayo
              </span>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black uppercase tracking-tight text-white mt-3 font-sans leading-[1.05] [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]">
                Preguntas<br />Frecuentes
              </h2>
              <div className="mt-4 h-1 w-14 bg-primary rounded-full" />
              <p className="mt-4 text-sm text-white/90 leading-relaxed max-w-xs [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]">
                Todo lo que necesitas saber sobre series de aluminio, espesores de cristal, plazos y nuestra garantía formal.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4">
              {/* Stats con estilo sólido */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded border border-white/20 bg-slate-900/80 p-4 flex flex-col gap-1 shadow-card">
                  <span className="text-2xl font-black text-white font-sans leading-none">1 AÑO</span>
                  <span className="text-[10px] font-mono uppercase text-slate-300 tracking-wider mt-1">Garantía Escrita</span>
                </div>
                <div className="rounded border border-white/20 bg-slate-900/80 p-4 flex flex-col gap-1 shadow-card">
                  <span className="text-2xl font-black text-white font-sans leading-none">Gratis</span>
                  <span className="text-[10px] font-mono uppercase text-slate-300 tracking-wider mt-1">Medición In-Situ</span>
                </div>
              </div>

              <Button
                size="lg"
                className="h-12 px-6 text-xs font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground rounded shadow-cta gap-2.5 cursor-pointer w-full active:translate-y-1"
                asChild
              >
                <a
                  href="https://wa.me/51958413806?text=Hola%20GMS%20Integra,%20tengo%20una%20consulta%20técnica%20sobre%20un%20proyecto."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="size-4" />
                  <span>Consultar por WhatsApp</span>
                  <ChevronRight className="size-4" />
                </a>
              </Button>
            </div>

          </div>
        </div>

        {/* ── Panel Derecho: Acordeón Técnico Numerado ── */}
        <div className="bg-background flex flex-col justify-center py-10 px-6 sm:px-10 lg:px-12">

          <Accordion type="single" collapsible defaultValue="item-01" className="w-full">
            {FAQS.map((faq) => (
              <AccordionItem
                key={faq.num}
                value={`item-${faq.num}`}
                className="border-b border-border last:border-b-0 group"
              >
                <AccordionTrigger className="text-left py-5 hover:no-underline gap-4 cursor-pointer">
                  <div className="flex items-start gap-4 text-left">
                    <span className="text-[11px] font-mono font-bold text-primary/50 group-hover:text-primary shrink-0 pt-0.5 transition-colors w-6">
                      {faq.num}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-foreground leading-snug group-data-[state=open]:text-primary transition-colors">
                      {faq.q}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-5 pl-10 font-normal">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>

      </div>
    </section>
  );
}

