import Image from "next/image";
import { MessageCircle, Mail, Phone } from "lucide-react";

import logo from "@/assets/gms-logo.webp";

const columns = [
  {
    title: "Productos",
    links: ["Mamparas de baño", "Ventanas de aluminio", "Cerramientos", "Divisiones de oficina"],
  },
  { title: "Empresa", links: ["Nosotros", "Proyectos", "Contacto"] },
  { title: "Legal", links: ["Términos y condiciones", "Privacidad"] },
];

const socials = [
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:ventas@gmsintegra.com" },
  { icon: Phone, label: "Teléfono", href: "tel:+51999999999" },
];

export function SiteFooter() {
  return (
    <footer className="bg-secondary/40">
      <div className="bg-gradient-brand h-1 w-full" />
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <Image src={logo} alt="GMS Integra" className="size-16" />
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
                className="text-muted-foreground hover:text-primary hover:border-primary/40 flex size-9 items-center justify-center rounded-md border transition-colors"
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
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
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
