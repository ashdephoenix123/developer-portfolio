import React from "react";

// Fallback cover for posts/case studies without a mainImage. Fills its
// nearest `relative` parent, same as the next/image `fill` it replaces.
const DefaultThumbnail = ({ title = "", label = "Article" }) => {
  const initial = (title.trim()[0] || "A").toUpperCase();

  return (
    <div className="absolute inset-0 overflow-hidden bg-card/20" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 12px, var(--border) 12px, var(--border) 13px)",
        }}
      />
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-7xl font-light text-primary/30 select-none"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          {initial}
        </span>
      </div>
      <span
        className="absolute bottom-3 left-3 bg-background/90 text-muted-foreground text-[10px] uppercase tracking-wider px-2 py-0.5 border border-border"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        {label}
      </span>
    </div>
  );
};

export default DefaultThumbnail;
