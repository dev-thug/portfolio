import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const title = "김현중 | 풀스택 개발자";
  const subtitle = "NodeJS • Python • AWS";

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div style={{ fontWeight: 800 }}>{title}</div>
        <div style={{ fontSize: 36, marginTop: 12, opacity: 0.9 }}>
          {subtitle}
        </div>
        <div style={{ fontSize: 24, marginTop: 24, opacity: 0.8 }}>
          hyunjoong.kim
        </div>
      </div>
    ),
    size
  );
}
