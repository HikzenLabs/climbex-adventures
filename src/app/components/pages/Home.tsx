
import { CustomizeAdventureSection } from "../Home/CustomizeAdventureSection";
import { HeroSection } from "../Home/HeroSection";
import { FeaturedReviewsSection } from "../Home/FeaturedReviewsSection";
import { FeaturedTreksSection } from "../Home/FeaturedTreksSection";
import { CtaSection } from "../Home/CtaSection";
import { FeaturedTravelsSection } from "../Home/FeaturedTravelsSection";

export function Home() {


  return (
    <div className="min-h-screen bg-[#071018] overflow-hidden">

      {/* HERO SECTION */}
      <HeroSection />

      {/* FEATURED TREKS */}
      <FeaturedTreksSection />

      {/* FEATURED Travels */}
      <FeaturedTravelsSection />

      {/* Customized Adventures */}
      <CustomizeAdventureSection />
      {/* REVIEWS */}
      <FeaturedReviewsSection />
      {/* CTA */}
      <CtaSection />

    </div>
  );
}