import { ImageResponse } from "next/og";

export const alt = "Roger 製造業海外市場驗證";
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
            padding: 0,
            width: "100%",
          }}
        >
          <div
            style={{
              background: "linear-gradient(160deg, #123b5d 0%, #0b1b2b 100%)",
              display: "flex",
              flex: "0 0 42%",
              height: "100%",
              position: "relative",
            }}
          >
            <div
              style={{
                background:
                  "radial-gradient(circle, rgba(244,214,155,0.95) 0%, rgba(201,151,74,0.92) 42%, transparent 43%)",
                height: 220,
                left: 132,
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
                left: 86,
                position: "absolute",
                top: 300,
                width: 320,
              }}
            />
            <div
              style={{
                background: "rgba(255,255,255,0.13)",
                borderRadius: 999,
                height: 18,
                left: 124,
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
                left: 124,
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
                left: 124,
                position: "absolute",
                top: 426,
                width: 250,
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              gap: 28,
              justifyContent: "center",
              padding: 64,
            }}
          >
            <div
              style={{
                alignItems: "center",
                display: "flex",
                gap: 18,
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #123b5d, #2f6f7e)",
                  borderRadius: 24,
                  height: 82,
                  width: 82,
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    background: "#123b5d",
                    borderRadius: 999,
                    height: 24,
                    width: 360,
                  }}
                />
                <div
                  style={{
                    background: "#c9974a",
                    borderRadius: 999,
                    height: 18,
                    width: 230,
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div
                style={{
                  background: "#111827",
                  borderRadius: 999,
                  height: 52,
                  width: 520,
                }}
              />
              <div
                style={{
                  background: "#123b5d",
                  borderRadius: 999,
                  height: 52,
                  width: 430,
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div
                style={{
                  background: "rgba(100,116,139,0.58)",
                  borderRadius: 999,
                  height: 22,
                  width: 590,
                }}
              />
              <div
                style={{
                  background: "rgba(100,116,139,0.4)",
                  borderRadius: 999,
                  height: 22,
                  width: 450,
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                gap: 16,
                marginTop: 10,
              }}
            >
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  style={{
                    background:
                      item === 1
                        ? "rgba(201,151,74,0.18)"
                        : "rgba(18,59,93,0.08)",
                    border: "1px solid rgba(18,59,93,0.1)",
                    borderRadius: 20,
                    height: 74,
                    width: 170,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
