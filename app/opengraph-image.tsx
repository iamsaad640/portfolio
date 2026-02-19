import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Saad Ahmed — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0a0a0a",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Top gradient line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #8b5cf6, #06b6d4)",
            display: "flex",
          }}
        />

        {/* Top section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Status */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              background: "rgba(34, 197, 94, 0.15)",
              border: "1px solid rgba(34, 197, 94, 0.3)",
              borderRadius: "100px",
              alignSelf: "flex-start",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#22c55e",
                display: "flex",
              }}
            />
            <span style={{ color: "#4ade80", fontSize: "16px", fontWeight: 500 }}>
              Open to Opportunities
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-2px",
              display: "flex",
            }}
          >
            Saad Ahmed
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "28px",
              color: "#8b5cf6",
              fontWeight: 600,
              display: "flex",
            }}
          >
            Software Engineer
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "20px",
              color: "#64748b",
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            Shipping AI-native products & scalable full-stack systems
          </div>
        </div>

        {/* Bottom section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Tech tags */}
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ padding: "6px 16px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#cbd5e1", fontSize: "15px", fontWeight: 500, display: "flex" }}>
              Next.js
            </div>
            <div style={{ padding: "6px 16px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#cbd5e1", fontSize: "15px", fontWeight: 500, display: "flex" }}>
              TypeScript
            </div>
            <div style={{ padding: "6px 16px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#cbd5e1", fontSize: "15px", fontWeight: 500, display: "flex" }}>
              Python
            </div>
            <div style={{ padding: "6px 16px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#cbd5e1", fontSize: "15px", fontWeight: 500, display: "flex" }}>
              LangChain
            </div>
            <div style={{ padding: "6px 16px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#cbd5e1", fontSize: "15px", fontWeight: 500, display: "flex" }}>
              PostgreSQL
            </div>
          </div>

          {/* Domain */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: 800,
              }}
            >
              S
            </div>
            <span style={{ color: "#94a3b8", fontSize: "20px", fontWeight: 600 }}>
              saad.run
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
