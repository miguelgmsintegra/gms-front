import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import type { Metadata } from "next";

import logo from "@/assets/gms-logo.webp";
import { LoginForm } from "@/components/auth/login-form";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Acceso · GMS Integra",
  description: "Acceso al sistema de gestión de GMS Integra.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <main className="bg-grid relative flex min-h-svh items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <Link
          href="/"
          className="mb-8 flex flex-col items-center gap-3 transition-opacity hover:opacity-80"
        >
          <Image src={logo} alt="GMS Integra" width={56} height={56} priority />
          <span className="text-muted-foreground text-xs tracking-widest uppercase">
            Sistema de gestión
          </span>
        </Link>

        <div className="glass rounded-md border p-6 shadow-sm">
          <div className="mb-6 space-y-1">
            <h1 className="text-xl font-semibold tracking-tight">Iniciar sesión</h1>
            <p className="text-muted-foreground text-sm">
              Ingrese con las credenciales que le asignó el administrador.
            </p>
          </div>

          {/* El formulario lee ?continuar= con useSearchParams, que obliga a un límite
              de Suspense para que la página pueda prerenderizarse. */}
          <Suspense fallback={<FormularioCargando />}>
            <LoginForm />
          </Suspense>
        </div>

        <p className="text-muted-foreground mt-6 text-center text-xs">
          ¿Problemas para acceder? Comuníquese con el administrador del sistema.
        </p>
      </div>
    </main>
  );
}

function FormularioCargando() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-14 w-full" />
      <Skeleton className="h-14 w-full" />
      <Skeleton className="mt-2 h-9 w-full" />
    </div>
  );
}
