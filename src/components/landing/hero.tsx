"use client";

import Image from "next/image";
import heroWindow from "@/assets/hero-window.jpg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "+15", label: "años de experiencia" },
  { value: "+1.200", label: "proyectos entregados" },
  { value: "5 años", label: "de garantía" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden border-b bg-transparent">
      {/* Imagen de fondo fotorrealista estilo Marca de Agua (Watermark) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src={heroWindow}
          alt="Mamparas de vidrio y aluminio"
          fill
          className="object-cover opacity-[0.09] grayscale transition-all duration-700"
          priority
        />
        {/* Desvanecimiento de degradado para integrarse perfectamente con el fondo de la página */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
      </div>

      {/* Grilla geométrica sutil (líneas de carpintería metálica) sobrepuesta en la marca de agua */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 z-10" aria-hidden />

      <div className="relative mx-auto z-20 w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20 flex flex-col gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Columna Izquierda: Contenido de Texto */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            {/* Badge */}
            <Badge variant="outline" className="bg-card/90 backdrop-blur border-primary/20 text-primary py-1 px-3.5 text-xs font-semibold tracking-wide w-fit">
              Aluminio integral · Ventanas y mamparas
            </Badge>
            
            {/* Heading */}
            <h1 className="text-4xl font-medium tracking-tight text-balance sm:text-5xl md:text-6xl leading-[1.15] text-foreground">
              Ventanas y mamparas de aluminio,{" "}
              <span className="text-gradient-brand font-bold">a la medida</span> de tu espacio.
            </h1>
            
            {/* Description */}
            <p className="text-muted-foreground max-w-2xl text-lg sm:text-xl text-balance leading-relaxed">
              Diseñamos, fabricamos e instalamos soluciones de alta ingeniería en aluminio y vidrio con acabados de precisión para proyectos residenciales y comerciales.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mt-2">
              <Button variant="brand" size="lg" className="h-10 px-6 rounded-lg text-sm font-semibold shadow-md transition-all hover:scale-105" asChild>
                <a href="#contacto">Solicitar cotización</a>
              </Button>
              <Button variant="outline" size="lg" className="h-10 px-6 rounded-lg text-sm font-semibold bg-white/50 backdrop-blur transition-all hover:scale-105" asChild>
                <a href="#productos">Ver productos</a>
              </Button>
            </div>
          </div>

          {/* Columna Derecha: Imagen Ilustrativa del Rubro */}
          <div className="lg:col-span-5 w-full flex justify-center items-center">
            <div className="relative aspect-[4/3] w-full max-w-md lg:max-w-none overflow-hidden rounded-xl border border-border bg-card/50 p-2 shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <Image
                  src={heroWindow}
                  alt="Ventanas y mamparas de aluminio de alta gama"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                {/* Reflejo de vidrio sutil */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 pointer-events-none" />
              </div>
              
              {/* Etiqueta flotante con estilo esmerilado */}
              <div className="absolute bottom-6 left-6 glass px-3.5 py-2 rounded-lg border border-white/20 shadow-lg text-[11px] font-semibold text-primary uppercase tracking-wider">
                Vidrio templado & perfiles GMS
              </div>
            </div>
          </div>
        </div>

        {/* Stats Centrados con Línea Divisoria */}
        <div className="w-full border-t border-border/80 pt-8 mt-4">
          <dl className="mx-auto flex max-w-2xl flex-wrap justify-around gap-x-6 gap-y-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <dt className="text-primary text-3xl font-bold tracking-tight tabular-nums">{s.value}</dt>
                <dd className="text-muted-foreground text-[10px] mt-1.5 font-bold uppercase tracking-wider">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
