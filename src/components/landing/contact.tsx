"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const schema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre"),
  email: z.email("Email inválido"),
  telefono: z.string().optional(),
  tipo: z.string().min(1, "Selecciona un tipo de producto"),
  mensaje: z.string().min(10, "Cuéntanos un poco más (mín. 10 caracteres)"),
});

type ContactValues = z.infer<typeof schema>;

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "JR. HUANUCO NRO. 1389",
    href: "https://maps.google.com/?q=JR.+HUANUCO+NRO.+1389,+Huancayo,+Junin,+Peru",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "958 413 806",
    href: "tel:+51958413806",
  },
  {
    icon: Mail,
    label: "Email",
    value: "gmsintegra21@gmail.com",
    href: "mailto:gmsintegra21@gmail.com",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun–Sáb · 9:00–18:00",
  },
];

export function Contact() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(schema),
    defaultValues: { nombre: "", email: "", telefono: "", tipo: "", mensaje: "" },
  });

  function onSubmit(values: ContactValues) {
    // Mock: sin backend aún. TODO: POST /api/contacto (Laravel).
    console.log("contacto", values);
    toast.success("¡Mensaje enviado!", {
      description: "Te responderemos en menos de 24 horas.",
    });
    form.reset();
  }

  return (
    <section id="contacto" className="border-b">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
        {/* Info */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Badge variant="outline" className="w-fit">
              Contacto
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Cuéntanos tu proyecto
            </h2>
            <p className="text-muted-foreground max-w-md text-balance">
              Completa el formulario y te enviamos una cotización a medida en menos de 24 horas.
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            {contactInfo.map((c) => {
              const content = (
                <div className="flex items-center gap-3 w-full">
                  <span className="bg-muted text-primary flex size-10 shrink-0 items-center justify-center rounded-md border transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/5 group-hover:text-brand">
                    <c.icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
                  </span>
                  <div>
                    <p className="text-muted-foreground text-xs">{c.label}</p>
                    <p className="font-medium text-foreground transition-colors group-hover:text-primary">{c.value}</p>
                  </div>
                </div>
              );

              if (c.href) {
                return (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.label === "Dirección" ? "_blank" : undefined}
                      rel={c.label === "Dirección" ? "noopener noreferrer" : undefined}
                      className="group flex w-full cursor-pointer"
                    >
                      {content}
                    </a>
                  </li>
                );
              }

              return (
                <li key={c.label} className="flex group">
                  {content}
                </li>
              );
            })}
          </ul>

          {/* Mapa de Ubicación */}
          <div className="mt-2 overflow-hidden rounded-xl border border-border shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/20">
            <iframe
              src="https://maps.google.com/maps?q=JR.+HUANUCO+NRO.+1389,+Huancayo,+Junin,+Peru&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-[0.9] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-card shadow-glass overflow-hidden rounded-xl border">
          <div className="bg-gradient-brand h-1 w-full" />
          <div className="p-6 sm:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="tu@correo.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="+51 ..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="tipo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de producto</FormLabel>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecciona..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="mampara">Mampara de baño</SelectItem>
                          <SelectItem value="ventana">Ventana de aluminio</SelectItem>
                          <SelectItem value="cerramiento">Cerramiento de terrazas</SelectItem>
                          <SelectItem value="division">División de oficina</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mensaje"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Cuéntanos medidas, ubicación y detalles del proyecto..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full">
                  Enviar
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
