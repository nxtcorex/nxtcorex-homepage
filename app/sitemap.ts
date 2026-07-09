import type { MetadataRoute } from "next";

export const dynamic = "force-static"; // 强制静态导出

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nxtcorex.org/",
      lastModified: new Date(),
      alternates: {
        languages: {
          zh: "https://nxtcorex.org/",
          en: "https://nxtcorex.org/en/",
        },
      },
    },
    {
      url: "https://nxtcorex.org/contact/",
      lastModified: new Date(),
      alternates: {
        languages: {
          zh: "https://nxtcorex.org/contact/",
          en: "https://nxtcorex.org/en/contact/",
        },
      },
    },
    {
      url: "https://nxtcorex.org/en/",
      lastModified: new Date(),
      alternates: {
        languages: {
          zh: "https://nxtcorex.org/",
          en: "https://nxtcorex.org/en/",
        },
      },
    },
    {
      url: "https://nxtcorex.org/en/contact/",
      lastModified: new Date(),
      alternates: {
        languages: {
          zh: "https://nxtcorex.org/contact/",
          en: "https://nxtcorex.org/en/contact/",
        },
      },
    },
  ];
}