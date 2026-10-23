import type { MetadataRoute } from "next";

export const dynamic = "force-static"; // 强制静态导出

const paths = ["", "projects", "contact"];

function pageUrl(path: string, english: boolean) {
  return `https://nxtcorex.org/${english ? "en/" : ""}${path ? `${path}/` : ""}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) => {
    const languages = {
      zh: pageUrl(path, false),
      en: pageUrl(path, true),
    };
    return [languages.zh, languages.en].map((url) => ({
      url,
      lastModified: new Date(),
      alternates: { languages },
    }));
  });
}
