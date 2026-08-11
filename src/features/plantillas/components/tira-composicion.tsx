import { COLOR_CORREDIZO } from "@/lib/catalogo-visual";
import { cn } from "@/lib/utils";

/**
 * Representación visual de una composición: F-D-F-D-F.
 *
 * Es un esquema, no un plano a escala: sirve para leer la estructura de un vistazo en
 * listados y formularios. El plano real lo dibuja <VentanaSVG/> con la geometría que
 * calcula el motor.
 *
 * La hoja corrediza se pinta con el MISMO color que en el plano. Así quien mira la tira
 * en el listado y luego abre el plano reconoce lo que ya había visto, en vez de tener
 * que aprender dos códigos de color para la misma idea.
 */
export function TiraComposicion({
  composicion,
  className,
}: {
  composicion: ("F" | "D")[];
  className?: string;
}) {
  return (
    <div
      className={cn("flex h-9 gap-px overflow-hidden rounded-sm border", className)}
      aria-label={`Composición ${composicion.join("-")}`}
    >
      {composicion.map((panel, indice) => (
        <div
          key={indice}
          className={cn(
            "flex flex-1 items-center justify-center text-xs font-medium",
            panel === "F" && "bg-muted text-muted-foreground",
          )}
          style={
            panel === "D"
              ? {
                  backgroundColor: `${COLOR_CORREDIZO}1a`,
                  color: COLOR_CORREDIZO,
                }
              : undefined
          }
        >
          {panel}
        </div>
      ))}
    </div>
  );
}
