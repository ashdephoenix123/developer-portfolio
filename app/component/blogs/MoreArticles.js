"use client";

import React from "react";
import ArticleCard from "./ArticleCard";
import Link from "next/link";
import { textToUrl } from "@/utils/helpers";
import { motion } from "framer-motion";

const containerVariant = {
  initial: {},
  final: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariant = {
  initial: { opacity: 0, y: 20 },
  final: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const MoreArticles = ({ articles }) => {
  return (
    <div className="py-20 border-t border-border mt-16">
      <h4 className="text-2xl font-light text-foreground mb-10 text-center font-serif">
        Read More Blog Posts
      </h4>

      <motion.div
        variants={containerVariant}
        initial="initial"
        whileInView="final"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {articles.slice(0, 3).map((article) => (
          <motion.div
            key={article._id || article.id}
            variants={cardVariant}
            className="flex"
          >
            <ArticleCard
              title={article.title}
              description={article.subTitle}
              img={{ src: article.mainImage, alt: article.title + " img" }}
              href={`/blogs/${article.categories && article.categories.length > 0 ? textToUrl(article.categories[0].title) : "general"}/${article.slug}`}
              categories={article.categories}
              author={article.author}
              publishedDate={article.publishedAt}
            />
          </motion.div>
        ))}
      </motion.div>

      <Link
        href="/blogs"
        className="disabled:opacity-30 disabled:cursor-not-allowed max-w-max mx-auto mt-12 border border-border bg-card/10 hover:bg-card/30 hover:border-primary/20 text-foreground px-6 py-2.5 transition-all duration-300 font-light text-sm block"
      >
        View all articles
      </Link>
    </div>
  );
};

export default MoreArticles;
