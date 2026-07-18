import { fetchAllCaseStudies } from "@/sanity/queries/fetchCaseStudy";
import CaseStudiesClient from "./CaseStudiesClient";

export const revalidate = 3600;

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
