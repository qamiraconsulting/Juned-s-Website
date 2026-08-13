import { Hero } from "@/components/sections/home/Hero";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { TrustIntro } from "@/components/sections/home/TrustIntro";
import { Services } from "@/components/sections/home/Services";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { BeforeAfter } from "@/components/sections/home/BeforeAfter";
import { WhyUs } from "@/components/sections/home/WhyUs";
import { ServiceAreas } from "@/components/sections/home/ServiceAreas";
import { Reviews } from "@/components/sections/home/Reviews";
import { QuoteCTA } from "@/components/sections/home/QuoteCTA";
import { CallbackBar } from "@/components/ui/CallbackBar";
import { servicesStats } from "@/data/content/home";

export function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <TrustIntro />
      <Services />
      <TrustBar tone="navy" stats={servicesStats} />
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
