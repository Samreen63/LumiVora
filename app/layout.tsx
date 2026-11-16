import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LumiVora - Launching in 3 Days",
  description: "LumiVora is under construction. Launching in 3 days.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
