import Playground from "./components/Playground";
import CheatSheet from "./components/CheatSheet";

export default function Home() {
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-10 py-8 max-w-[1400px] mx-auto">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div
            aria-hidden
            className="w-9 h-9 rounded-xl flex items-center justify-center mono text-[15px]"
            style={{
              background: "linear-gradient(135deg, #6c63ff 0%, #8077ff 100%)",
              color: "white",
              boxShadow: "0 4px 16px rgba(108,99,255,0.35)",
            }}
          >
            /\\/
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">regexlab</h1>
            <p className="text-xs text-[var(--muted)] -mt-0.5">
              a live regex playground
            </p>
          </div>
        </div>
        <a
          className="btn"
          href="https://github.com/Muhammadwaseem1"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-6">
        <Playground />
        <aside className="lg:sticky lg:top-6 self-start">
          <CheatSheet />
        </aside>
      </div>

      <footer className="mt-12 mb-4 text-center text-xs text-[var(--muted)]">
        built with Next.js 15 — runs entirely in your browser
      </footer>
    </main>
  );
}
