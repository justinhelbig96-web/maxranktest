import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/Features";
import Coaches from "@/components/Coaches";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#080808] overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <Features />
      <Coaches />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
