
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buried Hobbies | RC Club & Café",
  description:
    "Explore the Buried Hobbies café menu and discover the RC trails.",
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
