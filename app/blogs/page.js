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

const BlogsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
      <Header>Blogs</Header>

      <motion.div
        variants={containerVariant}
        initial="initial"
        whileInView="final"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {blogs.map((blog) => (
          <motion.div key={blog.slug} variants={cardVariant}>
            <Link
              href={`/blogs/${blog.slug}`}
              className="group border border-border bg-card/10 hover:bg-card/30 hover:border-primary/20 transition-all duration-300 block overflow-hidden"
              id={`blog-${blog.slug}`}
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-muted">
                <Image
                  src={blog.image}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                  alt={blog.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {blog.category && (
                  <span
                    className="absolute top-3 left-3 bg-background/90 text-primary text-[10px] uppercase tracking-wider px-2 py-0.5 border border-border"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {blog.category}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between min-h-[160px]">
                <div>
                  <h2
                    className="text-lg font-light text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2 leading-snug"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {blog.title}
                  </h2>
                  <p
                    className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-4"
                    style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}
                  >
                    {blog.metadescription}
                  </p>
                </div>

                {/* Author Info & Date */}
                <div className="flex items-center justify-between border-t border-border/60 pt-3 text-[11px] text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Image
                      src={blog.authorimg}
                      width={18}
                      height={18}
                      alt={blog.author}
                      className="rounded-full object-cover w-4.5 h-4.5 border border-border"
                    />
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400 }}>
                      {blog.author}
                    </span>
                  </div>
                  <span style={{ fontFamily: "'DM Mono', monospace" }}>
                    {blog.date}
                  </span>
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
