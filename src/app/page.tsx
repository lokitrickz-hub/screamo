import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ClassesPreview from "@/components/ClassesPreview";
import KadraPreview from "@/components/KadraPreview";
import SocialWall from "@/components/SocialWall";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <ClassesPreview />
      <KadraPreview />
      <SocialWall />
      <Footer />
    </>
  );
}
