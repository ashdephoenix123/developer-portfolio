import { NextResponse } from "next/server";

import {
  CALENDAR_COOKIE_NAME,
  createSessionToken,
  isCalendarConfigured,
  isPasscodeValid,
  sessionCookieOptions,
} from "@/utils/calendarAuth";

export const runtime = "nodejs";

// Enough friction to make rapid guessing tedious without annoying a real login.
const FAILED_ATTEMPT_DELAY_MS = 400;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(request) {
  if (!isCalendarConfigured()) {
    return NextResponse.json(
      { message: "CALENDAR_EDIT_SECRET is not set on the server." },
      { status: 503 }
    );
  }

  const body = await request.json().catch(() => ({}));

  if (!isPasscodeValid(body?.passcode)) {
    await wait(FAILED_ATTEMPT_DELAY_MS);
    return NextResponse.json({ message: "Wrong passcode." }, { status: 401 });
  }

  const response = NextResponse.json({ message: "success" });
  response.cookies.set({
    name: CALENDAR_COOKIE_NAME,
    value: createSessionToken(),
    ...sessionCookieOptions(),
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ message: "success" });
  response.cookies.set({
    name: CALENDAR_COOKIE_NAME,
    value: "",
    ...sessionCookieOptions(),
    maxAge: 0,
  });
  return response;
}
