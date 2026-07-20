import ContentView from "@/app/component/blogs/ContentView";
import Comments from "@/app/component/blogs/Comments";
import MoreArticles from "@/app/component/blogs/MoreArticles";
import { fetchAllPost, fetchPost } from "@/sanity/queries/fetchPost";
import { client } from "@/sanity/lib/client";

// Keep this short so newly published Sanity content appears quickly.
export const revalidate = 60;

// Prerender known slugs so crawlers hit a warm cache instead of a cold render.
export async function generateStaticParams() {
  const posts = await client.fetch(
    `*[_type == "post" && defined(slug.current)] { "postSlug": slug.current, "category": categories[0]->slug.current }`
  );
  return posts.map(({ postSlug, category }) => ({
    slug: category || "general",
    postSlug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug, postSlug } = params;
  const post = await fetchPost(postSlug);
  return {
    title: post?.title || "Blog Detail - Web Journal",
    description: post?.subTitle || "Read article on Web Journal",
    alternates: {
      canonical: `https://www.akashsarki.com/blogs/${slug}/${postSlug}`,
    },
  };
}

const BlogDetailPage = async ({ params }) => {
  const { slug, postSlug } = params;

  const [allPosts, post] = await Promise.all([
    fetchAllPost(0, 3, postSlug),
    fetchPost(postSlug),
  ]);

  if (!post || !post.title) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-6 text-center font-sans">
        <h1 className="text-2xl text-foreground mb-4 font-serif">
          Blog not found
        </h1>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.subTitle || "Read article on Web Journal",
    ...(post.mainImage ? { image: post.mainImage } : {}),
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author?.name || "Akash Sarki",
    },
  };

  return (
    <div className="pt-24 pb-20 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContentView key={post.title} post={post} />
      {/* Remove comments from comments out if Firebase is configured */}
      {/* <Comments postId={post._id} /> */}
      <MoreArticles articles={allPosts || []} />
    </div>
  );
};

export default BlogDetailPage;
