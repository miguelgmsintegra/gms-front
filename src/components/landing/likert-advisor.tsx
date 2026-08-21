"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Volume2, 
  Wind, 
  Footprints, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  SlidersHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface LikertQuestion {
  id: string;
  icon: typeof Volume2;
  title: string;
  description: string;
  lowLabel: string;
  highLabel: string;
}

const questions: LikertQuestion[] = [
  {
    id: "ruido",
    icon: Volume2,
    title: "1. Nivel de Ruido en tu Zona o Vía",
    description: "¿Qué tan expuesta está tu edificación al tráfico de avenidas, bocinas o comercio?",
    lowLabel: "Zona Muy Silenciosa",
    highLabel: "Avenida de Alto Tráfico",
  },
  {
    id: "viento",
    icon: Wind,
    title: "2. Exposición a Vientos Andinos & Bajas Temperaturas",
    description: "¿Tu fachada está expuesta a corrientes fuertes, pisos altos o heladas nocturnas?",
    lowLabel: "Piso Bajo Protegido",
    highLabel: "Piso Alto / Viento Fuerte",
  },
  {
    id: "trafico",
    icon: Footprints,
    title: "3. Frecuencia de Apertura y Tráfico Diario",
    description: "¿Con qué intensidad se abrirán y cerrarán las hojas corredizas o batientes?",
    lowLabel: "Uso Moderado (Dormitorio)",
    highLabel: "Alto Tráfico (Sala / Negocio)",
  },
  {
    id: "seguridad",
    icon: ShieldCheck,
    title: "4. Prioridad de Seguridad & Resistencia al Impacto",
    description: "¿Requiere cristal templado de alto grosor ante impactos accidentales o protección?",
    lowLabel: "Residencial Estándar",
    highLabel: "Máxima Seguridad (8-10mm)",
  },
];

export function LikertAdvisor() {
  const [scores, setScores] = useState<Record<string, number>>({
    ruido: 3,
    viento: 3,
    trafico: 3,
    seguridad: 4,
  });

  const handleScoreChange = (id: string, value: number) => {
    setScores((prev) => ({ ...prev, [id]: value }));
  };

  // Cálculo del algoritmo de recomendación
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0); // 4 a 20

  let recommendation = {
    serie: "Serie 25 Reforzada",
    cristal: "Cristal Templado 8mm Incoloro",
    herraje: "Carretillas Tándem de Alta Suavidad",
    atenuacion: "-28 dB de Insonorización",
    descripcion: "Excelente equilibrio para departamentos y residencias con tráfico medio y protección contra lluvias.",
    badge: "Equilibrio Residencial",
  };

  if (totalScore >= 16) {
    recommendation = {
      serie: "Serie 80 DVH / Serie 38 Hermética",
      cristal: "Doble Vidrio Hermético (DVH 4+12+4) o Templado 10mm",
      herraje: "Herrajes Spazio Inox 304 + Empaque EPDM Doble",
      atenuacion: "-38 dB (Máximo Silencio & Confort Térmico)",
      descripcion: "Diseñada para máxima exigencia acústica en avenidas transitadas, aislamiento térmico contra heladas y vanos panorámicos.",
      badge: "Máxima Gama & Silencio",
    };
  } else if (totalScore <= 9) {
    recommendation = {
      serie: "Serie 20 Clásica",
      cristal: "Cristal Templado 6mm / Semitemplado",
      herraje: "Rodamientos Estándar de Nylon Reforzado",
      atenuacion: "-22 dB Aislamiento Básico",
      descripcion: "Solución económica y funcional para vanos interiores, patios o zonas residenciales tranquilas sin viento extremo.",
      badge: "Económica & Eficiente",
    };
  }

  const handleGenerateRecommendation = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#004aad", "#00c9ff", "#10b981"],
      });
    } catch {
      // Confetti fallback
    }
  };

  const whatsappMessage = `*DIAGNÓSTICO LIKERT DE CONFORT - GMS INTEGRA*
• Ruido en Zona: Nivel ${scores.ruido}/5
• Viento y Clima: Nivel ${scores.viento}/5
• Tráfico de Uso: Nivel ${scores.trafico}/5
• Seguridad: Nivel ${scores.seguridad}/5
• *Puntaje Total:* ${totalScore}/20
• *Sistema Sugerido:* ${recommendation.serie} (${recommendation.cristal})
• *Atenuación Estimada:* ${recommendation.atenuacion}

Hola GMS Integra, completé el Diagnóstico de Confort y deseo una cotización para este sistema sugerido.`;

  return (
    <section id="diagnostico" className="relative overflow-hidden border-b bg-slate-50 py-16 sm:py-24">
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-35 pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Monumental */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-950 font-sans leading-[1.06]">
            Diagnóstico de Confort & Sistema Ideal
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl">
            Califica las condiciones de tu edificación en la escala de 1 a 5. Nuestro algoritmo determinará la serie de aluminio y espesor de cristal idóneo para tu presupuesto.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* Columna Izquierda: Matriz de Escalas Likert (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold uppercase text-sm tracking-wide">
                <SlidersHorizontal className="size-4.5 text-primary" />
                <span>Matriz de Calificación de Requerimientos</span>
              </div>
              <span className="text-xs font-semibold text-slate-500 font-mono">Escala 1 (Mínimo) a 5 (Máximo)</span>
            </div>

            <div className="flex flex-col gap-7">
              {questions.map((q) => {
                const currentVal = scores[q.id];
                return (
                  <div key={q.id} className="flex flex-col gap-2.5">
                    <div className="flex items-start gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <q.icon className="size-4.5" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          {q.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-normal mt-0.5">
                          {q.description}
                        </p>
                      </div>
                    </div>

                    {/* Botones de Escala Likert 1 a 5 */}
                    <div className="mt-1 flex flex-col gap-1.5 pl-0 sm:pl-11">
                      <div className="grid grid-cols-5 gap-2 sm:gap-3">
                        {[1, 2, 3, 4, 5].map((level) => {
                          const isSelected = currentVal === level;
                          return (
                            <button
                              key={level}
                              type="button"
                              onClick={() => handleScoreChange(q.id, level)}
                              className={`h-11 sm:h-12 rounded-xl font-mono text-sm sm:text-base font-black transition-all duration-200 flex flex-col items-center justify-center cursor-pointer border ${
                                isSelected
                                  ? "bg-primary text-white border-primary shadow-md scale-105"
                                  : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                              }`}
                            >
                              <span>{level}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Etiquetas de los extremos */}
                      <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-slate-500 px-1">
                        <span>1: {q.lowLabel}</span>
                        <span>5: {q.highLabel}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Button
                variant="brand"
                size="lg"
                onClick={handleGenerateRecommendation}
                className="w-full h-12 text-xs sm:text-sm font-black uppercase tracking-wider bg-primary hover:bg-[#002b66] text-white rounded-xl shadow-md gap-2"
              >
                <Sparkles className="size-4.5 text-[#00c9ff]" />
                <span>Calcular Recomendación de Taller</span>
              </Button>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de Resultado & Recomendación (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5 sticky top-24">
            <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              
              {/* Badge de Diagnóstico */}
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-lg bg-[#00c9ff]/20 border border-[#00c9ff]/40 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#00c9ff]">
                  {recommendation.badge}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">
                  Puntaje: {totalScore} / 20
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-tight">
                Sistema Recomendado:
              </h3>
              <p className="text-lg sm:text-xl font-bold text-[#00c9ff] mt-1">
                {recommendation.serie}
              </p>

              <div className="my-5 border-t border-slate-800 pt-4 flex flex-col gap-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4.5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase font-bold text-slate-400 font-mono">Cristal Sugerido</span>
                    <p className="text-xs sm:text-sm font-bold text-white">{recommendation.cristal}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4.5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase font-bold text-slate-400 font-mono">Herrajes & Empaques</span>
                    <p className="text-xs sm:text-sm font-bold text-white">{recommendation.herraje}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4.5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase font-bold text-slate-400 font-mono">Desempeño Acústico</span>
                    <p className="text-xs sm:text-sm font-bold text-emerald-400">{recommendation.atenuacion}</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 font-normal leading-relaxed mb-6 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                {recommendation.descripcion}
              </p>

              {/* Botón de Cotización Directa con el Diagnóstico */}
              <Button
                variant="brand"
                size="lg"
                className="w-full h-13 text-xs sm:text-sm font-black uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-lg gap-2.5 transition-transform hover:scale-103"
                asChild
              >
                <a
                  href={`https://wa.me/51958413806?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5" />
                  <span>Cotizar este Diagnóstico a WhatsApp</span>
                  <ArrowRight className="size-4" />
                </a>
              </Button>

            </div>

            {/* Aviso de Confianza */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3 text-xs text-slate-600 font-medium">
              <ShieldCheck className="size-5 text-emerald-600 shrink-0" />
              <span>Un técnico de taller validará tus medidas in-situ en Huancayo sin costo de visita.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
