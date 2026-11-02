import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/source-serif-4";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anugrah Prima Pratama | Portofolio",
  description:
    "Portofolio Anugrah Prima Pratama, lulusan Informatika Universitas Islam Indonesia: proyek web, mobile, game, dan artikel jurnal.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
