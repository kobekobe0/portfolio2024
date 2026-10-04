import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date(site.lastUpdated);
  return [
    { url: site.url, lastModified: updated, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/work`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/about`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/writing`, lastModified: updated, changeFrequency: "yearly", priority: 0.5 },
    ...projects.map((p) => ({
      url: `${site.url}/work/${p.slug}`,
      lastModified: updated,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...articles.map((a) => ({
      url: `${site.url}/writing/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
  ];
}
