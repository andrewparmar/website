import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrew Parmar",
  description: "A collection of notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link href="/" className="site-logo">Andrew Parmar</Link>
        </header>
        {children}
        {false && <footer>
          <p>© 2025 Andrew Parmar</p>
        </footer>}
      </body>
    </html>
  );
}
