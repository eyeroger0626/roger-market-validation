import { ImageResponse } from "next/og";

const title = "海外市場驗證系統｜星啟夢圓行銷";

export const alt = title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, #f8fbfd 0%, #eef4f7 48%, #ffffff 100%)",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 64,
          width: "100%",
        }}
      >
        <div
          style={{
            background:
              "radial-gradient(circle at 24% 22%, rgba(201,151,74,0.26), transparent 22%), linear-gradient(135deg, #ffffff 0%, #eef4f7 100%)",
            border: "1px solid rgba(18, 59, 93, 0.14)",
            borderRadius: 36,
            boxShadow: "0 34px 110px rgba(18, 59, 93, 0.16)",
            display: "flex",
            flexDirection: "row",
            height: "100%",
            overflow: "hidden",
            width: "100%",
          }}
        >
          <div
            style={{
              background: "linear-gradient(160deg, #123b5d 0%, #0b1b2b 100%)",
              display: "flex",
              flex: "0 0 38%",
              height: "100%",
              position: "relative",
            }}
          >
            <div
              style={{
                background:
                  "radial-gradient(circle, rgba(244,214,155,0.95) 0%, rgba(201,151,74,0.92) 42%, transparent 43%)",
                height: 220,
                left: 120,
                position: "absolute",
                top: 104,
                width: 220,
              }}
            />
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: 28,
                height: 160,
                left: 78,
                position: "absolute",
                top: 300,
                width: 300,
              }}
            />
            <div
              style={{
                background: "rgba(255,255,255,0.16)",
                borderRadius: 999,
                height: 18,
                left: 116,
                position: "absolute",
                top: 338,
                width: 210,
              }}
            />
            <div
              style={{
                background: "rgba(201,151,74,0.9)",
                borderRadius: 999,
                height: 18,
                left: 116,
                position: "absolute",
                top: 382,
                width: 150,
              }}
            />
            <div
              style={{
                background: "rgba(255,255,255,0.16)",
                borderRadius: 999,
                height: 18,
                left: 116,
                position: "absolute",
                top: 426,
                width: 240,
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              gap: 30,
              justifyContent: "center",
              padding: 64,
            }}
          >
            <div
              style={{
                color: "#c9974a",
                fontSize: 26,
                fontWeight: 800,
                letterSpacing: "0.14em",
              }}
            >
              SOCIAL TRADE SYSTEM
            </div>
            <div
              style={{
                color: "#111827",
                display: "flex",
                flexDirection: "column",
                fontSize: 58,
                fontWeight: 800,
                gap: 14,
                letterSpacing: "-0.02em",
                lineHeight: 1.16,
              }}
            >
              <div>MARKET VALIDATION</div>
              <div style={{ color: "#123b5d" }}>FOR B2B EXPORT</div>
            </div>
            <div
              style={{
                color: "#475569",
                fontSize: 27,
                fontWeight: 600,
                lineHeight: 1.48,
                maxWidth: 610,
              }}
            >
              Short video, ads, and buyer signal testing before scaling
              overseas investment.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
