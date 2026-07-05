import { client } from "../lib/client";

export const fetchAllCaseStudies = async (start = 0, end, slug) => {
  const range = end ? `[${start}...${end}]` : ``;
  const query = `*[_type == "caseStudy" ${slug ? `&& slug.current != $slug` : ""}] | order(_createdAt desc) ${range} {_id, body, title, subTitle, "slug": slug.current, "mainImage": mainImage.asset->url, 'author' : {'name' : author->name, 'image' : author->image.asset->url}, 'publishedAt': _createdAt, 'categories': categories[]->{title, "color": categoryColor.hex}, "updatedAt" : _updatedAt}`;
  const params = slug ? { slug } : {};

  const posts = await client.fetch(query, params);
  return posts;
};

export const fetchCaseStudy = async (slug) => {
  const post = await client.fetch(
    `*[_type == "caseStudy" && slug.current == $slug] {_id, body, title, subTitle, "mainImage": mainImage.asset->url, 'author' : {'name' : author->name, 'image' : author->image.asset->url}, 'publishedAt': _createdAt, 'categories': categories[]->{title, "slug": slug.current, "color": categoryColor.hex}}`,
    { slug }
  );
  return post.length ? post[0] : {};
};

export const fetchCaseStudiesLength = async (slug) => {
  const query = slug ? " && $slug in categories[]->slug.current" : "";
  const result = await client.fetch(`count(*[_type == "caseStudy" ${query}])`, {
    slug,
  });
  return result;
};

export const fetchCategoryCaseStudies = async (slug, start = 0, end) => {
  const range = end ? `[${start}...${end}]` : ``;
  const query = slug ? " && $slug in categories[]->slug.current" : "";
  const params = slug ? { slug } : {};

  const posts = await client.fetch(
    `*[_type == "caseStudy" ${query}] | order(_createdAt desc) ${range}  {_id, body, title, subTitle, "slug": slug.current, "mainImage": mainImage.asset->url, 'author' : {'name' : author->name, 'image' : author->image.asset->url}, 'publishedAt': _createdAt, 'categories': categories[]->{title, "color": categoryColor.hex}}`,
    params
  );
  return posts;
};
