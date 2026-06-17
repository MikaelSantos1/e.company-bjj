import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";

// Site de página única: só a home entra como URL.
// As seções (#sobre, #turmas, etc.) são âncoras — o Google não as trata
// como páginas separadas, então não fazem parte do sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
