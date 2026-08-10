import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aryanp.com"),
  title: "Aryan Panwar",
  description:
    "Software engineer. I love building and exploring new things — lately AI agents and small models that run on-device.",
  openGraph: {
    title: "Aryan Panwar",
    description:
      "Software engineer. I love building and exploring new things — lately AI agents and small models that run on-device.",
    url: "https://aryanp.com",
    siteName: "Aryan Panwar",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Aryan Panwar",
    description:
      "Software engineer. I love building and exploring new things — lately AI agents and small models that run on-device.",
    creator: "@aryann39",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
