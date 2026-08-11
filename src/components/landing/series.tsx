import Image from "next/image";
import { Layers, ShieldCheck, Maximize, Landmark, Volume2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

import imgSerie20 from "@/assets/serie_20.jpg";
import imgVentanaAluminio from "@/assets/ventana_aluminio.jpg";
import imgDivisionesOficina from "@/assets/divisiones_oficina.jpg";
import imgHeroWindow from "@/assets/hero-window.jpg";
import imgCerramientoTerraza from "@/assets/cerramiento_terraza.jpg";

const seriesList = [
  {
    code: "S-20",
    name: "Serie 20",
    category: "Residencial Ligero",
    icon: Layers,
    description: "El sistema corredizo clásico más utilizado para ventanas y mamparas ligeras. Solución versátil y funcional de instalación rápida.",
    specs: {
      glass: "4mm a 6mm (Monolítico o Templado)",
      width: "Perfiles de 50mm de ancho",
      isolation: "Básico - felpas de polipropileno",
      wind: "Hasta 80 km/h",
    },
    use: "Ventanas corredizas pequeñas de dormitorios y baños.",
    image: imgSerie20,
  },
  {
    code: "S-25",
    name: "Serie 25",
    category: "Residencial Confort",
    icon: Maximize,
    description: "Perfilería reforzada de gama media para ventanas y puertas corredizas de mayor envergadura. Excelente balance entre peso y resistencia.",
    specs: {
      glass: "6mm a 8mm (Templado o Laminado)",
      width: "Perfiles de 62mm de ancho",
      isolation: "Medio - felpas de alta densidad y jebes",
      wind: "Hasta 100 km/h",
    },
    use: "Mamparas corredizas de salas, balcones y accesos medianos.",
    image: imgVentanaAluminio,
  },
  {
    code: "S-35",
    name: "Serie 35 / 38",
    category: "Hermética Batiente",
    icon: Volume2,
    description: "Sistema para ventanas batientes, proyectantes y oscilobatientes con doble contacto de jebe, ofreciendo un cierre altamente hermético.",
    specs: {
      glass: "6mm a 10mm (Templado o Acústico)",
      width: "Perfiles de 40mm de ancho",
      isolation: "Alto - doble burlete de EPDM (estanqueidad)",
      wind: "Hasta 120 km/h",
    },
    use: "Estudios, dormitorios y oficinas que requieran alta reducción de ruido.",
    image: imgDivisionesOficina,
  },
  {
    code: "S-80",
    name: "Serie 80 (Europea)",
    category: "Premium Hermética",
    icon: ShieldCheck,
    description: "Sistema corredizo de alta gama y diseño europeo. Ideal para grandes luces, soportando cristales laminados gruesos o cámaras de aire (DVH).",
    specs: {
      glass: "8mm a 20mm (Soporta Vidrio Doble - DVH)",
      width: "Perfiles de 80mm de ancho",
      isolation: "Muy Alto - termoacústico con empaques europeos",
      wind: "Hasta 140 km/h",
    },
    use: "Mamparas de terraza premium en casas de playa, campo o departamentos altos.",
    image: imgHeroWindow,
  },
  {
    code: "S-100",
    name: "Serie 100 / Monumental",
    category: "Alta Ingeniería",
    icon: Landmark,
    description: "Sistemas estructurales monumentales de aluminio reforzado. Diseñados para resistir cargas de viento extremas y alturas elevadas.",
    specs: {
      glass: "10mm a 24mm (Cámaras DVH pesadas)",
      width: "Perfiles de 100mm reforzados",
      isolation: "Máximo - perfiles con cámaras múltiples aislantes",
      wind: "Hasta 180 km/h (Estructural)",
    },
    use: "Edificios comerciales, fachadas integrales y mamparas de piso a techo gigantes.",
    image: imgCerramientoTerraza,
  },
];

export function Series() {
  return (
    <section id="series" className="relative overflow-hidden border-b bg-transparent">
      {/* Fondo decorativo con grilla sutil */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-15" aria-hidden />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        {/* Encabezado de la sección unificado */}
        <SectionHeader
          badgeText="Sistemas de Perfilería"
          title="Nuestras"
          highlightTitle="Series de Aluminio"
          description="Trabajamos con sistemas certificados y perfilería de diversas series diseñadas para adaptarse al peso, la luz y las exigencias termoacústicas de tu proyecto."
          className="mb-12"
        />

        {/* Grilla de Series */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {seriesList.map((item) => {
            const Icon = item.icon;
            return (
              <Card 
                key={item.code} 
                className="group relative flex flex-col justify-between overflow-hidden border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                {/* Contenedor de Imagen de la Serie */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={`${item.name} - Carpintería de aluminio y ventanas en Huancayo - GMS Integra`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-85" />
                  
                  {/* Código Flotante Sólido */}
                  <div className="absolute top-3 right-3 z-10 bg-primary text-white text-xs font-bold font-mono px-2.5 py-1 rounded-md shadow-xs">
                    {item.code}
                  </div>

                  {/* Icono Flotante */}
                  <div className="absolute bottom-3 left-3 bg-white text-primary flex size-8.5 items-center justify-center rounded-lg border border-border shadow-xs">
                    <Icon className="size-4.5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>

                <CardHeader className="flex flex-col gap-1.5 pt-4 px-6">
                  <div className="flex flex-col">
                    <CardTitle className="text-base font-extrabold uppercase tracking-wider text-foreground">
                      {item.name}
                    </CardTitle>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider mt-0.5">
                      {item.category}
                    </span>
                  </div>

                  <CardDescription className="text-muted-foreground text-xs leading-relaxed mt-2 line-clamp-3 min-h-[48px] normal-case font-normal">
                    {item.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 px-6">
                  {/* Ficha técnica del sistema */}
                  <div className="border-t border-dashed border-border/80 pt-4 flex flex-col gap-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      Ficha técnica del sistema:
                    </span>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-1.5 text-[11px]">
                      <div className="flex flex-col">
                        <span className="text-muted-foreground font-medium">Cristal compatible</span>
                        <span className="font-semibold text-foreground truncate font-mono text-[11px]" title={item.specs.glass}>
                          {item.specs.glass}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-muted-foreground font-medium">Ancho perimetral</span>
                        <span className="font-semibold text-foreground font-mono text-[11px]">
                          {item.specs.width}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-muted-foreground font-medium">Hermeticidad</span>
                        <span className="font-semibold text-foreground truncate text-[11px]" title={item.specs.isolation}>
                          {item.specs.isolation}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-muted-foreground font-medium">Resistencia viento</span>
                        <span className="font-semibold text-foreground font-mono text-[11px]">
                          {item.specs.wind}
                        </span>
                      </div>
                    </div>

                    <div className="bg-primary/5 border border-primary/10 rounded-md p-2 mt-2">
                      <span className="text-[10px] font-bold text-primary block uppercase tracking-wide">
                        Uso recomendado:
                      </span>
                      <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5 normal-case font-normal">
                        {item.use}
                      </p>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-2 px-6 pb-6 mt-2">
                  <Button variant="brand" className="group/btn w-full justify-between text-xs font-bold uppercase tracking-wider h-9 rounded-lg shadow-sm" asChild>
                    <a
                      href={`https://wa.me/51958413806?text=${encodeURIComponent(`Hola GMS Integra, quisiera consultar la factibilidad y cotización para la ${item.name} (${item.code})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consultar por WhatsApp
                      <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
