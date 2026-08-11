/**
 * Agrupación funcional de las piezas de un despiece.
 *
 * ── Aquí YA NO se deciden colores ───────────────────────────────────────────────────
 * Hubo una tabla en este archivo que asignaba un color a cada código de insumo. Era
 * deuda: duplicaba el catálogo en TypeScript, así que un perfil nuevo obligaba a tocar el
 * frontend aunque el catálogo lo capture otra persona en el ERP.
 *
 * Ahora el color lo reparte el backend a partir de los insumos REALES
 * (`App\Servicios\PaletaInsumos`) y llega en cada línea del despiece y en cada pieza del
 * plano. El front solo pinta lo que recibe.
 *
 * Lo que sí vive aquí es la clasificación por FUNCIÓN, que no es un dato de catálogo sino
 * una lectura del rol: sirve para ordenar la lista de perfiles de modo que el maestro
 * encuentre «lo que sostiene» separado de «lo que corre».
 */

export type Familia = "estructura" | "corredizo" | "guia" | "vidrio" | "menor";

export type DefinicionFamilia = {
  etiqueta: string;
  descripcion: string;
};

export const FAMILIAS: Record<Familia, DefinicionFamilia> = {
  estructura: {
    etiqueta: "Estructura fija",
    descripcion: "Marco y refuerzos: sostienen la ventana y no se mueven",
  },
  corredizo: {
    etiqueta: "Hoja corrediza",
    descripcion: "Lo que se desliza para abrir",
  },
  guia: {
    etiqueta: "Guía y sellado",
    descripcion: "Por donde corre la hoja y por donde no entra el aire",
  },
  vidrio: {
    etiqueta: "Vidrio",
    descripcion: "Los paños, fijos o corredizos",
  },
  menor: {
    etiqueta: "Herrajes y consumibles",
    descripcion: "Piezas sueltas: tornillos, tarugos, silicona",
  },
};

/** Orden de presentación: de lo que sostiene a lo accesorio. */
export const ORDEN_FAMILIAS: Familia[] = [
  "estructura",
  "corredizo",
  "guia",
  "vidrio",
  "menor",
];

/**
 * Color del panel corredizo en los ESQUEMAS de composición (la tira F-D y el compositor).
 *
 * No es un color de catálogo y por eso no viene del backend: ahí no se dibujan insumos,
 * se dibuja la idea de «este panel se mueve y este no». Es un color de interfaz, como el
 * gris de un panel fijo.
 */
export const COLOR_CORREDIZO = "#0891b2";

/**
 * A qué familia pertenece una línea del despiece.
 *
 * Se decide por PALABRAS del rol, no por una lista de códigos. El rol es texto libre que
 * escribe quien modela el diseño («riel inferior», «portafelpa de hoja»), así que una
 * tabla de códigos quedaría obsoleta con el primer diseño nuevo, que es precisamente lo
 * que el sistema promete que sea barato. Si el rol no dice nada, decide `clase`, que sí
 * es un enum cerrado en Postgres.
 */
export function familiaDe(
  rol: string | null | undefined,
  clase: string | null | undefined,
): Familia {
  const texto = (rol ?? "").toLowerCase();

  if (texto.includes("vidrio")) return "vidrio";

  // Lo que se desliza. «portafelpa de hoja» viaja con la hoja, no con el riel.
  if (
    texto.includes("hoja") ||
    texto.includes("rueda") ||
    texto.includes("pestillo")
  ) {
    return "corredizo";
  }

  // Por donde se desliza y por donde se sella.
  if (
    texto.includes("riel") ||
    texto.includes("felper") ||
    texto.includes("portafelpa") ||
    texto.includes("felpa") ||
    texto.includes("junta")
  ) {
    return "guia";
  }

  // Lo que sostiene: marco, refuerzos y lo que los ancla.
  if (
    texto.includes("marco") ||
    texto.includes("refuerzo") ||
    texto.includes("anclaje")
  ) {
    return "estructura";
  }

  if (clase === "vidrio") return "vidrio";
  if (clase === "perfil") return "estructura";

  return "menor";
}
