import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

// Server-only: the token must never reach the browser, so this module may only
// be imported from route handlers and server components.
export const writeClient = createClient({
  projectId: projectId || "placeholder-project-id",
  dataset: dataset || "production",
  apiVersion: apiVersion,
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});
