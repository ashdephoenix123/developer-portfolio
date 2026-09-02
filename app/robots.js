export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio", "/studio/", "/api/", "/calendar", "/calendar/"],
    },
    sitemap: "https://www.akashsarki.com/sitemap.xml",
  };
}
