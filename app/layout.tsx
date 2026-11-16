import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://lumivora-swart.vercel.app"), // replace with your production domain
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: "https://lumivora-swart.vercel.app",
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
