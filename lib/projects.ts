export type ProjectStatus = "online" | "beta" | "wip";

export type ProjectCategory = "website" | "app";

export const projectCategories: ProjectCategory[] = ["website", "app"];

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  href?: string;
  hostname?: string;
  status: ProjectStatus;
  images?: {
    light: string;
    dark: string;
  };
}

export const projects: Project[] = [
  {
    slug: "nextapi",
    name: "nextapi",
    category: "website",
    href: "https://nextapi.nxtcorex.cn/",
    hostname: "nextapi.nxtcorex.cn",
    status: "beta",
    images: {
      light: "/img/projects/nextapi/nextapi-light.png",
      dark: "/img/projects/nextapi/nextapi.png",
    },
  },
  {
    slug: "wanyin",
    name: "腕音",
    category: "app",
    href: "https://wanyin.watch.nxtcorex.cn",
    hostname: "wanyin.watch.nxtcorex.cn",
    status: "online",
    images: {
      light: "/img/projects/wanyin/wanyin-light.png",
      dark: "/img/projects/wanyin/wanyin.png",
    },
  },
];
