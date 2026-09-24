const appUrl = process.env.APP_URL || "http://localhost:3000";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${appUrl.replace(/\/$/, "")}/sitemap.xml`,
  };
}
