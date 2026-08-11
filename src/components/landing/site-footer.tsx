import Image from "next/image";
import { MessageCircle, Mail, Phone } from "lucide-react";

import logo from "@/assets/gms-logo.webp";
import { Button } from "@/components/ui/button";

const columns = [
  {
    title: "Productos",
    links: ["Mamparas de baño", "Ventanas de aluminio", "Cerramientos", "Divisiones de oficina"],
  },
  { title: "Empresa", links: ["Nosotros", "Proyectos", "Contacto", "Iniciar sesión"] },
  { title: "Legal", links: ["Términos y condiciones", "Privacidad"] },
];

const socials = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/51958413806?text=Hola%20GMS%20Integra,%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n.",
  },
  { icon: Mail, label: "Email", href: "mailto:gmsintegra21@gmail.com" },
  { icon: Phone, label: "Teléfono", href: "tel:+51958413806" },
];

export function SiteFooter() {
  return (
    <footer className="bg-secondary/40 border-t">
      <div className="bg-primary h-1 w-full" />
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <Image src={logo} alt="GMS Integra - Ventanas y Mamparas de Aluminio en Huancayo" className="size-16" />
          <p className="text-muted-foreground max-w-xs text-sm">
            Diseño, fabricación e instalación de mamparas y ventanas de aluminio con acabados de
            precisión.
          </p>
          <div className="flex gap-1.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-primary hover:border-primary/40 flex size-9 items-center justify-center rounded-md border transition-all duration-300 hover:scale-110"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">{col.title}</h3>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => {
                if (link === "Iniciar sesión") {
                  return (
                    <li key={link} className="pt-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-3 text-xs font-semibold border-primary/20 text-primary hover:bg-primary/5 hover:text-brand transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <a href="/login">{link}</a>
                      </Button>
                    </li>
                  );
                }
                return (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t">
        <div className="text-muted-foreground mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs sm:flex-row sm:px-6">
          <p>© 2026 GMS Integra. Todos los derechos reservados.</p>
          <p>Aluminio integral · Mamparas y ventanas.</p>
        </div>
      </div>
    </footer>
  );
}
