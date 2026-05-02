import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "regexlab — a live regex playground",
  description:
    "A fast, dark-themed regex playground. Live highlighting, replace mode, common patterns, and a cheat sheet — all in your browser.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
