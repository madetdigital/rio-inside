import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  GoogleAnalytics,
  GoogleTagManager,
} from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RioInside | Viva o Rio como um Insider",
  description:
    "Experiências, gastronomia, lifestyle e concierge inteligente para viver o Rio de Janeiro como um verdadeiro insider.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <GoogleTagManager gtmId="GTM-MZX7GPXW" />
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-RWCZBQH3QJ" />
    </html>
  );
}
