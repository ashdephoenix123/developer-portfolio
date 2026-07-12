import { client } from "../lib/client";

export const fetchActiveResume = async () => {
  const query = `*[_type == "resume" && isActive == true] | order(_updatedAt desc) [0] {
    title,
    "fileUrl": resumeFile.asset->url
  }`;

  const resume = await client.fetch(query, {}, { next: { revalidate: 60 } });
  return resume;
};
