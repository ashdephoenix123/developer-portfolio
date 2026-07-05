"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { IoMdArrowBack } from "react-icons/io";
import blogs from "@/blogs.mock";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center">
        <h1 className="text-2xl text-white mb-4">Blog not found</h1>
        <Link
          href="/blogs"
          className="text-[var(--accent-3)] hover:underline inline-flex items-center gap-2"
        >
          <IoMdArrowBack /> Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto pb-16">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[var(--accent-3)] transition-colors duration-300 mb-8"
        >
          <IoMdArrowBack /> Back to Blogs
        </Link>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="blog-detail__hero"
      >
        <Image
          src={blog.image}
          fill
          className="object-cover"
          alt={blog.title}
          priority
          sizes="(max-width: 768px) 100vw, 768px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--gradient-2)] via-transparent to-transparent" />
      </motion.div>

      {/* Title & Meta */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-8 mb-10"
      >
        {blog.category && (
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--accent-1)]/10 text-[var(--accent-3)] border border-[var(--accent-1)]/20 mb-4">
            {blog.category}
          </span>
        )}
        <h1 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-6">
          {blog.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <Image
            src={blog.authorimg}
            width={36}
            height={36}
            alt={blog.author}
            className="rounded-full object-cover w-9 h-9"
          />
          <div>
            <p className="text-gray-300 font-medium">{blog.author}</p>
            <p className="text-xs text-gray-500">{blog.date}</p>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="section-divider mb-10" style={{ opacity: 0.3 }} />

      {/* Blog Content */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="blog-detail__content"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
    </div>
  );
};

export default BlogDetailPage;
