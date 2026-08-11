import Image from "next/image";
import { Bath, Grid, Expand, Building2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

import imgMamparaBano from "@/assets/mampara_bano.jpg";
import imgVentanaAluminio from "@/assets/ventana_aluminio.jpg";
import imgCerramientoTerraza from "@/assets/cerramiento_terraza.jpg";
import imgDivisionesOficina from "@/assets/divisiones_oficina.jpg";

const products = [
  {
    icon: Bath,
    title: "Mamparas de Baño",
    description: "Diseño y fabricación de mamparas en vidrio templado y perfiles de aluminio anodizado, resistentes a la humedad y de fácil limpieza.",
    features: [
      "Vidrio templado de 6mm, 8mm y 10mm",
      "Sistemas corredizos y batientes",
      "Accesorios y jaladores en acero inoxidable",
      "Tratamiento antical y sellado hermético"
    ],
    badge: "Más Vendido",
    image: imgMamparaBano,
  },
  {
    icon: Grid,
    title: "Ventanas de Aluminio",
    description: "Ventanas herméticas con aislamiento acústico y térmico, ideales para hogares y oficinas con acabados de alta calidad.",
    features: [
      "Sistemas corredizos, batientes y proyectantes",
      "Vidrio primario, templado o termoacústico",
      "Felpas y empaques de EPDM de alta densidad",
      "Perfiles con y sin rotura de puente térmico (RPT)"
    ],
    badge: "Eficiencia",
    image: imgVentanaAluminio,
  },
  {
    icon: Expand,
    title: "Cerramientos de Terrazas",
    description: "Aprovecha al máximo tus áreas exteriores con cerramientos herméticos que protegen contra el viento, la lluvia y el polvo.",
    features: [
      "Estructuras de aluminio estructural reforzado",
      "Paneles corredizos, plegables o pivotantes",
      "Vidrios de seguridad laminados o templados",
      "Resistencia certificada a vientos y lluvias"
    ],
    badge: "Exterior",
    image: imgCerramientoTerraza,
  },
  {
    icon: Building2,
    title: "Divisiones de Oficina",
    description: "Optimización de espacios de trabajo con divisiones elegantes de vidrio y perfiles de aluminio, ofreciendo privacidad y luz natural.",
    features: [
      "Modulaciones a medida y perfiles minimalistas",
      "Perfiles lacados, anodizados o termoesmaltados",
      "Puertas de vidrio integradas (batientes o corredizas)",
      "Aislamiento acústico optimizado para privacidad"
    ],
    badge: "Corporativo",
    image: imgDivisionesOficina,
  },
];

export function Products() {
  return (
    <section id="productos" className="relative overflow-hidden border-b bg-secondary/20">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        {/* Encabezado de la sección unificado */}
        <SectionHeader
          badgeText="Nuestros Productos"
          title="Soluciones en"
          highlightTitle="Aluminio y Vidrio"
          description="Fabricamos a medida con los más altos estándares de precisión, durabilidad y estética moderna."
        />

        {/* Grilla de productos */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <Card 
                key={p.title} 
                className="group relative flex flex-col justify-between overflow-hidden border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                {/* Línea decorativa superior en color azul sólido de marca */}
                <div className="absolute top-0 left-0 h-[3px] w-full bg-border transition-colors duration-300 group-hover:bg-primary z-10" />

                {/* Contenedor de Imagen de Producto */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <Image
                    src={p.image}
                    alt={`${p.title} de aluminio y vidrio templado en Huancayo y Valle del Mantaro - GMS Integra`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-85" />
                  
                  {/* Badge Flotante Sólido */}
                  <div className="absolute top-3 right-3">
                    <Badge variant="brand" className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 shadow-xs">
                      {p.badge}
                    </Badge>
                  </div>

                  {/* Icono Flotante */}
                  <div className="absolute bottom-3 left-3 bg-white text-primary flex size-9 items-center justify-center rounded-lg border border-border shadow-xs">
                    <Icon className="size-4.5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>

                <CardHeader className="flex flex-col gap-1.5 pt-4 px-5">
                  <CardTitle className="text-base font-bold uppercase tracking-wider text-foreground">
                    {p.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-xs leading-relaxed min-h-[40px] line-clamp-2 normal-case font-normal">
                    {p.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 px-5">
                  <div className="border-t pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Características principales:</span>
                    <ul className="flex flex-col gap-2 mt-2">
                      {p.features.map((feature, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2 text-xs normal-case font-normal">
                          <span className="text-primary mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="pt-2 px-5 pb-4">
                  <Button variant="brand" className="group/btn w-full justify-between text-xs font-bold uppercase tracking-wider h-9 rounded-lg shadow-sm" asChild>
                    <a
                      href={`https://wa.me/51958413806?text=${encodeURIComponent(`Hola GMS Integra, desearía solicitar una cotización para: ${p.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cotizar por WhatsApp
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
