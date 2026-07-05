import { fetchPost, fetchCategoryPost, fetchPostsLength } from "@/sanity/queries/fetchPost";
import { fetchAllCategories } from "@/sanity/queries/fetchCategories";
import { redirect } from "next/navigation";
import { textToUrl, capitalize } from "@/utils/helpers";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import CategoryBlogsClient from "../CategoryBlogsClient";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = params;

  // 1. Check if it's a post
  const post = await fetchPost(slug);
  if (post && post.title) {
    return {
      title: post.title,
      description: post.subTitle || "Read article on Web Journal",
    };
  }

  // 2. Check if it's a category
  const categories = await fetchAllCategories();
  const isCategory = categories.some((c) => c.slug === slug || textToUrl(c.name) === slug);
  if (isCategory) {
    return {
      title: `${capitalize(slug)} Blogs - Web Journal`,
      description: `Explore the ${slug} category blogs on Web Journal.`,
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

  // 3. Fallback: Not Found
  return (
    <div className="max-w-3xl mx-auto py-20 lg:px-6 text-center font-sans">
      <h1 className="text-2xl text-foreground mb-4 font-serif">
        Blog post or Category not found
      </h1>
      <Link
        href="/blogs"
        className="text-primary hover:underline inline-flex items-center gap-2 text-sm font-mono"
      >
        <IoMdArrowBack /> Back to Blogs
      </Link>
    </div>
  );
};

export default DynamicBlogOrCategoryPage;
