import blogs from "../app/api/blogs/blogs.json";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.akashsarki.com/</loc>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://www.akashsarki.com/blogs</loc>
        <changefreq>monthly</changefreq>
        <priority>0.80</priority>
    </url>
    <url>
        <loc>https://www.akashsarki.com/myResume.pdf</loc>
        <changefreq>monthly</changefreq>
        <priority>0.80</priority>
    </url>
      ${posts
        ?.map((post) => {
          return `
          <url>
            <loc>https://www.akashsarki.com/blog/${post.slug}</loc>
            <lastmod>2024-06-20</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
          </url>
        `;
        })
        .join("")}
    </urlset>`;
}

// <lastmod>${new Date(post.updated_at).toISOString()}</lastmod>

export async function getServerSideProps({ res }) {
  // Fetch dynamic URLs
  // const posts = await fetch(`${process.env.NEXT_PUBLIC_WEBSITELINK}/api/blogs`);

  // Generate sitemap
  const sitemap = generateSiteMap(blogs);

  // Set response content type
  res.setHeader("Content-Type", "application/xml");
  // Send the sitemap
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  // getServerSideProps will do the heavy lifting
}
