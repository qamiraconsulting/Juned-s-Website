import { useState, type FormEvent } from "react";
import { Phone, Mail, CircleCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { quoteCta } from "@/data/content/home";
import { site } from "@/data/site";

// Layout-only form -- not wired to send anywhere yet. See quoteCta.formNote
// in data/content/home.ts for the follow-up (Resend email/SMS alert, same
// pattern as qamiraconsulting.com's /contact page).
export function QuoteCTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section id="quote" tone="white" bordered>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <Eyebrow className="mb-4">{quoteCta.eyebrow}</Eyebrow>
            <h2 className="text-3xl sm:text-4xl">{quoteCta.heading}</h2>
            <p className="mt-4 max-w-[46ch] text-lg text-ink-dim">{quoteCta.body}</p>

            <div className="mt-8 flex flex-col gap-3">
              <a href={site.phoneHref} className="flex items-center gap-3 font-display text-lg font-bold text-navy hover:text-action">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-action/10 text-action">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-ink-dim hover:text-action">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/5 text-ink">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                {site.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-xl border border-ink/10 bg-paper p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                <CircleCheck className="h-10 w-10 text-eco" aria-hidden="true" />
                <p className="font-display text-lg font-bold text-navy">Got it — thanks!</p>
                <p className="max-w-[32ch] text-sm text-ink-dim">
                  This is a form preview. Once the backend is wired up, submitting here will alert {site.name} directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" id="name" type="text" required />
                  <Field label="Phone" id="phone" type="tel" required />
                </div>
                <Field label="Suburb" id="suburb" type="text" placeholder="e.g. St Kilda" />
                <div className="grid gap-1.5">
                  <label htmlFor="service" className="text-xs font-bold uppercase tracking-[0.06em] text-ink-dim">
                    What do you need?
                  </label>
                  <select
                    id="service"
                    className="rounded-md border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink outline-none focus:border-action"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Junk & rubbish removal</option>
                    <option>House or office moving</option>
                    <option>Packing assistance</option>
                    <option>Not sure — help me figure it out</option>
                  </select>
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-[0.06em] text-ink-dim">
                    Tell us a bit more
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="What's the job, and when do you need it done?"
                    className="rounded-md border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink outline-none focus:border-action"
                  />
                </div>
                <Button type="submit" className="mt-1 w-full justify-center">
                  Request My Free Quote
                </Button>
                <p className="text-center text-xs text-ink-dim">{quoteCta.formNote}</p>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function Field({
  label,
  id,
  type,
  required,
  placeholder,
}: {
  label: string;
  id: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-[0.06em] text-ink-dim">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-md border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink outline-none focus:border-action"
      />
    </div>
  );
}
