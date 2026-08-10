import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hero } from "@/data/content/home";
import { images } from "@/data/content/images";
import { ease } from "@/lib/motion";
import { useCallbackModal } from "@/lib/callbackModal";

export function Hero() {
  const [headingLead] = hero.heading.split(hero.headingAccent);
  const { open } = useCallbackModal();

  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-navy pt-24">
      {/* At lg+ the truck is confined to a narrower right-anchored panel
          (was full-bleed) so its cab doesn't sit under the headline --
          client flagged the overlap on wide screens. Mobile is untouched. */}
      <div className="absolute inset-0">
        <div className="ml-auto h-full w-full lg:w-[62%]">
          <img
            src={images.hero}
            alt="Blue Line Removals branded truck driving through the city at dusk"
            className="h-full w-full object-cover object-center lg:object-right"
          />
        </div>
      </div>
      {/* Kept deliberately light -- the truck and its branding should read
          clearly, not be washed out by a heavy scrim. Legibility comes
          mostly from the drop-shadow on the text below. */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/15 to-transparent" />

      <Container className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="max-w-[40rem]"
        >
          <h1 className="max-w-[16ch] text-4xl leading-[1.08] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-[3.4rem]">
            {headingLead}
            <span className="text-action-bright">{hero.headingAccent}</span>
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">{hero.lede}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={hero.primaryCta.href} arrow>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.callCta.href} variant="navy">
              {hero.callCta.label}
            </Button>
            <Button onClick={open} variant="steel">
              {hero.callbackCta.label}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
