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
      <div className="max-w-3xl mx-auto py-20 px-6 text-center" style={{ fontFamily: "'Outfit', sans-serif" }}>
        <h1 className="text-2xl text-foreground mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
          Blog not found
        </h1>
        <Link
          href="/blogs"
          className="text-primary hover:underline inline-flex items-center gap-2 text-sm"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          <IoMdArrowBack /> Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 pt-24 pb-20">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mb-8"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          <IoMdArrowBack /> Back to Blogs
        </Link>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative aspect-[16/9] w-full bg-muted border border-border overflow-hidden"
      >
        <Image
          src={blog.image}
          fill
          className="object-cover"
          alt={blog.title}
          priority
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </motion.div>

      {/* Title & Meta */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-8 mb-10"
      >
        {blog.category && (
          <span
            className="inline-block px-2.5 py-0.5 text-[10px] tracking-wider uppercase bg-primary/5 text-primary border border-primary/20 mb-4"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {blog.category}
          </span>
        )}
        <h1
          className="text-3xl md:text-5xl font-light text-foreground leading-tight mb-6"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          {blog.title}
        </h1>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <Image
            src={blog.authorimg}
            width={32}
            height={32}
            alt={blog.author}
            className="rounded-full object-cover w-8 h-8 border border-border"
          />
          <div>
            <p className="text-foreground font-medium" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {blog.author}
            </p>
            <p className="text-[10px]" style={{ fontFamily: "'DM Mono', monospace" }}>
              {blog.date}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="h-px bg-border my-8" />

      {/* Blog Content */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed space-y-6 text-base"
        style={{ fontFamily: "'Outfit', sans-serif" }}
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
    </div>
  );
};

export default BlogDetailPage;
