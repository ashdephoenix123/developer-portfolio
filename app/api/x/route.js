import { NextResponse } from "next/server";

export async function GET() {
  const rssUrl = process.env.X_RSS_FEED_URL;

  if (!rssUrl) {
    return NextResponse.json(
      { message: "X_RSS_FEED_URL is not configured in environment variables." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(rssUrl, {
      next: { revalidate: 60 }, // Cache response for 60 seconds instead of 1 hour
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Failed to fetch RSS feed from provider." },
        { status: 500 }
      );
    }

    const xmlText = await response.text();

    // A lightweight, dependency-free XML parser to extract RSS items
    const items = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xmlText)) !== null && items.length < 4) {
      const itemContent = match[1];

      const title = itemContent.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) || itemContent.match(/<title>([\s\S]*?)<\/title>/);
      const description = itemContent.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) || itemContent.match(/<description>([\s\S]*?)<\/description>/);
      const link = itemContent.match(/<link>([\s\S]*?)<\/link>/);
      const pubDate = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/);

      const rawText = description ? description[1] : (title ? title[1] : "");

      // Clean up HTML tags (e.g. image links or anchor tags inserted by RSS feeds)
      const cleanText = rawText
        .replace(/<[^>]*>/g, "") // Strip HTML tags
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .trim();

      const itemLink = link ? link[1].trim() : "https://x.com/akashsarki_";

      // Time calculation
      let timeAgo = "1d";
      if (pubDate) {
        const postDate = new Date(pubDate[1]);
        const diffMs = Date.now() - postDate.getTime();
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        if (diffDays === 0) {
          const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
          timeAgo = diffHours === 0 ? "just now" : `${diffHours}h`;
        } else if (diffDays < 7) {
          timeAgo = `${diffDays}d`;
        } else {
          timeAgo = `${Math.floor(diffDays / 7)}w`;
        }
      }

      items.push({
        id: `x-${items.length}`,
        text: cleanText,
        likes: Math.floor(Math.random() * 150) + 30, // Random baseline placeholders for interaction simulation
        reposts: Math.floor(Math.random() * 40) + 10,
        replies: Math.floor(Math.random() * 15) + 2,
        bookmarks: Math.floor(Math.random() * 80) + 5,
        time: timeAgo,
        views: `${(Math.random() * 15 + 2).toFixed(1)}K`,
        permalink: itemLink,
      });
    }

    return NextResponse.json({ posts: items });
  } catch (error) {
    console.error("X feed parser error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
