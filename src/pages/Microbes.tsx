import Navbar from "@/components/Navbar";
import MicrobesHero from "@/components/microbes/MicrobesHero";
import AboutMicrobes from "@/components/microbes/AboutMicrobes";
import TypesOfMicrobes from "@/components/microbes/TypesOfMicrobes";
import OurMicrobialCollection from "@/components/microbes/OurMicrobialCollection";
import AdvancedTechnology from "@/components/microbes/AdvancedTechnology";
import SafetyGuidelines from "@/components/microbes/SafetyGuidelines";
import Footer from "@/components/Footer";

const Microbes = () => {
  return (
    <div className="bg-[#edf5ed] min-h-screen">

      <Navbar />

      <MicrobesHero />

      <AboutMicrobes />

      <TypesOfMicrobes />

      <OurMicrobialCollection />

      <AdvancedTechnology />

      <SafetyGuidelines />

      <Footer />

    </div>
  );
};

export default Microbes;