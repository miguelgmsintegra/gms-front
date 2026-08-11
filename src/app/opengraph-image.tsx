import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "GMS Integra - Ventanas y Mamparas de Aluminio en Huancayo";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#060b13",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(0, 74, 173, 0.25) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(0, 201, 255, 0.15) 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          padding: "60px 80px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Header / Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #004aad 0%, #00c9ff 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: "bold",
              color: "#ffffff",
              boxShadow: "0 0 20px rgba(0, 201, 255, 0.4)",
            }}
          >
            G
          </div>
          <span
            style={{
              fontSize: "32px",
              fontWeight: "700",
              letterSpacing: "1px",
              color: "#ffffff",
            }}
          >
            GMS INTEGRA
          </span>
        </div>

        {/* Hero Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <div
            style={{
              display: "flex",
              padding: "6px 16px",
              borderRadius: "20px",
              backgroundColor: "rgba(0, 74, 173, 0.3)",
              border: "1px solid rgba(0, 201, 255, 0.4)",
              color: "#00c9ff",
              fontSize: "18px",
              fontWeight: "600",
              width: "fit-content",
            }}
          >
            Aluminio Integral & Vidrio Templado
          </div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: "800",
              lineHeight: 1.15,
              color: "#ffffff",
            }}
          >
            Ventanas y Mamparas a la Medida
          </div>
          <div style={{ fontSize: "24px", color: "#94a3b8", fontWeight: "400" }}>
            Huancayo · El Tambo · Chilca · Valle del Mantaro · Junín
          </div>
        </div>

        {/* Footer info */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
            fontSize: "20px",
            color: "#64748b",
          }}
        >
          <span>Fachadas Integrales · Puertas · Barandas · Policarbonato</span>
          <span style={{ color: "#00c9ff", fontWeight: "600" }}>gmsintegra.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
