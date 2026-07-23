import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { trustStats } from "@/data/content/home";

export function TrustBar() {
  return (
    <section className="relative z-20 -mt-12 sm:-mt-14">
      <Container>
        <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-ink/10 shadow-xl lg:grid-cols-4">
          {trustStats.map((stat) => (
            <RevealItem key={stat.label} className="bg-white px-5 py-6 sm:px-7 sm:py-8">
              <div className="font-display text-2xl font-black text-navy sm:text-3xl">{stat.value}</div>
              <div className="mt-1.5 text-sm text-ink-dim">{stat.label}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
