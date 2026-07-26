import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "+15", label: "años de experiencia" },
  { value: "+1.200", label: "proyectos entregados" },
  { value: "5 años", label: "de garantía" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b">
      {/* Grilla geométrica sutil (paneles de ventana) */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6">
          <Badge variant="outline" className="bg-card/70 backdrop-blur">
            Aluminio integral · Ventanas y mamparas
          </Badge>
          <h1 className="text-4xl font-medium tracking-tight text-balance sm:text-5xl">
            Ventanas y mamparas de aluminio,{" "}
            <span className="text-gradient-brand font-semibold">a la medida</span> de tu espacio.
          </h1>
          <p className="text-muted-foreground max-w-lg text-lg text-balance">
            Diseñamos, fabricamos e instalamos soluciones en aluminio y vidrio con acabados de
            precisión. Proyectos integrales, de principio a fin.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="brand" size="lg" asChild>
              <a href="#contacto">Solicitar cotización</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#faq">Ver preguntas</a>
            </Button>
          </div>
          <dl className="mt-2 flex flex-wrap gap-x-10 gap-y-3">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="text-primary text-2xl font-semibold tabular-nums">{s.value}</dt>
                <dd className="text-muted-foreground text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual: ventana de vidrio con paneles variados (aluminio + vidrio) */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="glass shadow-glass relative aspect-[4/5] w-full rounded-xl border p-3">
            <div className="grid h-full grid-cols-2 grid-rows-3 gap-2">
              <div className="border-primary/15 rounded-md border bg-white/55 backdrop-blur-sm" />
              <div className="border-primary/15 row-span-2 rounded-md border bg-white/45 backdrop-blur-sm" />
              <div className="border-primary/15 bg-brand/10 rounded-md border backdrop-blur-sm" />
              <div className="border-primary/15 col-span-2 rounded-md border bg-white/50 backdrop-blur-sm" />
            </div>
          </div>
          {/* Hairline de acento (una sola nota de gradiente) */}
          <div className="bg-gradient-brand absolute -bottom-px left-6 h-0.5 w-2/3 rounded-full" />
        </div>
      </div>
    </section>
  );
}
