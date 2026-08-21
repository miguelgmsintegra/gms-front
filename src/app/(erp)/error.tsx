"use client";

import { useEffect } from "react";
import { RefreshCw, ServerCrash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Cuando el ERP no puede pintar la página.
 *
 * En la práctica casi siempre significa lo mismo: Laravel no respondió. Antes eso
 * llegaba al usuario como el overlay de errores de Next, que muestra una traza de
 * JavaScript y ninguna indicación de qué hacer.
 *
 * No se muestra `error.message` en pantalla. Puede contener rutas internas o detalles
 * del backend, y a quien está delante no le sirven: lo que necesita es saber si debe
 * reintentar o llamar a alguien. El detalle va a la consola, donde lo lee quien depura.
 *
 * [AVISO] Next 16: el segundo parámetro es `unstable_retry`, no el `reset` de versiones
 * anteriores (ver `node_modules/next/dist/docs/.../file-conventions/error.md`).
 */
export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error("[ERP] fallo al renderizar la página:", error);
  }, [error]);

  return (
    <div className="mx-auto w-full max-w-lg py-10">
      <Card>
        <CardContent className="flex flex-col items-center gap-4 px-6 py-10 text-center">
          <div className="bg-muted text-muted-foreground rounded-full p-3">
            <ServerCrash className="size-6" />
          </div>

          <div className="space-y-1">
            <p className="font-medium">No se pudo cargar esta página</p>
            <p className="text-muted-foreground text-sm text-pretty">
              El sistema no obtuvo respuesta del servidor. Suele ser pasajero: vuelva a
              intentarlo. Si sigue igual, avise a soporte.
            </p>
          </div>

          <Button onClick={() => unstable_retry()} variant="brand">
            <RefreshCw className="size-4" />
            Reintentar
          </Button>

          {error.digest ? (
            <p className="text-muted-foreground/70 font-mono text-xs">
              Referencia: {error.digest}
            </p>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}
