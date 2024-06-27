function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
>
  <url>
    <loc>https://www.akashsarki.com/</loc>
    <lastmod>2024-06-27T06:10:30+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://www.akashsarki.com/blogs</loc>
    <lastmod>2024-06-27T06:10:30+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.akashsarki.com/myResume.pdf</loc>
    <lastmod>2024-06-27T06:10:30+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.akashsarki.com/projects</loc>
    <lastmod>2024-06-27T06:10:30+00:00</lastmod>
    <priority>0.80</priority>
  </url>
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap(blogs);

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {}
