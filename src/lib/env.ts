import { z } from "zod";

/**
 * Validación tipada de variables de entorno (fail-fast).
 *
 * Se valida al importar este módulo: si falta o es inválida alguna variable, la app falla
 * de inmediato con un mensaje claro, en vez de romper silenciosamente en runtime.
 *
 * IMPORTANTE: módulo de uso en SERVIDOR (next.config, Server Components, Route Handlers).
 * `BACKEND_URL` NO lleva prefijo NEXT_PUBLIC_ y por diseño no se expone al navegador.
 * Para variables públicas consumidas en el cliente, crear un `env.client.ts` aparte.
 */
const envSchema = z.object({
  // URL base del backend Laravel. Los rewrites de Next reescriben /api/* hacia aquí (server-side).
  BACKEND_URL: z.url(),
  // URL pública de este frontend (metadata/SEO, enlaces absolutos).
  NEXT_PUBLIC_APP_URL: z.url(),
});

const parsed = envSchema.safeParse({
  BACKEND_URL: process.env.BACKEND_URL,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
});

if (!parsed.success) {
  console.error(
    "❌ Variables de entorno inválidas o faltantes:\n",
    z.flattenError(parsed.error).fieldErrors,
  );
  throw new Error(
    "Configuración de entorno inválida. Copia .env.example a .env.local y completa los valores.",
  );
}

export const env = parsed.data;
