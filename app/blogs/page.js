"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../component/common/Header";
import { motion } from "framer-motion";
import blogs from "@/blogs.mock";

const containerVariant = {
  initial: {},
  final: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariant = {
  initial: { opacity: 0, y: 24 },
  final: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const BlogsPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <Header>Blogs</Header>

      <motion.div
        variants={containerVariant}
        initial="initial"
        whileInView="final"
        viewport={{ once: true, margin: "-50px" }}
        className="blog-grid"
      >
        {blogs.map((blog) => (
          <motion.div key={blog.slug} variants={cardVariant}>
            <Link
              href={`/blogs/${blog.slug}`}
              className="blog-card glass-card"
              id={`blog-${blog.slug}`}
            >
              {/* Cover Image */}
              <div className="blog-card__image-wrap">
                <Image
                  src={blog.image}
                  fill
                  className="blog-card__image"
                  alt={blog.title}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="blog-card__image-overlay" />
                {blog.category && (
                  <span className="blog-card__category">{blog.category}</span>
                )}
              </div>

              {/* Content */}
              <div className="blog-card__content">
                <h2 className="blog-card__title">{blog.title}</h2>
                <p className="blog-card__excerpt">
                  {blog.metadescription.slice(0, 120)}...
                </p>

                {/* Meta */}
                <div className="blog-card__meta">
                  <div className="blog-card__author">
                    <Image
                      src={blog.authorimg}
                      width={24}
                      height={24}
                      alt={blog.author}
                      className="blog-card__author-img"
                    />
                    <span>{blog.author}</span>
                  </div>
                  <span className="blog-card__date">{blog.date}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BlogsPage;
