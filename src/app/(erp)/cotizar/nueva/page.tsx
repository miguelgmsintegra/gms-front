import type { Metadata } from "next";

import { CotizadorPanel } from "@/features/cotizar/components/cotizador-panel";
import type { Tipo } from "@/features/cotizar/types";
import { apiGet } from "@/lib/api-server";
import { obtenerUsuario } from "@/lib/session";

export const metadata: Metadata = {
  title: "Cotizar · GMS Integra",
};

/**
 * Sin encabezado de página, a diferencia de Inicio y Plantillas.
 *
 * El sidebar ya dice en qué sección se está, así que un título «Cotizador» y unas migas
 * «Inicio / Cotizar» solo repetían esa información a cambio de empujar el plano hacia
 * abajo. Esta es una pantalla de trabajo continuo: todo lo que aparece por encima del
 * modelo tiene que ganarse el sitio, y la navegación ya está resuelta a la izquierda.
 */
export default async function NuevaCotizacionPage() {
  // El layout ya garantizó que hay sesión; aquí solo se necesitan los permisos
  const usuario = await obtenerUsuario();
  const tipos = await apiGet<Tipo[]>("/tipos");

  return (
    <CotizadorPanel
      tipos={tipos}
      puedeVerDinero={usuario?.permisos.ver_dinero ?? false}
    />
  );
}
