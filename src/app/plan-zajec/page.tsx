import Navigation from "@/components/Navigation";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan zajęć — UKS ScreamoTrickz",
  description:
    "Aktualny grafik treningów trickingu i akrobatyki w Nowym Sączu. Godziny, lokalizacje i trenerzy — sprawdź kiedy trenujemy.",
};

export default function PlanZajecPage() {
  return (
    <>
      <Navigation />
      <Schedule />
      <Footer />
    </>
  );
}
