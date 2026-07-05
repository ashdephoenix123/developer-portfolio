"use client";

import React, { useState, useEffect } from "react";
import ArticleCard from "@/app/component/blogs/ArticleCard";
import {
  fetchCategoryPost,
  fetchPostsLength,
} from "@/sanity/queries/fetchPost";
import AutoComplete from "@/app/component/blogs/AutoComplete";
import Loader from "@/app/component/blogs/Loader";
import { textToUrl } from "@/utils/helpers";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Header from "../component/common/Header";

let numOfBlogsToLoad = 6;

const containerVariant = {
  initial: {},
  final: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariant = {
  initial: { opacity: 0, y: 24 },
  final: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const BlogsClient = ({ posts, allCategories, numOfBlogs }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [allBlogs, setAllBlogs] = useState(posts);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [blogsLength, setBlogsLength] = useState(numOfBlogs);
  const [startBlogIndex, setStartBlogIndex] = useState(numOfBlogsToLoad);

  console.log(allBlogs)

  // Sync state if initial props change
  useEffect(() => {
    setAllBlogs(posts);
    setBlogsLength(numOfBlogs);
    setStartBlogIndex(numOfBlogsToLoad);
    setLoading(false);
  }, [posts, numOfBlogs]);

  // Sync category search param if any
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (allCategories) {
      if (categoryParam) {
        const cat = allCategories.find((c) => c.slug === categoryParam);
        if (cat) {
          setSelectedCategory(cat);
          return;
        }
      }
      setSelectedCategory("");
    }
  }, [searchParams, allCategories]);

  const fetchCategoryBlog = (slug) => {
    let param = slug ? `?category=${slug}` : ``;
    if (selectedCategory?.slug === slug) return;
    setLoading(true);
    router.push(`/blogs${param}`);
  };

  const fetchMoreBlogs = async () => {
    try {
      setLoadMore(true);
      const categorySlug = selectedCategory && typeof selectedCategory === "object"
        ? selectedCategory.slug
        : null;
      const data = await fetchCategoryPost(
        categorySlug,
        startBlogIndex,
        startBlogIndex + numOfBlogsToLoad
      );
      setStartBlogIndex((prev) => prev + numOfBlogsToLoad);
      setAllBlogs((prev) => [...prev, ...data]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadMore(false);
    }
  };

  return (
    <div className="max-w-6xl w-full mx-auto px-6 pt-24 pb-20">
      <Header>Blogs</Header>

      <div className="flex justify-end mb-10 -mt-6">
        <AutoComplete
          options={allCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          callback={fetchCategoryBlog}
        />
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allBlogs.map((article, idx) => (
            <motion.div
              key={article._id || article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: (idx % Math.min(allBlogs.length, 3)) * 0.08,
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <ArticleCard
                title={article.title}
                description={article.subTitle}
                img={{
                  src: article.mainImage,
                  alt: article.title + " image",
                }}
                href={`/blogs/${article.categories && article.categories.length > 0 ? textToUrl(article.categories[0].title) : "general"}/${article.slug}`}
                categories={article.categories}
                author={article.author}
                publishedDate={article.publishedAt}
              />
            </motion.div>
          ))}
        </div>
      )}

      {loadMore && <Loader />}

      {allBlogs.length < blogsLength && !loading && (
        <button
          onClick={fetchMoreBlogs}
          className="disabled:opacity-30 disabled:cursor-not-allowed max-w-max mx-auto mt-16 border border-border bg-card/10 hover:bg-card/30 hover:border-primary/20 text-foreground px-6 py-2.5 transition-all duration-300 font-light text-sm"
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default BlogsClient;
