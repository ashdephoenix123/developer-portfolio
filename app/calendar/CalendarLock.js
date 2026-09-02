"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

const CalendarLock = ({ configured }) => {
  const router = useRouter();
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [checking, setChecking] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!passcode || checking) return;

    setChecking(true);
    setError("");

    try {
      const res = await fetch("/api/calendar/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode }),
      });

      if (res.ok) {
        setPasscode("");
        // The page re-renders on the server, which is where the cookie is read.
        router.refresh();
        return;
      }

      const data = await res.json().catch(() => ({}));
      setError(data.message || "Wrong passcode.");
    } catch {
      setError("Could not reach the server. Please try again.");
    } finally {
      setChecking(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-14">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-8 font-mono">
          <span className="inline-block w-8 h-px bg-border" />
          private
        </div>

        <div className="border border-border bg-card p-6">
          <div className="flex items-center gap-2.5 mb-5">
            <Lock size={15} className="text-primary" />
            <h1 className="text-lg font-light font-serif">Calendar</h1>
          </div>

          {configured ? (
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="calendar-passcode"
                className="block text-xs text-muted-foreground mb-2 font-mono"
              >
                passcode
              </label>
              <input
                id="calendar-passcode"
                type="password"
                autoFocus
                autoComplete="current-password"
                value={passcode}
                onChange={(event) => setPasscode(event.target.value)}
                className="w-full bg-background border border-border px-3 py-2.5 text-sm text-foreground font-mono outline-none focus:border-primary/50 transition-colors"
              />

              {error && (
                <p className="mt-3 text-xs text-destructive font-mono">{error}</p>
              )}

              <button
                type="submit"
                disabled={!passcode || checking}
                className="mt-5 w-full bg-primary text-primary-foreground px-4 py-2.5 text-sm font-mono hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {checking ? "checking…" : "unlock"}
              </button>
            </form>
          ) : (
            <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontWeight: 300 }}>
              This page needs{" "}
              <code className="text-primary font-mono text-xs">CALENDAR_EDIT_SECRET</code>{" "}
              set in the environment before it can be unlocked.
            </p>
          )}
        </div>

        <p className="mt-5 text-xs text-muted-foreground leading-relaxed font-mono">
          Nothing here is public. Days load only after you unlock.
        </p>
      </div>
    </div>
  );
};

export default CalendarLock;
