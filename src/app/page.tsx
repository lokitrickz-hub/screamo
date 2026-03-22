import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Masters from "@/components/Masters";
import News from "@/components/News";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Masters />
      <News />
      <Gallery />
      <Footer />
    </>
  );
}
