import { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portfolio-swart-phi-53.vercel.app";

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projetos/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    ...projectRoutes,
  ];
}
