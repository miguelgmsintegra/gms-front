"use client";

import Image from "next/image";
import { ShieldCheck, Award, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";
import heroWindow from "@/assets/hero-window.jpg";
import mamparaBano from "@/assets/mampara_bano.jpg";
import ventanaAluminio from "@/assets/ventana_aluminio.jpg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "+15", label: "Años en el Rubro de Construcción" },
  { value: "+1.200", label: "Obras y Proyectos Entregados" },
  { value: "5 Años", label: "Garantía Escrita de Instalación" },
];

const highlights = [
  "Fabricación en taller propio",
  "Vidrio templado de seguridad",
  "Medición técnica a domicilio",
];

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden border-b bg-transparent py-8 lg:py-16">
      {/* Grilla geométrica sutil (líneas de arquitectura y perfiles) */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-25 z-0" aria-hidden />

      <div className="relative mx-auto z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Columna Izquierda: Contenido de Texto */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            
            {/* Badge de Rubro */}
            <Badge variant="outline-brand" className="w-fit gap-1.5 px-3 py-1">
              <Wrench className="size-3.5" />
              Carpintería de Aluminio & Vidrio Templado
            </Badge>
            
            {/* Titular Principal en Mayúsculas de Alta Jerarquía */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-wider uppercase leading-[1.12] text-foreground">
              Ventanas y Mamparas de Aluminio,{" "}
              <span className="text-primary font-extrabold uppercase">a la Medida</span> de tu Edificación.
            </h1>
            
            {/* Bajada Descriptiva */}
            <p className="text-muted-foreground max-w-xl text-base sm:text-lg text-balance leading-relaxed normal-case font-normal">
              Diseño, fabricación e instalación de alta ingeniería arquitectónica en carpintería metálica, mamparas de cristal templado, ventanas herméticas y fachadas integrales en Huancayo y todo el Valle del Mantaro.
            </p>

            {/* Balazos de Valor en Construcción */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-foreground">
              {highlights.map((item) => (
                <span key={item} className="flex items-center gap-1.5 bg-card/80 border border-border px-3 py-1.5 rounded-full shadow-xs">
                  <CheckCircle2 className="size-3.5 text-primary" />
                  {item}
                </span>
              ))}
            </div>

            {/* Botones de Acción Sólidos */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2">
              <Button variant="brand" size="lg" className="h-12 px-8 text-xs font-bold uppercase tracking-wider shadow-md gap-2 bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                <a
                  href={`https://wa.me/51958413806?text=${encodeURIComponent("Hola GMS Integra, quisiera solicitar una cotización de obra para un proyecto de aluminio y vidrio.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cotizar por WhatsApp
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-7 text-xs font-semibold uppercase tracking-wider" asChild>
                <a href="#contacto">Ver Formulario Web</a>
              </Button>
            </div>
          </div>

          {/* Columna Derecha: Mosaico Arquitectónico de Alta Jerarquía Visual */}
          <div className="lg:col-span-6 w-full flex justify-center items-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Tarjeta Principal (Fachadas y Ventanales de Gran Luces) */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-primary/20 bg-card p-2 shadow-2xl transition-all duration-500 hover:border-primary/40">
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={heroWindow}
                    alt="Ventanas y mamparas de aluminio y vidrio templado en Huancayo - GMS Integra"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Etiqueta Flotante en la Imagen Principal */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-primary-foreground/80">Especialidad Principal</p>
                      <p className="text-sm font-extrabold uppercase tracking-wide">Fachadas & Ventanales Herméticos</p>
                    </div>
                    <Badge variant="brand" className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 shadow-sm">
                      GMS Pro
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Tarjeta Flotante Superior Derecha (Mamparas de Baño en Cristal Templado) */}
              <div className="absolute -top-5 -right-4 sm:-right-6 w-44 sm:w-52 aspect-[4/3] overflow-hidden rounded-xl border-2 border-white bg-card p-1.5 shadow-xl transition-all duration-300 hover:scale-105 hidden sm:block">
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <Image
                    src={mamparaBano}
                    alt="Mampara de baño en vidrio templado en Huancayo"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="text-[9px] font-extrabold uppercase tracking-wider">Mamparas de Baño</p>
                    <p className="text-[8px] text-white/80 font-mono">Vidrio Templado 10mm</p>
                  </div>
                </div>
              </div>

              {/* Tarjeta Flotante Inferior Izquierda (Carpintería de Aluminio Serie Nova) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 w-48 sm:w-56 aspect-[4/3] overflow-hidden rounded-xl border-2 border-white bg-card p-1.5 shadow-xl transition-all duration-300 hover:scale-105 hidden sm:block">
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <Image
                    src={ventanaAluminio}
                    alt="Ventanas de aluminio Serie Nova en Huancayo"
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="text-[9px] font-extrabold uppercase tracking-wider">Ventanas Serie 38 / Nova</p>
                    <p className="text-[8px] text-white/80 font-mono">Acabado Anodizado Negro</p>
                  </div>
                </div>
              </div>

              {/* Sello de Garantía y Confianza */}
              <div className="absolute -bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-xl shadow-lg border border-primary/20 flex items-center gap-2.5 z-20">
                <Award className="size-5 shrink-0 text-white" />
                <div className="leading-tight">
                  <p className="text-[10px] font-extrabold uppercase tracking-wider">Garantía Escrita</p>
                  <p className="text-[9px] text-white/90">5 Años en Taller & Obra</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Métricas Estadísticas de Construcción */}
        <div className="w-full border-t border-border/80 pt-8 mt-6">
          <dl className="mx-auto flex max-w-4xl flex-wrap justify-around gap-x-8 gap-y-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <dt className="text-primary text-3xl sm:text-4xl font-extrabold tracking-tight font-mono tabular-nums">{s.value}</dt>
                <dd className="text-muted-foreground text-[10px] sm:text-xs mt-1 font-bold uppercase tracking-wider">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </section>
  );
}
