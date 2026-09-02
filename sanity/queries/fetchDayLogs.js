import { client } from "../lib/client";

// The calendar is a private editing surface: a CDN-cached read would show stale
// entries straight after a save, so read from the API directly.
const freshClient = client.withConfig({ useCdn: false });

export const fetchDayLogsForMonth = async (start, end) => {
  const query = `*[_type == "dayLog" && date >= $start && date <= $end] | order(date asc) {
    date,
    note,
    entries[]{ _key, text, category, done }
  }`;

  const logs = await freshClient.fetch(
    query,
    { start, end },
    { cache: "no-store" }
  );
  return logs || [];
};
