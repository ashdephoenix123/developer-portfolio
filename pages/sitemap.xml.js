import { client } from "@/sanity/lib/client";

const BASE_URL = "https://www.akashsarki.com";

function generateSiteMap({ posts, categories, caseStudies }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!-- Static URLs -->
    <url>
      <loc>${BASE_URL}/</loc>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${BASE_URL}/blogs</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>${BASE_URL}/projects</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>${BASE_URL}/case-studies</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>${BASE_URL}/contact</loc>
      <priority>0.5</priority>
    </url>

    <!-- Dynamic Category Pages -->
    ${categories
      .map(({ slug }) => {
        return `
      <url>
        <loc>${`${BASE_URL}/blogs/${slug}`}</loc>
        <priority>0.7</priority>
      </url>
    `;
      })
      .join("")}

    <!-- Dynamic Blog Details -->
    ${posts
      .map(({ slug, category }) => {
        return `
      <url>
        <loc>${`${BASE_URL}/blogs/${category || "general"}/${slug}`}</loc>
        <priority>0.8</priority>
      </url>
    `;
      })
      .join("")}

    <!-- Dynamic Case Studies -->
    ${caseStudies
      .map(({ slug }) => {
        return `
      <url>
        <loc>${`${BASE_URL}/case-studies/${slug}`}</loc>
        <priority>0.7</priority>
      </url>
    `;
      })
      .join("")}
  </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  // Fetch dynamic details
  const [posts, categories, caseStudies] = await Promise.all([
    client.fetch(`*[_type == "post"] { "slug": slug.current, "category": categories[0]->slug.current }`),
    client.fetch(`*[_type == "category"] { "slug": slug.current }`),
    client.fetch(`*[_type == "caseStudy"] { "slug": slug.current }`),
  ]);

  const sitemap = generateSiteMap({ posts, categories, caseStudies });

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {}
