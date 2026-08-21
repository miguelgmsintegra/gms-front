import { Wrench, ShieldCheck, Gauge, Award, CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const valueProps = [
  {
    icon: Wrench,
    title: "Corte y Destajo Milimétrico",
    badge: "Taller Propio",
    description: "Mecanizado de precisión con discos de carburo y matrices calibradas para escuadras perfectas a 90° y 45°, asegurando hermetismo sin holguras.",
    points: ["Sin filtraciones de agua ni aire", "Acoples y uniones invisibles", "Matrices originales de perfiles"],
  },
  {
    icon: ShieldCheck,
    title: "Cristal Templado Certificado",
    badge: "Seguridad ANSI",
    description: "Vidrios de seguridad de 6mm, 8mm y 10mm tratados térmicamente. Resistentes a impactos de alta energía y cambios bruscos de temperatura.",
    points: ["Resistencia 5x al vidrio crudo", "Rotura en granos no cortantes", "Canto pulido plano brillante"],
  },
  {
    icon: Gauge,
    title: "Herrajes y Rodamientos Pesados",
    badge: "Alto Tráfico",
    description: "Carretillas regulables con rodamiento de bolas sellado en acero inoxidable, cierres embutidos y felpas de polipropileno siliconado anti-polvo.",
    points: ["Deslizamiento ultrasuave y silencioso", "Jaladores en acero inox 304", "Empaques EPDM resistentes a rayos UV"],
  },
  {
    icon: Award,
    title: "Instalación & Garantía Escrita",
    badge: "5 Años Cobertura",
    description: "Montaje in-situ por técnicos especialistas con nivel láser y anclajes estructurales, respaldado por póliza de garantía escrita de 5 años.",
    points: ["Medición técnica previa sin costo", "Sellado estanco con silicona neutra", "Servicio post-venta en Huancayo"],
  },
];

export function ValueProps() {
  return (
    <section className="relative overflow-hidden border-b bg-slate-50/70 py-16 sm:py-24">
      {/* Fondo técnico sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Monumental */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-950 font-sans leading-[1.06]">
            Garantías de Fabricación en Taller
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl">
            Sistemas arquitectónicos duraderos con corte milimétrico, cristal templado certificado y herrajes de alta resistencia.
          </p>
        </div>

        {/* Grilla de 4 Tarjetas de Valor */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="group relative flex flex-col justify-between overflow-hidden border border-slate-200/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg rounded-2xl"
              >
                {/* Acento superior de color */}
                <div className="absolute top-0 left-0 h-1 w-full bg-slate-200 transition-colors duration-300 group-hover:bg-[#004aad]" />

                <CardHeader className="pt-6 px-5 pb-3">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105">
                      <Icon className="size-5" />
                    </div>
                    <Badge variant="secondary" className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-slate-100 text-slate-700">
                      {item.badge}
                    </Badge>
                  </div>

                  <CardTitle className="text-base font-bold uppercase tracking-wide text-slate-900 leading-snug">
                    {item.title}
                  </CardTitle>

                  <CardDescription className="text-slate-600 text-xs leading-relaxed mt-2 font-normal">
                    {item.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-5 pb-6 pt-2">
                  <div className="border-t border-slate-100 pt-3 flex flex-col gap-2">
                    {item.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] font-medium text-slate-700">
                        <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}

