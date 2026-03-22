import Navigation from "@/components/Navigation";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nasza Historia — UKS ScreamoTrickz",
  description: "Historia UKS ScreamoTrickz od powstania w 2011 roku. Poznaj naszą drogę od treningów w parku do półfinału Mam Talent.",
};

export default function HistoriaPage() {
  return (
    <>
      <Navigation />
      <Timeline />
      <Footer />
    </>
  );
}
