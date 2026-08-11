import { NextResponse } from "next/server";

import { env } from "@/lib/env";
import { leerToken } from "@/lib/session";

/**
 * Backend-for-Frontend: proxy autenticado hacia Laravel.
 *
 * Sustituye al `rewrite` de next.config, que no podía añadir cabeceras dinámicas. Aquí
 * se lee la cookie httpOnly y se inyecta el `Authorization: Bearer`, de modo que el
 * token nunca pasa por el JavaScript del navegador.
 *
 * Las rutas más específicas (`/api/auth/login`) tienen prioridad sobre este catch-all.
 */

const METODOS_SIN_CUERPO = new Set(["GET", "HEAD"]);

async function reenviar(request: Request, slug: string[]): Promise<Response> {
  const token = await leerToken();

  if (!token) {
    return NextResponse.json(
      {
        error: "NO_AUTENTICADO",
        detalles: [
          { campo: null, codigo: "NO_AUTENTICADO", mensaje: "Sesión requerida." },
        ],
      },
      { status: 401 },
    );
  }

  const origen = new URL(request.url);
  const destino = new URL(`/api/${slug.join("/")}`, env.BACKEND_URL);
  destino.search = origen.search;

  const cabeceras = new Headers(request.headers);
  cabeceras.set("Authorization", `Bearer ${token}`);
  cabeceras.set("Accept", "application/json");
  // El Host del front confundiría a Laravel al generar URLs absolutas
  cabeceras.delete("host");
  // La cookie de sesión no tiene por qué viajar al backend: ya va el Bearer
  cabeceras.delete("cookie");

  try {
    const respuesta = await fetch(destino, {
      method: request.method,
      headers: cabeceras,
      body: METODOS_SIN_CUERPO.has(request.method) ? undefined : await request.text(),
      cache: "no-store",
      redirect: "manual",
    });

    return new Response(respuesta.body, {
      status: respuesta.status,
      statusText: respuesta.statusText,
      headers: {
        "Content-Type": respuesta.headers.get("Content-Type") ?? "application/json",
      },
    });
  } catch {
    return NextResponse.json(
      {
        error: "BACKEND_NO_DISPONIBLE",
        detalles: [
          {
            campo: null,
            codigo: "BACKEND_NO_DISPONIBLE",
            mensaje: "No se pudo contactar con el servidor.",
          },
        ],
      },
      { status: 503 },
    );
  }
}

type Contexto = { params: Promise<{ slug: string[] }> };

export async function GET(request: Request, { params }: Contexto) {
  return reenviar(request, (await params).slug);
}

export async function POST(request: Request, { params }: Contexto) {
  return reenviar(request, (await params).slug);
}

export async function PUT(request: Request, { params }: Contexto) {
  return reenviar(request, (await params).slug);
}

export async function PATCH(request: Request, { params }: Contexto) {
  return reenviar(request, (await params).slug);
}

export async function DELETE(request: Request, { params }: Contexto) {
  return reenviar(request, (await params).slug);
}
