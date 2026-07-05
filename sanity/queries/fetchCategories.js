import { client } from "../lib/client";

export const fetchAllCategories = async () => {
  const categories = await client.fetch(
    `*[_type == "category"  ] {"id":_id, "name": title, "slug": slug.current, _updatedAt}`
  );
  return categories;
};
