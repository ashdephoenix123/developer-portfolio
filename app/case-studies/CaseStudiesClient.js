"use client";

import React from "react";
import Header from "../component/common/Header";
import ArticleCard from "@/app/component/blogs/ArticleCard";
import { motion } from "framer-motion";

const CaseStudiesClient = ({ caseStudies = [] }) => {
  return (
    <div className="max-w-6xl w-full mx-auto px-6 pt-24 pb-20">
      <Header>Case Studies</Header>

      {caseStudies.length === 0 ? (
        <span
          className="text-xs text-muted-foreground"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          No Case studies currently.
        </span>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study._id || study.slug}
              className="flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: (idx % Math.min(caseStudies.length, 3)) * 0.08,
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <ArticleCard
                id={`case-${study.slug}`}
                title={study.title}
                description={study.subTitle}
                img={{
                  src: study.mainImage,
                  alt: study.title ? `${study.title} image` : "Case Study Image",
                }}
                href={`/case-studies/${study.slug}`}
                categories={study.categories}
                author={study.author}
                publishedDate={study.publishedAt}
                label="Case Study"
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CaseStudiesClient;

