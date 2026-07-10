import Link from "next/link";
import { fetchAllCaseStudies, fetchCaseStudy } from "@/sanity/queries/fetchCaseStudy";
import { notFound } from "next/navigation";
import ContentView from "@/app/component/blogs/ContentView";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const study = await fetchCaseStudy(slug);
  return {
    title: study?.title ? `${study.title} - Case Study` : "Case Study - Portfolio",
    description: study?.subTitle || "Read case study detail",
    alternates: {
      canonical: `https://www.akashsarki.com/case-studies/${slug}`,
    },
  };
}

const CaseStudyDetailPage = async ({ params }) => {
  const { slug } = params;

  const [allStudies, study] = await Promise.all([
    fetchAllCaseStudies(),
    fetchCaseStudy(slug),
  ]);

  if (!study || !study.title) {
    notFound();
  }

  const studyIndex = allStudies.findIndex((b) => b.slug === slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": study.title,
    "description": study.subTitle || "Read case study detail",
    "image": study.mainImage,
    "datePublished": study.publishedAt,
    "dateModified": study.updatedAt || study.publishedAt,
    "author": {
      "@type": "Person",
      "name": study.author?.name || "Akash Sarki",
    },
  };

  return (
    <div className="pt-24 pb-20 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContentView 
        key={study.title} 
        post={study} 
        backLink="/case-studies" 
        backText="Back to Case Studies" 
      />

      {/* Next/Prev Navigation */}
      <div className="max-w-3xl mx-auto lg:px-6">
        <div className="h-px bg-border my-10" />
        <div
          className="flex justify-between items-center text-xs text-muted-foreground"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          {studyIndex > 0 ? (
            <Link
              href={`/case-studies/${allStudies[studyIndex - 1].slug}`}
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 max-w-[45%]"
            >
              <span>←</span> <span className="truncate">{allStudies[studyIndex - 1].title}</span>
            </Link>
          ) : (
            <span />
          )}
          {studyIndex < allStudies.length - 1 && studyIndex !== -1 ? (
            <Link
              href={`/case-studies/${allStudies[studyIndex + 1].slug}`}
              className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-end gap-1 max-w-[45%] text-right"
            >
              <span className="truncate">{allStudies[studyIndex + 1].title}</span> <span>→</span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetailPage;
