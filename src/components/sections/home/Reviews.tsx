import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { reviews } from "@/data/content/home";

export function Reviews() {
  return (
    <Section id="reviews" tone="white">
      <Container>
        <Reveal className="mx-auto max-w-[56ch] text-center">
          <Eyebrow center className="mb-4">
            {reviews.eyebrow}
          </Eyebrow>
          <h2 className="text-3xl sm:text-4xl">{reviews.heading}</h2>
          <p className="mt-4 text-lg text-ink-dim">{reviews.body}</p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-3">
          {reviews.placeholders.map((text, i) => (
            <RevealItem key={i} className="rounded-lg border border-dashed border-ink/20 bg-paper p-6">
              <div className="flex gap-0.5 text-ink/20">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-3 text-sm italic text-ink-dim">{text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
