"use client";

import { useState } from "react";
import { ShieldCheck, VolumeX, Layers, CheckCircle2 } from "lucide-react";

export function GlassTypesDiagram() {
  const [activeTab, setActiveTab] = useState<"templado" | "laminado" | "dvh">("dvh");

  return (
    <div className="flex flex-col gap-6 bg-slate-900 border border-slate-700 rounded p-6 sm:p-8 text-white shadow-card">
      {/* Selector de tipo */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-700 pb-5">
        <button
          type="button"
          onClick={() => setActiveTab("dvh")}
          className={`px-4 py-2 rounded text-xs sm:text-sm font-bold uppercase tracking-wide transition-all cursor-pointer ${
            activeTab === "dvh"
              ? "bg-primary text-white shadow-cta"
              : "bg-slate-800 text-slate-300 hover:text-white"
          }`}
        >
          Doble Vidrio Hermético (DVH)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("templado")}
          className={`px-4 py-2 rounded text-xs sm:text-sm font-bold uppercase tracking-wide transition-all cursor-pointer ${
            activeTab === "templado"
              ? "bg-primary text-white shadow-cta"
              : "bg-slate-800 text-slate-300 hover:text-white"
          }`}
        >
          Cristal Templado de Seguridad
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("laminado")}
          className={`px-4 py-2 rounded text-xs sm:text-sm font-bold uppercase tracking-wide transition-all cursor-pointer ${
            activeTab === "laminado"
              ? "bg-primary text-white shadow-cta"
              : "bg-slate-800 text-slate-300 hover:text-white"
          }`}
        >
          Cristal Laminado Acústico
        </button>
      </div>

      {/* Contenido Visual y Diagrama Vectorial SVG */}
      <div className="grid gap-8 lg:grid-cols-12 items-center">
        
        {/* SVG Diagrama Técnico (6 cols) */}
        <div className="lg:col-span-6 bg-slate-950/80 border border-slate-800/80 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[260px] relative overflow-hidden">
          {activeTab === "dvh" && (
            <svg viewBox="0 0 400 220" className="w-full h-auto max-w-[340px]" aria-label="Diagrama DVH">
              {/* Vidrio exterior */}
              <rect x="70" y="20" width="30" height="180" rx="4" fill="#00c9ff" fillOpacity="0.3" stroke="#00c9ff" strokeWidth="2" />
              <text x="85" y="115" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" transform="rotate(-90 85 115)">Vidrio Exterior 4-6mm</text>

              {/* Cámara de Gas / Aire Seco 12mm */}
              <rect x="105" y="30" width="90" height="160" rx="2" fill="#004aad" fillOpacity="0.15" stroke="#004aad" strokeDasharray="4 4" strokeWidth="1.5" />
              <text x="150" y="105" fill="#00c9ff" fontSize="11" fontWeight="bold" textAnchor="middle">Cámara 12mm</text>
              <text x="150" y="125" fill="#94a3b8" fontSize="9" textAnchor="middle">Gas Argón / Aire Seco</text>

              {/* Separador de Aluminio con Tamiz */}
              <rect x="105" y="20" width="90" height="10" fill="#cbd5e1" />
              <rect x="105" y="190" width="90" height="10" fill="#cbd5e1" />
              <text x="150" y="208" fill="#64748b" fontSize="7" textAnchor="middle">Perfil Separador + Tamiz Desecante</text>

              {/* Doble Sellado Butilo */}
              <rect x="100" y="20" width="5" height="180" fill="#10b981" />
              <rect x="195" y="20" width="5" height="180" fill="#10b981" />

              {/* Vidrio Interior */}
              <rect x="200" y="20" width="30" height="180" rx="4" fill="#00c9ff" fillOpacity="0.3" stroke="#00c9ff" strokeWidth="2" />
              <text x="215" y="115" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" transform="rotate(-90 215 115)">Vidrio Interior 4-6mm</text>

              {/* Indicador de Atenuación Sonora */}
              <path d="M 20 80 Q 40 110 20 140" fill="none" stroke="#ef4444" strokeWidth="2.5" />
              <path d="M 10 70 Q 30 110 10 150" fill="none" stroke="#ef4444" strokeWidth="2" opacity="0.6" />
              <text x="25" y="55" fill="#ef4444" fontSize="10" fontWeight="bold">Ruido 75 dB</text>

              <path d="M 250 100 Q 260 110 250 120" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="280" y="115" fill="#10b981" fontSize="11" fontWeight="bold">Silencio 37 dB</text>
            </svg>
          )}

          {activeTab === "templado" && (
            <svg viewBox="0 0 400 220" className="w-full h-auto max-w-[340px]" aria-label="Diagrama Cristal Templado">
              {/* Bloque de Cristal Templado */}
              <rect x="120" y="20" width="80" height="180" rx="6" fill="#00c9ff" fillOpacity="0.25" stroke="#00c9ff" strokeWidth="2.5" />
              
              {/* Capas de Compresión Térmica */}
              <line x1="130" y1="20" x2="130" y2="200" stroke="#004aad" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="190" y1="20" x2="190" y2="200" stroke="#004aad" strokeWidth="2" strokeDasharray="3 3" />
              
              {/* Núcleo de Tensión */}
              <text x="160" y="105" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">8mm / 10mm</text>
              <text x="160" y="125" fill="#00c9ff" fontSize="9" fontWeight="bold" textAnchor="middle">NTP 399.012</text>

              {/* Cantos Pulidos Brillantes */}
              <circle cx="120" cy="20" r="4" fill="#10b981" />
              <circle cx="200" cy="20" r="4" fill="#10b981" />
              <text x="160" y="12" fill="#10b981" fontSize="8" textAnchor="middle">Cantos Pulidos Brillantes</text>

              {/* Impacto resistido */}
              <path d="M 50 110 L 110 110" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" />
              <text x="60" y="95" fill="#f59e0b" fontSize="9" fontWeight="bold">Impacto 5x Mayor</text>
            </svg>
          )}

          {activeTab === "laminado" && (
            <svg viewBox="0 0 400 220" className="w-full h-auto max-w-[340px]" aria-label="Diagrama Cristal Laminado">
              {/* Vidrio 1 */}
              <rect x="110" y="20" width="35" height="180" rx="4" fill="#00c9ff" fillOpacity="0.3" stroke="#00c9ff" strokeWidth="2" />
              <text x="127" y="115" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" transform="rotate(-90 127 115)">Vidrio 4-5mm</text>

              {/* Lámina PVB Acústica Intermedia */}
              <rect x="148" y="20" width="12" height="180" fill="#10b981" fillOpacity="0.8" stroke="#10b981" strokeWidth="1.5" />
              <text x="154" y="115" fill="#000000" fontSize="8" fontWeight="black" textAnchor="middle" transform="rotate(-90 154 115)">PVB 0.76mm</text>

              {/* Vidrio 2 */}
              <rect x="163" y="20" width="35" height="180" rx="4" fill="#00c9ff" fillOpacity="0.3" stroke="#00c9ff" strokeWidth="2" />
              <text x="180" y="115" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" transform="rotate(-90 180 115)">Vidrio 4-5mm</text>

              {/* Retención ante quiebre */}
              <text x="240" y="105" fill="#10b981" fontSize="10" fontWeight="bold">Anti-intrusión</text>
              <text x="240" y="125" fill="#94a3b8" fontSize="8">No desprende fragmentos</text>
            </svg>
          )}
        </div>

        {/* Ficha Explicativa (6 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          {activeTab === "dvh" && (
            <>
              <div className="flex items-center gap-2 text-[#00c9ff]">
                <VolumeX className="size-5" />
                <h4 className="text-base sm:text-lg font-black uppercase tracking-wide">
                  Doble Vidrio Hermético (DVH 4+12+4)
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Dos hojas de vidrio separadas por una cámara de aire seco deshidratado o gas argón sellada herméticamente. Es la tecnología líder mundial en ahorro térmico y máxima aislación acústica.
              </p>
              <ul className="flex flex-col gap-2 pt-1">
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Atenuación acústica de hasta -38 dB frente al tráfico</span>
                </li>
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Elimina la condensación (&ldquo;sudor&rdquo;) y el frío en invierno</span>
                </li>
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Ideal para dormitorios en avenidas y fachadas de edificios</span>
                </li>
              </ul>
            </>
          )}

          {activeTab === "templado" && (
            <>
              <div className="flex items-center gap-2 text-[#00c9ff]">
                <ShieldCheck className="size-5" />
                <h4 className="text-base sm:text-lg font-black uppercase tracking-wide">
                  Cristal Templado de Seguridad (NTP 399.012)
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Vidrio sometido a tratamiento térmico a más de 650°C y enfriamiento brusco. Incrementa 5 veces su resistencia mecánica frente a golpes y cambios bruscos de temperatura.
              </p>
              <ul className="flex flex-col gap-2 pt-1">
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Fragmentación en pequeños granos sin aristas cortantes</span>
                </li>
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Espesores de 8mm y 10mm para mamparas de baño y vanos</span>
                </li>
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Cantos pulidos brillantes de precisión industrial</span>
                </li>
              </ul>
            </>
          )}

          {activeTab === "laminado" && (
            <>
              <div className="flex items-center gap-2 text-[#00c9ff]">
                <Layers className="size-5" />
                <h4 className="text-base sm:text-lg font-black uppercase tracking-wide">
                  Cristal Laminado de Seguridad & Acústico
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Compuesto por dos láminas de vidrio adheridas mediante una película elástica de Polivinil Butiral (PVB). Absorbe las ondas acústicas y actúa como escudo antirrobo.
              </p>
              <ul className="flex flex-col gap-2 pt-1">
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Ante una rotura, los vidrios quedan adheridos a la lámina</span>
                </li>
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Filtra el 99% de la radiación ultravioleta dañina</span>
                </li>
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Recomendado para techos de cristal, barandas y locales</span>
                </li>
              </ul>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
