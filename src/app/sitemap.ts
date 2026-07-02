import type { MetadataRoute } from "next";
import { communities } from "@/content/communities";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/buy",
    "/sell",
    "/home-valuation",
    "/communities",
    "/team",
    "/reviews",
    "/contact",
  ].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const communityPages = communities.map((c) => ({
    url: `${site.url}/communities/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...communityPages];
}
