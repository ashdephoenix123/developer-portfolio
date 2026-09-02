import crypto from "crypto";

// Server-only. Never import this from a client component — it would both fail
// to bundle and leak the passcode into the browser.

export const CALENDAR_COOKIE_NAME = "calendar_session";
export const SESSION_TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days

const passcode = () => process.env.CALENDAR_EDIT_SECRET || "";

export const isCalendarConfigured = () => passcode().length > 0;

export const hasWriteToken = () => Boolean(process.env.SANITY_API_WRITE_TOKEN);

// Deriving the signing key from the passcode means there's no second secret to
// manage, and changing the passcode invalidates every existing session.
const signingKey = () =>
  crypto.createHash("sha256").update(`calendar-session:${passcode()}`).digest();

const sign = (payload) =>
  crypto.createHmac("sha256", signingKey()).update(payload).digest("base64url");

// timingSafeEqual throws on length mismatch, so compare fixed-length digests.
const safeEqual = (a, b) => {
  const left = crypto.createHash("sha256").update(String(a)).digest();
  const right = crypto.createHash("sha256").update(String(b)).digest();
  return crypto.timingSafeEqual(left, right);
};

export const isPasscodeValid = (input) => {
  if (!isCalendarConfigured() || typeof input !== "string" || !input) return false;
  return safeEqual(input, passcode());
};

export const createSessionToken = () => {
  const expiresAt = String(Date.now() + SESSION_TTL_SECONDS * 1000);
  return `${expiresAt}.${sign(expiresAt)}`;
};

export const isValidSessionToken = (token) => {
  if (!isCalendarConfigured() || typeof token !== "string") return false;

  const [expiresAt, signature] = token.split(".");
  if (!expiresAt || !signature) return false;
  if (!safeEqual(signature, sign(expiresAt))) return false;

  const expiry = Number(expiresAt);
  return Number.isFinite(expiry) && expiry > Date.now();
};

export const sessionCookieOptions = () => ({
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: SESSION_TTL_SECONDS,
});
