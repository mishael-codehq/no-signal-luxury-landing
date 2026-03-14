import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import MarqueeSection from "@/components/MarqueeSection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-black selection:text-white">
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <MarqueeSection />
      <NewArrivalsSection />
      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

export default Index;
