/**
 * Cliente HTTP unificado para el ERP GMS Integra.
 *
 * En el cliente (browser), realiza peticiones relativas a `/api/*`, las cuales
 * son redirigidas al backend Laravel mediante los rewrites de `next.config.ts`.
 *
 * En el servidor (Server Components, Route Handlers, Server Actions), realiza
 * peticiones directas al `BACKEND_URL` de Laravel usando la variable de entorno.
 */

export class ApiError extends Error {
  status: number;
  data: any;

  constructor(status: number, data: any, message?: string) {
    super(message || `API Error: ${status}`);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const isServer = typeof window === "undefined";

  // Determinar la base URL. En servidor se usa la variable de entorno directa.
  let baseUrl = "/api";
  if (isServer) {
    baseUrl = `${process.env.BACKEND_URL || ""}/api`;
  }

  // Sanitizar path para evitar dobles barras
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${baseUrl}${cleanPath}`;

  const headers = new Headers(options.headers);
  if (!headers.has("Content-Type") && !(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  const config: RequestInit = {
    ...options,
    headers,
  };

  const response = await fetch(url, config);

  let data: any = null;
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  if (!response.ok) {
    throw new ApiError(
      response.status,
      data,
      data?.message || response.statusText || `Request failed with status ${response.status}`
    );
  }

  return data as T;
}

export const api = {
  get: <T>(path: string, options?: RequestInit) =>
    request<T>(path, { ...options, method: "GET" }),
  post: <T>(path: string, body?: any, options?: RequestInit) =>
    request<T>(path, {
      ...options,
      method: "POST",
      body: body instanceof FormData ? body : JSON.stringify(body),
    }),
  put: <T>(path: string, body?: any, options?: RequestInit) =>
    request<T>(path, {
      ...options,
      method: "PUT",
      body: body instanceof FormData ? body : JSON.stringify(body),
    }),
  patch: <T>(path: string, body?: any, options?: RequestInit) =>
    request<T>(path, {
      ...options,
      method: "PATCH",
      body: body instanceof FormData ? body : JSON.stringify(body),
    }),
  delete: <T>(path: string, options?: RequestInit) =>
    request<T>(path, { ...options, method: "DELETE" }),
};
