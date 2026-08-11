import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/(erp)/", "/login", "/cotizar/", "/plantillas/"],
      },
    ],
    sitemap: "https://gmsintegra.com/sitemap.xml",
    host: "https://gmsintegra.com",
  };
}
