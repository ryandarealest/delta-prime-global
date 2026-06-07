import type { MetadataRoute } from "next";
import { products, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/export-to-dubai",
    "/oem-private-label",
    "/insights",
    "/contact",
  ];

  const productRoutes = products.map((product) => `/products/${product.slug}`);

  return [...staticRoutes, ...productRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : route.includes("products") ? 0.9 : 0.8,
  }));
}
