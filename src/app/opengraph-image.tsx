import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { OG_ALT } from "./shared-metadata";

export const alt = OG_ALT;

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

const stats = [
  { value: "38", label: "Buildings" },
  { value: "$66M", label: "Construction Value" },
  { value: "170+", label: "Residences" },
  { value: "20+", label: "Years" },
];

// Fonts are the site's own (Inter + Playfair Display, both SIL OFL), subsetted to
// only the glyphs this card draws — ~40KB total instead of ~600KB. Satori replaces
// its built-in font entirely once `fonts` is passed, so Inter 400/700 must be
// registered here or every non-wordmark string loses its metrics.
// Regenerate a subset with:
//   curl -A "Mozilla/5.0 (Linux; U; Android 2.3)" \
//     "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&text=<chars>"
const FONT_DIR = join(process.cwd(), "assets");

// Satori supports flexbox only — no CSS grid. Every multi-child node sets display: flex.
export default async function Image() {
  const [hero, inter400, inter700, playfair] = await Promise.all([
    readFile(join(process.cwd(), "public/hero-wabansia.jpg")),
    readFile(join(FONT_DIR, "Inter-400-subset.ttf")),
    readFile(join(FONT_DIR, "Inter-700-subset.ttf")),
    readFile(join(FONT_DIR, "PlayfairDisplay-Bold-subset.ttf")),
  ]);

  const heroSrc = `data:image/jpeg;base64,${hero.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          fontFamily: "Inter",
          backgroundColor: "#0B2A4A",
        }}
      >
        {/* Photo */}
        <img
          src={heroSrc}
          // Decorative: the card's alt text is the route-level `alt` export.
          alt=""
          width={size.width}
          height={size.height}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: size.width,
            height: size.height,
            objectFit: "cover",
          }}
        />

        {/* Navy gradient so the type stays legible over the photo */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: size.width,
            height: size.height,
            display: "flex",
            backgroundImage:
              "linear-gradient(to top, rgba(10,30,56,0.96) 30%, rgba(10,30,56,0.72) 60%, rgba(10,30,56,0.45) 100%)",
          }}
        />

        {/* Left accent bar — matches the site hero */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 12,
            height: size.height,
            backgroundColor: "#4A82B5",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            width: "100%",
            height: "100%",
            padding: "64px 72px 60px 84px",
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#7BB5D8",
              marginBottom: 18,
            }}
          >
            Veteran-Owned · Chicago, Illinois
          </div>

          <div
            style={{
              fontFamily: "Playfair Display",
              fontSize: 96,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1,
              marginBottom: 22,
            }}
          >
            BirchBuild
          </div>

          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              color: "#B5CCE5",
              marginBottom: 46,
            }}
          >
            Development &amp; Construction Management
          </div>

          {/* Fixed-width columns keep the four stats on a shared baseline */}
          <div style={{ display: "flex", flexDirection: "row" }}>
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: 262,
                }}
              >
                <div
                  style={{
                    fontSize: 46,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: 1.1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: "#7BB5D8",
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    lineHeight: 1.2,
                    marginTop: 6,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: inter400, style: "normal", weight: 400 },
        { name: "Inter", data: inter700, style: "normal", weight: 700 },
        {
          name: "Playfair Display",
          data: playfair,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
