import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CTABanner } from "@/components/ui/CTABanner";
import { services } from "@/data/content/services";
import { images } from "@/data/content/images";
import { icons } from "@/lib/icons";

export function Services() {
  return (
    <>
      <Section tone="paper" className="pt-32 sm:pt-40">
        <Container>
          <Reveal className="text-center">
            <Eyebrow center className="mb-4 justify-center">
              Our Services
            </Eyebrow>
            <h1 className="text-3xl sm:text-4xl">
              We Handle <span className="text-action">It All</span>
            </h1>
            <span aria-hidden="true" className="mx-auto mt-3 block h-1 w-14 rounded-full bg-action" />
          </Reveal>

          <RevealGroup className="mx-auto mt-12 flex max-w-2xl flex-col gap-4">
            {services.map((service) => {
              const Icon = icons[service.icon];
              return (
                <RevealItem key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className={
                      service.ecoFriendly
                        ? "group flex items-center gap-4 rounded-lg border border-action/30 bg-action/5 p-5 transition-shadow hover:shadow-md"
                        : "group flex items-center gap-4 rounded-lg border border-ink/10 bg-white p-5 transition-shadow hover:shadow-md"
                    }
                  >
                    <span
                      className={
                        service.ecoFriendly
                          ? "flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-action/15 text-action"
                          : "flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-navy/5 text-navy"
                      }
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="flex-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="font-display text-base font-bold text-navy">{service.title}</span>
                        {service.ecoFriendly && (
                          <span className="rounded-full border border-eco/40 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.06em] text-eco">
                            Eco Friendly
                          </span>
                        )}
                      </span>
                      {service.listAccent && <span className="mt-0.5 block text-sm font-bold text-action">{service.listAccent}</span>}
                      <span className="mt-0.5 block text-sm text-ink-dim">{service.listBody}</span>
                    </span>
                    <ChevronRight
                      className="h-5 w-5 shrink-0 text-ink-dim transition-transform group-hover:translate-x-0.5 group-hover:text-action"
                      aria-hidden="true"
                    />
                  </Link>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </Section>

      <CTABanner
        heading="Need Help Deciding?"
        body="We're here to help! Get in touch and we'll point you at the right service."
        image={images.junkRemoval}
        imageAlt="Blue Line Removals crew loading a sofa into the branded truck"
      />
    </>
  );
}
