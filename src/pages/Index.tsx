import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ClubsSection from "@/components/ClubsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ClubsSection />
      <Footer />
    </div>
  );
};

export default Index;
