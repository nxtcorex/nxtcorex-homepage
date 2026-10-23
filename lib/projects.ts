export type ProjectStatus = "online" | "beta" | "wip";

export interface Project {
  slug: string;
  name: string;
  href: string;
  hostname: string;
  status: ProjectStatus;
  images: {
    light: string;
    dark: string;
  };
}

export const projects: Project[] = [
  {
    slug: "nextapi",
    name: "nextapi",
    href: "https://nextapi.nxtcorex.cn/",
    hostname: "nextapi.nxtcorex.cn",
    status: "beta",
    images: {
      light: "/img/projects/nextapi/nextapi-light.png",
      dark: "/img/projects/nextapi/nextapi.png",
    },
  },
];
