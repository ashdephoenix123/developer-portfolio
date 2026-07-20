"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../component/common/Header";
import DefaultThumbnail from "@/app/component/common/DefaultThumbnail";
import { motion } from "framer-motion";

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
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const CaseStudiesClient = ({ caseStudies = [] }) => {
  return (
    <div className="max-w-6xl w-full mx-auto px-6 pt-24 pb-20">
      <Header>Case Studies</Header>

      <motion.div
        variants={containerVariant}
        initial="initial"
        whileInView="final"
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-8"
      >
        {caseStudies.length === 0 && <span
          className="text-xs text-muted-foreground"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          No Case studies currently.
        </span>}
        {caseStudies.length > 0 && caseStudies.map((study, index) => {
          const category = study.categories?.[0];
          return (
            <motion.div key={study.slug} variants={cardVariant}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group border border-border bg-card/10 hover:bg-card/20 hover:border-primary/20 transition-all duration-300 block overflow-hidden"
                id={`case-${study.slug}`}
              >
                <div className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                  {/* Image Wrap */}
                  <div className="relative aspect-[16/9] lg:aspect-auto lg:w-2/5 min-h-[250px] overflow-hidden bg-muted border-b lg:border-b-0 lg:border-r border-border">
                    {study.mainImage ? (
                      <Image
                        src={study.mainImage}
                        fill
                        className="object-cover group-hover:scale-103 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                        alt={study.title || "Case Study Image"}
                        sizes="(max-width: 768px) 100vw, 384px"
                      />
                    ) : (
                      <DefaultThumbnail title={study.title} label="Case Study" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        {category && (
                          <span
                            className="bg-primary/5 text-primary text-[10px] uppercase tracking-wider px-2.5 py-0.5 border border-primary/20"
                            style={{
                              fontFamily: "'DM Mono', monospace",
                              borderColor: category.color ? `${category.color}33` : undefined,
                              color: category.color || undefined
                            }}
                          >
                            {category.title}
                          </span>
                        )}
                        <span
                          className="text-xs text-muted-foreground"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h2
                        className="text-2xl font-light text-foreground group-hover:text-primary transition-colors mb-3 leading-tight"
                        style={{ fontFamily: "'Fraunces', serif" }}
                      >
                        {study.title}
                      </h2>
                      <p
                        className="text-sm text-muted-foreground font-light leading-relaxed mb-6 line-clamp-3"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {study.subTitle}
                      </p>
                    </div>

                    {/* Read Study Footer */}
                    <div className="flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        {study.author?.image && (
                          <Image
                            src={study.author.image}
                            width={20}
                            height={20}
                            alt={study.author?.name || "Author"}
                            className="rounded-full object-cover w-5 h-5 border border-border"
                          />
                        )}
                        <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400 }}>
                          {study.author?.name || "Author"}
                        </span>
                      </div>
                      <span
                        className="text-primary group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1 font-medium"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        Read Case Study <span className="text-sm">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CaseStudiesClient;
