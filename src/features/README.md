# Arquitectura Basada en Características (Features)

Para el desarrollo del ERP **GMS Integra**, organizamos el código agrupándolo por dominio de negocio (features) en lugar de tipo técnico. Esto mejora la modularidad, facilita el mantenimiento y escala mejor a medida que el sistema crece.

## Estructura típica de una Feature

Cada módulo dentro de `src/features/[feature-name]` debe seguir la siguiente estructura:

```text
src/features/nombre-feature/
├── api/             # Funciones de consumo de API (usando @/lib/api)
├── components/      # Componentes de UI exclusivos de esta feature
├── hooks/           # Hooks de React (queries, mutations, lógica compleja)
├── types/           # Interfaces y tipos específicos de la feature
└── index.ts         # Punto de entrada público (exporta lo necesario)
```

## Características Iniciales del ERP

Hemos estructurado las siguientes carpetas de dominio:

1. **`dashboard`**: Panel general del ERP, métricas clave (proyectos activos, stock crítico) e indicadores.
2. **`projects`**: Gestión de proyectos de instalación de mamparas y ventanas de aluminio, control de medidas, y estados de taller.
3. **`quotes`**: Creación de cotizaciones, precios de materiales (vidrio/aluminio) y presupuestos para clientes.
4. **`inventory`**: Control de stock de perfiles de aluminio, vidrios (espesor, tipo), empaquetaduras y accesorios.
5. **`clients`**: Registro de clientes, contactos y su historial de pedidos.

---

*Nota: Los componentes genéricos que no pertenecen a ningún dominio de negocio específico (ej. inputs base, botones, layout global) se mantienen en `src/components/ui/` o `src/components/` respectivamente.*
