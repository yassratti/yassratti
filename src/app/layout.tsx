import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Yassr Atti",
  description:
    "Hi i'm yassr, would add more shi in the future, pretty lazy rn, thanks for reading this",
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
