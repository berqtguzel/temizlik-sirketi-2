import { services } from "@/data/services";

const appUrl = (process.env.APP_URL || "http://localhost:3000").replace(/\/$/, "");

export default function sitemap() {
  const pages = ["/", "/kontakt", "/uber-uns"].map((path) => ({
    url: `${appUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const servicePages = services.map((service) => ({
    url: `${appUrl}/leistungen/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pages, ...servicePages];
}