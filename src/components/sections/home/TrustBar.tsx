import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { trustStats } from "@/data/content/home";
import { icons } from "@/lib/icons";

type Stat = { icon: keyof typeof icons; value: string; label: string };

// tone="white": the card-on-white treatment used right under the Home
// hero. tone="navy": the flat dark-panel treatment used standalone on
// service detail pages, matching the sample's Junk Removal page. `stats`
// defaults to the hero's trustStats but can be overridden (e.g. the
// services section's own navy stats strip).
export function TrustBar({ tone = "white", stats = trustStats }: { tone?: "white" | "navy"; stats?: readonly Stat[] }) {
  return (
    <section className={clsx("relative z-20", tone === "white" ? "-mt-12 sm:-mt-14" : "bg-navy py-10 sm:py-12")}>
      <Container>
        <RevealGroup
          className={clsx(
            "grid grid-cols-2 lg:grid-cols-4",
            tone === "white" ? "gap-px overflow-hidden rounded-lg bg-ink/10 shadow-xl" : "gap-8",
          )}
        >
          {stats.map((stat, i) => {
            const Icon = icons[stat.icon];
            const accent = i === 0;
            return (
              <RevealItem
                key={stat.label}
                className={tone === "white" ? "bg-white px-5 py-6 sm:px-7 sm:py-8" : "text-center sm:text-left"}
              >
                <Icon className={clsx("h-6 w-6", accent ? "text-action-bright" : tone === "white" ? "text-navy" : "text-white")} aria-hidden="true" />
                <div
                  className={clsx(
                    "mt-2 font-display text-2xl font-black sm:text-3xl",
                    accent ? "text-action-bright" : tone === "white" ? "text-navy" : "text-white",
                  )}
                >
                  {stat.value}
                </div>
                <div className={clsx("mt-1.5 text-sm", tone === "white" ? "text-ink-dim" : "text-white/70")}>{stat.label}</div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
