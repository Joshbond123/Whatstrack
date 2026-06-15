import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SocialProofBar from "../components/SocialProofBar";
import ImageSection from "../components/ImageSection";
import HowItWorksSection from "../components/HowItWorksSection";
import FeaturesSection from "../components/FeaturesSection";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="bg-[#070C1A] min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <ImageSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <CTABanner />
      <Footer />
    </div>
  );
}
