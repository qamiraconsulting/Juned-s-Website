import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { howItWorks } from "@/data/content/home";

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="paper">
      <Container>
        <Reveal className="mx-auto max-w-[52ch] text-center">
          <Eyebrow center className="mb-4">
            How It Works
          </Eyebrow>
          <h2 className="text-3xl sm:text-4xl">From quote to done, four steps.</h2>
        </Reveal>

        <RevealGroup className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-6 hidden h-px bg-ink/10 lg:block"
          />
          {howItWorks.map((item) => (
            <RevealItem key={item.step} className="relative flex flex-col items-start">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy font-display text-base font-black text-white">
                {item.step}
              </span>
              <h3 className="mt-4 text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-dim">{item.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
