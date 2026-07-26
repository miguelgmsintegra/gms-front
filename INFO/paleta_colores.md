# Paleta de Colores — GMS Integra

Paleta de marca **monocromática azul → cian** (gradiente corporativo). A continuación, el
análisis de cada color, su rol semántico en la UI del ERP y los neutros/funcionales necesarios.

## Colores de marca

| Muestra | Hex | RGB | Nombre | Rol semántico |
|---|---|---|---|---|
| 🟦 | `#004AAD` | 0, 74, 173 | Azul real profundo | **Primary** — botones primarios, nav activa, encabezados, enlaces de acción |
| 🟦 | `#0049AF` | 0, 73, 175 | Azul real (≈ idéntico) | **Primary-pressed** — estado presionado/activo del primary (ver nota) |
| 🟦 | `#00C9FF` | 0, 201, 255 | Cian brillante | **Accent** — acentos, focus ring, CTAs secundarios, badges, gradiente |
| 🟦 | `#41C1F8` | 65, 193, 248 | Azul cielo claro | **Accent-soft** — enlaces, estado *info*, hover de cian, tints suaves |

> **Nota:** `#004AAD` y `#0049AF` son visualmente indistinguibles (Δ de 1-2 por canal). En la
> práctica basta **un** primary; se conserva `#0049AF` como token de estado *pressed* para tener
> una micro-variación en interacción. Si se prefiere, se puede descartar y derivar el pressed
> bajando la luminosidad del primary.

### Gradiente de marca
`linear-gradient(135deg, #004AAD 0%, #00C9FF 100%)` — para hero, splash, headers de marca,
botones destacados y elementos de identidad.

## Neutros

| Muestra | Hex | Rol |
|---|---|---|
| ⬜ | `#FFFFFF` | **Blanco** — fondos y superficies (modo claro), texto sobre primary/gradiente, cards |
| ⬛ | `#000000` | **Negro** — fondo (modo oscuro), bordes de alto contraste, iconografía |
| ◼️ | `#171717` | *Near-black (sugerido)* — texto de cuerpo en modo claro (negro puro cansa la vista en tablas densas de un ERP) |

## Colores funcionales (sugeridos — NO están en la marca)

Un ERP necesita comunicar estados (validación de formularios, semáforos de stock, estados de
documentos). La paleta actual es 100% azul, así que se proponen estos estándares:

| Muestra | Hex | Rol |
|---|---|---|
| 🟩 | `#16A34A` | **Success** — confirmaciones, stock OK, documentos aprobados |
| 🟨 | `#F59E0B` | **Warning** — advertencias, stock bajo, pendientes |
| 🟥 | `#DC2626` | **Error / Danger** — errores de validación, acciones destructivas, stock agotado |
| 🟦 | `#41C1F8` | **Info** — reutiliza el accent-soft de la marca |

## Mapa de tokens (propuesta para Tailwind / CSS variables)

    --color-primary        #004AAD
    --color-primary-pressed #0049AF
    --color-accent         #00C9FF
    --color-accent-soft    #41C1F8
    --color-white          #FFFFFF
    --color-black          #000000
    --color-text           #171717   (modo claro)
    --color-success        #16A34A
    --color-warning        #F59E0B
    --color-danger         #DC2626

## Reglas de uso

1. **Jerarquía:** el azul profundo (`#004AAD`) manda las acciones primarias; el cian
   (`#00C9FF`) es acento, nunca compite como acción primaria.
2. **Accesibilidad (WCAG AA):** el cian `#00C9FF` sobre blanco NO alcanza 4.5:1 para texto
   pequeño → usarlo solo para elementos grandes, fondos, iconos o bordes; el texto de enlace/acción
   usa el azul profundo. Verificar contraste antes de aplicar a texto.
3. **Reserva del rojo/verde/ámbar:** exclusivos para estados funcionales, jamás decorativos.
4. **Modo oscuro:** fondo negro/near-black, primary y accent se aclaran un paso para mantener
   contraste sobre oscuro.
