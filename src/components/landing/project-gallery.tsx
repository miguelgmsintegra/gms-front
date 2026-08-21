"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import imgTerraza from "@/assets/mampara_monumental_terraza.jpg";
import imgBano from "@/assets/bano_spa_vidrio_templado.jpg";
import imgFachada from "@/assets/fachada_muro_cortina.jpg";
import imgTecho from "@/assets/techo_vidrio_terraza.jpg";
import imgHero from "@/assets/hero-window.jpg";
import imgOficina from "@/assets/divisiones_oficina.jpg";

const categories = [
  { id: "todos", label: "Todas las Obras" },
  { id: "ventanales", label: "Ventanales & Terrazas" },
  { id: "banos", label: "Baños & Spazio" },
  { id: "fachadas", label: "Fachadas & Muros" },
  { id: "techos", label: "Techos & Balcones" },
];

const galleryItems = [
  {
    id: "g-1",
    category: "ventanales",
    title: "Mampara Panorámica Serie 80",
    location: "Residencial San Carlos · Huancayo",
    desc: "Vano piso a techo de 5.20m de ancho con cristal templado de 10mm y perfilería anodizada negra mate.",
    image: imgTerraza,
    tag: "Gran Formato",
    whatsappMsg: "Hola GMS Integra, vi la Mampara Panorámica Serie 80 en la galería y deseo cotizar una para mi terraza.",
  },
  {
    id: "g-2",
    category: "banos",
    title: "Mampara de Baño Minimalista Spa",
    location: "Distrito El Tambo · Huancayo",
    desc: "Cristal templado 10mm incoloro con bisagras y jalador en acero quirúrgico negro mate antical.",
    image: imgBano,
    tag: "Herrajes Spazio",
    whatsappMsg: "Hola GMS Integra, deseo cotizar una Mampara de Baño tipo Spa en cristal templado 10mm.",
  },
  {
    id: "g-3",
    category: "fachadas",
    title: "Muro Cortina & Barandas de Cristal",
    location: "Edificio Residencial · Valle del Mantaro",
    desc: "Fachada vidriada estructural con Doble Vidrio Hermético y barandas de cristal templado en balcones.",
    image: imgFachada,
    tag: "Muro Cortina",
    whatsappMsg: "Hola GMS Integra, quisiera cotizar Muro Cortina y barandas de vidrio para un edificio residencial.",
  },
  {
    id: "g-4",
    category: "techos",
    title: "Techo de Vidrio Laminado & Pérgola",
    location: "Azotea Panorámica · Huancayo",
    desc: "Estructura de aluminio reforzado con cristal laminado de seguridad 10mm con filtro solar UV.",
    image: imgTecho,
    tag: "Control Solar",
    whatsappMsg: "Hola GMS Integra, deseo cotizar un Techo de Vidrio Laminado para terraza.",
  },
  {
    id: "g-5",
    category: "ventanales",
    title: "Ventanales Herméticos Serie 38",
    location: "Residencia Campestre · Pilcomayo",
    desc: "Carpintería acústica con doble empaque EPDM y cierre perimetral multipunto contra viento y polvo.",
    image: imgHero,
    tag: "Hermetismo Total",
    whatsappMsg: "Hola GMS Integra, quisiera cotizar Ventanales Herméticos Serie 38 para mi vivienda.",
  },
  {
    id: "g-6",
    category: "fachadas",
    title: "Divisiones Vidriadas de Oficina",
    location: "Edificio Corporativo · Huancayo Centro",
    desc: "Mamparas divisorias con puertas de freno hidráulico de piso y perfiles enrasados minimalistas.",
    image: imgOficina,
    tag: "Corporativo",
    whatsappMsg: "Hola GMS Integra, deseo cotizar Divisiones de Oficina en vidrio templado.",
  },
];

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredItems = activeCategory === "todos"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="galeria" className="relative overflow-hidden border-b bg-slate-950 text-white py-16 sm:py-24">
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Monumental */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-sans leading-[1.06]">
            Galería de Obras & Inspiración
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-300 font-medium leading-relaxed max-w-3xl">
            Explora proyectos de carpintería de aluminio y cristal templado ejecutados con acabados de alta gama en Huancayo y la región.
          </p>
        </div>

        {/* Filtros de Categoría */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => {
            const isActive = activeCategory === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-primary text-white border-primary shadow-lg scale-105"
                    : "bg-slate-900/90 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Grilla Masonry / Bento de Proyectos */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-2xl"
            >
              {/* Imagen con Overlay y Hover Zoom */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Badge Superior */}
                <div className="absolute top-4 left-4">
                  <span className="rounded-xl bg-slate-950/90 border border-slate-700 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#00c9ff] shadow-md">
                    {item.tag}
                  </span>
                </div>

                {/* Información al Pie de la Imagen */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-semibold text-slate-400 font-mono block mb-1">
                    {item.location}
                  </span>
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-wide leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Descripción y Botón */}
              <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  {item.desc}
                </p>

                <Button
                  variant="brand"
                  size="sm"
                  className="w-full h-11 text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-md justify-between gap-2 transition-transform hover:scale-102"
                  asChild
                >
                  <a
                    href={`https://wa.me/51958413806?text=${encodeURIComponent(item.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="size-4" />
                      <span>Cotizar este Diseño</span>
                    </span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </Button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
