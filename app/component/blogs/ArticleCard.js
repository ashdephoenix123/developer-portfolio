import { formatDate } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DefaultThumbnail from "@/app/component/common/DefaultThumbnail";

const ArticleCard = ({
  title,
  description,
  img,
  href,
  categories,
  author,
  publishedDate,
}) => {
  return (
    <Link
      href={href}
      className="group border border-border bg-card/10 hover:bg-card/30 hover:border-primary/20 transition-all duration-300 block overflow-hidden"
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-muted">
        {img?.src ? (
          <Image
            src={img.src}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <DefaultThumbnail title={title} label="Article" />
        )}
        {categories && categories.length > 0 && (
          <span
            className="absolute top-3 left-3 bg-background/90 text-primary text-[10px] uppercase tracking-wider px-2 py-0.5 border border-border"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {categories[0].title}
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
            {title}
          </h2>
          <p
            className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-4"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}
          >
            {description}
          </p>
        </div>

        {/* Author Info & Date */}
        {author && publishedDate && (
          <div className="flex items-center justify-between border-t border-border/60 pt-3 text-[11px] text-muted-foreground">
            <div className="flex items-center gap-2">
              {author.image && (
                <Image
                  src={author.image}
                  width={18}
                  height={18}
                  alt={author.name}
                  className="object-cover w-8 h-8 border border-border"
                />
              )}
              <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400 }}>
                {author.name}
              </span>
            </div>
            <span style={{ fontFamily: "'DM Mono', monospace" }}>
              {formatDate(publishedDate, { day: "numeric", month: "short", year: "numeric" })}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ArticleCard;
