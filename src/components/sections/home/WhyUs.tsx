import { ShieldCheck, Clock, Tag, Leaf } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { whyUs } from "@/data/content/home";

const icons = [ShieldCheck, Clock, Tag, Leaf];

export function WhyUs() {
  return (
    <Section tone="navy">
      <Container>
        <Reveal className="max-w-[52ch]">
          <Eyebrow tone="white" className="mb-4">
            Why Choose Us
          </Eyebrow>
          <h2 className="text-3xl text-white sm:text-4xl">No surprises — just a job done properly.</h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => {
            const Icon = icons[i];
            return (
              <RevealItem key={item.title} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <Icon className="h-7 w-7 text-action-bright" aria-hidden="true" />
                <h3 className="mt-4 text-lg text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.body}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}
