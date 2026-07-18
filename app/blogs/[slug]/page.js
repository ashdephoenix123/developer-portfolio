import { fetchPost, fetchCategoryPost, fetchPostsLength } from "@/sanity/queries/fetchPost";
import { fetchAllCategories } from "@/sanity/queries/fetchCategories";
import { redirect, notFound } from "next/navigation";
import { textToUrl, capitalize } from "@/utils/helpers";
import CategoryBlogsClient from "../CategoryBlogsClient";

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { slug } = params;

  // 1. Check if it's a post
  const post = await fetchPost(slug);
  if (post && post.title) {
    const category = post.categories && post.categories.length > 0
      ? textToUrl(post.categories[0].title)
      : "general";
    return {
      title: post.title,
      description: post.subTitle || "Read article on Web Journal",
      alternates: {
        canonical: `https://www.akashsarki.com/blogs/${category}/${slug}`,
      },
    };
  }

  // 2. Check if it's a category
  const categories = await fetchAllCategories();
  const isCategory = categories.some((c) => c.slug === slug || textToUrl(c.name) === slug);
  if (isCategory) {
    return {
      title: `${capitalize(slug)} Blogs - Web Journal`,
      description: `Explore the ${slug} category blogs on Web Journal.`,
      alternates: {
        canonical: `https://www.akashsarki.com/blogs/${slug}`,
      },
    };
  }

  return {
    title: "Page Not Found - Web Journal",
  };
}

const DynamicBlogOrCategoryPage = async ({ params }) => {
  const { slug } = params;

  // 1. Try fetching as a blog post
  const post = await fetchPost(slug);
  if (post && post.title) {
    const category = post.categories && post.categories.length > 0
      ? textToUrl(post.categories[0].title)
      : "general";
    // NOTE: 307, not 308 — permanentRedirect() requires Next 14+ (this project is on 13.4.2).
    redirect(`/blogs/${category}/${slug}`);
  }

  // 2. Try matching as a category
  const categories = await fetchAllCategories();
  const matchedCategory = categories.find(
    (c) => c.slug === slug || textToUrl(c.name) === slug
  );

  if (matchedCategory) {
    const categorySlug = matchedCategory.slug;
    const numOfBlogsToLoad = 6;
    const [posts, numOfBlogs] = await Promise.all([
      fetchCategoryPost(categorySlug, 0, numOfBlogsToLoad),
      fetchPostsLength(categorySlug),
    ]);

    return (
      <CategoryBlogsClient
        category={categorySlug}
        posts={posts || []}
        numOfBlogs={numOfBlogs || 0}
      />
    );
  }

  // 3. Fallback: real 404, not a 200 "not found" page — a soft 404 gets crawled
  // and then dropped from the index.
  notFound();
};

export default DynamicBlogOrCategoryPage;
