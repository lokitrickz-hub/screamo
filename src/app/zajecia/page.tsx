import Navigation from "@/components/Navigation";
import Classes from "@/components/Classes";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zajęcia — UKS ScreamoTrickz",
  description:
    "Treningi trickingu i akrobatyki dla dzieci od 5 lat w Nowym Sączu i okolicach. Grupy wiekowe, grafik zajęć i cennik.",
};

export default function ZajeciaPage() {
  return (
    <>
      <Navigation />
      <Classes />
      <Footer />
    </>
  );
}
