# PLAN_DE_TRABAJO|VERSION:1.1|TYPE:HD-MD|LANG:ES
> 🎯 **Meta Global:** Base del frontend (Next.js 16) del ERP GMS Integra: scaffold, limpieza, sistema de diseño y configuración de entorno.

---

## <SESIÓN 1 — Scaffold + limpieza>
* [x] Task 1: Scaffold Next 16 (App Router + TS + Tailwind + ESLint + src/ + alias @/*) | `gms-front/` | [MEDIO] | ✅
* [x] Task 2: Limpiar boilerplate `page.tsx` (landing demo → placeholder GMS) | `src/app/page.tsx` | [BAJO] | ✅
* [x] Task 3: Ajustar metadata y `lang="es"` | `src/app/layout.tsx` | [BAJO] | ✅
* [x] Task 4: Limpiar `globals.css` (fuente Arial → var(--font-sans)) | `src/app/globals.css` | [BAJO] | ✅
* [x] Task 5: Eliminar SVGs demo de `public/` | `public/*.svg` | [BAJO] | ✅
* [x] Task 6: Reemplazar README de Vercel por README GMS | `README.md` | [BAJO] | ✅
* [x] Task 7: Endurecer `.gitignore` (`*.key`, `!.env.example`) | `.gitignore` | [BAJO] | ✅
* [x] Task 8: VALIDATE — `lint → build` en verde | `gms-front/` | [BAJO] | ✅

## <SESIÓN 2 — Diseño + entorno>
* [x] Task 9: Análisis de color + roles semánticos + neutros/funcionales | `INFO/paleta_colores.md` | [BAJO] | ✅
* [x] Task 10: Definir arquitectura front (blueprint dreamdev → estructura Next) | (documentado) | [BAJO] | ✅
* [x] Task 11: Instalar `zod` (4.4.3) | `package.json` | [BAJO] | ✅
* [x] Task 12: Validación tipada de env con Zod | `src/lib/env.ts` | [MEDIO] | ✅
* [x] Task 13: Rewrites `/api/*` → `BACKEND_URL/api/*` (proxy server-side) | `next.config.ts` | [MEDIO] | ✅
* [x] Task 14: `.env.example` (versionado) + `.env.local` (dev, ignorado) | raíz | [BAJO] | ✅
* [x] Task 15: VALIDATE env — lint + build + auditoría gitignore | `gms-front/` | [BAJO] | ✅

## <SESIÓN 3 — Sistema de diseño (Tailwind v4)>
* [x] Task 16: Tokens de marca (`@theme`) + semánticos (`@theme inline`) | `src/app/globals.css` | [MEDIO] | ✅
* [x] Task 17: Tema claro/oscuro (system + override manual `data-theme`) | `src/app/globals.css` | [BAJO] | ✅
* [x] Task 18: Showcase de paleta en Home (smoke test visual) | `src/app/page.tsx` | [BAJO] | ✅
* [x] Task 19: VALIDATE — lint + build en verde | `gms-front/` | [BAJO] | ✅

## <SESIÓN 4 — Design system (shadcn/ui + dirección vidrio-aluminio)>
* [x] Task 20: `shadcn init` (radix-nova) + reconciliar tokens de marca | `components.json`, `globals.css` | [ALTO] | ✅
* [x] Task 21: Agregar 28+ componentes P0+P1 (Radix + CVA) + `form.tsx` (RHF) | `src/components/ui/*` | [MEDIO] | ✅
* [x] Task 22: Providers (next-themes + Tooltip + Sonner) | `layout.tsx`, `providers/theme-provider.tsx` | [MEDIO] | ✅
* [x] Task 23: Dirección **vidrio-aluminio**: radio 6px, neutros gris-frío, canvas blanco, tokens gradiente, `@utility` glass/gradient/grid, overlays frosted, variante Button `brand` | `globals.css`, `button.tsx` | [MEDIO] | ✅

## <SESIÓN 5 — Landing page (home)>
* [x] Task 24: Header frosted sticky (nav, CTA, ModeToggle, Sheet móvil) | `landing/site-header.tsx` | [MEDIO] | ✅
* [x] Task 25: Hero (grilla + glow + ventana de vidrio con mullions) | `landing/hero.tsx` | [BAJO] | ✅
* [x] Task 26: FAQ (accordion, 6 preguntas del rubro) | `landing/faq.tsx` | [BAJO] | ✅
* [x] Task 27: Contacto (form RHF+Zod + toast, mock) | `landing/contact.tsx` | [MEDIO] | ✅
* [x] Task 28: Footer claro (hairline gradiente, columnas, contacto) | `landing/site-footer.tsx` | [BAJO] | ✅
* [x] Task 29: Componer landing en `/`; mover UI-kit a `/ui` | `app/page.tsx`, `app/ui/page.tsx` | [BAJO] | ✅
* [x] Task 30: VALIDATE — lint + build en verde | `gms-front/` | [BAJO] | ✅

## <SESIÓN 6 — Identidad: logo, tipografía, modo claro>
* [x] Task 31: Modo CLARO únicamente (quitar `.dark`, `forcedTheme="light"`, sin toggle) | `globals.css`, `layout.tsx`, `site-header.tsx` | [MEDIO] | ✅
* [x] Task 32: Logo oficial webp transparente (header + footer) | `src/assets/gms-logo.webp` | [BAJO] | ✅
* [x] Task 33: Tipografía **Jost** (geométrica/formal) como `--font-sans` | `layout.tsx`, `globals.css` | [MEDIO] | ✅
* [x] Task 34: Moderar gradiente hacia geometría (evitar cliché IA) — hero sin blobs, paneles de vidrio, stats/CTA sólidos | `hero.tsx`, `contact.tsx` | [BAJO] | ✅
* [x] Task 35: VALIDATE — lint + build en verde | `gms-front/` | [BAJO] | ✅

---

## <NOTAS_Y_DECISIONES>
* **Stack final:** Next 16.2.12 · React 19.2.4 · Tailwind v4 · TypeScript strict · Zod 4.4.3 · npm · Turbopack.
* **Estrategia API (decidida):** cliente llama SIEMPRE a `/api/*` relativo; `next.config.ts` reescribe a `BACKEND_URL/api/*` del lado servidor. Sin CORS. `BACKEND_URL` (server-only) NO se expone al navegador.
* **Env (decidido):** validación fail-fast con Zod (`z.url()`) en `src/lib/env.ts`. `env.ts` es SERVER-ONLY (BACKEND_URL no es NEXT_PUBLIC). Para vars públicas en cliente → crear `env.client.ts` a futuro.
* **Vulnerabilidades npm (12 high):** todas en devDependencies (cadena ESLint + postcss bundleado en Next). NO ejecutar `npm audit fix --force` (degradaría next→9.3.3, eslint→10.x). Riesgo BAJO: no llegan al bundle de producción.
* **AGENTS.md / CLAUDE.md:** generados por create-next-app. SE MANTIENEN — guía útil de Next 16 (breaking changes vs. training data).
* **Paleta:** monocromática azul→cian. `#004AAD`≈`#0049AF` (near-duplicados). Falta color funcional (success/warning/error) → propuesto en el md, pendiente de aprobar.
* **Memory Vite→Next:** las guías `dreamdev/memory/frontend` son para Vite (server.proxy, import.meta.env). Adaptado a Next (rewrites, process.env). Pendiente actualizar los .md de memory.

## <PENDIENTE PRÓXIMA SESIÓN>
* Componente de toggle de tema (usa el `data-theme` ya soportado en `globals.css`).
* Estructura de carpetas del ERP: `components/ui` (tontos), `features/` (inteligentes), `lib/api.ts`.
* Colores funcionales: falta validar contraste WCAG en usos reales (texto sobre warning/accent).
* Server-state: instalar TanStack Query al construir la 1ª feature con datos.
* Subir a repo de GitHub (primer commit + remote).
