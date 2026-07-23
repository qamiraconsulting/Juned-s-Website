import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { services } from "@/data/content/home";
import { images } from "@/data/content/images";

export function Services() {
  return (
    <Section id="services" tone="white">
      <Container>
        <Reveal className="max-w-[52ch]">
          <Eyebrow className="mb-4">What We Do</Eyebrow>
          <h2 className="text-3xl sm:text-4xl">Two jobs, one crew.</h2>
          <p className="mt-4 text-lg text-ink-dim">
            Clearing junk and moving house are usually two different call-outs. We do both, so you're not
            juggling two companies when you're decluttering before a move.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <RevealItem
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={images[service.image as keyof typeof images]}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-signature group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl">{service.title}</h3>
                <p className="mt-2 text-sm text-ink-dim">{service.body}</p>
                <ul className="mt-4 flex flex-1 flex-col gap-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-eco" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.cta.href}
                  className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-bold uppercase tracking-[0.02em] text-action-dim hover:text-action"
                >
                  {service.cta.label} →
                </a>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
