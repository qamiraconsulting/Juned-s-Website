import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { hero } from "@/data/content/home";
import { images } from "@/data/content/images";
import { ease } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img src={images.hero} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/60 to-transparent" />
      </div>

      <Container className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="max-w-[40rem]"
        >
          <Eyebrow tone="white" className="mb-6">
            {hero.kicker}
          </Eyebrow>
          <h1 className="max-w-[16ch] text-4xl leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
            {hero.heading}
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg text-white/85">{hero.lede}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href} arrow>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="ghost" className="border-2 border-white/30">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
