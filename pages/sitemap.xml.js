import { client } from "@/sanity/lib/client";

const BASE_URL = "https://www.akashsarki.com";

// <lastmod> must be W3C datetime; Sanity's _updatedAt is already ISO 8601.
const lastmod = (date) => (date ? `<lastmod>${new Date(date).toISOString()}</lastmod>` : "");

// For listing pages, the freshest child is the honest "last modified".
const latestOf = (docs) =>
  docs.reduce((acc, { _updatedAt }) => (_updatedAt > acc ? _updatedAt : acc), "") || null;

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
      ${lastmod(latestOf(posts))}
      <priority>0.8</priority>
    </url>
    <url>
      <loc>${BASE_URL}/projects</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>${BASE_URL}/case-studies</loc>
      ${lastmod(latestOf(caseStudies))}
      <priority>0.8</priority>
    </url>
    <url>
      <loc>${BASE_URL}/contact</loc>
      <priority>0.5</priority>
    </url>

    <!-- Dynamic Category Pages -->
    ${categories
      .map(({ slug, _updatedAt }) => {
        return `
      <url>
        <loc>${`${BASE_URL}/blogs/${slug}`}</loc>
        ${lastmod(_updatedAt)}
        <priority>0.7</priority>
      </url>
    `;
      })
      .join("")}

    <!-- Dynamic Blog Details -->
    ${posts
      .map(({ slug, category, _updatedAt }) => {
        return `
      <url>
        <loc>${`${BASE_URL}/blogs/${category || "general"}/${slug}`}</loc>
        ${lastmod(_updatedAt)}
        <priority>0.8</priority>
      </url>
    `;
      })
      .join("")}

    <!-- Dynamic Case Studies -->
    ${caseStudies
      .map(({ slug, _updatedAt }) => {
        return `
      <url>
        <loc>${`${BASE_URL}/case-studies/${slug}`}</loc>
        ${lastmod(_updatedAt)}
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
    client.fetch(
      `*[_type == "post" && defined(slug.current)] { "slug": slug.current, "category": categories[0]->slug.current, _updatedAt }`
    ),
    client.fetch(`*[_type == "category" && defined(slug.current)] { "slug": slug.current, _updatedAt }`),
    client.fetch(`*[_type == "caseStudy" && defined(slug.current)] { "slug": slug.current, _updatedAt }`),
  ]);

  const sitemap = generateSiteMap({ posts, categories, caseStudies });

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {}
