# GMS Integra — Frontend

Frontend del ERP **GMS Integra**, construido con Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

## Requisitos

- Node.js >= 20 (probado con 22.x)
- npm >= 10

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo (Turbopack) en http://localhost:3000 |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | Linter (ESLint 9 + eslint-config-next) |

## Estructura

    src/
      app/            # App Router (rutas, layouts, páginas)
        layout.tsx    # Layout raíz (fuentes, metadata)
        page.tsx      # Home
        globals.css   # Estilos globales + Tailwind
    public/           # Assets estáticos

## Stack

- **Next.js 16** — App Router, Turbopack
- **React 19**
- **TypeScript** (modo strict)
- **Tailwind CSS v4** (`@tailwindcss/postcss`)
- Alias de imports: `@/*` → `src/*`

## Backend

El backend (API) se desarrolla por separado en **Laravel** y se consume vía URLs relativas
(`/api/...`) usando rewrites de Next para desarrollo local. Este repo es solo el frontend.

## Metodología

Este proyecto sigue **dreamdev** (`../dreamdev/`): ciclo
`DISCOVERY → PLAN → GATE → EXECUTE → VALIDATE`, ediciones quirúrgicas y trazabilidad de
tareas en `DEV_TASKS.md`.
