# regexlab

> a live regex playground for the browser

I keep ending up on regex101 a few times a week. It's great — but I wanted something smaller, darker, and more keyboard-friendly that I could keep on my own domain. So this is that.

## What it does

— Live pattern matching with highlighted matches in your test string
— A flag toggle row (g, i, m, s, u, y) so you don't have to remember the order
— A library of common patterns (email, URL, IPv4, hex, UUID v4, ISO date…) loaded with one click
— A match table with index, capture groups, and named groups
— A replace mode with live preview ($&, $1, $&lt;name&gt;)
— A cheat sheet docked on the right for the parts of the syntax I always forget
— Copy-to-clipboard everywhere
— Saves your last pattern in localStorage so refresh doesn't lose your work

Everything runs in the browser. No backend, no telemetry, no logging.

## Getting started

```bash
git clone https://github.com/Muhammadwaseem1/regexlab.git
cd regexlab
npm install
npm run dev
```

Then open http://localhost:3000

## Built with

— Next.js 15 (App Router)
— React 19
— TypeScript
— Tailwind CSS

## Why I built this

I was debugging a janky URL-extraction regex on a Saturday and got tired of switching tabs. Wanted to spin up a tool that opens fast, has a sensible default theme, and lets me drop in a sample with one click. Wrote it in one sitting.

If you want to extend it, the pattern library lives in `app/lib/patterns.ts` — drop new entries in there and they'll show up as pills automatically.
