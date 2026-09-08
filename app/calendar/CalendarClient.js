"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ChevronLeft, ChevronRight, LogOut, Plus, Trash2, X } from "lucide-react";

import {
  DAY_LOG_CATEGORIES,
  DEFAULT_CATEGORY,
  MAX_ENTRIES_PER_DAY,
  MAX_ENTRY_LENGTH,
  MAX_NOTE_LENGTH,
  WEEKDAYS,
  buildMonthGrid,
  categoryColor,
  formatFullDate,
  monthKeyOf,
  monthLabel,
  normalizeMonthKey,
  shiftMonth,
} from "@/utils/dayLog";

const VISIBLE_ENTRIES = 3;

const newKey = () => Math.random().toString(36).slice(2, 10);

const blankEntry = () => ({
  _key: newKey(),
  text: "",
  category: DEFAULT_CATEGORY,
  done: false,
});

const toMap = (logs) =>
  (logs || []).reduce((acc, log) => {
    acc[log.date] = { note: log.note || "", entries: log.entries || [] };
    return acc;
  }, {});

// Compares only what would actually be saved, so trailing whitespace and the
// always-present empty row never count as unsaved work.
const serializeDraft = (value) =>
  JSON.stringify({
    note: value.note.trim(),
    entries: value.entries
      .filter((entry) => entry.text.trim())
      .map(({ text, category, done }) => ({ text: text.trim(), category, done })),
  });

const CalendarClient = ({ initialMonth, today, initialLogs, canWrite }) => {
  const router = useRouter();
  const [month, setMonth] = useState(initialMonth);
  const [logsByDate, setLogsByDate] = useState(() => toMap(initialLogs));
  const [openDate, setOpenDate] = useState(null);
  const [draft, setDraft] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [focusIndex, setFocusIndex] = useState(null);
  const [baseline, setBaseline] = useState("");
  const inputRefs = useRef([]);
  // Lets the Escape listener call the current guarded close without re-binding.
  const requestCloseRef = useRef(() => { });

  const cells = useMemo(() => buildMonthGrid(month), [month]);
  const todayMonth = monthKeyOf(today);

  const closePanel = () => {
    setOpenDate(null);
    setDraft(null);
    setBaseline("");
    setError("");
  };

  const isDirty = Boolean(draft) && serializeDraft(draft) !== baseline;

  const requestClose = () => {
    if (isDirty && !window.confirm("Discard the changes to this day?")) return;
    closePanel();
  };
  requestCloseRef.current = requestClose;

  const loadMonthData = async (targetMonth) => {
    try {
      const res = await fetch(`/api/day-log?m=${targetMonth}`);
      if (!res.ok) {
        if (res.status === 401) {
          router.refresh();
        }
        return;
      }
      const data = await res.json();
      if (Array.isArray(data?.logs)) {
        setLogsByDate((prev) => {
          const next = { ...prev };
          for (const log of data.logs) {
            next[log.date] = { note: log.note || "", entries: log.entries || [] };
          }
          return next;
        });
      }
    } catch (err) {
      console.error("Failed to load month data:", err);
    }
  };

  const changeMonth = (targetMonth) => {
    if (targetMonth === month) return;
    if (isDirty && !window.confirm("Discard the changes to this day?")) return;
    closePanel();
    setMonth(targetMonth);
    window.history.pushState(null, "", `/calendar?m=${targetMonth}`);
    loadMonthData(targetMonth);
  };

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const urlMonth = normalizeMonthKey(params.get("m"), today);
      if (urlMonth !== month) {
        setMonth(urlMonth);
        closePanel();
        loadMonthData(urlMonth);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [month, today]);

  const openDay = (dateKey) => {
    const stored = logsByDate[dateKey];
    const next = {
      note: stored?.note || "",
      // Start with one empty line so the day is immediately writable.
      entries: stored?.entries?.length
        ? stored.entries.map((entry) => ({ ...entry }))
        : [blankEntry()],
    };
    setDraft(next);
    setBaseline(serializeDraft(next));
    setError("");
    setOpenDate(dateKey);
    setFocusIndex(0);
  };

  useEffect(() => {
    if (!openDate) return undefined;
    const handleKey = (event) => {
      if (event.key === "Escape") requestCloseRef.current();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [openDate]);

  useEffect(() => {
    if (focusIndex === null) return;
    inputRefs.current[focusIndex]?.focus();
    setFocusIndex(null);
  }, [focusIndex]);

  const updateEntry = (index, patch) =>
    setDraft((current) => ({
      ...current,
      entries: current.entries.map((entry, i) =>
        i === index ? { ...entry, ...patch } : entry
      ),
    }));

  const addEntryAfter = (index) => {
    setDraft((current) => {
      if (current.entries.length >= MAX_ENTRIES_PER_DAY) return current;
      const entries = [...current.entries];
      entries.splice(index + 1, 0, blankEntry());
      return { ...current, entries };
    });
    setFocusIndex(index + 1);
  };

  const removeEntry = (index) =>
    setDraft((current) => {
      const entries = current.entries.filter((_, i) => i !== index);
      return { ...current, entries: entries.length ? entries : [blankEntry()] };
    });

  // Reads the category off the latest state rather than the render closure, so
  // clicks in quick succession each advance a step instead of collapsing into one.
  const cycleCategory = (index) =>
    setDraft((current) => ({
      ...current,
      entries: current.entries.map((entry, i) => {
        if (i !== index) return entry;
        const position = DAY_LOG_CATEGORIES.findIndex(
          (category) => category.value === (entry.category || DEFAULT_CATEGORY)
        );
        const next = DAY_LOG_CATEGORIES[(position + 1) % DAY_LOG_CATEGORIES.length];
        return { ...entry, category: next.value };
      }),
    }));

  const handleEntryKeyDown = (event, index) => {
    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      save();
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      addEntryAfter(index);
      return;
    }
    // Backspace on an empty line removes it, the way a list behaves in a notes app.
    if (
      event.key === "Backspace" &&
      !draft.entries[index].text &&
      draft.entries.length > 1
    ) {
      event.preventDefault();
      removeEntry(index);
      setFocusIndex(Math.max(0, index - 1));
    }
  };

  const save = async () => {
    if (!canWrite || saving) return;

    setSaving(true);
    setError("");

    const payload = {
      date: openDate,
      note: draft.note.trim(),
      entries: draft.entries
        .filter((entry) => entry.text.trim())
        .map(({ _key, text, category, done }) => ({
          _key,
          text: text.trim(),
          category,
          done,
        })),
    };

    try {
      const res = await fetch("/api/day-log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // The session expired while the panel was open — send them back to the lock.
        if (res.status === 401) {
          router.refresh();
          return;
        }
        const data = await res.json().catch(() => ({}));
        setError(data.message || "Could not save this day.");
        return;
      }

      const saved = await res.json();
      setLogsByDate((prev) => {
        const next = { ...prev };
        if (!saved.entries.length && !saved.note) {
          delete next[saved.date];
        } else {
          next[saved.date] = { note: saved.note, entries: saved.entries };
        }
        return next;
      });
      closePanel();
    } catch {
      setError("Could not reach the server. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const lock = async () => {
    await fetch("/api/calendar/session", { method: "DELETE" }).catch(() => {});
    router.refresh();
  };

  const navButtonClass =
    "flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-border/60 transition-colors font-mono";

  return (
    <div className="min-h-screen pt-14">
      <div className="max-w-6xl mx-auto px-6 py-10 lg:py-14">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-8 font-mono">
          <span className="inline-block w-8 h-px bg-border" />
          calendar · private
        </div>

        {/* ── Month header + navigation ── */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <h1 className="text-4xl sm:text-5xl font-light font-serif tracking-tight">
            {monthLabel(month)}
          </h1>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => changeMonth(shiftMonth(month, -1))}
              aria-label="Previous month"
              className={`${navButtonClass} w-8 h-8`}
            >
              <ChevronLeft size={15} />
            </button>
            <button
              type="button"
              onClick={() => changeMonth(todayMonth)}
              className={`${navButtonClass} h-8 px-3 text-xs ${month === todayMonth ? "text-foreground border-border/60" : ""
                }`}
            >
              today
            </button>
            <button
              type="button"
              onClick={() => changeMonth(shiftMonth(month, 1))}
              aria-label="Next month"
              className={`${navButtonClass} w-8 h-8`}
            >
              <ChevronRight size={15} />
            </button>
            <button
              type="button"
              onClick={lock}
              title="Lock the calendar"
              className={`${navButtonClass} h-8 px-3 text-xs gap-1.5 ml-1`}
            >
              <LogOut size={12} />
              lock
            </button>
          </div>
        </div>

        {!canWrite && (
          <div className="mb-6 border border-border bg-card px-4 py-3 text-xs text-muted-foreground font-mono leading-relaxed">
            Saving is off until{" "}
            <span className="text-primary">SANITY_API_WRITE_TOKEN</span> is set. You
            can still browse existing days.
          </div>
        )}

        {/* ── Month grid ── */}
        <div className="grid grid-cols-7 border-t border-l border-border">
          {WEEKDAYS.map((weekday) => (
            <div
              key={weekday}
              className="border-r border-b border-border px-2 py-2 text-[10px] sm:text-xs text-muted-foreground font-mono text-center"
            >
              {weekday}
            </div>
          ))}

          {cells.map((cell) => {
            if (!cell.dateKey) {
              return (
                <div
                  key={cell.key}
                  className="border-r border-b border-border bg-secondary/20 min-h-[84px] sm:min-h-[116px]"
                />
              );
            }

            const log = logsByDate[cell.dateKey];
            const entries = log?.entries || [];
            const hasContent = entries.length > 0 || Boolean(log?.note);
            const isToday = cell.dateKey === today;

            return (
              <button
                key={cell.key}
                onClick={() => openDay(cell.dateKey)}
                aria-label={formatFullDate(cell.dateKey)}
                className={`text-left border-r border-b border-border min-h-[84px] sm:min-h-[116px] p-1.5 sm:p-2 transition-colors hover:bg-secondary/40 ${hasContent ? "bg-primary/[0.06]" : ""
                  }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span
                    className={`text-[11px] sm:text-xs font-mono tabular-nums leading-5 ${isToday
                      ? "bg-primary text-primary-foreground px-1.5 rounded-sm"
                      : hasContent
                        ? "text-foreground"
                        : "text-muted-foreground"
                      }`}
                  >
                    {cell.day}
                  </span>
                  {entries.length > 0 && (
                    <span className="sm:hidden text-[9px] text-muted-foreground font-mono">
                      {entries.length}
                    </span>
                  )}
                </div>

                {log?.note && (
                  <div className="hidden sm:block text-[10px] text-primary/80 italic font-serif truncate mb-1">
                    {log.note}
                  </div>
                )}

                {/* Cells are too narrow for text on phones — show category dots instead. */}
                <div className="flex flex-wrap gap-1 sm:hidden">
                  {entries.slice(0, 6).map((entry) => (
                    <span
                      key={entry._key}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: categoryColor(entry.category),
                        opacity: entry.done ? 0.4 : 1,
                      }}
                    />
                  ))}
                </div>

                <div className="hidden sm:block space-y-0.5">
                  {entries.slice(0, VISIBLE_ENTRIES).map((entry) => (
                    <div key={entry._key} className="flex items-start gap-1.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 mt-[6px]"
                        style={{
                          backgroundColor: categoryColor(entry.category),
                          opacity: entry.done ? 0.4 : 1,
                        }}
                      />
                      <span
                        className={`flex-1 min-w-0 truncate text-[11px] leading-snug ${entry.done
                          ? "line-through text-muted-foreground/60"
                          : "text-foreground/80"
                          }`}
                      >
                        {entry.text}
                      </span>
                    </div>
                  ))}
                  {entries.length > VISIBLE_ENTRIES && (
                    <div className="pl-3 text-[10px] text-muted-foreground font-mono">
                      +{entries.length - VISIBLE_ENTRIES} more
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Legend ── */}
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
          {DAY_LOG_CATEGORIES.map((category) => (
            <span
              key={category.value}
              className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-mono"
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: category.color }}
              />
              {category.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Day panel ── */}
      {openDate && draft && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-stretch sm:justify-end">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={requestClose}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label={formatFullDate(openDate)}
            className="relative w-full sm:w-[420px] max-h-[85vh] sm:max-h-none sm:h-full bg-card border-t sm:border-t-0 sm:border-l border-border flex flex-col"
          >
            <div className="flex items-start justify-between gap-3 px-5 py-4 border-b border-border">
              <div>
                <div className="text-[10px] text-muted-foreground font-mono mb-1">
                  {openDate}
                  {isDirty && <span className="text-primary/70"> · unsaved</span>}
                </div>
                <h2 className="text-lg font-light font-serif leading-tight">
                  {formatFullDate(openDate)}
                </h2>
              </div>
              <button
                onClick={requestClose}
                aria-label="Close"
                className="text-muted-foreground hover:text-foreground transition-colors mt-1"
              >
                <X size={16} />
              </button>
            </div>

            {/* data-lenis-prevent keeps smooth-scroll from hijacking this panel */}
            <div className="flex-1 overflow-y-auto px-5 py-4" data-lenis-prevent>
              <label
                htmlFor="day-note"
                className="block text-[10px] text-muted-foreground font-mono mb-1.5"
              >
                Today's highlight
              </label>
              <input
                id="day-note"
                type="text"
                value={draft.note}
                onChange={(event) =>
                  setDraft((current) => ({ ...current, note: event.target.value }))
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    save();
                  }
                }}
                placeholder="a holiday, a trip, a mood…"
                className="w-full bg-transparent border-b border-border/60 focus:border-primary/50 px-0.5 py-1 text-sm outline-none transition-colors mb-6"
              />

              <div className="text-[10px] text-muted-foreground font-mono mb-2.5">
                what you did
              </div>

              <div className="space-y-2.5">
                {draft.entries.map((entry, index) => (
                  <div key={entry._key} className="flex items-center gap-2">
                    <button
                      onClick={() => updateEntry(index, { done: !entry.done })}
                      aria-label={entry.done ? "Mark as not done" : "Mark as done"}
                      title={entry.done ? "not done" : "done"}
                      className={`w-4 h-4 shrink-0 border flex items-center justify-center transition-colors ${entry.done
                        ? "bg-primary border-primary"
                        : "border-border hover:border-primary/50"
                        }`}
                    >
                      {entry.done && (
                        <Check size={10} className="text-primary-foreground" />
                      )}
                    </button>

                    <input
                      ref={(element) => {
                        inputRefs.current[index] = element;
                      }}
                      value={entry.text}
                      maxLength={MAX_ENTRY_LENGTH}
                      onChange={(event) =>
                        updateEntry(index, { text: event.target.value })
                      }
                      onKeyDown={(event) => handleEntryKeyDown(event, index)}
                      placeholder="what did you do?"
                      className={`flex-1 min-w-0 bg-transparent border-b border-border/60 focus:border-primary/50 px-0.5 py-1 text-sm outline-none transition-colors ${entry.done ? "line-through text-muted-foreground" : "text-foreground"
                        }`}
                    />

                    <button
                      onClick={() => cycleCategory(index)}
                      aria-label={`Category: ${entry.category || DEFAULT_CATEGORY}. Click to change.`}
                      title={entry.category || DEFAULT_CATEGORY}
                      className="w-4 h-4 shrink-0 rounded-full border border-border/60 hover:scale-110 transition-transform"
                      style={{ backgroundColor: categoryColor(entry.category) }}
                    />

                    <button
                      onClick={() => removeEntry(index)}
                      aria-label="Remove line"
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={() => addEntryAfter(draft.entries.length - 1)}
                disabled={draft.entries.length >= MAX_ENTRIES_PER_DAY}
                className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-mono"
              >
                <Plus size={12} />
                add line
              </button>

              <p className="mt-6 text-[10px] text-muted-foreground/70 font-mono leading-relaxed">
                enter for a new line · ctrl+enter saves · click the dot to change
                category · the box strikes a line through
              </p>
            </div>

            <div className="border-t border-border px-5 py-4">
              {error && (
                <p className="mb-3 text-xs text-destructive font-mono">{error}</p>
              )}
              <div className="flex items-center gap-2">
                <button
                  onClick={save}
                  disabled={!canWrite || saving}
                  className="flex-1 bg-primary text-primary-foreground px-4 py-2.5 text-sm font-mono hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  {saving ? "saving…" : "save"}
                </button>
                <button
                  onClick={requestClose}
                  className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground border border-border hover:border-border/60 transition-colors font-mono"
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarClient;
