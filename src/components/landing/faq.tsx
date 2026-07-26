import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Qué tipos de mamparas fabrican?",
    a: "Mamparas de baño (corredizas, abatibles y fijas), divisiones de oficina y cerramientos para terrazas, todo en aluminio y vidrio templado a medida.",
  },
  {
    q: "¿Trabajan con vidrio templado?",
    a: "Sí. Usamos vidrio templado de 6, 8 y 10 mm según el proyecto, con opción de acabado transparente, esmerilado o con diseño.",
  },
  {
    q: "¿Cuánto tarda la fabricación e instalación?",
    a: "El tiempo promedio es de 7 a 15 días hábiles desde la aprobación de la cotización, dependiendo de las medidas y el acabado seleccionado.",
  },
  {
    q: "¿Ofrecen garantía?",
    a: "Todos nuestros trabajos incluyen 5 años de garantía sobre perfilería de aluminio y herrajes, y cobertura ante defectos de instalación.",
  },
  {
    q: "¿Hacen visitas de medición a domicilio?",
    a: "Sí. Coordinamos una visita técnica sin costo para tomar medidas exactas y asesorarte sobre el sistema más adecuado para tu espacio.",
  },
  {
    q: "¿Cómo solicito una cotización?",
    a: "Completa el formulario de contacto con tus datos y el tipo de producto. Te responderemos con una propuesta en menos de 24 horas.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-b">
      <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col items-center gap-3 text-center">
          <Badge variant="outline">Preguntas frecuentes</Badge>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Resolvemos tus dudas
          </h2>
          <p className="text-muted-foreground max-w-xl text-balance">
            Todo lo que necesitas saber antes de iniciar tu proyecto en aluminio y vidrio.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10 w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
