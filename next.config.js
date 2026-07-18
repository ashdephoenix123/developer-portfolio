/** @type {import('next').NextConfig} */
const nextConfig = {};

// Legacy post URLs (/blogs/<postSlug>) predate the /blogs/<category>/<postSlug>
// structure. Redirecting them here yields a real 308; doing it inside the page
// only produces a meta refresh, because generateMetadata has already streamed
// the <head> by then (permanentRedirect() needs Next 14+).
async function legacyBlogRedirects() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  if (!projectId || !dataset) return [];

  const query = encodeURIComponent(
    `*[_type == "post" && defined(slug.current)] { "slug": slug.current, "category": categories[0]->slug.current }`
  );

  try {
    const res = await fetch(
      `https://${projectId}.apicdn.sanity.io/v2024-10-03/data/query/${dataset}?query=${query}`
    );
    if (!res.ok) return [];
    const { result = [] } = await res.json();

    return result.map(({ slug, category }) => ({
      source: `/blogs/${slug}`,
      destination: `/blogs/${category || "general"}/${slug}`,
      permanent: true,
    }));
  } catch {
    // Never fail the build over this.
    return [];
  }
}

module.exports = {
  ...nextConfig,
  redirects: legacyBlogRedirects,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.djangoproject.com",
        pathname: "/img/logos/**",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
        pathname: "/v2/**",
      },
      {
        protocol: "https",
        hostname: "northsoft.co",
        pathname: "/blog/wp-content/uploads/2022/11/**",
      },
      {
        protocol: "https",
        hostname: "www.akashsarki.com",
        pathname: "/_next/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
};
