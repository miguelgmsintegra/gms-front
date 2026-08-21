import { z } from "zod";

/**
 * Validación tipada de variables de entorno (fail-fast con fallbacks inteligentes).
 *
 * Módulo de uso en SERVIDOR (next.config, Server Components, Route Handlers).
 *
 * Soporte para Staging / Previews de Vercel:
 * - Si `NEXT_PUBLIC_APP_URL` no está definida, usa automáticamente `VERCEL_URL` (inyectada por Vercel)
 *   o `http://localhost:3000` en desarrollo local.
 * - Si `BACKEND_URL` no está definida, usa un fallback por defecto para permitir la compilación.
 */

// Obtener URL de la app dinámicamente según el entorno (Dev / Vercel Staging / Prod)
const getAppUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) return process.env.NEXT_PUBLIC_APP_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
};

// Obtener URL del backend dinámicamente con fallback defensivo
const getBackendUrl = () => {
  if (process.env.BACKEND_URL) return process.env.BACKEND_URL;
  return "http://127.0.0.1:8000";
};

const envSchema = z.object({
  // URL base del backend Laravel. Los rewrites de Next reescriben /api/* hacia aquí (server-side).
  BACKEND_URL: z.url(),
  // URL pública de este frontend (metadata/SEO, enlaces absolutos).
  NEXT_PUBLIC_APP_URL: z.url(),
});

const parsed = envSchema.safeParse({
  BACKEND_URL: getBackendUrl(),
  NEXT_PUBLIC_APP_URL: getAppUrl(),
});

if (!parsed.success) {
  console.error(
    "[ERROR] Variables de entorno inválidas o faltantes:\n",
    z.flattenError(parsed.error).fieldErrors,
  );
  throw new Error(
    "Configuración de entorno inválida. Copia .env.example a .env.local y completa los valores.",
  );
}

export const env = parsed.data;

