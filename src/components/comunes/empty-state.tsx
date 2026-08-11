import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/**
 * Estado vacío.
 *
 * Un vacío bien escrito es documentación en el momento exacto en que se necesita: el
 * usuario está mirando el hueco y preguntándose si el sistema falló o si le toca hacer
 * algo. Por eso `descripcion` debe decir QUIÉN destraba la situación —«el maestro de
 * taller debe publicar un tipo»— y no limitarse a «no hay datos».
 *
 * Se usa también para el vacío que no es un error: una búsqueda sin resultados.
 */
export function EmptyState({
  icono: Icono,
  titulo,
  descripcion,
  accion,
  className,
}: {
  icono?: LucideIcon;
  titulo: string;
  descripcion?: string;
  /** Normalmente un <Button>: la salida evidente del callejón. */
  accion?: React.ReactNode;
  className?: string;
}) {
  return (
    <Card className={cn("border-dashed shadow-none", className)}>
      <CardContent className="flex flex-col items-center gap-3 px-6 py-12 text-center">
        {Icono ? (
          <div className="bg-muted text-muted-foreground rounded-full p-3">
            <Icono className="size-6" />
          </div>
        ) : null}

        <div className="space-y-1">
          <p className="font-medium">{titulo}</p>
          {descripcion ? (
            <p className="text-muted-foreground mx-auto max-w-md text-sm text-balance">
              {descripcion}
            </p>
          ) : null}
        </div>

        {accion ? <div className="mt-1">{accion}</div> : null}
      </CardContent>
    </Card>
  );
}
