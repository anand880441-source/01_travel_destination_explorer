import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TravelExplorer",
  description:
    "Explore beautiful travel destinations around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}