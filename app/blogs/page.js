import { fetchAllPost, fetchPostsLength, fetchCategoryPost } from "@/sanity/queries/fetchPost";
import { fetchAllCategories } from "@/sanity/queries/fetchCategories";
import BlogsClient from "./BlogsClient";

// Keep this short so newly published Sanity content appears quickly.
export const revalidate = 60;

export const metadata = {
  title: "Blogs - Web Journal",
  description: "Explore the blogs section of Web Journal. Read from the latest technology to latest inventions, from thrilling sports to serene and quiet nature, you will find all.",
  alternates: {
    canonical: "https://www.akashsarki.com/blogs",
  },
};

const BlogsPage = async ({ searchParams }) => {
  const category = searchParams?.category || null;
  const numOfBlogsToLoad = 6;
  
  const [posts, numOfBlogs, allCategories] = await Promise.all([
    category
      ? fetchCategoryPost(category, 0, numOfBlogsToLoad)
      : fetchAllPost(0, numOfBlogsToLoad),
    fetchPostsLength(category),
    fetchAllCategories(),
  ]);

  return (
    <BlogsClient
      posts={posts || []}
      allCategories={allCategories || []}
      numOfBlogs={numOfBlogs || 0}
    />
  );
};

export default BlogsPage;
