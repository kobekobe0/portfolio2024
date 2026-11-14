import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Social preview card, rendered to a static PNG at build time. Same two-tone headline as the home page.
export const alt = `${site.name}, full-stack developer in the Philippines`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Inter stands in for the system font, which can't be embedded in an image.
const font = (weight: number) =>
  readFile(join(process.cwd(), `node_modules/@fontsource/inter/files/inter-latin-${weight}-normal.woff`));

export default async function OpengraphImage() {
  const [regular, semibold] = await Promise.all([font(400), font(600)]);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#ffffff",
          color: "#1d1d1f",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#6e6e73" }}>Software Engineer at PSBank</div>
        <div style={{ display: "flex", fontSize: 70, fontWeight: 600, lineHeight: 1.08, letterSpacing: -2.4 }}>
          Back-office systems that banks and government offices run on.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 32,
            borderTop: "2px solid #e5e5ea",
            fontSize: 30,
          }}
        >
          <span style={{ fontWeight: 600 }}>{site.name}</span>
          <span style={{ color: "#6e6e73" }}>{`Full-stack developer · ${site.location.country}`}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
