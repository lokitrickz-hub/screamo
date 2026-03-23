import Navigation from "@/components/Navigation";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — UKS ScreamoTrickz",
  description:
    "Aktualności, relacje z zawodów i wydarzenia ze świata trickingu. Blog UKS ScreamoTrickz.",
};

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <BlogList />
      <Footer />
    </>
  );
}
