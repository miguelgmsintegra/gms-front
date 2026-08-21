"use client";

import { useState } from "react";
import Image from "next/image";
import { Layers, ShieldCheck, Maximize, Landmark, Volume2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import imgSerie20 from "@/assets/serie_20.jpg";
import imgVentanaAluminio from "@/assets/ventana_aluminio.jpg";
import imgDivisionesOficina from "@/assets/divisiones_oficina.jpg";
import imgHeroWindow from "@/assets/hero-window.jpg";
import imgCerramientoTerraza from "@/assets/cerramiento_terraza.jpg";

const seriesData = [
  {
    id: "s20",
    code: "S-20",
    name: "Serie 20 Clásica",
    category: "Residencial Ligero",
    tagline: "El estándar corredizo más accesible y eficiente para vanos estándar",
    icon: Layers,
    description: "Sistema corredizo de 2 y 4 hojas ideal para ventanas de dormitorios, baños y cocinas en viviendas unifamiliares. Perfiles ligeros con deslizamiento suave sobre riel de aluminio.",
    specs: {
      glass: "4mm a 6mm (Monolítico o Templado)",
      width: "50mm ancho de marco perimetral",
      isolation: "Básico · Felpas de polipropileno",
      wind: "Hasta 80 km/h de resistencia",
    },
    advantages: [
      "Instalación rápida en vanos estándar",
      "Mantenimiento mínimo y fácil limpieza",
      "Coste-efectividad óptimo para obras residenciales",
      "Compatibilidad con mallas mosquiteras",
    ],
    idealFor: "Ventanas pequeñas y medianas en casas y departamentos de hasta 3 pisos.",
    image: imgSerie20,
    badgeText: "Económica & Funcional",
  },
  {
    id: "s25",
    code: "S-25",
    name: "Serie 25 Reforzada",
    category: "Residencial Confort",
    tagline: "Mayor robustez y estanqueidad para mamparas y ventanales principales",
    icon: Maximize,
    description: "Perfilería reforzada de gama media-alta para mamparas de sala, balcones y accesos. Soporta cristales de mayor peso con rodamiento regulable de suave desplazamiento.",
    specs: {
      glass: "6mm a 8mm (Templado o Laminado)",
      width: "62mm ancho de marco reforzado",
      isolation: "Medio-Alto · Felpas densas y jebes",
      wind: "Hasta 100 km/h de resistencia",
    },
    advantages: [
      "Perfiles de mayor inercia que evitan pandeo",
      "Carretillas con rodamientos reforzados",
      "Cierres embutidos laterales de seguridad",
      "Excelente relación calidad-precio para mamparas",
    ],
    idealFor: "Mamparas corredizas de salas, balcones y accesos a jardines.",
    image: imgVentanaAluminio,
    badgeText: "La Más Instalada",
  },
  {
    id: "s35",
    code: "Serie 35 / 38",
    name: "Serie 38 Batiente Hermética",
    category: "Acústica & Hermética",
    tagline: "Máximo aislamiento contra ruido exterior y corrientes de aire frío",
    icon: Volume2,
    description: "Sistema para ventanas batientes, proyectantes y oscilobatientes con doble contacto de jebe EPDM. Crea un cierre a presión que bloquea el ruido del tráfico y el polvo.",
    specs: {
      glass: "6mm a 10mm (Templado o Acústico)",
      width: "40mm ancho con doble burlete",
      isolation: "Alto · Reducción acústica hasta 34 dB",
      wind: "Hasta 120 km/h de resistencia",
    },
    advantages: [
      "Cierre hermético perimetral por compresión",
      "Aislamiento térmico frente a heladas andinas",
      "Apertura interior o exterior según necesidad",
      "Herrajes multipunto europeos de alta seguridad",
    ],
    idealFor: "Dormitorios principales, salas de estudio, oficinas y clínicas con exigencia acústica.",
    image: imgDivisionesOficina,
    badgeText: "Aislamiento Acústico",
  },
  {
    id: "s80",
    code: "Serie 80",
    name: "Serie 80 Europea",
    category: "Línea Premium",
    tagline: "Ingeniería de vanguardia para grandes luces y doble acristalamiento (DVH)",
    icon: ShieldCheck,
    description: "Sistema corredizo de alta gama diseñado bajo estándares europeos. Permite paños vidriados gigantes de piso a techo con cámaras de aire aislantes termoacústicas.",
    specs: {
      glass: "8mm a 20mm (Vidrio Doble - DVH)",
      width: "80mm ancho de marco multiproyecto",
      isolation: "Muy Alto · Termoacústico certificado",
      wind: "Hasta 140 km/h de resistencia",
    },
    advantages: [
      "Capacidad para vidrios dobles con cámara de gas argón",
      "Rodamientos de precisión para hojas de hasta 150 kg",
      "Acabados anodizados europeos mate y titanio",
      "Estética minimalista con máxima entrada de luz",
    ],
    idealFor: "Casas de campo, terrazas de departamentos duplex y arquitectura contemporánea.",
    image: imgHeroWindow,
    badgeText: "Gama Alta / DVH",
  },
  {
    id: "s100",
    code: "Serie 100",
    name: "Serie 100 / Muro Cortina",
    category: "Ingeniería Monumental",
    tagline: "Estructuras autoportantes de aluminio para edificios comerciales y fachadas",
    icon: Landmark,
    description: "Sistemas estructurales monumentales calculados para resistir cargas de viento extremas y alturas elevadas en edificios corporativos, clínicas y centros comerciales.",
    specs: {
      glass: "10mm a 24mm (Laminados / DVH)",
      width: "100mm perfiles estructurales pesados",
      isolation: "Máximo · Desagüe y ventilación interna",
      wind: "Hasta 180 km/h (Cálculo estructural)",
    },
    advantages: [
      "Fachadas integrales sin marcos visibles exteriores",
      "Anclajes estructurales de acero al carbono",
      "Control de radiación solar y confort térmico",
      "Cumplimiento del Reglamento Nacional de Edificaciones",
    ],
    idealFor: "Fachadas de edificios, concesionarios, clínicas y galerías comerciales.",
    image: imgCerramientoTerraza,
    badgeText: "Monumental B2B",
  },
];

export function Series() {
  const [activeTab, setActiveTab] = useState("s25");

  return (
    <section id="series" className="relative overflow-hidden border-b bg-slate-50/60 py-16 sm:py-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-15" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Monumental */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-950 font-sans leading-[1.06]">
            Sistemas & Series de Perfilería
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl">
            Desde sistemas residenciales económicos hasta mamparas monumentales de alta gama con doble vidrio hermético.
          </p>
        </div>

        {/* Sistema de Pestañas Interactivas */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          
          {/* Barra de Navegación de Tabs */}
          <div className="flex justify-center mb-8">
            <TabsList className="h-auto p-1.5 bg-white border border-slate-200 shadow-sm rounded-2xl flex flex-wrap justify-center gap-1.5 max-w-full">
              {seriesData.map((s) => {
                const Icon = s.icon;
                return (
                  <TabsTrigger
                    key={s.id}
                    value={s.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer"
                  >
                    <Icon className="size-4" />
                    <span>{s.code}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* Contenido de cada Tab */}
          {seriesData.map((s) => (
            <TabsContent key={s.id} value={s.id} className="focus:outline-none">
              <div className="bg-white border border-slate-200/90 rounded-3xl shadow-md overflow-hidden p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  
                  {/* Columna Izquierda: Ficha Técnica (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-primary text-white text-xs font-black font-mono px-3 py-1 rounded-lg">
                          {s.code}
                        </span>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                          {s.category}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full ml-auto">
                          {s.badgeText}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight">
                        {s.name}
                      </h3>
                      
                      <p className="text-sm font-semibold text-slate-700 mt-1">
                        {s.tagline}
                      </p>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-3 font-normal">
                        {s.description}
                      </p>
                    </div>

                    {/* Grilla de 4 Especificaciones Técnicas */}
                    <div className="grid grid-cols-2 gap-3 bg-slate-50 border border-slate-100 rounded-2xl p-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Cristal Compatible</span>
                        <span className="text-xs font-bold text-slate-900 font-mono mt-0.5">{s.specs.glass}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Ancho Marco</span>
                        <span className="text-xs font-bold text-slate-900 font-mono mt-0.5">{s.specs.width}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Aislamiento</span>
                        <span className="text-xs font-bold text-slate-900 mt-0.5">{s.specs.isolation}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Resistencia Viento</span>
                        <span className="text-xs font-bold text-slate-900 font-mono mt-0.5">{s.specs.wind}</span>
                      </div>
                    </div>

                    {/* Ventajas Clave */}
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-2.5">
                        Ventajas de fabricación e instalación:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {s.advantages.map((adv, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{adv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Uso Recomendado y Botón CTA */}
                    <div className="border-t border-slate-100 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">
                          Aplicación principal:
                        </span>
                        <p className="text-xs text-slate-600 font-medium">
                          {s.idealFor}
                        </p>
                      </div>

                      <Button
                        variant="brand"
                        className="w-full sm:w-auto h-11 px-6 text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-xs gap-2 shrink-0"
                        asChild
                      >
                        <a
                          href={`https://wa.me/51958413806?text=${encodeURIComponent(`Hola GMS Integra, me interesa cotizar una instalación con ${s.name} (${s.code}). ¿Podrían darme presupuesto?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>Cotizar {s.code}</span>
                          <ArrowRight className="size-4" />
                        </a>
                      </Button>
                    </div>

                  </div>

                  {/* Columna Derecha: Imagen de Serie con Marco de Taller (5 cols) */}
                  <div className="lg:col-span-5">
                    <div className="relative aspect-[4/3] sm:aspect-[1/1] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md group">
                      <Image
                        src={s.image}
                        alt={`${s.name} - Carpintería de aluminio en Huancayo`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Badge inferior en imagen */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00c9ff]">
                          GMS Taller Certificado
                        </p>
                        <p className="text-sm font-black uppercase tracking-wide">
                          {s.name}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </TabsContent>
          ))}

        </Tabs>

      </div>
    </section>
  );
}

