import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { trustIntro } from "@/data/content/home";
import { images } from "@/data/content/images";

export function TrustIntro() {
  const [headingLead] = trustIntro.heading.split(trustIntro.headingAccent);

  return (
    <Section tone="white">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
          <Reveal>
            <Eyebrow className="mb-4">{trustIntro.eyebrow}</Eyebrow>
            <h2 className="text-3xl sm:text-4xl">
              {headingLead}
              <span className="text-action">{trustIntro.headingAccent}</span>
            </h2>
            {trustIntro.body.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-lg text-ink-dim">
                {paragraph}
              </p>
            ))}
            <p className="mt-6 font-display text-base font-bold text-navy">— {trustIntro.signature}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={images.teamTrust}
                alt="The Blue Line Removals crew standing in front of their branded truck"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
