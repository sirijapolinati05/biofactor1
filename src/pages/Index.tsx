import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FocusAreas from "@/components/FocusAreas";
import ImpactSection from "@/components/ImpactSection";
import LatestUpdates from "@/components/LatestUpdates";
import AwardsSection from "@/components/AwardsSection";
import FarmerStories from "@/components/FarmerStories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FocusAreas />
      <ImpactSection />
      <LatestUpdates />
      <AwardsSection />
      <FarmerStories />
      <Footer />
    </div>
  );
};

export default Index;