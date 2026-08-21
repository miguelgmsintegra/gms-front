import { Star, MapPin, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const realProjects = [
  {
    type: "Edificación Residencial",
    location: "Urb. San Carlos, Huancayo",
    solution: "Mamparas Panorámicas Serie 80 & Vidrio Templado 10mm",
    feedback: "Excelente precisión en el destajo de la perfilería para vanos de 4 metros. Estanqueidad acústica y térmica total frente al viento de la zona.",
    specs: "4 vanos panorámicos · 5 días de fabricación · Garantía 5 años",
    rating: 5,
  },
  {
    type: "Edificio Multifamiliar",
    location: "Distrito El Tambo, Huancayo",
    solution: "42 Ventanas Herméticas Serie 25 & Mamparas de Ducha Spazio",
    feedback: "Cumplimiento estricto de los tiempos de entrega pactados por contrato. Acabados impecables en aluminio negro mate y cristales certificados.",
    specs: "42 ventanas + 14 mamparas · Entrega en 2 fases · Factura y Certificado",
    rating: 5,
  },
  {
    type: "Vivienda Unifamiliar",
    location: "Distrito de Chilca, Huancayo",
    solution: "Ventanas Acústicas Serie 38 Batiente con Doble Empaque EPDM",
    feedback: "Reducción notoria del ruido vehicular de la avenida principal. Asesoría técnica in-situ muy profesional desde la toma de medidas.",
    specs: "Atenuación -32 dB · Cristal Templado 8mm · Visita técnica sin costo",
    rating: 5,
  },
];

const coverageAreas = [
  "Huancayo Centro",
  "El Tambo",
  "Chilca",
  "San Carlos / Palián",
  "Pilcomayo",
  "Chupaca",
  "Concepción",
  "Jauja & Valle del Mantaro",
];

export function TestimonialsStats() {
  return (
    <section className="relative overflow-hidden border-b bg-slate-50/70 py-16 sm:py-24">
      {/* Fondo técnico sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Monumental */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-950 font-sans leading-[1.06]">
            Obras Realizadas en Huancayo y Junín
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl">
            La confianza de constructores, arquitectos y familias en cada mampara, ventana y fachada instalada.
          </p>
        </div>

        {/* Grilla de Obras & Proyectos Reales */}
        <div className="grid gap-6 md:grid-cols-3 mb-14">
          {realProjects.map((p, idx) => (
            <Card
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden border border-slate-200/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg rounded-3xl p-6"
            >
              <div>
                {/* Header de tarjeta con tipo y ubicación */}
                <div className="flex items-center justify-between mb-3">
                  <span className="rounded-lg bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider">
                    {p.type}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(p.rating)].map((_, i) => (
                      <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug mb-2">
                  {p.solution}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed italic mb-5">
                  &ldquo;{p.feedback}&rdquo;
                </p>
              </div>

              <div className="border-t border-slate-100 pt-3 flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                  <MapPin className="size-3.5 text-primary shrink-0" />
                  <span>{p.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                  <CheckCircle2 className="size-3 text-emerald-600 shrink-0" />
                  <span>{p.specs}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Barra de Cobertura en Huancayo */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
              <MapPin className="size-6 text-[#004aad]" />
            </div>
            <div>
              <h3 className="text-base font-bold uppercase tracking-wide text-slate-900">
                Cobertura e Instalación en Todo el Valle del Mantaro
              </h3>
              <p className="text-xs text-slate-600 font-normal mt-0.5">
                Atención directa con vehículo propio de taller para transporte seguro de cristales y perfiles.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {coverageAreas.map((area) => (
              <span
                key={area}
                className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

