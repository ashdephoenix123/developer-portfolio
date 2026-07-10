export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/studio/",
    },
    sitemap: "https://www.akashsarki.com/sitemap.xml",
  };
}
