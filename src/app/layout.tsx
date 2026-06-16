import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ACADEMIA, CONTATO } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  // Atualize para o domínio final da academia quando publicar.
  metadataBase: new URL("https://excellence-company-bjj.vercel.app"),
  title: {
    default:
      "Excellence Company Brazilian Jiu-Jitsu | Academia de Jiu-Jitsu",
    template: "%s | Excellence Company BJJ",
  },
  description:
    "Academia de Brazilian Jiu-Jitsu com turmas para crianças, jovens e adultos. Inclusão de mulheres, metodologia para autistas e conscientização anti-bullying, sob a liderança do Mestre Marcio.",
  keywords: [
    "Jiu-Jitsu",
    "Brazilian Jiu-Jitsu",
    "BJJ",
    "academia de Jiu-Jitsu",
    "Jiu-Jitsu infantil",
    "defesa pessoal",
    "Excellence Company",
    "Mestre Marcio",
  ],
  openGraph: {
    title: "Excellence Company Brazilian Jiu-Jitsu",
    description:
      "Disciplina, respeito e evolução para toda a família no tatame. Agende sua aula experimental gratuita.",
    type: "website",
    locale: "pt_BR",
    siteName: "Excellence Company BJJ",
    images: ["/logo.jpg"],
  },
  icons: { icon: "/logo.jpg", apple: "/logo.jpg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: ACADEMIA.nomeCompleto,
  description:
    "Academia de Brazilian Jiu-Jitsu com turmas para todas as idades, ambiente inclusivo e metodologia adaptada.",
  sport: "Brazilian Jiu-Jitsu",
  telephone: `+${CONTATO.whatsappNumero}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: ACADEMIA.cidade,
    streetAddress: ACADEMIA.endereco,
  },
  sameAs: [CONTATO.instagramUrl],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
