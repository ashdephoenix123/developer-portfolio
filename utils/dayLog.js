// Shared by the Sanity schema, the write API and the calendar UI so the
// categories and limits can never drift apart.

export const TIME_ZONE = "Asia/Kolkata";

export const DAY_LOG_CATEGORIES = [
  { value: "learning", label: "learning", color: "#b9ff4d" },
  { value: "work", label: "work", color: "#4dcfff" },
  { value: "personal", label: "personal", color: "#c98bff" },
  { value: "health", label: "health", color: "#34d399" },
  { value: "travel", label: "travel", color: "#ffb84d" },
  { value: "misc", label: "misc", color: "#888880" },
];

export const DEFAULT_CATEGORY = "misc";

const CATEGORY_COLORS = DAY_LOG_CATEGORIES.reduce((acc, category) => {
  acc[category.value] = category.color;
  return acc;
}, {});

export const categoryColor = (value) =>
  CATEGORY_COLORS[value] || CATEGORY_COLORS[DEFAULT_CATEGORY];

export const isKnownCategory = (value) => Boolean(CATEGORY_COLORS[value]);

// Caps are enforced server-side too — a leaked passcode shouldn't be able to
// dump arbitrary volumes of content into the dataset.
export const MAX_ENTRIES_PER_DAY = 20;
export const MAX_ENTRY_LENGTH = 280;
export const MAX_NOTE_LENGTH = 80;

export const WEEKDAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const DATE_KEY_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const MONTH_KEY_PATTERN = /^\d{4}-\d{2}$/;

const pad = (value) => String(value).padStart(2, "0");

// Day 0 of the next month is the last day of this one.
export const daysInMonth = (year, month) =>
  new Date(Date.UTC(year, month, 0)).getUTCDate();

export const isValidDateKey = (value) => {
  if (typeof value !== "string" || !DATE_KEY_PATTERN.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  if (month < 1 || month > 12) return false;
  return day >= 1 && day <= daysInMonth(year, month);
};

export const isValidMonthKey = (value) => {
  if (typeof value !== "string" || !MONTH_KEY_PATTERN.test(value)) return false;
  const month = Number(value.slice(5, 7));
  return month >= 1 && month <= 12;
};

// en-CA formats as YYYY-MM-DD, which is exactly the key format we store.
export const todayInZone = (timeZone = TIME_ZONE) =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

export const monthKeyOf = (dateKey) => dateKey.slice(0, 7);

export const normalizeMonthKey = (value, fallbackDateKey) =>
  isValidMonthKey(value) ? value : monthKeyOf(fallbackDateKey);

export const monthBounds = (monthKey) => {
  const [year, month] = monthKey.split("-").map(Number);
  return {
    start: `${monthKey}-01`,
    end: `${monthKey}-${pad(daysInMonth(year, month))}`,
  };
};

export const shiftMonth = (monthKey, delta) => {
  const [year, month] = monthKey.split("-").map(Number);
  // Month is 0-indexed here, so `month - 1 + delta` rolls the year for us.
  const shifted = new Date(Date.UTC(year, month - 1 + delta, 1));
  return `${shifted.getUTCFullYear()}-${pad(shifted.getUTCMonth() + 1)}`;
};

// Dates are built with Date.UTC, so every formatter below must read them back
// as UTC — otherwise a negative-offset locale renders the previous day.
export const monthLabel = (monthKey) => {
  const [year, month] = monthKey.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
};

export const formatFullDate = (dateKey) => {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
};

// Rectangular Sunday-first grid: leading blanks, the days, then trailing blanks.
export const buildMonthGrid = (monthKey) => {
  const [year, month] = monthKey.split("-").map(Number);
  const leading = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
  const total = daysInMonth(year, month);
  const cells = [];

  for (let i = 0; i < leading; i++) {
    cells.push({ key: `lead-${i}`, dateKey: null, day: null });
  }
  for (let day = 1; day <= total; day++) {
    const dateKey = `${monthKey}-${pad(day)}`;
    cells.push({ key: dateKey, dateKey, day });
  }
  while (cells.length % 7 !== 0) {
    cells.push({ key: `trail-${cells.length}`, dateKey: null, day: null });
  }
  return cells;
};

// Deterministic id keeps one document per day — saving twice updates, never duplicates.
export const dayLogId = (dateKey) => `dayLog-${dateKey}`;
