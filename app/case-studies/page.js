import { fetchAllCaseStudies } from "@/sanity/queries/fetchCaseStudy";
import CaseStudiesClient from "./CaseStudiesClient";

// Keep this short so newly published Sanity content appears quickly.
export const revalidate = 60;

export const metadata = {
  title: "Case Studies - Portfolio",
  description: "Explore the case studies of my projects and work experience.",
  alternates: {
    canonical: "https://www.akashsarki.com/case-studies",
  },
};

const CaseStudiesPage = async () => {
  const caseStudies = await fetchAllCaseStudies();

  return <CaseStudiesClient caseStudies={caseStudies || []} />;
};

export default CaseStudiesPage;
