"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Calculator, MessageCircle, ArrowRight, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const projectTypes = [
  { id: "mampara-bano", name: "Mampara de Baño", defaultGlass: "Templado 8mm", defaultWidth: 1.20, defaultHeight: 1.90, baseWeightFactor: 20 },
  { id: "ventana-s25", name: "Ventana Corrediza (S-25)", defaultGlass: "Templado 6mm", defaultWidth: 1.50, defaultHeight: 1.20, baseWeightFactor: 15 },
  { id: "ventana-s38", name: "Ventana Acústica (S-38)", defaultGlass: "Acústico 8mm", defaultWidth: 1.20, defaultHeight: 1.20, baseWeightFactor: 20 },
  { id: "mampara-terraza", name: "Mampara Balcón / Terraza", defaultGlass: "Templado 8mm", defaultWidth: 2.40, defaultHeight: 2.10, baseWeightFactor: 20 },
  { id: "division-oficina", name: "División de Oficina", defaultGlass: "Templado 10mm", defaultWidth: 3.00, defaultHeight: 2.40, baseWeightFactor: 25 },
];

const glassOptions = [
  { name: "Templado 6mm Incoloro", factor: 15 },
  { name: "Templado 8mm Incoloro / Satinado", factor: 20 },
  { name: "Templado 10mm de Seguridad", factor: 25 },
  { name: "Laminado Acústico 4+4", factor: 21 },
  { name: "Doble Vidrio Hermético (DVH 4+12+4)", factor: 22 },
];

const profileColors = [
  "Negro Anodizado Mate",
  "Aluminio Natural Mate",
  "Blanco Termoesmaltado",
  "Champagne / Bronce",
  "Acabado Madera Nogal",
];

export function QuoteSimulator() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [width, setWidth] = useState<number>(projectTypes[0].defaultWidth);
  const [height, setHeight] = useState<number>(projectTypes[0].defaultHeight);
  const [selectedGlass, setSelectedGlass] = useState(glassOptions[1]);
  const [selectedColor, setSelectedColor] = useState(profileColors[0]);
  const location = "Huancayo / Valle del Mantaro";

  const area = Math.max(0.1, Number((width * height).toFixed(2)));
  const perimeter = Math.max(0.4, Number((2 * (width + height)).toFixed(2)));
  const estimatedWeight = Math.max(1, Math.round(area * selectedGlass.factor));

  const handleTypeChange = (type: typeof projectTypes[0]) => {
    setSelectedType(type);
    setWidth(type.defaultWidth);
    setHeight(type.defaultHeight);
  };

  const generateWhatsAppUrl = () => {
    const text = `*SOLICITUD DE COTIZACIÓN TÉCNICA - GMS INTEGRA*
• *Sistema / Trabajo:* ${selectedType.name}
• *Medidas del Vano:* ${width.toFixed(2)}m (ancho) x ${height.toFixed(2)}m (alto)
• *Área de Superficie:* ${area.toFixed(2)} m²
• *Perímetro de Marco:* ${perimeter.toFixed(2)} ml
• *Tipo de Cristal:* ${selectedGlass.name} (Peso est.: ~${estimatedWeight} kg)
• *Color de Perfilería:* ${selectedColor}
• *Ubicación de Obra:* ${location}

Hola GMS Integra, he simulado estas medidas en su web y deseo recibir una cotización formal y coordinar visita técnica.`;

    return `https://wa.me/51958413806?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="cotizador" className="relative overflow-hidden border-b bg-white py-16 sm:py-24">
      {/* Fondo técnico de cuadrícula */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Monumental */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-950 font-sans leading-[1.06]">
            Simula tus Medidas y Cotiza en Vivo
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl">
            Ingresa las medidas de tu vano para calcular metraje cuadrado y generar una solicitud formal a nuestro taller.
          </p>
        </div>

        {/* Simulador Interactivo: 2 Columnas (Inputs de Configuración + Resumen Técnico de Taller) */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* Columna Izquierda: Pasos de Configuración (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col gap-6">
            
            {/* Paso 1: Tipo de Proyecto */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="flex size-6 items-center justify-center rounded-full bg-primary text-white text-xs font-bold font-mono">
                  1
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                  Selecciona el Tipo de Estructura
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {projectTypes.map((t) => {
                  const isSelected = t.id === selectedType.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => handleTypeChange(t)}
                      className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-primary text-white border-primary shadow-sm"
                          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/60"
                      }`}
                    >
                      <span>{t.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Paso 2: Dimensiones de Vano */}
            <div className="border-t border-slate-200/80 pt-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex size-6 items-center justify-center rounded-full bg-primary text-white text-xs font-bold font-mono">
                  2
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                  Ingresa las Medidas del Vano (en Metros)
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-200">
                  <Label className="text-xs font-bold text-slate-700 uppercase">Ancho (m)</Label>
                  <div className="mt-2 flex items-center gap-2">
                    <Input
                      type="number"
                      step="0.05"
                      min="0.40"
                      max="10.00"
                      value={width}
                      onChange={(e) => setWidth(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
                      className="h-11 text-base font-bold font-mono"
                    />
                    <span className="text-xs font-bold text-slate-400">m</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200">
                  <Label className="text-xs font-bold text-slate-700 uppercase">Alto (m)</Label>
                  <div className="mt-2 flex items-center gap-2">
                    <Input
                      type="number"
                      step="0.05"
                      min="0.40"
                      max="6.00"
                      value={height}
                      onChange={(e) => setHeight(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
                      className="h-11 text-base font-bold font-mono"
                    />
                    <span className="text-xs font-bold text-slate-400">m</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 3: Cristal y Acabado de Perfil */}
            <div className="border-t border-slate-200/80 pt-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex size-6 items-center justify-center rounded-full bg-primary text-white text-xs font-bold font-mono">
                  3
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                  Cristal de Seguridad & Color de Perfil
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label className="text-xs font-semibold text-slate-600 block mb-1.5">Espesor / Tipo de Cristal</Label>
                  <select
                    value={selectedGlass.name}
                    onChange={(e) => {
                      const found = glassOptions.find((g) => g.name === e.target.value);
                      if (found) setSelectedGlass(found);
                    }}
                    className="w-full h-11 px-3 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-800 shadow-xs focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {glassOptions.map((g) => (
                      <option key={g.name} value={g.name}>{g.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label className="text-xs font-semibold text-slate-600 block mb-1.5">Color de Perfilería</Label>
                  <select
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="w-full h-11 px-3 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-800 shadow-xs focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {profileColors.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta de Despiece Técnico y Acción (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between border border-slate-800">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#00c9ff] font-mono">
                    Despiece Técnico Estimado
                  </span>
                  <h4 className="text-lg font-black uppercase text-white mt-0.5">
                    {selectedType.name}
                  </h4>
                </div>
                <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/30 border border-primary/50 text-[#00c9ff]">
                  <Calculator className="size-5" />
                </div>
              </div>

              {/* Indicadores Clave de Medición */}
              <div className="grid grid-cols-3 gap-2.5 bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700/80 mb-6 text-center">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase font-mono">Área Total</span>
                  <span className="text-base sm:text-lg font-black font-mono text-[#00c9ff]">{area} m²</span>
                </div>
                <div className="flex flex-col border-x border-slate-700 px-1">
                  <span className="text-[10px] text-slate-400 uppercase font-mono">Perímetro</span>
                  <span className="text-base sm:text-lg font-black font-mono text-white">{perimeter} ml</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase font-mono">Peso Est.</span>
                  <span className="text-base sm:text-lg font-black font-mono text-emerald-400">~{estimatedWeight} kg</span>
                </div>
              </div>

              {/* Ficha Resumen de Materiales */}
              <div className="space-y-3 text-xs border-b border-slate-800 pb-6 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Dimensiones de Vano:</span>
                  <span className="font-bold text-white font-mono">{width.toFixed(2)}m ancho x {height.toFixed(2)}m alto</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Cristalería:</span>
                  <span className="font-bold text-slate-200 text-right">{selectedGlass.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Perfilería:</span>
                  <span className="font-bold text-slate-200">{selectedColor}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Garantía de Obra:</span>
                  <span className="font-bold text-emerald-400">5 Años Certificada</span>
                </div>
              </div>
            </div>

            {/* Botón de Enlace a WhatsApp con Datos Prellenados */}
            <div className="flex flex-col gap-3">
              <Button
                variant="brand"
                size="lg"
                className="w-full h-12 text-xs sm:text-sm font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-md gap-2"
                onClick={() => {
                  try {
                    confetti({
                      particleCount: 60,
                      spread: 50,
                      origin: { y: 0.8 },
                      colors: ["#004aad", "#00c9ff", "#10b981"],
                    });
                  } catch {
                    // Fallback
                  }
                }}
                asChild
              >
                <a href={generateWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" />
                  <span>Enviar Medidas a WhatsApp</span>
                  <ArrowRight className="size-4" />
                </a>
              </Button>

              <p className="text-[11px] text-center text-slate-400 font-normal">
                Respuesta técnica por un maestro de taller en menos de 24 horas.
              </p>

              {/* Micro-tarjeta de Visita Técnica */}
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-3.5 flex items-center gap-3 mt-1">
                <div className="flex size-9 items-center justify-center rounded-xl bg-[#00c9ff]/20 text-[#00c9ff] shrink-0">
                  <Ruler className="size-4.5" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-white block">¿No estás seguro de las medidas?</span>
                  <span className="text-slate-400 text-[11px]">Coordinamos visita técnica de medición sin costo en Huancayo.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

