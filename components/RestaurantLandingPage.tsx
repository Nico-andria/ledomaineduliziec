import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
// import { ExperienceSection } from "@/components/sections/ExperienceSection"; // désactivée
import { ChefSection } from "@/components/sections/ChefSection";
import { MenusSection } from "@/components/sections/MenusSection";
import { WineBarSection } from "@/components/sections/WineBarSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
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
        {/* Section « Expérience » désactivée pour le moment (inutile à ce stade).
            Réactiver en décommentant la ligne ci-dessous. */}
        {/* <ExperienceSection /> */}
        <MenusSection />
        <ChefSection />
        <IntroSection />
        <WineBarSection />
        <ReviewsSection />
        <FinalCtaSection />
      </main>
      <FooterSection />
    </>
  );
}
