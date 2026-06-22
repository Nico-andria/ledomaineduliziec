import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ChefSection } from "@/components/sections/ChefSection";
import { MenusSection } from "@/components/sections/MenusSection";
import { WineBarSection } from "@/components/sections/WineBarSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { InfoSection } from "@/components/sections/InfoSection";
import { FooterSection } from "@/components/sections/FooterSection";

/**
 * Landing page « La Table du Liziec ».
 * Assemble la navigation et les 8 blocs dans l'ordre du design Stitch.
 */
export function RestaurantLandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ChefSection />
        <MenusSection />
        <WineBarSection />
        <ReviewsSection />
        <InfoSection />
      </main>
      <FooterSection />
    </>
  );
}
