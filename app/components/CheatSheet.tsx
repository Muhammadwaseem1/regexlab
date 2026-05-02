"use client";

import { CHEAT_SHEET } from "../lib/patterns";

export default function CheatSheet() {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold">Cheat sheet</h2>
        <span className="text-xs text-[var(--muted)]">Quick reference</span>
      </div>
      <div className="space-y-4">
        {CHEAT_SHEET.map((group) => (
          <div key={group.title}>
            <div className="text-xs uppercase tracking-wider text-[var(--muted)] mb-1.5">
              {group.title}
            </div>
            <div className="space-y-1">
              {group.rows.map((row) => (
                <div
                  key={row.token}
                  className="flex items-start gap-3 text-[13px] leading-snug"
                >
                  <code
                    className="mono shrink-0 text-[var(--accent)] bg-[var(--panel-2)] border border-[var(--border)] rounded px-1.5 py-0.5 min-w-[58px] text-center"
                  >
                    {row.token}
                  </code>
                  <span className="text-[var(--text)]">{row.meaning}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
