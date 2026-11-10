import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque/standard.css";
import "@fontsource-variable/source-serif-4/standard.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anugrah Prima Pratama | Web Developer",
  description:
    "Portfolio of Anugrah Prima Pratama, web developer and Informatics graduate from Universitas Islam Indonesia: web app projects, UI/UX design, skills, and a published journal article.",
};

export const viewport: Viewport = {
  themeColor: "#0b0a08",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
