import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UKS ScreamoTrickz — Tricking & Akrobatyka | Nowy Sącz",
  description:
    "Uczniowski Klub Sportowy ScreamoTrickz z Nowego Sącza. Tricking, akrobatyka i gimnastyka na Sądecczyźnie. Dołącz do nas!",
  keywords: ["tricking", "akrobatyka", "Nowy Sącz", "ScreamoTrickz", "UKS", "gimnastyka", "Sądecczyzna"],
  openGraph: {
    title: "UKS ScreamoTrickz — Tricking & Akrobatyka",
    description: "Uczniowski Klub Sportowy ScreamoTrickz. Tricking, akrobatyka i gimnastyka na Sądecczyźnie.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
