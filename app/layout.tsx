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
  metadataBase: new URL("https://rioinside.com.br"),
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
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZX7GPXW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
      <GoogleAnalytics gaId="G-RWCZBQH3QJ" />
    </html>
  );
}
