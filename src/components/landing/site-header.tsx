"use client";

import Image from "next/image";
import { Menu } from "lucide-react";

import logo from "@/assets/gms-logo.webp";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

function Logo({ className }: { className?: string }) {
  return (
    <a href="#inicio" className="flex items-center" aria-label="GMS Integra — inicio">
      <Image src={logo} alt="GMS Integra" priority className={className ?? "size-11"} />
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="glass sticky top-0 z-50 w-full border-b">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground rounded-md px-3 py-2 text-sm font-medium tracking-wide transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Button variant="outline" className="hidden sm:inline-flex" asChild>
            <a href="/login">Ingresar</a>
          </Button>
          <Button variant="brand" className="hidden sm:inline-flex" asChild>
            <a href="#contacto">Cotizar</a>
          </Button>

          {/* Menú móvil */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menú">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>
                  <Logo className="size-9" />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {NAV.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <a
                      href={item.href}
                      className="hover:bg-muted rounded-md px-3 py-2.5 text-sm font-medium"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
                <div className="mt-4 flex flex-col gap-2">
                  <SheetClose asChild>
                    <Button variant="outline" asChild>
                      <a href="/login">Ingresar</a>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant="brand" asChild>
                      <a href="#contacto">Cotizar</a>
                    </Button>
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
