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
      <div className="max-w-3xl mx-auto py-20 text-center">
        <h1 className="text-2xl text-white mb-4">Case study not found</h1>
        <Link
          href="/case-studies"
          className="text-[var(--accent-3)] hover:underline inline-flex items-center gap-2"
        >
          <IoMdArrowBack /> Back to Case Studies
        </Link>
      </div>
    );
  }

  const studyIndex = blogs.findIndex((b) => b.slug === slug);

  return (
    <div className="max-w-4xl mx-auto pb-16">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[var(--accent-3)] transition-colors duration-300 mb-8"
        >
          <IoMdArrowBack /> Back to Case Studies
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="case-detail__hero glass-card overflow-hidden"
      >
        <div className="case-detail__hero-image">
          <Image
            src={study.image}
            fill
            className="object-cover"
            alt={study.title}
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-2)] via-[var(--gradient-2)]/80 to-transparent" />
        </div>
        <div className="case-detail__hero-content">
          <div className="flex items-center gap-3 mb-4">
            {study.category && (
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--accent-1)]/10 text-[var(--accent-3)] border border-[var(--accent-1)]/20">
                {study.category}
              </span>
            )}
            <span className="text-xs text-gray-500 font-mono">
              #{String(studyIndex + 1).padStart(2, "0")}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold text-white leading-tight mb-4">
            {study.title}
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xl">
            {study.metadescription}
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <Image
              src={study.authorimg}
              width={28}
              height={28}
              alt={study.author}
              className="rounded-full object-cover w-7 h-7"
            />
            <span className="text-gray-300">{study.author}</span>
            <span className="text-gray-600">·</span>
            <span className="text-gray-500">{study.date}</span>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="section-divider my-10" style={{ opacity: 0.3 }} />

      {/* Content */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="case-detail__content blog-detail__content"
        dangerouslySetInnerHTML={{ __html: study.description }}
      />

      {/* Navigation */}
      <div className="section-divider my-10" style={{ opacity: 0.3 }} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="flex justify-between items-center"
      >
        {studyIndex > 0 ? (
          <Link
            href={`/case-studies/${blogs[studyIndex - 1].slug}`}
            className="text-sm text-gray-400 hover:text-[var(--accent-3)] transition-colors duration-300"
          >
            ← {blogs[studyIndex - 1].title.slice(0, 30)}...
          </Link>
        ) : (
          <span />
        )}
        {studyIndex < blogs.length - 1 ? (
          <Link
            href={`/case-studies/${blogs[studyIndex + 1].slug}`}
            className="text-sm text-gray-400 hover:text-[var(--accent-3)] transition-colors duration-300 text-right"
          >
            {blogs[studyIndex + 1].title.slice(0, 30)}... →
          </Link>
        ) : (
          <span />
        )}
      </motion.div>
    </div>
  );
};

export default CaseStudyDetailPage;
