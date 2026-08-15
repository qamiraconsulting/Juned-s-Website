import { useMemo, useState } from "react";
import { Link } from "react-router";
import clsx from "clsx";
import { Search, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { serviceAreasIntro, serviceAreaRegions, serviceAreaTotalCount } from "@/data/content/serviceAreas";

function slugify(region: string) {
  return region.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

// Benchmarked against removalistsconnect.com.au/#suburbs, which hides ~90%
// of its suburb list behind region tabs and renders every name as plain
// (non-linked) text. This keeps every region visible and searchable, and
// makes each suburb a real link -- see the "Suburb Coverage" artifact this
// was built from for the full rationale.
export function ServiceAreas() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const { visibleCount, regionMatches } = useMemo(() => {
    let visibleCount = 0;
    const regionMatches: Record<string, boolean> = {};
    for (const [region, suburbs] of Object.entries(serviceAreaRegions)) {
      const matches = suburbs.filter((s) => !q || s.toLowerCase().includes(q));
      regionMatches[region] = matches.length > 0;
      visibleCount += matches.length;
    }
    return { visibleCount, regionMatches };
  }, [q]);

  const nothingFound = q.length > 1 && visibleCount === 0;

  return (
    <Section id="areas" tone="paper">
      <Container>
        <Reveal className="mx-auto max-w-[56ch] text-center">
          <Eyebrow center className="mb-4">
            {serviceAreasIntro.eyebrow}
          </Eyebrow>
          <h2 className="text-3xl sm:text-4xl">{serviceAreasIntro.heading}</h2>
          <p className="mt-4 text-lg text-ink-dim">{serviceAreasIntro.body}</p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
          <div className="border-b border-ink/10 p-5 sm:p-6">
            <div className="relative max-w-sm">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-dim" aria-hidden="true" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search your suburb…"
                aria-label="Search your suburb"
                className="w-full rounded-md border border-ink/15 bg-paper py-2.5 pl-10 pr-3.5 text-sm text-ink outline-none focus:border-action"
              />
            </div>
            <p className="mt-2.5 text-xs text-ink-dim">
              {q ? (
                <>
                  <span className="font-bold text-navy">{visibleCount}</span> of {serviceAreaTotalCount} suburbs match "{query.trim()}"
                </>
              ) : (
                <>
                  <span className="font-bold text-navy">{serviceAreaTotalCount}</span> suburbs across {Object.keys(serviceAreaRegions).length} regions
                </>
              )}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {Object.keys(serviceAreaRegions).map((region) => (
                <a
                  key={region}
                  href={`#region-${slugify(region)}`}
                  className="rounded-full bg-paper-2 px-3 py-1.5 text-xs font-semibold text-navy-3 transition-colors hover:bg-action hover:text-white"
                >
                  {region}
                </a>
              ))}
            </div>
          </div>

          <div className="p-5 sm:p-6">
            {Object.entries(serviceAreaRegions).map(([region, suburbs]) => (
              <div
                key={region}
                id={`region-${slugify(region)}`}
                className={clsx("scroll-mt-24 border-t border-ink/10 py-4 first:border-t-0 first:pt-0", !regionMatches[region] && "hidden")}
              >
                <div className="mb-3 flex items-baseline gap-2">
                  <h3 className="font-display text-sm font-bold text-navy">{region}</h3>
                  <span className="text-xs text-ink-dim">{suburbs.length} suburbs</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {suburbs.map((suburb) => {
                    const isMatch = q.length > 0 && suburb.toLowerCase().includes(q);
                    return (
                      <Link
                        key={suburb}
                        to={`/quote?to=${encodeURIComponent(suburb)}`}
                        className={clsx(
                          "flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all",
                          isMatch
                            ? "border-action bg-action/10 text-ink"
                            : q.length > 0
                              ? "border-ink/10 bg-white text-ink/30 grayscale"
                              : "border-ink/10 bg-white text-ink hover:border-action",
                        )}
                      >
                        <MapPin className={clsx("h-3.5 w-3.5", isMatch || !q ? "text-action" : "text-ink/30")} aria-hidden="true" />
                        {suburb}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}

            {nothingFound && (
              <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-paper-2 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
                <p className="text-sm text-ink-dim">
                  Can't find <span className="font-bold text-ink">"{query.trim()}"</span>? We're adding suburbs all the time — ask us directly.
                </p>
                <Button href="/quote" className="shrink-0">
                  Get a Free Quote
                </Button>
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
