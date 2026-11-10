import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque/standard.css";
import "@fontsource-variable/source-serif-4/standard.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anugrah Prima Pratama | Web Developer",
  description:
    "Portofolio Anugrah Prima Pratama, web developer dan lulusan Informatika Universitas Islam Indonesia: proyek aplikasi web, keahlian, dan artikel jurnal.",
};

export const viewport: Viewport = {
  themeColor: "#0b0a08",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
