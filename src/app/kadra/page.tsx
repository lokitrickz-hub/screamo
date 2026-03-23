import Navigation from "@/components/Navigation";
import Masters from "@/components/Masters";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kadra Trenerska — UKS ScreamoTrickz",
  description:
    "Poznaj trenerów UKS ScreamoTrickz. Andrzej Stec, Mariusz Piskorz i Wiktoria Bisaga — doświadczona kadra trickingu i akrobatyki.",
};

export default function KadraPage() {
  return (
    <>
      <Navigation />
      <Masters />
      <Footer />
    </>
  );
}
