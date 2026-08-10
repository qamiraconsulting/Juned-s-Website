import { Hero } from "@/components/sections/home/Hero";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { Services } from "@/components/sections/home/Services";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { BeforeAfter } from "@/components/sections/home/BeforeAfter";
import { WhyUs } from "@/components/sections/home/WhyUs";
import { ServiceAreas } from "@/components/sections/home/ServiceAreas";
import { Reviews } from "@/components/sections/home/Reviews";
import { QuoteCTA } from "@/components/sections/home/QuoteCTA";
import { CallbackBar } from "@/components/ui/CallbackBar";

export function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <CallbackBar />
      <HowItWorks />
      <BeforeAfter />
      <WhyUs />
      <ServiceAreas />
      <Reviews />
      <QuoteCTA />
    </>
  );
}
