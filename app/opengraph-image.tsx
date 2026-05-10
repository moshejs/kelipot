import { ImageResponse } from "next/og";

export const alt = "Klippot — Four Corruptions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0908",
          color: "#e8e4dc",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          padding: "80px",
        }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 32 32"
          style={{ marginBottom: 56 }}
        >
          <circle
            cx="16"
            cy="16"
            r="14"
            fill="none"
            stroke="#3d3a35"
            strokeWidth="0.4"
          />
          <path
            d="M 16 5 L 26 22 L 6 22 Z"
            fill="none"
            stroke="#d68a55"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />
          <path
            d="M 16 27 L 6 10 L 26 10 Z"
            fill="none"
            stroke="#6b7ba8"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />
          <line
            x1="6"
            y1="16"
            x2="26"
            y2="16"
            stroke="#8a8378"
            strokeWidth="0.5"
          />
        </svg>
        <div
          style={{
            fontSize: 124,
            fontWeight: 400,
            letterSpacing: -3,
            display: "flex",
            lineHeight: 1,
          }}
        >
          Klippot.
        </div>
        <div
          style={{
            fontSize: 64,
            color: "#d68a55",
            fontStyle: "italic",
            marginTop: 12,
            letterSpacing: -1,
            display: "flex",
          }}
        >
          Four corruptions.
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#8a8378",
            letterSpacing: 6,
            textTransform: "uppercase",
            marginTop: 56,
            display: "flex",
          }}
        >
          An Inquiry · In Four Movements
        </div>
      </div>
    ),
    { ...size }
  );
}
