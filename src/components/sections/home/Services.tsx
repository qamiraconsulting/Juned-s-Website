import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { servicesOverview } from "@/data/content/home";
import { icons } from "@/lib/icons";

export function Services() {
  const [headingLead] = servicesOverview.heading.split(servicesOverview.headingAccent);

  return (
    <Section id="services" tone="white">
      <Container>
        <Reveal className="text-center">
          <Eyebrow center className="mb-4 justify-center">
            {servicesOverview.eyebrow}
          </Eyebrow>
          <h2 className="mx-auto max-w-[24ch] text-3xl sm:text-4xl">
            {headingLead}
            <span className="text-action">{servicesOverview.headingAccent}</span>
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {servicesOverview.items.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <RevealItem key={item.title}>
                <a
                  href={item.href}
                  className="group flex h-full flex-col rounded-lg border border-ink/10 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <span
                    className={
                      item.titleAccent
                        ? "flex h-12 w-12 items-center justify-center rounded-full bg-action text-white"
                        : "flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white"
                    }
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl uppercase tracking-[0.02em]">{item.title}</h3>
                  {item.subheading && <p className="mt-1 font-display text-base font-bold text-action">{item.subheading}</p>}
                  <p className="mt-2 text-sm text-ink-dim">{item.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-bold uppercase tracking-[0.02em] text-action-dim group-hover:text-action">
                    Learn more →
                  </span>
                </a>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}
