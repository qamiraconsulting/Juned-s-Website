import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useCallbackModal } from "@/lib/callbackModal";

// "Prefer a quick call?" strip -- appears near the bottom of the Home and
// Quote pages in the sample site.
export function CallbackBar({
  heading = "Prefer a quick call?",
  body = "Request a callback and we'll call you at a time that suits you.",
}: {
  heading?: string;
  body?: string;
}) {
  const { open } = useCallbackModal();

  return (
    <div className="border-t border-navy/10 bg-navy/5 py-6">
      <Container className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-sm">
            <Phone className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-display text-sm font-bold text-navy">{heading}</p>
            <p className="text-sm text-ink-dim">{body}</p>
          </div>
        </div>
        <Button onClick={open} variant="steel" className="w-full sm:w-auto">
          Request Callback
        </Button>
      </Container>
    </div>
  );
}
