import { Leaf } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { beforeAfter } from "@/data/content/home";
import { images } from "@/data/content/images";

export function BeforeAfter() {
  return (
    <Section tone="white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="grid grid-cols-2 gap-4">
            <figure className="overflow-hidden rounded-lg">
              <img src={images.before} alt="A cluttered garage before a junk removal job" className="aspect-[3/4] w-full object-cover" />
              <figcaption className="mt-2 text-center text-xs font-bold uppercase tracking-[0.08em] text-ink-dim">
                {beforeAfter.beforeLabel}
              </figcaption>
            </figure>
            <figure className="mt-8 overflow-hidden rounded-lg">
              <img src={images.after} alt="An empty, clean room after a junk removal job" className="aspect-[3/4] w-full object-cover" />
              <figcaption className="mt-2 text-center text-xs font-bold uppercase tracking-[0.08em] text-ink-dim">
                {beforeAfter.afterLabel}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full bg-eco-wash px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.06em] text-eco">
              <Leaf className="h-3.5 w-3.5" aria-hidden="true" />
              {beforeAfter.eyebrow}
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl">{beforeAfter.heading}</h2>
            <p className="mt-4 max-w-[46ch] text-lg text-ink-dim">{beforeAfter.body}</p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
