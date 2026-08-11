import { redirect } from "next/navigation";

import { ErpBarraMovil } from "@/components/erp/erp-barra-movil";
import { ErpSidebar } from "@/components/erp/erp-sidebar";
import { obtenerUsuario } from "@/lib/session";

/**
 * Guard REAL del ERP.
 *
 * El proxy solo comprobó que existiera una cookie. Aquí se pregunta al backend quién es
 * el usuario: si el token caducó, se revocó o la cuenta se desactivó, la sesión no vale
 * y se vuelve al login. También es donde se conoce el ROL, que el proxy no puede saber.
 */
export default async function ErpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const usuario = await obtenerUsuario();

  if (!usuario) {
    redirect("/login");
  }

  /*
   * Fondo OPACO, a diferencia de la landing.
   *
   * El layout raíz pinta seis manchas de gradiente animadas y fijas. En la portada son
   * la identidad de la marca; debajo de una tabla de despiece son movimiento continuo
   * bajo cifras que hay que leer sin equivocarse, y el desenfoque de 130px sobre
   * superficies así de grandes se repinta sin parar en la tablet del taller. El ERP se
   * apoya sobre su propio fondo sólido y las deja fuera.
   */
  /*
   * Sin barra superior en escritorio.
   *
   * La que había mostraba un nombre y un rol que no cambian nunca, y a cambio se llevaba
   * 56px a lo ancho de la pantalla en la página donde más falta hace el alto: la del
   * plano. Esa información vive ahora al pie del riel, y por debajo de `md` —donde el
   * riel no existe— la reemplaza <ErpBarraMovil/>, que sí es navegación imprescindible.
   */
  return (
    <div className="bg-background flex min-h-svh">
      <ErpSidebar usuario={usuario} />

      <div className="flex min-w-0 flex-1 flex-col">
        <ErpBarraMovil usuario={usuario} />
        <main className="flex min-h-0 flex-1 flex-col p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
