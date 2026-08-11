import {
  Boxes,
  Calculator,
  Factory,
  Home,
  LayoutTemplate,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

import type { Rol } from "@/lib/session";

/**
 * Mapa de páginas del ERP (08-propuestas-cambio/README.md §5).
 *
 * `nivelMinimo` decide qué ve cada rol en el menú. Esto es SOLO presentación: evita
 * mostrar enlaces que devolverían 403. La autorización de verdad está en Laravel, y
 * escribir la URL a mano no sirve de nada si el backend dice que no.
 *
 * `disponible` distingue lo construido de lo planificado. El mapa de páginas completo se
 * muestra desde el primer día —un ERP que revela sus secciones de a una deja al usuario
 * sin saber qué esperar— pero lo que aún no existe se ve inerte y rotulado, nunca como
 * un enlace que lleva a un 404. Prometer una pantalla y devolver un error cuesta más
 * confianza que admitir que todavía no está.
 */

export type EntradaNavegacion = {
  titulo: string;
  href: string;
  icono: LucideIcon;
  nivelMinimo: Rol;
  descripcion: string;
  disponible: boolean;
};

const NIVEL: Record<Rol, number> = { almacen: 1, maestro: 2, admin: 3 };

/** Donde aterriza el usuario tras iniciar sesión. */
export const RUTA_INICIO = "/inicio";

export const NAVEGACION: EntradaNavegacion[] = [
  {
    titulo: "Inicio",
    href: RUTA_INICIO,
    icono: Home,
    nivelMinimo: "almacen",
    descripcion: "Resumen y accesos del sistema",
    disponible: true,
  },
  {
    titulo: "Cotizar",
    href: "/cotizar/nueva",
    icono: Calculator,
    nivelMinimo: "almacen",
    descripcion: "Calcular despiece y costeo por medidas",
    disponible: true,
  },
  {
    titulo: "Plantillas",
    href: "/plantillas",
    icono: LayoutTemplate,
    nivelMinimo: "maestro",
    descripcion: "Diseños, tipos y reglas de cálculo",
    disponible: true,
  },
  {
    titulo: "Catálogo",
    href: "/catalogo",
    icono: Boxes,
    nivelMinimo: "admin",
    descripcion: "Materiales, insumos y precios",
    disponible: false,
  },
  {
    titulo: "Parámetros",
    href: "/parametros",
    icono: SlidersHorizontal,
    nivelMinimo: "admin",
    descripcion: "Variables y estándares de mano de obra",
    disponible: false,
  },
  {
    titulo: "Producción",
    href: "/produccion",
    icono: Factory,
    nivelMinimo: "almacen",
    descripcion: "Órdenes y listas de corte",
    disponible: false,
  },
];

export function navegacionPara(rol: Rol): EntradaNavegacion[] {
  return NAVEGACION.filter((entrada) => NIVEL[rol] >= NIVEL[entrada.nivelMinimo]);
}
