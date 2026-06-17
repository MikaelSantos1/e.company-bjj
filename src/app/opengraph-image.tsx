import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ACADEMIA } from "@/lib/data";

// Metadados da imagem (1200x630 é o padrão para WhatsApp, Facebook, LinkedIn).
export const alt = "Excellence Company Brazilian Jiu-Jitsu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Logo embutida como data URL (Node runtime lê do disco em build time).
  const logo = await readFile(join(process.cwd(), "public/logo.jpg"), "base64");
  const logoSrc = `data:image/jpeg;base64,${logo}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          // Brilho sutil no topo, na linha do acento monocromático do site.
          backgroundImage:
            "radial-gradient(900px 500px at 50% -10%, rgba(255,255,255,0.10), rgba(10,10,10,0))",
          color: "#f4f4f5",
          padding: 80,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          width={150}
          height={150}
          alt=""
          style={{
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            objectFit: "contain",
            border: "2px solid rgba(255,255,255,0.15)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 44,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 82,
              fontWeight: 700,
              letterSpacing: -1,
              lineHeight: 1,
              color: "#ffffff",
            }}
          >
            EXCELLENCE COMPANY
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              letterSpacing: 14,
              marginTop: 18,
              color: "#a1a1aa",
            }}
          >
            BRAZILIAN JIU-JITSU
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 30,
            lineHeight: 1.35,
            maxWidth: 880,
            textAlign: "center",
            color: "#d4d4d8",
            marginTop: 40,
          }}
        >
          Disciplina, respeito e evolução para toda a família no tatame.
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 1,
            color: "#71717a",
            marginTop: 44,
          }}
        >
          {`${ACADEMIA.cidade}  ·  e-company-bjj.vercel.app`}
        </div>
      </div>
    ),
    { ...size },
  );
}
