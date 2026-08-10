import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useCallbackModal } from "@/lib/callbackModal";

// Dark CTA panel with a photo accent -- used at the bottom of the
// Services list page ("Need Help Deciding?") and every service detail
// page ("Got Junk? Let's Remove It!" etc.), matching the sample site.
export function CTABanner({
  heading,
  body,
  image,
  imageAlt,
}: {
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
}) {
  const { open } = useCallbackModal();

  return (
    <section className="bg-paper py-4 sm:py-6">
      <Container>
        <Reveal className="overflow-hidden rounded-xl bg-navy">
          <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl text-white sm:text-3xl">{heading}</h3>
              <p className="mt-2 text-white/70">{body}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/quote" arrow>
                  Get a Free Quote
                </Button>
                <Button onClick={open} variant="steel">
                  Request Callback
                </Button>
              </div>
            </div>
            <div className="h-40 w-full overflow-hidden sm:h-full sm:min-h-[220px]">
              <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
