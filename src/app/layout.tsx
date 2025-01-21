import type { Metadata } from "next";
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
          ANDREW PARMAR
        </header>

        {children}

        {false && <footer>
          <p>© 2025 Andrew Parmar</p>
        </footer>}
      </body>
    </html>
  );
}
