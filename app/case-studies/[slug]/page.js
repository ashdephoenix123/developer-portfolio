"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { IoMdArrowBack } from "react-icons/io";
import blogs from "@/blogs.mock";

const CaseStudyDetailPage = () => {
  const { slug } = useParams();
  const study = blogs.find((b) => b.slug === slug);

  if (!study) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-6 text-center" style={{ fontFamily: "'Outfit', sans-serif" }}>
        <h1 className="text-2xl text-foreground mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
          Case study not found
        </h1>
        <Link
          href="/case-studies"
          className="text-primary hover:underline inline-flex items-center gap-2 text-sm"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          <IoMdArrowBack /> Back to Case Studies
        </Link>
      </div>
    );
  }

  const studyIndex = blogs.findIndex((b) => b.slug === slug);

  return (
    <div className="max-w-4xl mx-auto px-6 pt-24 pb-20">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mb-8"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          <IoMdArrowBack /> Back to Case Studies
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative border border-border bg-card/10 overflow-hidden flex flex-col md:flex-row min-h-[300px]"
      >
        {/* Cover image (half screen width) */}
        <div className="relative aspect-[16/9] md:aspect-auto md:w-1/2 min-h-[250px] bg-muted border-b md:border-b-0 md:border-r border-border">
          <Image
            src={study.image}
            fill
            className="object-cover"
            alt={study.title}
            priority
            sizes="(max-width: 768px) 100vw, 450px"
          />
        </div>

        {/* Hero Details */}
        <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            {study.category && (
              <span
                className="bg-primary/5 text-primary text-[10px] uppercase tracking-wider px-2.5 py-0.5 border border-primary/20"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {study.category}
              </span>
            )}
            <span
              className="text-xs text-muted-foreground"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              #{String(studyIndex + 1).padStart(2, "0")}
            </span>
          </div>

          <h1
            className="text-2xl md:text-3xl font-light text-foreground leading-snug mb-4"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            {study.title}
          </h1>

          <p
            className="text-sm text-muted-foreground font-light leading-relaxed mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {study.metadescription}
          </p>

          <div className="flex items-center gap-3 text-xs text-muted-foreground pt-4 border-t border-border/40">
            <Image
              src={study.authorimg}
              width={24}
              height={24}
              alt={study.author}
              className="rounded-full object-cover w-6 h-6 border border-border"
            />
            <span style={{ fontFamily: "'Outfit', sans-serif" }}>
              {study.author}
            </span>
            <span>·</span>
            <span style={{ fontFamily: "'DM Mono', monospace" }}>
              {study.date}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="h-px bg-border my-10" />

      {/* Case Study Content */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed space-y-6 text-base"
        style={{ fontFamily: "'Outfit', sans-serif" }}
        dangerouslySetInnerHTML={{ __html: study.description }}
      />

      {/* Next/Prev Navigation */}
      <div className="h-px bg-border my-10" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="flex justify-between items-center text-xs"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        {studyIndex > 0 ? (
          <Link
            href={`/case-studies/${blogs[studyIndex - 1].slug}`}
            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 max-w-[45%]"
          >
            <span>←</span> <span className="truncate">{blogs[studyIndex - 1].title}</span>
          </Link>
        ) : (
          <span />
        )}
        {studyIndex < blogs.length - 1 ? (
          <Link
            href={`/case-studies/${blogs[studyIndex + 1].slug}`}
            className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-end gap-1 max-w-[45%] text-right"
          >
            <span className="truncate">{blogs[studyIndex + 1].title}</span> <span>→</span>
          </Link>
        ) : (
          <span />
        )}
      </motion.div>
    </div>
  );
};

export default CaseStudyDetailPage;
