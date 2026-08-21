/**
 * supplier-logos.tsx — Datos de proveedores verificados con logotipos
 * oficiales en formato WebP de alta definición para Junín y Lima.
 */

export interface Supplier {
  id: string;
  name: string;
  tier: "Fabricantes Principales" | "Distribuidores Regionales";
  locationBadge: string;
  category: string;
  address: string;
  specialty: string;
  logoSrc: string;
}

export const VERIFIED_SUPPLIERS: Supplier[] = [
  /* ─── Nivel 1: Fabricantes Nacionales Líderes (Lima) ─── */
  {
    id: "miyasato",
    name: "Corporación Miyasato",
    tier: "Fabricantes Principales",
    locationBadge: "Lima · Extrusión Nacional",
    category: "Aluminio & Perfiles Pesados",
    address: "Av. Industrial, Lima",
    specialty: "Sistemas monumentales de aluminio y perfiles estructurales de alta gama.",
    logoSrc: "/suppliers/miyasato.webp",
  },
  {
    id: "sika",
    name: "Sika Perú",
    tier: "Fabricantes Principales",
    locationBadge: "Lima · Planta Lurín",
    category: "Sellantes & Silicona Estructural",
    address: "Autopista Panamericana Sur km 29.5, Lurín, Lima",
    specialty: "Siliconas estructurales y selladores de poliuretano estanco para fachadas.",
    logoSrc: "/suppliers/sika.webp",
  },
  {
    id: "herralum",
    name: "Herralum Industrial",
    tier: "Fabricantes Principales",
    locationBadge: "Lima · Distribución Nacional",
    category: "Herrajes en Acero Inoxidable 304",
    address: "Lima / Cobertura Nacional",
    specialty: "Accesorios en acero quirúrgico 304 y herrajes de alta carga para mamparas.",
    logoSrc: "/suppliers/herralum.webp",
  },

  /* ─── Nivel 2: Distribuidores Regionales (Junín & Red Central) ─── */
  {
    id: "corp-huancayo",
    name: "Corporación Huancayo",
    tier: "Distribuidores Regionales",
    locationBadge: "Huancayo · Junín",
    category: "Aluminio & Cristales para Obra",
    address: "Jr. Moquegua 873 / Jr. Tarapacá 436, Huancayo",
    specialty: "Distribución mayorista de perfiles de aluminio y planchas de cristal.",
    logoSrc: "/suppliers/corp_huancayo.webp",
  },
  {
    id: "vidrieria-centro",
    name: "Vidriería Centro",
    tier: "Distribuidores Regionales",
    locationBadge: "Huancayo · Chilca",
    category: "Distribución Regional de Vidrio",
    address: "Jr. Tarapacá 510 / Jr. Humboldt 246 (Chilca)",
    specialty: "Flota propia de transporte y corte de cristal para el Valle del Mantaro.",
    logoSrc: "/suppliers/vidrieria_centro.webp",
  },
  {
    id: "santa-ana",
    name: "Santa Ana V&A",
    tier: "Distribuidores Regionales",
    locationBadge: "Lima · Envíos a Junín",
    category: "Perfiles & Accesorios Mayoristas",
    address: "Lima Centro / Envíos continuos a Huancayo",
    specialty: "Suministro mayorista de perfiles de aluminio y accesorios para manufactura.",
    logoSrc: "/suppliers/santa_ana.webp",
  },
];

export const SUPPLIERS = VERIFIED_SUPPLIERS;
