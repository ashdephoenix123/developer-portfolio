import { fetchAllCaseStudies } from "@/sanity/queries/fetchCaseStudy";
import CaseStudiesClient from "./CaseStudiesClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Case Studies - Portfolio",
  description: "Explore the case studies of my projects and work experience.",
};

const CaseStudiesPage = async () => {
  const caseStudies = await fetchAllCaseStudies();

  return <CaseStudiesClient caseStudies={caseStudies || []} />;
};

export default CaseStudiesPage;
