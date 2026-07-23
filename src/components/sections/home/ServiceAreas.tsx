import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { serviceAreas } from "@/data/content/home";

export function ServiceAreas() {
  return (
    <Section id="areas" tone="paper">
      <Container>
        <Reveal className="mx-auto max-w-[56ch] text-center">
          <Eyebrow center className="mb-4">
            {serviceAreas.eyebrow}
          </Eyebrow>
          <h2 className="text-3xl sm:text-4xl">{serviceAreas.heading}</h2>
          <p className="mt-4 text-lg text-ink-dim">{serviceAreas.body}</p>
        </Reveal>

        <RevealGroup className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {serviceAreas.suburbs.map((suburb) => (
            <RevealItem
              key={suburb}
              className="flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink"
            >
              <MapPin className="h-3.5 w-3.5 text-action" aria-hidden="true" />
              {suburb}
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
