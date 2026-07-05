import ContentView from "@/app/component/blogs/ContentView";
import Comments from "@/app/component/blogs/Comments";
import MoreArticles from "@/app/component/blogs/MoreArticles";
import { fetchAllPost, fetchPost } from "@/sanity/queries/fetchPost";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { postSlug } = params;
  const post = await fetchPost(postSlug);
  return {
    title: post?.title || "Blog Detail - Web Journal",
    description: post?.subTitle || "Read article on Web Journal",
  };
}

const BlogDetailPage = async ({ params }) => {
  const { postSlug } = params;

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

  return (
    <div className="pt-24 pb-20 px-6">
      <ContentView key={post.title} post={post} />
      {/* Remove comments from comments out if Firebase is configured */}
      {/* <Comments postId={post._id} /> */}
      <MoreArticles articles={allPosts || []} />
    </div>
  );
};

export default BlogDetailPage;
