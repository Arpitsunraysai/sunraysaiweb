import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunrays AI | AI & Software Engineering",
  description: "Architecture-first AI and software development for global brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@1,400&family=Bricolage+Grotesque:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body
        className="font-sans antialiased bg-bg-light text-text-dark"
        style={{ cursor: "none", overflowX: "hidden" }}
      >
        {children}
      </body>
    </html>
  );
}
