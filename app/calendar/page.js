import { cookies } from "next/headers";

import {
  CALENDAR_COOKIE_NAME,
  hasWriteToken,
  isCalendarConfigured,
  isValidSessionToken,
} from "@/utils/calendarAuth";
import { fetchDayLogsForMonth } from "@/sanity/queries/fetchDayLogs";
import { monthBounds, normalizeMonthKey, todayInZone } from "@/utils/dayLog";
import CalendarClient from "./CalendarClient";
import CalendarLock from "./CalendarLock";

// Private and per-request: the session cookie decides what this page renders,
// so it must never be cached or statically generated.
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Calendar",
  robots: { index: false, follow: false },
};

const CalendarPage = async ({ searchParams }) => {
  const unlocked = isValidSessionToken(cookies().get(CALENDAR_COOKIE_NAME)?.value);

  // Locked out: no day data is fetched, so none of it reaches the HTML.
  if (!unlocked) {
    return <CalendarLock configured={isCalendarConfigured()} />;
  }

  const today = todayInZone();
  const month = normalizeMonthKey(searchParams?.m, today);
  const { start, end } = monthBounds(month);
  const logs = await fetchDayLogsForMonth(start, end);

  return (
    <CalendarClient
      initialMonth={month}
      today={today}
      initialLogs={logs}
      canWrite={hasWriteToken()}
    />
  );
};

export default CalendarPage;
