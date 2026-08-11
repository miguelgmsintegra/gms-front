import type { Geometria, PiezaPlano, VidrioPlano } from "@/features/cotizar/types";

/**
 * El plano de la ventana.
 *
 * NO calcula nada: recibe del backend ejes, trazos, rectángulos y colores, y los pinta.
 * Es un componente de servidor puro —sin "use client", sin estado, sin efectos— para que
 * el mismo dibujo sirva en el ERP y, en cuanto se genere, dentro del PDF del cliente.
 *
 * Sistema de coordenadas: el motor entrega Y creciendo hacia ARRIBA (plano de taller) y
 * el SVG la tiene creciendo hacia abajo. La conversión ocurre en un único sitio: `sy()`.
 */

/** Margen alrededor de la ventana, en cm de modelo, para que quepan las cotas. */
const MARGEN = 46;

const GRIS_APAGADO = "#c9ccd1";

const ETIQUETA_VIDRIO: Record<VidrioPlano["clase"], string> = {
  fijo: "Fijo",
  corredizo: "Corrediza",
  puente: "Puente",
};

export function VentanaSVG({
  geometria,
  ancho,
  alto,
  mostrarCotas = true,
  mostrarLeyenda = false,
  modoColor = "insumo",
  insumoResaltado = null,
  className,
}: {
  geometria: Geometria;
  ancho: number;
  alto: number;
  mostrarCotas?: boolean;
  mostrarLeyenda?: boolean;
  /**
   * Qué significa el color de los perfiles.
   *
   * `insumo`  — el color de identificación que reparte el backend entre los insumos del
   * catálogo, para reconocer cada pieza.
   * `acabado` — el `color_hex` de la tabla: el aluminio real. Hoy toda la serie Nova es
   * natural, así que son grises; servirá el día que haya blanco o madera y el cliente
   * quiera ver cómo le quedaría.
   */
  modoColor?: "insumo" | "acabado";
  /**
   * Código del insumo a aislar.
   *
   * Con un valor, esa pieza se REDIBUJA en la capa superior —así nada la tapa, aunque en
   * vista frontal quede detrás de otro perfil— con halo, mayor grosor y sus dos extremos
   * marcados, mientras el resto baja a gris tenue.
   */
  insumoResaltado?: string | null;
  className?: string;
}) {
  // Invierte la Y del modelo a la del SVG
  const sy = (y: number) => alto - y;

  const hayResaltado = insumoResaltado !== null;

  const vista = {
    x: -MARGEN,
    y: -MARGEN * 0.5,
    ancho: ancho + MARGEN * 1.5,
    alto: alto + MARGEN * 1.2,
  };

  // El grosor de línea se expresa en cm de modelo para que el trazo se vea igual de
  // fino sin importar si la ventana mide 120 o 360 cm
  const trazo = Math.max(ancho, alto) / 300;

  /*
   * Dos listas, no una.
   *
   * Si la pieza aislada se dibujara en su posición original de la lista, cualquier perfil
   * posterior que pase por encima la taparía: en una ventana el riel inferior y el marco
   * comparten borde, y el 3210 y el 5415 se dibujan sobre la misma línea del puente. Al
   * separarlas, lo resaltado se pinta al final y queda siempre visible.
   */
  const aisladas = hayResaltado
    ? geometria.piezas.filter((pieza) => pieza.insumo === insumoResaltado)
    : [];

  const resto = hayResaltado
    ? geometria.piezas.filter((pieza) => pieza.insumo !== insumoResaltado)
    : geometria.piezas;

  const colorDe = (pieza: PiezaPlano) =>
    modoColor === "acabado" ? (pieza.color_acabado ?? "#7C8794") : pieza.color;

  return (
    <svg
      viewBox={`${vista.x} ${vista.y} ${vista.ancho} ${vista.alto}`}
      className={className}
      role="img"
      aria-label={
        hayResaltado
          ? `Plano de la ventana de ${ancho} por ${alto} centímetros, con el insumo ${insumoResaltado} resaltado`
          : `Plano de la ventana de ${ancho} por ${alto} centímetros`
      }
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <marker
          id="flechaCota"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      {/* Paños de vidrio, primero: los perfiles se dibujan encima */}
      {geometria.vidrios.map((vidrio, indice) => {
        const activo = !hayResaltado || vidrio.insumo === insumoResaltado;

        return (
          <g key={`v-${indice}`} opacity={activo ? 1 : 0.3}>
            <rect
              x={vidrio.x}
              y={sy(vidrio.y + vidrio.alto)}
              width={vidrio.ancho}
              height={vidrio.alto}
              fill={activo ? vidrio.color : GRIS_APAGADO}
              fillOpacity={0.55}
              stroke={activo ? "#7FA8C4" : GRIS_APAGADO}
              strokeWidth={trazo * 0.4}
            />
            {vidrio.ancho > 40 && vidrio.alto > 25 ? (
              <text
                x={vidrio.x + vidrio.ancho / 2}
                y={sy(vidrio.y + vidrio.alto / 2)}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={Math.min(vidrio.ancho, vidrio.alto) * 0.14}
                fill="#33556B"
                opacity={0.85}
              >
                {`${redondear(vidrio.ancho)}×${redondear(vidrio.alto)}`}
              </text>
            ) : null}
          </g>
        );
      })}

      {/* Perfiles: primero lo que NO está aislado */}
      {resto.map((pieza, indice) => (
        <line
          key={`p-${indice}`}
          x1={pieza.x1}
          y1={sy(pieza.y1)}
          x2={pieza.x2}
          y2={sy(pieza.y2)}
          stroke={hayResaltado ? GRIS_APAGADO : colorDe(pieza)}
          strokeOpacity={hayResaltado ? 0.5 : 1}
          strokeWidth={trazo * 2.6}
          strokeLinecap="square"
        >
          <title>{`${pieza.insumo}${pieza.rol ? ` · ${pieza.rol}` : ""} · ${redondear(pieza.largo)} cm`}</title>
        </line>
      ))}

      {/* …y ENCIMA de todo, la pieza aislada */}
      {aisladas.map((pieza, indice) => {
        const color = colorDe(pieza);

        return (
          <g key={`a-${indice}`}>
            <line
              x1={pieza.x1}
              y1={sy(pieza.y1)}
              x2={pieza.x2}
              y2={sy(pieza.y2)}
              stroke={color}
              strokeOpacity={0.22}
              strokeWidth={trazo * 10}
              strokeLinecap="round"
            />

            <line
              x1={pieza.x1}
              y1={sy(pieza.y1)}
              x2={pieza.x2}
              y2={sy(pieza.y2)}
              stroke={color}
              strokeWidth={trazo * 4}
              strokeLinecap="square"
            >
              <title>{`${pieza.insumo}${pieza.rol ? ` · ${pieza.rol}` : ""} · ${redondear(pieza.largo)} cm`}</title>
            </line>

            {/* Extremos: dicen dónde EMPIEZA y dónde ACABA la pieza, que es lo que no se
                puede deducir cuando dos perfiles comparten la misma línea */}
            {[
              [pieza.x1, pieza.y1],
              [pieza.x2, pieza.y2],
            ].map(([x, y], extremo) => (
              <circle
                key={extremo}
                cx={x}
                cy={sy(y)}
                r={trazo * 3.2}
                fill="#ffffff"
                stroke={color}
                strokeWidth={trazo * 1.6}
              />
            ))}
          </g>
        );
      })}

      {mostrarCotas ? (
        <g
          className="text-muted-foreground"
          fill="currentColor"
          stroke="currentColor"
          opacity={hayResaltado ? 0.45 : 1}
        >
          {geometria.cotas.map((cota, indice) => {
            const grosor = trazo * (cota.principal ? 0.5 : 0.35);
            const tamanoTexto = Math.max(ancho, alto) * (cota.principal ? 0.038 : 0.03);

            if (cota.orientacion === "horizontal") {
              const y = sy(cota.desplazamiento);

              return (
                <g key={`c-${indice}`}>
                  <line
                    x1={cota.desde}
                    y1={y}
                    x2={cota.hasta}
                    y2={y}
                    strokeWidth={grosor}
                    markerStart="url(#flechaCota)"
                    markerEnd="url(#flechaCota)"
                  />
                  <text
                    x={(cota.desde + cota.hasta) / 2}
                    y={y - tamanoTexto * 0.45}
                    textAnchor="middle"
                    fontSize={tamanoTexto}
                    stroke="none"
                  >
                    {cota.etiqueta}
                  </text>
                </g>
              );
            }

            const x = cota.desplazamiento;

            return (
              <g key={`c-${indice}`}>
                <line
                  x1={x}
                  y1={sy(cota.desde)}
                  x2={x}
                  y2={sy(cota.hasta)}
                  strokeWidth={grosor}
                  markerStart="url(#flechaCota)"
                  markerEnd="url(#flechaCota)"
                />
                <text
                  x={x - tamanoTexto * 0.4}
                  y={sy((cota.desde + cota.hasta) / 2)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={tamanoTexto}
                  stroke="none"
                  transform={`rotate(-90 ${x - tamanoTexto * 0.4} ${sy((cota.desde + cota.hasta) / 2)})`}
                >
                  {cota.etiqueta}
                </text>
              </g>
            );
          })}
        </g>
      ) : null}

      {mostrarLeyenda ? <Leyenda geometria={geometria} ancho={ancho} alto={alto} /> : null}
    </svg>
  );
}

/**
 * Leyenda de vidrios DENTRO del SVG.
 *
 * Solo se usa cuando el dibujo viaja solo —el PDF del cliente—, donde no hay HTML
 * alrededor que pueda explicarlo. En pantalla se prefiere la lista en HTML: es
 * seleccionable, la lee un lector de pantalla y permite pulsar para aislar.
 */
function Leyenda({
  geometria,
  ancho,
  alto,
}: {
  geometria: Geometria;
  ancho: number;
  alto: number;
}) {
  const clases = Array.from(new Set(geometria.vidrios.map((v) => v.clase)));

  if (clases.length === 0) return null;

  const tamano = Math.max(ancho, alto) * 0.03;
  const y = alto + MARGEN * 0.55;

  return (
    <g>
      {clases.map((clase, indice) => {
        const muestra = geometria.vidrios.find((v) => v.clase === clase);

        return (
          <g key={clase} transform={`translate(${indice * (ancho / 3.2)}, ${y})`}>
            <rect
              width={tamano}
              height={tamano}
              fill={muestra?.color ?? GRIS_APAGADO}
              fillOpacity={0.55}
              stroke="#7FA8C4"
              strokeWidth={tamano * 0.06}
            />
            <text
              x={tamano * 1.5}
              y={tamano * 0.8}
              fontSize={tamano * 0.95}
              fill="currentColor"
              className="text-muted-foreground"
            >
              {ETIQUETA_VIDRIO[clase]}
            </text>
          </g>
        );
      })}
    </g>
  );
}

function redondear(valor: number): string {
  return Number.isInteger(valor) ? String(valor) : valor.toFixed(1);
}
