"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Heart,
  MessageCircle,
  Repeat2,
  Bookmark,
  MoreHorizontal,
  Send,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// ─── Instagram SVG ────────────────────────────────────────────────────────────
function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.01" fill="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

// ─── X / Twitter SVG ─────────────────────────────────────────────────────────
function XIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// ─── useInView ────────────────────────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeIn({ children, delay = 0, className = "" }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const INSTAGRAM_POSTS = [
  {
    id: "ig1",
    image: "/images/ig-post-setup.jpg",
    alt: "Developer workspace setup",
    caption: "Late night shipping session. New feature going live tomorrow 🚀 #webdev #React #buildinpublic",
    likes: 487,
    comments: 31,
    time: "1d",
  },
  {
    id: "ig2",
    image: "/images/ig-post-code.jpg",
    alt: "Typescript code screen close up",
    caption: "Just wrapped up a clean UI redesign ✨ Minimalism hits different when it's pixel-perfect. #uidesign #frontend #css",
    likes: 213,
    comments: 24,
    time: "3d",
  },
  {
    id: "ig3",
    image: "/images/ig-post-ui.jpg",
    alt: "UI design showcase dashboard",
    caption: "Shipped a new feature today 🚀 Nothing beats the feeling of seeing your code live in production. #webdev #react #nextjs",
    likes: 142,
    comments: 18,
    time: "5d",
  },
  {
    id: "ig4",
    image: "https://images.unsplash.com/photo-1683198412799-029b463d195d?w=600&h=600&fit=crop&auto=format",
    alt: "F1 steering wheel close-up",
    caption: "Monaco GP weekend. Nothing compares to the street circuits 🏎️ #F1 #MonacoGP #Formula1",
    likes: 312,
    comments: 18,
    time: "1w",
  },
];

const X_POSTS = [
  {
    id: "x1",
    text: "Just cut page load time by another 18% using granular code splitting + prefetching adjacent routes. React 18 concurrent features are genuinely underused in most codebases.",
    likes: 143,
    reposts: 37,
    replies: 21,
    bookmarks: 89,
    time: "4h",
    views: "12.4K",
  },
  {
    id: "x2",
    text: "Hot take: most \"AI-powered\" features I see in SaaS apps are just glorified autocomplete. The real potential is in ambient AI — systems that reduce friction without asking you to interact with them directly.",
    likes: 289,
    reposts: 61,
    replies: 44,
    bookmarks: 117,
    time: "2d",
    views: "28.1K",
  },
  {
    id: "x3",
    text: "Norris P2 again. Genuinely feels like 2025 is his year if McLaren keeps developing. The gap at sector 3 is insane.",
    likes: 78,
    reposts: 12,
    replies: 9,
    bookmarks: 5,
    time: "3d",
    views: "4.8K",
  },
  {
    id: "x4",
    text: "Built a tiny custom hook last night that syncs multiple async sources into a single loading state. Surprised there's no clean abstraction for this in Tanstack Query yet. Maybe it's a PR opportunity.",
    likes: 201,
    reposts: 48,
    replies: 19,
    bookmarks: 134,
    time: "5d",
    views: "9.2K",
  },
];

// ─── Instagram Card ───────────────────────────────────────────────────────────
function InstagramCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="border border-border bg-card hover:border-border/60 transition-colors overflow-hidden group">
      {/* Header */}
      <div className="flex items-center justify-between px-3.5 pt-3 pb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="size-8 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white text-xs font-medium font-mono">
            AS
          </div>
          <div>
            <div className="text-xs font-medium text-foreground leading-tight">akashsarki_</div>
            <div className="text-[10px] text-muted-foreground font-mono">
              {post.time} ago
            </div>
          </div>
        </div>
        <MoreHorizontal size={15} className="text-muted-foreground" />
      </div>

      {/* Image */}
      <a
        href={post.permalink || "https://instagram.com/akashsarki_"}
        target="_blank"
        rel="noopener noreferrer"
        className="aspect-square bg-muted overflow-hidden relative block"
      >
        <img
          src={post.image}
          alt={post.alt}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
        />
      </a>

      {/* Actions */}
      <div className="px-3.5 pt-3 pb-1">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3.5">
            <button
              onClick={() => setLiked(!liked)}
              className={`transition-colors ${liked ? "text-red-500" : "text-muted-foreground hover:text-foreground"}`}
            >
              <Heart size={17} fill={liked ? "currentColor" : "none"} />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <MessageCircle size={17} />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Send size={16} />
            </button>
          </div>
          <button
            onClick={() => setSaved(!saved)}
            className={`transition-colors ${saved ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            <Bookmark size={17} fill={saved ? "currentColor" : "none"} />
          </button>
        </div>

        <div className="text-xs font-medium text-foreground mb-1.5 font-mono">
          {(post.likes + (liked ? 1 : 0)).toLocaleString()} likes
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2" style={{ fontWeight: 300 }}>
          <span className="text-foreground font-medium">akashsarki_ </span>
          {post.caption}
        </p>
        <div className="text-[10px] text-muted-foreground mt-1.5 mb-2.5 font-mono">
          View all {post.comments} comments
        </div>
      </div>
    </div>
  );
}

// ─── X Card ───────────────────────────────────────────────────────────────────
function XCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [reposted, setReposted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="border border-border bg-card px-4 py-4 hover:bg-secondary/30 transition-colors cursor-pointer">
      {/* Header */}
      <div className="flex gap-3">
        <div className="size-9 rounded-full bg-[#1a1a2e] border border-border flex items-center justify-center text-xs font-medium text-foreground flex-shrink-0 font-mono">
          AS
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-sm font-medium text-foreground">Akash Sarki</span>
            <span className="text-[11px] text-muted-foreground font-mono">
              @akashsarki · {post.time}
            </span>
          </div>

          <p className="text-sm text-foreground leading-relaxed mb-3 font-sans" style={{ fontWeight: 300 }}>
            {post.text}
          </p>

          {/* Engagement row */}
          <div className="flex items-center justify-between text-muted-foreground">
            <button className="flex items-center gap-1.5 hover:text-[#4dcfff] transition-colors group/btn">
              <MessageCircle size={14} />
              <span className="text-[11px] font-mono">{post.replies}</span>
            </button>
            <button
              onClick={() => setReposted(!reposted)}
              className={`flex items-center gap-1.5 transition-colors group/btn ${reposted ? "text-[#34d399]" : "hover:text-[#34d399]"}`}
            >
              <Repeat2 size={14} />
              <span className="text-[11px] font-mono">
                {post.reposts + (reposted ? 1 : 0)}
              </span>
            </button>
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-1.5 transition-colors group/btn ${liked ? "text-red-400" : "hover:text-red-400"}`}
            >
              <Heart size={14} fill={liked ? "currentColor" : "none"} />
              <span className="text-[11px] font-mono">
                {post.likes + (liked ? 1 : 0)}
              </span>
            </button>
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`flex items-center gap-1.5 transition-colors group/btn ${bookmarked ? "text-primary" : "hover:text-primary"}`}
            >
              <Bookmark size={14} fill={bookmarked ? "currentColor" : "none"} />
              <span className="text-[11px] font-mono">
                {post.bookmarks + (bookmarked ? 1 : 0)}
              </span>
            </button>
            <span className="text-[11px] font-mono">
              {post.views} views
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Contact() {
  const [activeTab, setActiveTab] = useState("instagram");
  const [copied, setCopied] = useState(false);
  const [instagramPosts, setInstagramPosts] = useState(INSTAGRAM_POSTS);

  useEffect(() => {
    async function loadInstagram() {
      try {
        const res = await fetch("/api/instagram");
        if (res.ok) {
          const data = await res.json();
          if (data.posts && data.posts.length > 0) {
            setInstagramPosts(data.posts);
          }
        }
      } catch (err) {
        console.warn("Could not load live Instagram posts:", err);
      }
    }
    loadInstagram();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@akashsarki.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground pt-24 pb-16 font-sans"
    >
      <style jsx global>{`
        ::-webkit-scrollbar { display: none; }
        * { scrollbar-width: none; }
        ::selection { background: #b9ff4d; color: #080808; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">

        {/* ── Page label ── */}
        <FadeIn>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-10 font-mono">
            <span className="inline-block w-8 h-px bg-border" />
            contact
          </div>
        </FadeIn>

        {/* ── Hero text + CTA ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 mb-20 items-start">
          <FadeIn>
            <h1
              className="text-5xl sm:text-6xl xl:text-7xl font-light leading-[0.95] tracking-tight mb-7 font-serif"
            >
              Let&apos;s build<br />
              <em className="not-italic text-primary">something</em><br />
              together.
            </h1>
            <p className="text-muted-foreground max-w-lg leading-relaxed mb-8 font-sans" style={{ fontWeight: 300 }}>
              Open to full-time roles, freelance projects, and interesting side bets. I also just enjoy good conversations — about code, F1, or MotoGP.
            </p>

            {/* Email strip */}
            <div className="inline-flex flex-wrap sm:flex-nowrap items-center border border-border divide-y sm:divide-y-0 sm:divide-x divide-border mb-8 w-full sm:w-auto">
              <span
                className="px-4 py-2.5 text-sm text-muted-foreground font-mono w-full sm:w-auto text-center sm:text-left"
              >
                hello@akashsarki.com
              </span>
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors font-mono w-full sm:w-auto"
              >
                {copied ? "copied ✓" : "copy"}
              </button>
              <a
                href="mailto:hello@akashsarki.com"
                className="px-4 py-2.5 text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-1.5 font-mono w-full sm:w-auto"
              >
                <Mail size={13} />
                write
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-3">
              {[
                { href: "https://github.com/ashdephoenix123", Icon: FaGithub, label: "GitHub" },
                { href: "https://linkedin.com/in/akashsarki", Icon: FaLinkedin, label: "LinkedIn" },
                { href: "https://instagram.com/akashsarki_", Icon: InstagramIcon, label: "Instagram" },
                { href: "https://x.com/akashsarki", Icon: XIcon, label: "X / Twitter" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-border text-muted-foreground hover:text-foreground hover:border-border/60 px-3.5 py-2 text-xs transition-colors font-mono"
                >
                  <Icon size={13} />
                  {label}
                </a>
              ))}
            </div>
          </FadeIn>

          {/* ── Availability card ── */}
          <FadeIn delay={120}>
            <div className="border border-border bg-card p-6">
              <div className="text-xs text-muted-foreground mb-5 font-mono">
                availability · july 2026
              </div>

              {[
                { label: "Full-time roles", status: "available", color: "text-primary" },
                { label: "Freelance / contract", status: "available", color: "text-primary" },
                { label: "Open source collab", status: "always", color: "text-[#4dcfff]" },
                { label: "Coffee chat", status: "always", color: "text-[#4dcfff]" },
              ].map(({ label, status, color }) => (
                <div key={label} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <span className="text-sm text-muted-foreground font-sans" style={{ fontWeight: 300 }}>{label}</span>
                  <span className={`text-xs ${color} font-mono`}>
                    {status}
                  </span>
                </div>
              ))}

              <a
                href="mailto:hello@akashsarki.com"
                className="group mt-5 flex w-full items-center justify-between bg-primary text-primary-foreground px-4 py-2.5 text-sm hover:bg-primary/90 transition-colors font-mono"
              >
                send a message
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* ── Divider ── */}
        <div className="flex items-center gap-4 mb-14">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground font-mono">
            around the internet
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* ── Social feed ── */}
        <div className="mb-8">
          <FadeIn>
            {/* Tab switcher */}
            <div className="flex items-center gap-1 border border-border bg-card p-1 w-fit mb-8">
              <button
                onClick={() => setActiveTab("instagram")}
                className={`flex items-center gap-2 px-4 py-2 text-xs transition-colors font-mono ${activeTab === "instagram"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <InstagramIcon size={13} />
                Instagram
              </button>
              <button
                onClick={() => setActiveTab("x")}
                className={`flex items-center gap-2 px-4 py-2 text-xs transition-colors font-mono ${activeTab === "x"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <XIcon size={13} />
                X / Twitter
              </button>
            </div>
          </FadeIn>

          {/* Instagram grid */}
          {activeTab === "instagram" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {instagramPosts.map((post, i) => (
                <FadeIn key={post.id} delay={i * 70}>
                  <InstagramCard post={post} />
                </FadeIn>
              ))}
            </div>
          )}

          {/* X feed */}
          {activeTab === "x" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
              {X_POSTS.map((post, i) => (
                <FadeIn key={post.id} delay={i * 70}>
                  <XCard post={post} />
                </FadeIn>
              ))}
            </div>
          )}
        </div>

        {/* Follow CTA */}
        <FadeIn delay={100}>
          <div className="mt-10 flex items-center gap-4">
            {activeTab === "instagram" ? (
              <a
                href="https://instagram.com/akashsarki_"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground border border-border px-4 py-2 hover:border-border/60 transition-colors font-mono"
              >
                <InstagramIcon size={12} />
                follow @akashsarki_
                <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ) : (
              <a
                href="https://x.com/akashsarki"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground border border-border px-4 py-2 hover:border-border/60 transition-colors font-mono"
              >
                <XIcon size={12} />
                follow @akashsarki
                <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}
          </div>
        </FadeIn>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} Akash Sarki
          </span>
          <span className="text-xs text-muted-foreground font-mono">
            Built with React · Designed from Figma
          </span>
        </div>
      </footer>
    </div>
  );
}
