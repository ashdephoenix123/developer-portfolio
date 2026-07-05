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
      staggerChildren: 0.15,
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

const CaseStudiesPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <Header>Case Studies</Header>

      <motion.div
        variants={containerVariant}
        initial="initial"
        whileInView="final"
        viewport={{ once: true, margin: "-50px" }}
        className="case-studies-list"
      >
        {blogs.map((study, index) => (
          <motion.div key={study.slug} variants={cardVariant}>
            <Link
              href={`/case-studies/${study.slug}`}
              className="case-card glass-card"
              id={`case-${study.slug}`}
            >
              {/* Layout alternates: image left/right */}
              <div
                className={`case-card__inner ${index % 2 !== 0 ? "case-card__inner--reverse" : ""}`}
              >
                {/* Image */}
                <div className="case-card__image-wrap">
                  <Image
                    src={study.image}
                    fill
                    className="case-card__image"
                    alt={study.title}
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                  <div className="case-card__image-overlay" />
                </div>

                {/* Content */}
                <div className="case-card__content">
                  <div className="case-card__top">
                    {study.category && (
                      <span className="case-card__tag">{study.category}</span>
                    )}
                    <span className="case-card__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="case-card__title">{study.title}</h2>
                  <p className="case-card__desc">
                    {study.metadescription.slice(0, 150)}...
                  </p>

                  <div className="case-card__bottom">
                    <div className="case-card__author">
                      <Image
                        src={study.authorimg}
                        width={20}
                        height={20}
                        alt={study.author}
                        className="rounded-full object-cover w-5 h-5"
                      />
                      <span>{study.author}</span>
                    </div>
                    <span className="case-card__read">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CaseStudiesPage;
