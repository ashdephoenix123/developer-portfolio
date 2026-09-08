import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { CALENDAR_COOKIE_NAME, isValidSessionToken } from "@/utils/calendarAuth";
import { writeClient } from "@/sanity/lib/writeClient";
import { fetchDayLogsForMonth } from "@/sanity/queries/fetchDayLogs";
import {
  DEFAULT_CATEGORY,
  MAX_ENTRIES_PER_DAY,
  MAX_ENTRY_LENGTH,
  dayLogId,
  isKnownCategory,
  isValidDateKey,
  monthBounds,
  normalizeMonthKey,
  todayInZone,
} from "@/utils/dayLog";

export const runtime = "nodejs";

export async function GET(request) {
  const token = request.cookies.get(CALENDAR_COOKIE_NAME)?.value;
  if (!isValidSessionToken(token)) {
    return NextResponse.json({ message: "Not authorised." }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const month = normalizeMonthKey(searchParams.get("m"), todayInZone());
  const { start, end } = monthBounds(month);

  try {
    const logs = await fetchDayLogsForMonth(start, end);
    return NextResponse.json({ month, logs });
  } catch (error) {
    console.error("Day log fetch failed:", error);
    return NextResponse.json(
      { message: "Could not fetch logs." },
      { status: 500 }
    );
  }
}


const randomKey = () =>
  Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 6);

// Everything from the client is untrusted, even behind the passcode: cap the
// volume and drop anything that isn't a shape we recognise.
const normalizeEntries = (value) => {
  if (!Array.isArray(value)) return [];

  return value
    .slice(0, MAX_ENTRIES_PER_DAY)
    .map((entry) => {
      const text = typeof entry?.text === "string" ? entry.text.trim() : "";
      if (!text) return null;
      return {
        _type: "entry",
        _key: typeof entry?._key === "string" && entry._key ? entry._key : randomKey(),
        text: text.slice(0, MAX_ENTRY_LENGTH),
        category: isKnownCategory(entry?.category) ? entry.category : DEFAULT_CATEGORY,
        done: entry?.done === true,
      };
    })
    .filter(Boolean);
};

export async function POST(request) {
  const token = request.cookies.get(CALENDAR_COOKIE_NAME)?.value;
  if (!isValidSessionToken(token)) {
    return NextResponse.json({ message: "Not authorised." }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const date = body?.date;

  // Validate the request before the server's own configuration, so a malformed
  // payload always reports as a 400 rather than hiding behind a 503.
  if (!isValidDateKey(date)) {
    return NextResponse.json(
      { message: "A valid date (YYYY-MM-DD) is required." },
      { status: 400 }
    );
  }

  if (!process.env.SANITY_API_WRITE_TOKEN) {
    return NextResponse.json(
      { message: "SANITY_API_WRITE_TOKEN is not set on the server." },
      { status: 503 }
    );
  }

  const note =
    typeof body?.note === "string" ? body.note.trim() : "";
  const entries = normalizeEntries(body?.entries);

  try {
    // An emptied day is a deleted day — otherwise the dataset fills with blanks.
    if (!entries.length && !note) {
      await writeClient.delete(dayLogId(date));
      revalidatePath("/calendar");
      return NextResponse.json({ date, note: "", entries: [] });
    }

    const doc = {
      _id: dayLogId(date),
      _type: "dayLog",
      date,
      entries,
      ...(note ? { note } : {}),
    };

    await writeClient.createOrReplace(doc);
    revalidatePath("/calendar");

    // Echo the stored shape back so the page renders exactly what was saved.
    return NextResponse.json({ date, note, entries });
  } catch (error) {
    console.error("Day log save failed:", error);
    return NextResponse.json(
      { message: "Could not save this day. Please try again." },
      { status: 500 }
    );
  }
}
