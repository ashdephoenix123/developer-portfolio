"use client";

import React, { useState } from "react";
import ArticleCard from "@/app/component/blogs/ArticleCard";
import { fetchCategoryPost } from "@/sanity/queries/fetchPost";
import Loader from "@/app/component/blogs/Loader";
import { capitalize, textToUrl } from "@/utils/helpers";
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

const CategoryBlogsClient = ({ category, posts, numOfBlogs }) => {
  const [allBlogs, setAllBlogs] = useState(posts);
  const [loadMore, setLoadMore] = useState(false);
  const [startBlogIndex, setStartBlogIndex] = useState(numOfBlogsToLoad);

  const fetchMoreBlogs = async () => {
    try {
      setLoadMore(true);
      const data = await fetchCategoryPost(
        category,
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
    <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
      <Header>
        Blogs / <span className="text-primary font-normal">{capitalize(category)}</span>
      </Header>

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
              img={{ src: article.mainImage, alt: article.title + " image" }}
              href={`/blogs/${article.categories && article.categories.length > 0 ? textToUrl(article.categories[0].title) : "general"}/${article.slug}`}
              categories={article.categories}
              author={article.author}
              publishedDate={article.publishedAt}
            />
          </motion.div>
        ))}
      </div>

      {loadMore && <Loader />}

      {allBlogs.length < numOfBlogs && !loadMore && (
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

export default CategoryBlogsClient;
