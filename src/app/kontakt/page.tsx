import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — UKS ScreamoTrickz",
  description:
    "Skontaktuj się z UKS ScreamoTrickz. Zapisy na treningi, pytania i współpraca. Jazowsko, Nowy Sącz.",
};

export default function KontaktPage() {
  return (
    <>
      <Navigation />
      <Contact />
      <Footer />
    </>
  );
}
