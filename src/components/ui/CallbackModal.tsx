import { useEffect, useState, type FormEvent } from "react";
import { X, User, Phone, Clock, CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCallbackModal } from "@/lib/callbackModal";

const timeSlots = ["Morning (8am - 12pm)", "Afternoon (12pm - 4pm)", "Evening (4pm - 7pm)", "Anytime"];

// Deliberately lighter than the full Quote form -- just enough to have
// someone call you back, matching what "Request Callback" actually implies
// sitewide (see CallbackBar / CTABanner / Hero, which all open this).
export function CallbackModal() {
  const { isOpen, close } = useCallbackModal();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  // Reset back to the form next time it's opened, once it's had a moment to fade out.
  useEffect(() => {
    if (isOpen) return;
    const t = setTimeout(() => {
      setSubmitted(false);
      setError(null);
    }, 300);
    return () => clearTimeout(t);
  }, [isOpen]);

  if (!isOpen) return null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const data = new FormData(e.currentTarget);
    const payload = { name: data.get("name"), phone: data.get("phone"), time: data.get("time") };

    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !result.ok) {
        setError(result.error ?? "We couldn't send that just now. Please call us instead.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("We couldn't send that just now. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" onClick={close} aria-hidden="true" />

      <div role="dialog" aria-modal="true" aria-label="Request a callback" className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-ink-dim hover:bg-paper hover:text-ink"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
            <CircleCheck className="h-10 w-10 text-eco" aria-hidden="true" />
            <p className="font-display text-lg font-bold text-navy">Got it — we'll call you back!</p>
            <p className="max-w-[32ch] text-sm text-ink-dim">We've received your request and will call you at the time you picked.</p>
            <Button variant="outline" onClick={close} className="mt-2">
              Close
            </Button>
          </div>
        ) : (
          <>
            <h2 className="pr-8 text-2xl">Request a Callback</h2>
            <p className="mt-1.5 text-sm text-ink-dim">Leave your number and a good time to call — we'll ring you back, no form to fill in.</p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              {error && (
                <p className="rounded-md border border-action/30 bg-action/5 px-3.5 py-2.5 text-sm text-action-dim" role="alert">
                  {error}
                </p>
              )}
              <div className="grid gap-1.5">
                <label htmlFor="callback-name" className="text-xs font-bold uppercase tracking-[0.06em] text-ink-dim">
                  Full Name
                </label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-dim" aria-hidden="true" />
                  <input
                    id="callback-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="w-full rounded-md border border-ink/15 bg-white py-2.5 pl-10 pr-3.5 text-sm text-ink outline-none focus:border-action"
                  />
                </div>
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="callback-phone" className="text-xs font-bold uppercase tracking-[0.06em] text-ink-dim">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-dim" aria-hidden="true" />
                  <input
                    id="callback-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+61 4XX XXX XXX"
                    className="w-full rounded-md border border-ink/15 bg-white py-2.5 pl-10 pr-3.5 text-sm text-ink outline-none focus:border-action"
                  />
                </div>
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="callback-time" className="text-xs font-bold uppercase tracking-[0.06em] text-ink-dim">
                  Best Time to Call
                </label>
                <div className="relative">
                  <Clock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-dim" aria-hidden="true" />
                  <select
                    id="callback-time"
                    name="time"
                    defaultValue={timeSlots[0]}
                    className="w-full appearance-none rounded-md border border-ink/15 bg-white py-2.5 pl-10 pr-3.5 text-sm text-ink outline-none focus:border-action"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <Button type="submit" disabled={submitting} className="mt-1 w-full justify-center">
                {submitting ? "Sending…" : "Request My Callback"}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
