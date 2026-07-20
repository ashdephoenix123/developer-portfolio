"use client";

import React from "react";
import { PortableTextRenderer } from "@/utils/PortableTextRenderer";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/helpers";
import { motion } from "framer-motion";
import { IoMdArrowBack } from "react-icons/io";
import DefaultThumbnail from "@/app/component/common/DefaultThumbnail";

const ContentView = ({ post, backLink = "/blogs", backText = "Back to Blogs" }) => {
  return (
    <div className="max-w-3xl mx-auto lg:px-6 pt-24 pb-20">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href={backLink}
          className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mb-8"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          <IoMdArrowBack /> {backText}
        </Link>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative aspect-[16/9] w-full bg-muted border border-border overflow-hidden"
      >
        {post.mainImage ? (
          <Image
            src={post.mainImage}
            fill
            className="object-cover"
            alt={post.title}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        ) : (
          <DefaultThumbnail
            title={post.title}
            label={backLink === "/case-studies" ? "Case Study" : "Article"}
          />
        )}
      </motion.div>

      {/* Title & Meta */}
      <div className="mt-8 mb-10">
        {post.categories && post.categories.length > 0 && (
          <span
            className="inline-block px-2.5 py-0.5 text-[10px] tracking-wider uppercase bg-primary/5 text-primary border border-primary/20 mb-4"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {post.categories[0].title}
          </span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-3xl md:text-5xl font-light text-foreground leading-tight mb-6"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          {post.title}
        </motion.h1>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          {post.author?.image && (
            <Image
              src={post.author.image}
              width={32}
              height={32}
              alt={post.author?.name || "Author"}
              className="rounded-full object-cover w-8 h-8 border border-border"
            />
          )}
          <div>
            <p className="text-foreground font-medium" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {post.author?.name}
            </p>
            <p className="text-[10px]" style={{ fontFamily: "'DM Mono', monospace" }}>
              {formatDate(post.publishedAt)}
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border my-8" />

      {/* Blog Content */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed space-y-6 text-base"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        <PortableTextRenderer value={post.body} />
      </motion.article>
    </div>
  );
};

export default ContentView;
