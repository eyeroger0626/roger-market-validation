import { AboutCredibilitySection } from "@/components/home/about-credibility-section";
import { ContactSection } from "@/components/home/contact-section";
import { FaqSection } from "@/components/home/faq-section";
import { FeaturedInsightsSection } from "@/components/home/featured-insights-section";
import { FeaturedProofSection } from "@/components/home/featured-proof-section";
import { HeroSection } from "@/components/home/hero-section";
import { MarketValidationProgramSection } from "@/components/home/market-validation-program-section";
import { ThirdPartyTrustSection } from "@/components/home/third-party-trust-section";
import { VietnamProofSection } from "@/components/home/vietnam-proof-section";
import { WhyUsSection } from "@/components/home/why-us-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProofSection />
      <VietnamProofSection />
      <ThirdPartyTrustSection />
      <MarketValidationProgramSection />
      <AboutCredibilitySection />
      <WhyUsSection />
      <FeaturedInsightsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
