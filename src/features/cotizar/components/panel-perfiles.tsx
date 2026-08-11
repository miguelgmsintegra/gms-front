"use client";

import { Crosshair } from "lucide-react";

import { Button } from "@/components/ui/button";
import { VentanaSVG } from "@/features/cotizar/components/ventana-svg";
import type { Despiece, LineaDespiece } from "@/features/cotizar/types";
import {
  familiaDe,
  FAMILIAS,
  ORDEN_FAMILIAS,
  type Familia,
} from "@/lib/catalogo-visual";
import { medida, numero } from "@/lib/formato";
import { cn } from "@/lib/utils";

/**
 * Verificación de perfiles: dónde va cada pieza y cuánto mide.
 *
 * Es la respuesta a la pregunta que el taller hace de verdad —«¿dónde va el 8115 y de qué
 * largo lo corto?»— y la razón de que exista esta pestaña en vez de una leyenda más. Se
 * pulsa una pieza y el plano apaga todo lo demás y la redibuja encima, así que se ve
 * aunque en vista frontal quede detrás de otro perfil.
 *
 * Se activa con CLIC, no con el puntero encima. En la tablet del taller no hay hover, y
 * una función de verificación que solo aparece con ratón no existe para media plantilla.
 * Además, así el aislamiento se queda fijo mientras se mira el plano o se compara con la
 * pieza real que se tiene en la mano.
 */
export function PanelPerfiles({
  despiece,
  insumoResaltado,
  alResaltar,
}: {
  despiece: Despiece;
  insumoResaltado: string | null;
  alResaltar: (codigo: string | null) => void;
}) {
  const grupos = agrupar(despiece);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-muted-foreground text-sm">
            Pulse una pieza para verla aislada en el plano.
          </p>

          {insumoResaltado ? (
            <Button variant="ghost" size="sm" onClick={() => alResaltar(null)}>
              Ver todo
            </Button>
          ) : null}
        </div>

        <div className="flex flex-col gap-5">
          {ORDEN_FAMILIAS.filter((familia) => grupos[familia]?.length).map(
            (familia) => (
              <section key={familia} className="flex flex-col gap-1.5">
                <h3 className="text-xs font-medium">{FAMILIAS[familia].etiqueta}</h3>
                <p className="text-muted-foreground -mt-1 text-[11px]">
                  {FAMILIAS[familia].descripcion}
                </p>

                <ul className="mt-1 flex flex-col gap-1">
                  {grupos[familia].map((pieza) => {
                    const activo = insumoResaltado === pieza.codigo;

                    return (
                      <li key={pieza.codigo}>
                        <button
                          type="button"
                          onClick={() => alResaltar(activo ? null : pieza.codigo)}
                          aria-pressed={activo}
                          className={cn(
                            // 44px de área táctil: esto se usa en tablet, en el taller
                            "flex min-h-11 w-full items-start gap-3 rounded-md border px-3 py-2 text-left transition-colors",
                            activo
                              ? "border-foreground/25 bg-muted"
                              : "hover:bg-muted/60 border-transparent",
                          )}
                        >
                          <span
                            aria-hidden
                            className="mt-1 size-3 shrink-0 rounded-[2px] ring-1 ring-black/10"
                            style={{ backgroundColor: pieza.color }}
                          />

                          <span className="min-w-0 flex-1">
                            <span className="flex flex-wrap items-baseline gap-x-2">
                              <span className="font-mono text-sm font-medium">
                                {pieza.codigo}
                              </span>
                              <span className="text-sm">{pieza.nombre}</span>
                            </span>

                            {pieza.roles.length > 0 ? (
                              <span className="text-muted-foreground block text-[11px] leading-tight">
                                {pieza.roles.join(" · ")}
                              </span>
                            ) : null}

                            {/* Las medidas de corte: lo que el taller necesita leer */}
                            <span className="mt-0.5 block text-xs tabular-nums">
                              {pieza.cortes.join(" · ")}
                            </span>
                          </span>

                          <span className="text-muted-foreground shrink-0 pt-0.5 text-right text-xs tabular-nums">
                            {pieza.totalCm > 0 ? (
                              <>
                                <span className="block">total</span>
                                <span className="text-foreground block font-medium">
                                  {medida(pieza.totalCm)}
                                </span>
                              </>
                            ) : (
                              <span className="block">
                                {numero(pieza.cantidad, 0)} pz
                              </span>
                            )}
                          </span>

                          {activo ? (
                            <Crosshair className="text-foreground mt-1 size-4 shrink-0" />
                          ) : null}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ),
          )}
        </div>
      </div>

      {despiece.geometria ? (
        <div className="lg:sticky lg:top-24 lg:self-start">
          <VentanaSVG
            geometria={despiece.geometria}
            ancho={despiece.metricas.ancho}
            alto={despiece.metricas.alto}
            insumoResaltado={insumoResaltado}
            className="h-auto w-full"
          />

          <p className="text-muted-foreground mt-2 text-center text-xs">
            {insumoResaltado
              ? `Aislado ${insumoResaltado}: se dibuja por encima del resto y sus extremos van marcados. Las piezas apagadas siguen formando parte de la ventana.`
              : "Sin pieza seleccionada."}
          </p>
        </div>
      ) : (
        <p className="text-muted-foreground text-sm">
          Este diseño todavía no declara geometría, así que no hay plano donde ubicar las
          piezas. Las medidas de la lista siguen siendo válidas.
        </p>
      )}
    </div>
  );
}

type PiezaAgrupada = {
  codigo: string;
  nombre: string;
  color: string;
  roles: string[];
  cantidad: number;
  totalCm: number;
  /** «4 × 140 cm», «2 × 60 × 30 cm»: cómo se corta realmente. */
  cortes: string[];
};

/**
 * Una fila por insumo, no por regla.
 *
 * El motor puede emitir varias líneas del mismo código con roles distintos —el 8115 vive
 * en la hoja y en la junta— pero el aislamiento en el plano funciona por CÓDIGO: se
 * enciende el 8115 entero. Que la lista tuviera dos filas que hacen exactamente lo mismo
 * al pulsarlas sería desconcertante, así que se juntan y se enumeran sus roles y sus
 * medidas de corte, que es lo que de verdad distingue una línea de otra.
 */
function agrupar(despiece: Despiece): Record<Familia, PiezaAgrupada[]> {
  const grupos = {} as Record<Familia, PiezaAgrupada[]>;
  const porCodigo = new Map<string, { familia: Familia; pieza: PiezaAgrupada }>();

  for (const linea of despiece.despiece) {
    const existente = porCodigo.get(linea.insumo);
    const corte = describirCorte(linea);

    if (existente) {
      existente.pieza.cantidad += linea.cantidad;
      existente.pieza.totalCm += linea.total_cm ?? 0;

      if (linea.rol && !existente.pieza.roles.includes(linea.rol)) {
        existente.pieza.roles.push(linea.rol);
      }

      if (!existente.pieza.cortes.includes(corte)) {
        existente.pieza.cortes.push(corte);
      }

      continue;
    }

    porCodigo.set(linea.insumo, {
      familia: familiaDe(linea.rol, linea.clase),
      pieza: {
        codigo: linea.insumo,
        nombre: linea.nombre,
        color: linea.color,
        roles: linea.rol ? [linea.rol] : [],
        cantidad: linea.cantidad,
        totalCm: linea.total_cm ?? 0,
        cortes: [corte],
      },
    });
  }

  for (const { familia, pieza } of porCodigo.values()) {
    grupos[familia] = [...(grupos[familia] ?? []), pieza];
  }

  return grupos;
}

/** Cómo se corta una línea, en el lenguaje del taller: «4 × 140 cm». */
function describirCorte(linea: LineaDespiece): string {
  const veces = `${numero(linea.cantidad, 0)} ×`;

  if (linea.tipo_medida === "lineal") {
    return `${veces} ${medida(linea.largo_cm)}`;
  }

  if (linea.tipo_medida === "area") {
    return `${veces} ${numero(linea.ancho_cm)} × ${medida(linea.alto_cm)}`;
  }

  return `${numero(linea.cantidad, 0)} unidades`;
}
