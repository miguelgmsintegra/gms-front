import type { NextConfig } from "next";
import { env } from "./src/lib/env";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // El cliente llama siempre a /api/* (relativo). Next reescribe la petición al
        // backend Laravel del lado del servidor: sin CORS y sin exponer BACKEND_URL al navegador.
        source: "/api/:path*",
        destination: `${env.BACKEND_URL}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
