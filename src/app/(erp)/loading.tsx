import { Skeleton } from "@/components/ui/skeleton";

/**
 * Lo que se ve mientras el servidor arma la página.
 *
 * Las páginas del ERP esperan a Laravel antes de renderizar. Sin este archivo, ese
 * tiempo era pantalla en blanco y quien miraba no sabía si el sistema estaba trabajando
 * o se había colgado. El esqueleto imita el encabezado y la primera tarjeta para que el
 * contenido no salte al llegar.
 */
export default function Loading() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
      <div className="space-y-2">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-96 max-w-full" />
      </div>

      <Skeleton className="h-48 w-full rounded-md" />
      <Skeleton className="h-64 w-full rounded-md" />

      <span className="sr-only" role="status">
        Cargando…
      </span>
    </div>
  );
}
